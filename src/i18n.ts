import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

// 支持的语言列表
export const locales = ['en', 'th', 'zh'];

// 创建共享路径导航
export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

// 获取请求配置
export default getRequestConfig(async ({ requestLocale }) => {
  // 使用 await requestLocale 获取语言
  const locale = (await requestLocale) || 'en';

  // 验证语言是否支持
  if (!locales.includes(locale as any)) notFound();

  // 动态导入对应语言的消息文件
  return {
    locale,
    messages: (
      await import(`./messages/${locale}.json`)
    ).default
  };
});