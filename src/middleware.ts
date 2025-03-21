import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

// 创建国际化中间件
export default createMiddleware({
  // 支持的语言列表
  locales,
  // 默认语言
  defaultLocale: 'en',
  // 本地化路径名称策略
  localePrefix: 'as-needed',
});

// 配置中间件匹配的路径
export const config = {
  // 匹配所有路径，但排除静态资源、API路由等
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};