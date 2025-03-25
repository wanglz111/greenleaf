'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function MobileNav() {
  // 获取翻译函数
  const t = useTranslations();
  // 获取当前语言
  const locale = useLocale();
  // 获取当前路径
  const pathname = usePathname();

  // 导航链接（底部导航包含6个重要链接，改为两行显示）
  const navLinks = [
    { href: '/', label: t('nav.home'), icon: '🏠' },
    { href: '/about', label: t('nav.about'), icon: '📖' },
    { href: '/products', label: t('nav.products'), icon: '🧵' },
    // { href: '/certifications', label: t('nav.certifications'), icon: '🏆' },
    { href: '/fabric', label: t('nav.fabric'), icon: '🧶' },
    { href: '/sustainability', label: t('nav.sustainability'), icon: '🌱' },
    { href: '/contact', label: t('nav.contact'), icon: '📞' }
  ];

  // 判断当前路径是否匹配导航项
  const isActive = (href: string) => {
    return pathname === `/${locale}${href}` || (href === '/' && pathname === `/${locale}`);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-1.5 z-50 md:hidden shadow-lg">
      <div className="grid grid-cols-3 gap-0.5">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={`/${locale}${link.href}`}
            className={`flex flex-col items-center justify-center py-1.5 ${
              isActive(link.href)
                ? 'text-forest-green font-semibold'
                : 'text-gray-600 hover:text-forest-green'
            }`}
          >
            <span className="text-xl mb-0.5">{link.icon}</span>
            <span className="text-[12px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis w-full text-center max-w-full px-1">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}