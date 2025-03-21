'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// 认证标准页面
export default function CertificationsPage() {
  // 获取翻译函数
  const t = useTranslations();

  // 全球认证标准
  const globalCertifications = [
    { name: 'GOTS (Global Organic Textile Standard)', icon: '🌎', description: 'Certification for organic textiles, covering ecological and social criteria along the entire textile supply chain.' },
    { name: 'OEKO-TEX Standard 100', icon: '🔬', description: 'Tests for harmful substances in textiles to ensure they are safe for human health.' },
    { name: 'GRS (Global Recycled Standard)', icon: '♻️', description: 'Certification for products with recycled content, ensuring environmental, social, and chemical compliance.' },
    { name: 'FSC (Forest Stewardship Council)', icon: '🌳', description: 'Certification ensuring that products come from responsibly managed forests.' },
  ];

  // 东盟国家地区
  const aseanCountries = [
    { name: 'Thailand', flag: '🇹🇭', standards: ['TIS 739', 'Green Label Thailand'] },
    { name: 'Singapore', flag: '🇸🇬', standards: ['Singapore Green Label', 'SEC'] },
    { name: 'Malaysia', flag: '🇲🇾', standards: ['MyHIJAU', 'SIRIM Eco-Label'] },
    { name: 'Indonesia', flag: '🇮🇩', standards: ['Indonesia Ecolabel', 'SNI'] },
    { name: 'Vietnam', flag: '🇻🇳', standards: ['Vietnam Green Label', 'TCVN'] },
    { name: 'Philippines', flag: '🇵🇭', standards: ['National Ecolabelling Programme-Green Choice'] }
  ];

  // 合作案例
  const caseStudies = [
    {
      id: 'thaiUnion',
      title: t('asean.caseStudies.thaiUnion'),
      content: t('asean.caseStudies.content'),
      image: '/images/case-studies/thai-union.jpg',
      logo: '/images/logos/thai-union-logo.png'
    },
    {
      id: 'centralGroup',
      title: 'Central Group Collaboration',
      content: 'Developed sustainable retail uniforms for Central Group\'s department stores across Thailand and Vietnam.',
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
              Certifications & Standards
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Our commitment to the highest quality and environmental standards across global and ASEAN markets
            </p>
          </div>
        </section>

        {/* 全球认证标准 */}
        <section className="py-16 bg-white" id="global">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              Global Certifications
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              We adhere to rigorous international standards to ensure our products meet the highest quality and sustainability criteria
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {globalCertifications.map((certification) => (
                <div key={certification.name} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{certification.icon}</span>
                    <h3 className="text-xl font-semibold text-forest-green">{certification.name}</h3>
                  </div>
                  <p className="text-gray-700">{certification.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 东盟认证标准 - 保留原有内容 */}
        <section className="py-16 bg-gray-50" id="asean">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              {t('asean.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              {t('asean.intro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {aseanCountries.map((country) => (
                <div key={country.name} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{country.flag}</span>
                    <h3 className="text-xl font-semibold text-forest-green">{country.name}</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    {country.standards.map((standard) => (
                      <li key={standard} className="flex items-center">
                        <span className="text-thai-gold mr-2">✓</span>
                        {standard}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
                <h3 className="text-xl font-semibold mb-4 text-forest-green">Bangkok Distribution Center</h3>
                <p className="text-gray-600 mb-4">
                  Our central hub located in the Lat Krabang Industrial Estate provides quick access to
                  Suvarnabhumi Airport and major shipping ports, ensuring fast delivery across ASEAN.
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm">
                  <strong>Address:</strong> 123 Lat Krabang Industrial Estate, Bangkok, Thailand 10520
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-forest-green">ASEAN Shipping Schedule</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Singapore:</span>
                    <span className="font-medium">2-3 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Malaysia:</span>
                    <span className="font-medium">3-4 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vietnam:</span>
                    <span className="font-medium">3-5 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Indonesia:</span>
                    <span className="font-medium">5-7 days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Philippines:</span>
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
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 relative bg-gray-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">Case Study Image: {caseStudy.title}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-forest-green">{caseStudy.title}</h3>
                    <p className="text-gray-600 mb-4">{caseStudy.content}</p>
                    <Link href={`/case-studies/${caseStudy.id}`} className="text-forest-green hover:underline font-medium">
                      {t('home.about.learnMore')} →
                    </Link>
                  </div>
                </div>
              ))}
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
                <h3 className="text-xl font-semibold mb-3 text-forest-green">Buddhist-Inspired</h3>
                <p className="text-gray-600">
                  Materials produced with respect for all living beings, using plant-based dyes and minimal environmental impact.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🕌</div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">Halal-Certified</h3>
                <p className="text-gray-600">
                  Textiles processed without animal-derived components and certified for use in Muslim communities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl mb-4">🧘</div>
                <h3 className="text-xl font-semibold mb-3 text-forest-green">Ethical Production</h3>
                <p className="text-gray-600">
                  Fair labor practices and respectful working conditions aligned with religious values across ASEAN nations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}