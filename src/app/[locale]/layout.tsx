import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileNav from '@/components/MobileNav';

// 导入全局样式
import '@/styles/globals.css';

// 设置Inter字体
const inter = Inter({ subsets: ['latin'] });

// 定义布局组件的属性类型
interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

// 生成元数据
export async function generateMetadata(props: RootLayoutProps) {
  const params = await props.params;

  const {
    locale
  } = params;

  return {
    title: {
      template: '%s | Gleaftex',
      default: 'Gleaftex | Eco Textiles Thailand - ผ้าที่ยั่งยืน',
    },
    description: 'Thailand\'s leading eco-friendly textile brand | ผ้าที่ยั่งยืน leader. Providing organic cotton, recycled polyester, and green fashion solutions, supporting wholesale procurement in the ASEAN region.',
    icons: {
      icon: '/icons8-枫叶-bubbles-96.png',
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
    },
  };
}

// 生成viewport配置
export async function generateViewport(props: RootLayoutProps) {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    viewportFit: 'cover',
    themeColor: '#3A5F0B',
  };
}

// 生成静态参数
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// 根布局组件
export default async function RootLayout(props: RootLayoutProps) {
  const params = await props.params;

  const {
    locale
  } = params;

  const {
    children
  } = props;

  // 检查语言是否支持
  if (!locales.includes(locale)) notFound();

  // 加载消息
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} antialiased text-gray-900 min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          {/* 移动导航栏会通过CSS在移动端显示，在桌面端隐藏 */}
          <MobileNav />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}