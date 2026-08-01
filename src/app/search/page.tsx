'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Search, X } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/data';

const searchHistory = ['连衣裙', '雪纺衫', '半身裙', '阔腿裤', '防晒衫'];
const hotSearches = ['碎花裙', '真丝衬衫', '高腰裤', '针织开衫', 'A字裙', '小西装'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(true);
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      setShowResults(true);
    }
  };

  const filteredProducts = query
    ? products.filter(
        (p) =>
          p.name.includes(query) ||
          p.category.includes(query) ||
          p.description.includes(query)
      )
    : products.slice(0, 4);

  return (
    <div className="mt-4 space-y-8">
      {/* Search bar */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex-1 flex items-center gap-2 bg-muted rounded-full px-4 py-2.5">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="搜索你想要的服饰"
            className="flex-1 bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-muted-foreground">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          className="px-4 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          搜索
        </button>
      </div>

      {/* Search history */}
      {!query && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-foreground">搜索历史</h3>
            <button
              onClick={() => {}}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              清除
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {searchHistory.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setQuery(tag);
                  setShowResults(true);
                }}
                className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground hover:bg-accent transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Hot searches */}
      {!query && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground">热门搜索</h3>
          <div className="flex flex-wrap gap-2">
            {hotSearches.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setQuery(tag);
                  setShowResults(true);
                }}
                className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground hover:bg-accent transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Search results */}
      {showResults && (
        <section>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 space-y-3">
              <p className="text-muted-foreground">未找到相关商品</p>
              <p className="text-sm text-muted-foreground">换个关键词试试吧</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
