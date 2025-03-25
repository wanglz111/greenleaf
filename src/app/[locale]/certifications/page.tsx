'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 定义类型
type CertificationInfo = {
  name: string;
  icon: string;
  description: string;
};

type CountryInfo = {
  name: string;
  flag: string;
  standards: string[];
};

type CaseStudyInfo = {
  id: string;
  title: string;
  content: string;
  image: string;
  logo: string;
};

// 认证标准页面
export default function CertificationsPage() {
  // 获取翻译函数
  const t = useTranslations();

  // 全球认证标准 - 强健的错误处理
  let globalCertifications = [];
  try {
    const rawData = t.raw('certifications.globalCertifications');
    if (Array.isArray(rawData)) {
      globalCertifications = rawData;
    } else if (rawData && typeof rawData === 'object') {
      // 尝试从对象中提取数据
      console.warn('globalCertifications is not an array, attempting to convert:', rawData);
      globalCertifications = Object.values(rawData);
    } else {
      console.error('Invalid globalCertifications data:', rawData);
      // 故障回退 - 硬编码的数据，以防翻译文件中没有
      globalCertifications = [
        {
          name: "GOTS (Global Organic Textile Standard)",
          icon: "🌎",
          description: "Certification for organic textiles, covering ecological and social criteria along the entire textile supply chain."
        },
        {
          name: "OEKO-TEX Standard 100",
          icon: "🔬",
          description: "Tests for harmful substances in textiles to ensure they are safe for human health."
        },
        {
          name: "GRS (Global Recycled Standard)",
          icon: "♻️",
          description: "Certification for products with recycled content, ensuring environmental, social, and chemical compliance."
        }
      ];
    }
  } catch (error) {
    console.error('Error loading globalCertifications:', error);
    // 故障回退 - 硬编码的数据，以防翻译文件中没有
    globalCertifications = [
      {
        name: "GOTS (Global Organic Textile Standard)",
        icon: "🌎",
        description: "Certification for organic textiles, covering ecological and social criteria along the entire textile supply chain."
      }
    ];
  }

  // 东盟国家地区 - 强健的错误处理
  let aseanCountries = [];
  try {
    const rawData = t.raw('certifications.aseanCountries');
    if (Array.isArray(rawData)) {
      aseanCountries = rawData;
    } else if (rawData && typeof rawData === 'object') {
      console.warn('aseanCountries is not an array, attempting to convert:', rawData);
      aseanCountries = Object.values(rawData);
    } else {
      console.error('Invalid aseanCountries data:', rawData);
      // 故障回退数据
      aseanCountries = [
        { name: "Thailand", flag: "🇹🇭", standards: ["TIS 739", "Green Label Thailand"] },
        { name: "Singapore", flag: "🇸🇬", standards: ["Singapore Green Label", "SEC"] }
      ];
    }
  } catch (error) {
    console.error('Error loading aseanCountries:', error);
    // 故障回退数据
    aseanCountries = [
      { name: "Thailand", flag: "🇹🇭", standards: ["TIS 739", "Green Label Thailand"] }
    ];
  }

  // 合作案例
  const caseStudies: CaseStudyInfo[] = [
    {
      id: 'thaiUnion',
      title: t('asean.caseStudies.thaiUnion'),
      content: t('asean.caseStudies.content'),
      image: '/images/case-studies/thai-union.jpg',
      logo: '/images/logos/thai-union-logo.png'
    },
    {
      id: 'centralGroup',
      title: t('certifications.case.central.title'),
      content: t('certifications.case.central.content'),
      image: '/images/case-studies/central-group.jpg',
      logo: '/images/logos/central-group-logo.png'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* 页面内容 */}
      <main className="flex-grow pt-24">
        {/* 英雄区域 */}
        <section className="bg-forest-green text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">
              {t('certifications.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              {t('certifications.subtitle')}
            </p>
          </div>
        </section>

        {/* 全球认证标准 */}
        <section className="py-16 bg-white" id="global">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('certifications.global.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('certifications.global.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {globalCertifications && globalCertifications.length > 0 ? (
                globalCertifications.map((certification) => (
                  <div key={certification.name || 'unknown'} className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{certification.icon || '🏷️'}</span>
                      <h3 className="text-xl font-semibold text-forest-green">{certification.name || 'Unknown Certification'}</h3>
                    </div>
                    <p className="text-gray-700">{certification.description || 'No description available'}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-8">
                  <p className="text-gray-500">{t('certifications.noCertifications') || 'No certifications available'}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 东盟认证标准 */}
        <section className="py-16 bg-gray-50" id="asean">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('asean.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('asean.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {aseanCountries && aseanCountries.length > 0 ? (
                aseanCountries.map((country) => (
                  <div key={country.name || 'unknown'} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{country.flag || '🏳️'}</span>
                      <h3 className="text-xl font-semibold text-forest-green">{country.name || 'Unknown Country'}</h3>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      {country.standards && Array.isArray(country.standards) && country.standards.length > 0 ? (
                        country.standards.map((standard: string) => (
                          <li key={standard} className="flex items-center">
                            <span className="text-thai-gold mr-2">✓</span>
                            {standard}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-500">No standards available</li>
                      )}
                    </ul>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-8">
                  <p className="text-gray-500">{t('asean.noCountries') || 'No countries available'}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 物流解决方案 */}
        <section className="py-16 bg-white" id="logistics">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('asean.logistics.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('asean.logistics.content')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-forest-green">{t('certifications.logistics.bangkok')}</h3>
                <p className="text-gray-600 mb-4">
                  {t('certifications.logistics.bangkokDesc')}
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>{t('certifications.logistics.bangkokAddress')}</strong>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-forest-green">{t('certifications.logistics.aseanShipping')}</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>{t('certifications.logistics.singapore')}:</span>
                    <span className="font-medium">2-3 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('certifications.logistics.malaysia')}:</span>
                    <span className="font-medium">3-4 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('certifications.logistics.vietnam')}:</span>
                    <span className="font-medium">3-5 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('certifications.logistics.indonesia')}:</span>
                    <span className="font-medium">5-7 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>{t('certifications.logistics.philippines')}:</span>
                    <span className="font-medium">5-7 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 本地案例研究 */}
        <section className="py-16 bg-gray-50" id="case-studies">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('asean.caseStudies.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {caseStudies && caseStudies.length > 0 ? (
                caseStudies.map((caseStudy) => (
                  <div key={caseStudy.id || 'unknown'} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative bg-gray-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500">Case Study Image: {caseStudy.title || 'Unnamed Case Study'}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 text-forest-green">{caseStudy.title || 'Unnamed Case Study'}</h3>
                      <p className="text-gray-600 mb-4">{caseStudy.content || 'No content available'}</p>
                      <Link href={`/case-studies/${caseStudy.id || 'unknown'}`} className="text-forest-green hover:underline font-medium">
                        {t('home.about.learnMore')} →
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-2 text-center py-8">
                  <p className="text-gray-500">{t('asean.caseStudies.noCases') || 'No case studies available'}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 宗教友好材料 */}
        <section className="py-16 bg-white" id="religious">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('asean.religious.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('asean.religious.content')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🛕</div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">{t('certifications.religious.buddhist')}</h3>
                <p className="text-gray-600">
                  {t('certifications.religious.buddhistDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🕌</div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">{t('certifications.religious.halal')}</h3>
                <p className="text-gray-600">
                  {t('certifications.religious.halalDesc')}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🧘</div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">{t('certifications.religious.ethical')}</h3>
                <p className="text-gray-600">
                  {t('certifications.religious.ethicalDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}