'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  Heart,
  MessageCircle,
  ShoppingBag,
  Minus,
  Plus,
  ChevronDown,
} from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id) || products[0];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="mt-4 md:mt-8 space-y-8 pb-24 md:pb-8">
      {/* Breadcrumb */}
      <nav className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">首页</Link>
        <span>/</span>
        <Link href="/category" className="hover:text-foreground transition-colors">
          连衣裙
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Image gallery */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        <div className="space-y-3">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/40 text-white text-xs rounded-full">
              {activeImage + 1}/{product.images.length}
            </span>
          </div>
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`w-16 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  i === activeImage ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product info */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-semibold text-primary">¥{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-sm text-muted-foreground line-through">
                    ¥{product.originalPrice}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-accent text-primary rounded-full font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}%OFF
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Color selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">
              颜色 <span className="text-muted-foreground font-normal">({product.colors[selectedColor].name})</span>
            </h3>
            <div className="flex gap-3">
              {product.colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(i)}
                  className={`w-10 h-10 rounded-full border-2 transition-all ${
                    i === selectedColor
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-[var(--outline-variant)]'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">尺码</h3>
            <div className="flex gap-2">
              {product.sizes.map((size, i) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(i)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    i === selectedSize
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground hover:bg-accent'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">数量</h3>
            <div className="flex items-center gap-0 border border-[var(--outline-variant)] rounded-lg w-fit">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-5 text-sm font-medium text-foreground">{quantity}</span>
              <button
                onClick={() => setQuantity(Math.min(99, quantity + 1))}
                className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop action buttons */}
          <div className="hidden md:flex gap-3 pt-4">
            <button className="flex-1 py-3 rounded-xl border-2 border-primary text-primary font-medium text-sm hover:bg-primary/5 transition-colors">
              加入购物车
            </button>
            <button className="flex-1 py-3 rounded-xl bg-primary text-white font-medium text-sm hover:opacity-90 transition-opacity">
              立即购买
            </button>
          </div>
        </div>
      </div>

      {/* Detail accordion */}
      <div className="space-y-0 border-t border-[var(--outline-variant)]/30">
        {[
          {
            key: 'fabric',
            title: '面料成分',
            content: (
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>面料：{product.fabric}</p>
                <p>里料：100%聚酯纤维</p>
                <p>厚度：适中</p>
                <p>弹力：微弹</p>
              </div>
            ),
          },
          {
            key: 'size',
            title: '尺码表',
            content: (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-[var(--outline-variant)]/30">
                      <th className="py-2 text-left font-medium">尺码</th>
                      <th className="py-2 text-left font-medium">胸围(cm)</th>
                      <th className="py-2 text-left font-medium">腰围(cm)</th>
                      <th className="py-2 text-left font-medium">衣长(cm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--outline-variant)]/20">
                      <td className="py-2">S</td><td className="py-2">84</td><td className="py-2">68</td><td className="py-2">108</td>
                    </tr>
                    <tr className="border-b border-[var(--outline-variant)]/20">
                      <td className="py-2">M</td><td className="py-2">88</td><td className="py-2">72</td><td className="py-2">109</td>
                    </tr>
                    <tr className="border-b border-[var(--outline-variant)]/20">
                      <td className="py-2">L</td><td className="py-2">92</td><td className="py-2">76</td><td className="py-2">110</td>
                    </tr>
                    <tr>
                      <td className="py-2">XL</td><td className="py-2">96</td><td className="py-2">80</td><td className="py-2">111</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            key: 'care',
            title: '洗涤说明',
            content: (
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>建议手洗或轻柔机洗</p>
                <p>不可漂白</p>
                <p>低温熨烫</p>
                <p>悬挂晾干</p>
              </div>
            ),
          },
        ].map((section) => (
          <div key={section.key} className="border-b border-[var(--outline-variant)]/30">
            <button
              onClick={() => toggleSection(section.key)}
              className="w-full flex items-center justify-between py-4 text-sm font-medium text-foreground"
            >
              {section.title}
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform ${
                  expandedSection === section.key ? 'rotate-180' : ''
                }`}
              />
            </button>
            {expandedSection === section.key && (
              <div className="pb-4">{section.content}</div>
            )}
          </div>
        ))}
      </div>

      {/* Related products */}
      <section>
        <h2 className="font-serif text-xl font-bold text-foreground mb-6">相关推荐</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6">
          {relatedProducts.map((p) => (
            <div key={p.id} className="min-w-[40%] md:min-w-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Mobile bottom action bar */}
      <div className="md:hidden fixed bottom-14 left-0 right-0 z-30 bg-white border-t border-[var(--outline-variant)]/30 px-4 py-3 safe-area-bottom">
        <div className="flex items-center gap-3">
          <button className="p-2 text-muted-foreground">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 ${isFavorite ? 'text-red-500' : 'text-muted-foreground'}`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
          <div className="flex-1 flex gap-2">
            <button className="flex-1 py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-colors">
              加入购物车
            </button>
            <button className="flex-1 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:opacity-90 transition-opacity">
              立即购买
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
