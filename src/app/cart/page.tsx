'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Minus, Plus, Trash2, Heart } from 'lucide-react';
import { defaultCartItems, type CartItem } from '@/lib/data';

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(defaultCartItems);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(
    new Set(defaultCartItems.map((_, i) => i))
  );

  const toggleSelect = (index: number) => {
    const next = new Set(selectedItems);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setSelectedItems(next);
  };

  const toggleAll = () => {
    if (selectedItems.size === items.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(items.map((_, i) => i)));
    }
  };

  const updateQuantity = (index: number, delta: number) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, Math.min(99, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
    setSelectedItems((prev) => {
      const next = new Set<number>();
      prev.forEach((i) => {
        if (i < index) next.add(i);
        else if (i > index) next.add(i - 1);
      });
      return next;
    });
  };

  const total = items.reduce(
    (sum, item, i) => sum + (selectedItems.has(i) ? item.product.price * item.quantity : 0),
    0
  );
  const selectedCount = selectedItems.size;

  return (
    <div className="mt-6 space-y-6 pb-36 md:pb-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">
          购物车 <span className="text-muted-foreground text-base font-normal">({items.length}件)</span>
        </h1>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
            <Heart className="w-7 h-7 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground">购物车还是空的</p>
          <Link
            href="/category"
            className="inline-block px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            去逛逛
          </Link>
        </div>
      ) : (
        <>
          {/* Cart items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={`${item.product.id}-${index}`}
                className="bg-white rounded-xl p-4 flex gap-4 border border-[var(--outline-variant)]/20 shadow-sm"
              >
                {/* Checkbox */}
                <button
                  onClick={() => toggleSelect(index)}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-2 transition-colors ${
                    selectedItems.has(index)
                      ? 'bg-primary border-primary'
                      : 'border-[var(--outline-variant)]'
                  }`}
                >
                  {selectedItems.has(index) && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>

                {/* Image */}
                <Link href={`/product/${item.product.id}`} className="shrink-0">
                  <div className="w-20 h-24 md:w-24 md:h-28 rounded-lg overflow-hidden bg-muted">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-2">
                  <Link href={`/product/${item.product.id}`}>
                    <h3 className="text-sm font-medium text-foreground line-clamp-1 hover:text-primary transition-colors">
                      {item.product.name}
                    </h3>
                  </Link>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                      {item.selectedSize}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">
                      {item.selectedColor}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold text-primary">
                      ¥{item.product.price}
                    </span>
                    <div className="flex items-center gap-0 border border-[var(--outline-variant)] rounded-md">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-sm font-medium text-foreground">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeItem(index)}
                  className="self-start p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="fixed bottom-14 md:bottom-0 left-0 right-0 bg-white border-t border-[var(--outline-variant)]/30 px-4 py-3 z-20">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAll}
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                    selectedItems.size === items.length
                      ? 'bg-primary border-primary'
                      : 'border-[var(--outline-variant)]'
                  }`}
                >
                  {selectedItems.size === items.length && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
                <span className="text-sm text-foreground">全选</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-sm text-muted-foreground">合计：</span>
                  <span className="text-xl font-semibold text-primary">¥{total}</span>
                </div>
                <button className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                  结算({selectedCount})
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
