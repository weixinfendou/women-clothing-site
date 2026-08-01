'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, ShoppingBag, User } from 'lucide-react';

const tabs = [
  { href: '/', label: '首页', icon: Home },
  { href: '/category', label: '分类', icon: LayoutGrid },
  { href: '/cart', label: '购物车', icon: ShoppingBag },
  { href: '/profile', label: '我的', icon: User },
];

export function TabBar() {
  const pathname = usePathname();

  // Hide TabBar on secondary pages
  if (pathname === '/search') return null;

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[var(--outline-variant)]/30 safe-area-bottom">
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const active = isActive(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 relative ${
                active ? 'text-primary' : 'text-muted-foreground'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
              {tab.href === '/cart' && (
                <span className="absolute top-1 right-2 w-3.5 h-3.5 bg-primary text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
