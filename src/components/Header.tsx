'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
  // 语言下拉框开关状态 - 桌面端
  const [isDesktopLangDropdownOpen, setIsDesktopLangDropdownOpen] = useState(false);
  // 语言下拉框开关状态 - 移动端
  const [isMobileLangDropdownOpen, setIsMobileLangDropdownOpen] = useState(false);

  // 支持的语言
  const languages = [
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'th', label: 'ไทย', shortLabel: 'TH' },
    { code: 'zh', label: '中文', shortLabel: '中' },
  ];

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
    // 关闭下拉框
    setIsDesktopLangDropdownOpen(false);
    setIsMobileLangDropdownOpen(false);
  };

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 点击页面其他区域关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        (isDesktopLangDropdownOpen && !target.closest('.desktop-language-dropdown')) ||
        (isMobileLangDropdownOpen && !target.closest('.mobile-language-dropdown'))
      ) {
        setIsDesktopLangDropdownOpen(false);
        setIsMobileLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktopLangDropdownOpen, isMobileLangDropdownOpen]);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-forest-green py-3 md:py-4'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href={`/${locale}/`} className={`text-xl md:text-2xl font-bold flex items-center ${scrolled ? 'text-forest-green' : 'text-white'}`}>
            <span className="mr-1 md:mr-2">
              <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            </span>
            <span>GREENLEAF</span>
          </Link>

          {/* 桌面导航 - 使用更紧凑的间距 */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale}${link.href}`}
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
            <div className="relative ml-1 desktop-language-dropdown">
              <button
                onClick={() => setIsDesktopLangDropdownOpen(!isDesktopLangDropdownOpen)}
                className={`flex items-center px-3 py-1 rounded min-h-[36px] text-sm transition-all ${
                  scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white border border-white hover:bg-white hover:text-forest-green'
                }`}
                aria-expanded={isDesktopLangDropdownOpen}
              >
                <span className={locale === 'en' || locale === 'th' || locale === 'zh' ? 'font-medium' : ''}>
                  {languages.find(lang => lang.code === locale)?.shortLabel || 'EN'}
                </span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isDesktopLangDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>

              {isDesktopLangDropdownOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white rounded shadow-lg z-50 py-1 border border-gray-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${
                        locale === lang.code ? 'bg-gray-50 text-forest-green font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {locale === lang.code && (
                        <svg className="w-4 h-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* 移动端语言切换按钮 (只在移动端显示) */}
          <div className="md:hidden flex items-center">
            <div className="relative mobile-language-dropdown">
              <button
                onClick={() => setIsMobileLangDropdownOpen(!isMobileLangDropdownOpen)}
                className={`flex items-center px-2 py-1 rounded min-h-[36px] transition-all ${
                  scrolled ? 'text-gray-600 hover:bg-gray-100' : 'text-white border border-white hover:bg-white hover:text-forest-green'
                }`}
                aria-expanded={isMobileLangDropdownOpen}
              >
                <span className={locale === 'en' || locale === 'th' || locale === 'zh' ? 'font-medium' : ''}>
                  {languages.find(lang => lang.code === locale)?.shortLabel || 'EN'}
                </span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileLangDropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}></path>
                </svg>
              </button>

              {isMobileLangDropdownOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white rounded shadow-lg z-50 py-1 border border-gray-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 flex items-center justify-between ${
                        locale === lang.code ? 'bg-gray-50 text-forest-green font-medium' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.label}</span>
                      {locale === lang.code && (
                        <svg className="w-4 h-4 text-forest-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}