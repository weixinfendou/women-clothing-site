import {
  MapPin,
  Ticket,
  Heart,
  MessageCircle,
  Settings,
  ChevronRight,
  Package,
  CreditCard,
  Truck,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import { brandConfig } from '@/lib/config';

const orderStatuses = [
  { icon: CreditCard, label: '待付款', count: 2 },
  { icon: Package, label: '待发货', count: 1 },
  { icon: Truck, label: '待收货', count: 3 },
  { icon: CheckCircle, label: '已完成', count: 0 },
];

const menuItems = [
  { icon: MapPin, label: '收货地址', href: '#' },
  { icon: Ticket, label: '优惠券', href: '#' },
  { icon: Heart, label: '我的收藏', href: '#' },
  { icon: MessageCircle, label: '联系客服', href: '#' },
  { icon: Settings, label: '设置', href: '#' },
];

export default function ProfilePage() {
  return (
    <div className="mt-6 space-y-8">
      {/* User info */}
      <div className="bg-accent rounded-2xl p-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
          初
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">小初</h2>
          <span className="inline-block mt-1 px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
            金卡会员
          </span>
        </div>
        <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          编辑资料
        </button>
      </div>

      {/* Orders */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-semibold text-foreground">我的订单</h3>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            查看全部 <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {orderStatuses.map((status) => {
            const Icon = status.icon;
            return (
              <Link
                key={status.label}
                href="#"
                className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white border border-[var(--outline-variant)]/20 hover:border-primary/30 transition-colors relative"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <span className="text-xs text-foreground">{status.label}</span>
                {status.count > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {status.count}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Menu */}
      <section className="bg-white rounded-2xl border border-[var(--outline-variant)]/20 overflow-hidden">
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-muted/50 transition-colors ${
                i < menuItems.length - 1 ? 'border-b border-[var(--outline-variant)]/20' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="flex-1 text-sm font-medium text-foreground">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
            </Link>
          );
        })}
      </section>

      {/* Brand info */}
      <section className="text-center py-8 space-y-3">
        <h3 className="font-serif text-lg font-bold text-foreground">{brandConfig.brandName}</h3>
        <p className="text-sm text-muted-foreground">客服热线：{brandConfig.contactPhone}</p>
        <a
          href={brandConfig.taobaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm text-primary hover:underline"
        >
          {brandConfig.taobaoStoreName} →
        </a>
      </section>
    </div>
  );
}
