import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { TabBar } from '@/components/layout/tab-bar';
import { Footer } from '@/components/layout/footer';
import { brandConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: {
    default: brandConfig.brandName,
    template: `%s | ${brandConfig.brandName}`,
  },
  description: brandConfig.brandDescription,
  keywords: ['女装', '电商', '连衣裙', '春夏新品', '知性优雅'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-background text-foreground font-sans antialiased min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 md:px-8 pb-20 md:pb-8">
          {children}
        </main>
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
