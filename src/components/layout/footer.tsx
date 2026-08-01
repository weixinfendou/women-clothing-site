import { brandConfig } from '@/lib/config';

export function Footer() {
  return (
    <footer className="hidden md:block border-t border-[var(--outline-variant)]/30 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-4">
              {brandConfig.brandName}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {brandConfig.brandDescription}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">联系我们</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>客服热线：{brandConfig.contactPhone}</p>
              <p>邮箱：{brandConfig.contactEmail}</p>
              <p>微信：{brandConfig.contactWeChat}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">关注我们</h4>
            <a
              href={brandConfig.taobaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              {brandConfig.taobaoStoreName}
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--outline-variant)]/30 text-center text-xs text-muted-foreground">
          &copy; 2024 {brandConfig.brandName} 版权所有
        </div>
      </div>
    </footer>
  );
}
