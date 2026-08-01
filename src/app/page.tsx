'use client';

import Link from 'next/link';
import { Search, Shirt, Layers, ChevronRight } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';
import { brandConfig } from '@/lib/config';

const categoryIcons = [
  { name: '连衣裙', href: '/category?cat=dress', icon: '👗' },
  { name: '上衣', href: '/category?cat=top', icon: '👚' },
  { name: '半裙', href: '/category?cat=skirt', icon: '🩱' },
  { name: '裤装', href: '/category?cat=pants', icon: '👖' },
];

const newProducts = products.filter((p) => p.isNew).slice(0, 4);
const recommendProducts = products.slice(0, 6);

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-20 mt-6">
      {/* Search bar */}
      <div className="px-1">
        <Link
          href="/search"
          className="flex items-center gap-3 bg-muted rounded-full px-4 py-2.5 md:max-w-md"
        >
          <Search className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">搜索你想要的服饰</span>
        </Link>
      </div>

      {/* Banner */}
      <section className="relative">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=600&fit=crop"
            alt="春夏新品女装展示"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent flex items-center">
            <div className="px-6 md:px-12 space-y-3">
              <p className="text-white/80 text-xs md:text-sm tracking-widest uppercase">
                Spring / Summer Collection
              </p>
              <h1 className="font-serif text-2xl md:text-4xl font-bold text-white leading-tight">
                春夏新品
                <br />
                温柔绽放
              </h1>
              <Link
                href="/category"
                className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors"
              >
                立即选购 <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category shortcuts */}
      <section>
        <div className="grid grid-cols-4 gap-4">
          {categoryIcons.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors">
                {cat.icon}
              </div>
              <span className="text-xs md:text-sm text-foreground font-medium">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals - horizontal scroll */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
              新品上架
            </h2>
            <p className="text-xs text-muted-foreground mt-1 tracking-wide">
              NEW ARRIVALS
            </p>
          </div>
          <Link
            href="/category"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            查看全部 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:gap-6">
          {newProducts.map((product) => (
            <div key={product.id} className="min-w-[45%] md:min-w-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Recommended - grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground">
              精选推荐
            </h2>
            <p className="text-xs text-muted-foreground mt-1 tracking-wide">
              CURATED FOR YOU
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {recommendProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand story */}
      <section className="relative rounded-2xl overflow-hidden">
        <div className="relative aspect-[16/9] md:aspect-[21/7]">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=500&fit=crop"
            alt="天衣服饰品牌理念"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-end">
            <div className="p-6 md:p-12 space-y-3">
              <p className="text-white/70 text-xs tracking-widest uppercase">
                Our Story
              </p>
              <h2 className="font-serif text-xl md:text-3xl font-bold text-white">
                以衣为语，温柔以待
              </h2>
              <p className="text-sm text-white/80 max-w-lg leading-relaxed">
                {brandConfig.brandSlogan}。我们相信，每一件衣物都是女性自我表达的语言。
                精选面料，用心剪裁，让每一位女性在日常生活里都能感受到由内而外的优雅与自信。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
