'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, User } from 'lucide-react';
import { brandConfig } from '@/lib/config';

export function Header() {
  const pathname = usePathname();

  // Hide header on search page (it has its own nav)
  if (pathname === '/search') return null;

  const navLinks = [
    { href: '/', label: '首页' },
    { href: '/category', label: '全部商品' },
    { href: '/cart', label: '购物车' },
    { href: '/profile', label: '我的' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-40 border-b border-[var(--outline-variant)]/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 md:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl md:text-2xl font-bold text-foreground tracking-wide">
            {brandConfig.brandName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Search className="w-5 h-5" />
          </Link>
          <Link
            href="/cart"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors relative"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
          <Link
            href="/profile"
            className="hidden md:flex w-8 h-8 rounded-full bg-accent items-center justify-center text-primary text-sm font-medium"
          >
            初
          </Link>
        </div>
      </div>
    </header>
  );
}
