'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

// 页脚组件
export default function Footer() {
  // 获取翻译函数
  const t = useTranslations();
  // 获取当前语言
  const locale = useLocale();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // 社交媒体链接
  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
    { name: 'Line', icon: 'line', url: 'https://line.me' }
  ];

  // 页脚链接分组
  const footerSections = [
    {
      id: 'company',
      title: t('footer.company'),
      links: [
        { href: `/${locale}/about`, label: t('nav.about') },
        { href: `/${locale}/certifications`, label: t('nav.certifications') },
        { href: `/${locale}/sustainability`, label: t('nav.sustainability') },
        { href: `/${locale}/contact`, label: t('nav.contact') }
      ]
    },
    {
      id: 'products',
      title: t('footer.products'),
      links: [
        { href: `/${locale}/products#organic-cotton`, label: t('products.categories.organic') },
        { href: `/${locale}/products#recycled-polyester`, label: t('products.categories.recycled') },
        { href: `/${locale}/products#bamboo-fabrics`, label: t('products.categories.bamboo') },
        { href: `/${locale}/fabric`, label: t('nav.fabric') }
      ]
    },
    {
      id: 'legal',
      title: t('footer.legal.title'),
      links: [
        { href: `/${locale}/privacy-policy`, label: t('footer.legal.privacy') },
        { href: `/${locale}/terms-of-service`, label: t('footer.legal.terms') },
        { href: `/${locale}/pdpa-compliance`, label: t('footer.legal.pdpa') },
        { href: `/${locale}/tis-certification`, label: t('footer.legal.tis') }
      ]
    }
  ];

  // 切换展开/收起部分
  const toggleSection = (id: string) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  return (
    <footer className="bg-gray-800 text-white pt-8 pb-4 mt-auto">
      <div className="container mx-auto px-4">
        {/* 手机版折叠菜单 */}
        <div className="md:hidden">
          {/* 公司 Logo 和简介 */}
          <div className="mb-6 pb-4 border-b border-gray-700">
            <h3 className="text-lg font-bold mb-2">
              <span className="mr-2">🍃</span>
              Gleaftex
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              {t('footer.address')}
            </p>
            <div className="flex space-x-4 mt-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-thai-gold transition-colors"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  <span className="text-xl">{getSocialIcon(link.icon)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 折叠链接部分 */}
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-gray-700 py-2">
              <button
                className="flex justify-between items-center w-full py-2 text-left text-thai-gold font-semibold"
                onClick={() => toggleSection(section.id)}
                aria-expanded={expandedSection === section.id}
              >
                {section.title}
                <span>{expandedSection === section.id ? '−' : '+'}</span>
              </button>
              <div className={`${expandedSection === section.id ? 'max-h-48 opacity-100 pb-2' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}>
                <ul className="text-sm text-gray-300 space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* 联系信息 */}
          <div className="py-4 text-sm text-gray-300">
            <h3 className="text-thai-gold font-semibold mb-2">{t('footer.contactUs')}</h3>
            <p>info@gleaftex.com</p>
            <p className="mt-1">+66 2 123 4567</p>
          </div>
        </div>

        {/* 桌面版 */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4">
            {/* 公司信息 */}
            <div className="col-span-3">
              <h3 className="text-lg font-bold mb-3">
                <span className="mr-2">🍃</span>
                Gleaftex
              </h3>
              <p className="text-gray-300 text-sm mb-3">
                {t('footer.address')}
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-thai-gold transition-colors"
                    aria-label={link.name}
                  >
                    <span className="sr-only">{link.name}</span>
                    <span className="text-xl">{getSocialIcon(link.icon)}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* 链接 */}
            {footerSections.map((section) => (
              <div key={section.id} className="col-span-2">
                <h3 className="text-sm font-semibold mb-3 text-thai-gold">
                  {section.title}
                </h3>
                <ul className="text-xs text-gray-300 space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* 联系信息 */}
            <div className="col-span-3">
              <h3 className="text-sm font-semibold mb-3 text-thai-gold">
                {t('footer.contactUs')}
              </h3>
              <div className="text-xs text-gray-300">
                <p>info@gleaftex.com</p>
                <p className="mt-1">+86 13407586044</p>
              </div>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="text-center text-gray-400 text-xs mt-8 md:mt-10 pb-16 md:pb-0">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

// 获取社交媒体图标
function getSocialIcon(name: string) {
  switch (name) {
    case 'facebook':
      return '📘';
    case 'instagram':
      return '📷';
    case 'linkedin':
      return '🔗';
    case 'line':
      return '💬';
    default:
      return '';
  }
}