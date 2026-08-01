'use client';

import { useState } from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

const categories = [
  { id: 'all', name: '全部' },
  { id: 'dress', name: '连衣裙' },
  { id: 'top', name: '上衣' },
  { id: 'skirt', name: '半裙' },
  { id: 'pants', name: '裤装' },
  { id: 'outerwear', name: '外套' },
];

const sortOptions = ['综合', '新品', '价格'];

export default function CategoryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSort, setActiveSort] = useState('综合');
  const [showFilter, setShowFilter] = useState(false);

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="mt-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">全部商品</h1>

      {/* Sort & Filter bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => setActiveSort(option)}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                activeSort === option
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {option}
              {option === '价格' && <ChevronDown className="w-3 h-3 inline ml-0.5" />}
              {activeSort === option && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Filter panel */}
      {showFilter && (
        <div className="bg-white rounded-xl p-4 border border-[var(--outline-variant)]/30">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">价格区间</h4>
              <div className="flex flex-wrap gap-2">
                {['全部', '¥59以下', '¥59-79', '¥80-99', '¥100以上'].map((p) => (
                  <button
                    key={p}
                    className="px-3 py-1.5 text-xs rounded-full bg-muted text-foreground hover:bg-accent transition-colors"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">尺码</h4>
              <div className="flex flex-wrap gap-2">
                {['S', 'M', 'L', 'XL'].map((s) => (
                  <button
                    key={s}
                    className="px-3 py-1.5 text-xs rounded-full bg-muted text-foreground hover:bg-accent transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category tags */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === cat.id
                ? 'bg-primary text-white'
                : 'bg-muted text-foreground hover:bg-accent'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load more */}
      <div className="text-center py-8">
        <p className="text-sm text-muted-foreground">点击加载更多</p>
      </div>
    </div>
  );
}
