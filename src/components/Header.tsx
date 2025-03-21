'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// 头部组件
export default function Header() {
  // 获取翻译函数
  const t = useTranslations();
  // 获取当前语言
  const locale = useLocale();
  // 获取路由器
  const router = useRouter();
  // 获取当前路径
  const pathname = usePathname();

  // 滚动状态
  const [scrolled, setScrolled] = useState(false);

  // 导航链接
  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/products', label: t('nav.products') },
    { href: '/fabric', label: t('nav.fabric') },
    { href: '/certifications', label: t('nav.certifications') },
    { href: '/sustainability', label: t('nav.sustainability') },
    { href: '/contact', label: t('nav.contact') }
  ];

  // 切换语言
  const switchLocale = (newLocale: string) => {
    // 获取当前路径并移除语言前缀
    const pathSegments = pathname.split('/');
    const newPathname = pathSegments.length > 2 ? `/${pathSegments.slice(2).join('/')}` : '/';

    // 导航到新语言的相同页面
    router.push(`/${newLocale}${newPathname}`);
  };

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-forest-green py-3 md:py-4'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className={`text-xl md:text-2xl font-bold flex items-center ${scrolled ? 'text-forest-green' : 'text-white'}`}>
            <span className="mr-1 md:mr-2">🍃</span>
            <span>Gleaftex</span>
          </Link>

          {/* 桌面导航 - 使用更紧凑的间距 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors px-2 py-1 text-sm lg:text-base ${
                  pathname === `/${locale}${link.href}` || (link.href === '/' && pathname === `/${locale}`)
                    ? `font-semibold ${scrolled ? 'text-forest-green' : 'text-white'}`
                    : scrolled ? 'text-gray-700 hover:text-forest-green' : 'text-white hover:text-gray-200'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* 语言切换 */}
            <div className="flex space-x-1 ml-1">
              <button
                onClick={() => switchLocale('en')}
                className={`px-2 py-1 rounded min-h-[36px] text-sm transition-all ${
                  locale === 'en'
                    ? 'bg-thai-gold text-white'
                    : scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white border border-white hover:bg-white hover:text-forest-green'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => switchLocale('th')}
                className={`px-2 py-1 rounded min-h-[36px] text-sm transition-all ${
                  locale === 'th'
                    ? 'bg-thai-gold text-white'
                    : scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white border border-white hover:bg-white hover:text-forest-green'
                }`}
              >
                TH
              </button>
            </div>
          </nav>

          {/* 移动端语言切换按钮 (只在移动端显示) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => switchLocale(locale === 'en' ? 'th' : 'en')}
              className={`px-2 py-1 rounded min-h-[36px] transition-all ${
                scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white border border-white hover:bg-white hover:text-forest-green'
              }`}
            >
              {locale === 'en' ? 'TH' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}