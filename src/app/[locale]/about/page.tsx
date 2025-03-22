'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// 关于页面组件
export default function About() {
  // 获取翻译函数
  const t = useTranslations();

  // 公司价值观
  const values = [
    {
      id: 'sustainability',
      title: t('about.values.sustainability'),
      icon: '🌱',
      description: t('about.values.sustainabilityDesc')
    },
    {
      id: 'innovation',
      title: t('about.values.innovation'),
      icon: '💡',
      description: t('about.values.innovationDesc')
    },
    {
      id: 'culture',
      title: t('about.values.culture'),
      icon: '🏮',
      description: t('about.values.cultureDesc')
    },
    {
      id: 'community',
      title: t('about.values.community'),
      icon: '👥',
      description: t('about.values.communityDesc')
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 主标题 */}
      <section className="bg-forest-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Brand Story Image</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-forest-green">
                {t('about.journey.title')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.journey.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 愿景和使命 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* 愿景 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-thai-gold rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🔭</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-forest-green">
                {t('about.vision.title')}
              </h2>
              <p className="text-gray-700">
                {t('about.vision.content')}
              </p>
            </div>

            {/* 使命 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-thai-gold rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-forest-green">
                {t('about.mission.title')}
              </h2>
              <p className="text-gray-700">
                {t('about.mission.content')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 公司价值观 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
            {t('about.values.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-700 mb-6 sm:mb-8">
            {t('home.about.content')}
          </p>
          <Link href="/fabric" className="mobile-btn btn-primary max-w-xs mx-auto">
            {t('home.about.learnMore')}
          </Link>
        </div>
      </section>
    </div>
  );
}