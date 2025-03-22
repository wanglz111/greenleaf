'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// 定义类型
type SustainablePractice = {
  title: string;
  description: string;
  icon: string;
};

type BuddhistPrinciple = {
  name: string;
  description: string;
  icon: string;
};

// 可持续发展页面
export default function SustainabilityPage() {
  // 获取翻译函数
  const t = useTranslations();

  // 可持续发展实践 - 使用硬编码数据替代t.raw()
  const sustainablePractices: SustainablePractice[] = [
    {
      icon: "🌱",
      title: t('sustainability.practices.0.title'),
      description: t('sustainability.practices.0.description')
    },
    {
      icon: "💧",
      title: t('sustainability.practices.1.title'),
      description: t('sustainability.practices.1.description')
    },
    {
      icon: "⚡",
      title: t('sustainability.practices.2.title'),
      description: t('sustainability.practices.2.description')
    },
    {
      icon: "♻️",
      title: t('sustainability.practices.3.title'),
      description: t('sustainability.practices.3.description')
    }
  ];

  // 佛教原则 - 同样使用硬编码数据替代t.raw()
  const buddhistPrinciples: BuddhistPrinciple[] = [
    {
      icon: "🕊️",
      name: t('sustainability.buddhistPrinciples.0.name'),
      description: t('sustainability.buddhistPrinciples.0.description')
    },
    {
      icon: "❤️",
      name: t('sustainability.buddhistPrinciples.1.name'),
      description: t('sustainability.buddhistPrinciples.1.description')
    },
    {
      icon: "🔄",
      name: t('sustainability.buddhistPrinciples.2.name'),
      description: t('sustainability.buddhistPrinciples.2.description')
    },
    {
      icon: "🎁",
      name: t('sustainability.buddhistPrinciples.3.name'),
      description: t('sustainability.buddhistPrinciples.3.description')
    }
  ];

  // 合作设计师
  const designers = [
    {
      name: t('sustainability.designers_list.0.name'),
      specialty: t('sustainability.designers_list.0.specialty'),
      collection: t('sustainability.designers_list.0.collection'),
      image: '/images/designers/sunan.jpg',
    },
    {
      name: t('sustainability.designers_list.1.name'),
      specialty: t('sustainability.designers_list.1.specialty'),
      collection: t('sustainability.designers_list.1.collection'),
      image: '/images/designers/malai.jpg',
    },
    {
      name: t('sustainability.designers_list.2.name'),
      specialty: t('sustainability.designers_list.2.specialty'),
      collection: t('sustainability.designers_list.2.collection'),
      image: '/images/designers/anurak.jpg',
    }
  ];

  // 寺庙项目
  const templeProjects = [
    {
      name: t('sustainability.temple_projects_list.0.name'),
      description: t('sustainability.temple_projects_list.0.description'),
      location: t('sustainability.temple_projects_list.0.location'),
      icon: '👘'
    },
    {
      name: t('sustainability.temple_projects_list.1.name'),
      description: t('sustainability.temple_projects_list.1.description'),
      location: t('sustainability.temple_projects_list.1.location'),
      icon: '☀️'
    },
    {
      name: t('sustainability.temple_projects_list.2.name'),
      description: t('sustainability.temple_projects_list.2.description'),
      location: t('sustainability.temple_projects_list.2.location'),
      icon: '🧘'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 页面内容 */}
      <main className="flex-grow pt-24">
        {/* 英雄区域 */}
        <section className="bg-forest-green text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">
              {t('sustainability.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              {t('sustainability.subtitle')}
            </p>
          </div>
        </section>

        {/* 可持续发展实践 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('sustainability.practicesTitle')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('sustainability.practicesDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
              {sustainablePractices.map((practice) => (
                <div key={practice.title} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{practice.icon}</span>
                    <h3 className="text-xl font-semibold text-forest-green">{practice.title}</h3>
                  </div>
                  <p className="text-gray-700">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 佛教可持续发展 */}
        <section className="py-16 bg-gray-50" id="buddhist-sustainability">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('sustainability.buddhistTitle')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('sustainability.buddhistDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {buddhistPrinciples.map((principle) => (
                <div key={principle.name} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{principle.icon}</span>
                    <h3 className="text-xl font-semibold text-forest-green">{principle.name}</h3>
                  </div>
                  <p className="text-gray-700">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 设计师合作 */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('sustainability.designerTitle')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('sustainability.designerDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {designers.map((designer) => (
                <div key={designer.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative bg-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">{t('sustainability.designers.placeholderPrefix')}{designer.name}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-forest-green">{designer.name}</h4>
                    <p className="text-gray-600 mb-1"><strong>{t('specialty')}:</strong> {designer.specialty}</p>
                    <p className="text-gray-600"><strong>{t('collection')}:</strong> {designer.collection}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 寺庙可持续发展项目 */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('sustainability.templeTitle')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('sustainability.templeDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {templeProjects.map((project) => (
                <div key={project.name} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-3xl mb-4 text-center">{project.icon}</div>
                  <h4 className="text-xl font-semibold mb-3 text-forest-green text-center">{project.name}</h4>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="text-gray-500 text-sm italic">{t('sustainability.templeProjects.locationPrefix')}{project.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 可持续发展报告 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('sustainability.reportTitle')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('sustainability.reportDescription')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-forest-green">{t('sustainability.reports.annual.title')}</h3>
                  <p className="text-gray-600">
                    {t('sustainability.reports.annual.description')}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/reports/2023-sustainability" className="text-thai-gold font-medium inline-block">
                    {t('sustainability.reports.download')} →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-forest-green">{t('sustainability.reports.carbon.title')}</h3>
                  <p className="text-gray-600">
                    {t('sustainability.reports.carbon.description')}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/reports/carbon-footprint" className="text-thai-gold font-medium inline-block">
                    {t('sustainability.reports.download')} →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-forest-green">{t('sustainability.reports.water.title')}</h3>
                  <p className="text-gray-600">
                    {t('sustainability.reports.water.description')}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/reports/water-usage" className="text-thai-gold font-medium inline-block">
                    {t('sustainability.reports.download')} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 可持续承诺 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('sustainability.commitmentTitle')}
            </h2>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-forest-green">{t('sustainability.goals.title')}</h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="text-3xl">🌱</div>
                  <div>
                    <h4 className="font-medium text-lg text-forest-green">{t('sustainability.goals.carbon.title')}</h4>
                    <p className="text-gray-600">{t('sustainability.goals.carbon.description')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="text-3xl">💧</div>
                  <div>
                    <h4 className="font-medium text-lg text-forest-green">{t('sustainability.goals.water.title')}</h4>
                    <p className="text-gray-600">{t('sustainability.goals.water.description')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <div className="text-3xl">♻️</div>
                  <div>
                    <h4 className="font-medium text-lg text-forest-green">{t('sustainability.goals.waste.title')}</h4>
                    <p className="text-gray-600">{t('sustainability.goals.waste.description')}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-3xl">🌿</div>
                  <div>
                    <h4 className="font-medium text-lg text-forest-green">{t('sustainability.goals.biodiversity.title')}</h4>
                    <p className="text-gray-600">{t('sustainability.goals.biodiversity.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/contact" className="inline-block bg-forest-green hover:bg-thai-gold transition-colors text-white font-semibold py-3 px-8 rounded-full">
                {t('sustainability.contactUs')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}