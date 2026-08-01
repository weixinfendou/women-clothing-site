import Link from 'next/link';
import type { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className={`group block ${className}`}>
      <div className="relative overflow-hidden rounded-xl bg-muted aspect-[3/4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-primary/90 text-white text-[10px] font-medium rounded-full">
            新品
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold text-primary">
            ¥{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ¥{product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
