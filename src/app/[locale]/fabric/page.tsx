'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// 生态面料详细介绍页面
export default function EcoFabricsPage() {
  // 获取翻译函数
  const t = useTranslations();

  // 面料数据
  const fabrics = [
    {
      id: 'organic-cotton',
      name: 'Organic Cotton',
      subtitle: 'Sustainable & Skin-Friendly',
      description: `Organic cotton is grown without harmful pesticides, synthetic fertilizers, or genetically modified seeds.
      At Gleaftex, we source our organic cotton from certified farms in Northern Thailand and neighboring countries, ensuring
      complete traceability from field to fabric.`,
      features: [
        'Free from harmful chemicals and pesticides',
        'Requires 71% less water than conventional cotton',
        'Reduces soil erosion and improves biodiversity',
        'GOTS certified production process',
        'Extremely soft and suitable for sensitive skin'
      ],
      applications: [
        'Apparel and fashion items',
        'Home textiles and bedding',
        'Baby and children\'s products',
        'Hospital textiles and uniforms'
      ],
      image: '/images/cotton.webp',
      icon: '🌱',
      certifications: ['GOTS', 'OEKO-TEX']
    },
    {
      id: 'recycled-polyester',
      name: 'Recycled Polyester',
      subtitle: 'From Plastic Bottles to Premium Fabric',
      description: `Our recycled polyester transforms plastic waste into high-performance textiles.
      Each kilogram of our recycled polyester fabric repurposes approximately 30 plastic bottles that
      would otherwise end up in landfills or oceans. The production process requires 59% less energy
      than creating virgin polyester.`,
      features: [
        'Made from post-consumer plastic bottles (PET)',
        'Reduces plastic waste and petroleum consumption',
        'Excellent durability and color retention',
        'Moisture-wicking and quick-drying properties',
        'Can be blended with natural fibers for enhanced performance'
      ],
      applications: [
        'Activewear and sportswear',
        'Outdoor and travel clothing',
        'Corporate uniforms and workwear',
        'Bags, backpacks, and accessories'
      ],
      image: '/images/polyester.jpeg',
      icon: '♻️',
      certifications: ['GRS', 'OEKO-TEX']
    },
    {
      id: 'bamboo-fabric',
      name: 'Bamboo Fabric',
      subtitle: 'Natural Comfort for Tropical Climates',
      description: `Bamboo is one of nature's most sustainable resources, growing up to 1 meter per day without
      requiring replanting. Our bamboo fabrics utilize a closed-loop lyocell process that transforms bamboo pulp
      into luxuriously soft textiles while recapturing 99% of the solvents used in production.`,
      features: [
        'Naturally antibacterial and hypoallergenic',
        'Excellent breathability and thermal regulation',
        'Absorbs moisture 3-4 times better than cotton',
        'UV protective properties',
        'Biodegradable at end of life'
      ],
      applications: [
        'Luxury apparel and undergarments',
        'Towels and bathroom textiles',
        'Bedding and sleep products',
        'Medical and therapeutic textiles'
      ],
      image: '/images/materials/bamboo-fabric.jpg',
      icon: '🎋',
      certifications: ['FSC', 'OEKO-TEX']
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
              Eco-Friendly Fabrics
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Sustainable textile solutions designed for the modern world and our planet's future
            </p>
          </div>
        </section>

        {/* 面料详情部分 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {fabrics.map((fabric, index) => (
              <div key={fabric.id} id={fabric.id} className={`mb-20 ${index !== fabrics.length - 1 ? 'border-b border-gray-200 pb-20' : ''}`}>
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video relative">
                    {fabric.id === 'organic-cotton' ? (
                      <Image
                        src="/images/cotton_field.webp"
                        alt="Organic Cotton Field"
                        fill
                        className="object-cover"
                      />
                    ) : fabric.id === 'recycled-polyester' ? (
                      <Image
                        src="/images/polyester.jpeg"
                        alt="Recycled Polyester"
                        fill
                        className="object-cover"
                      />
                    ) : fabric.id === 'bamboo-fabric' ? (
                      <Image
                        src="/images/bamboo.jpeg"
                        alt="Bamboo Fabric"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <span className="text-4xl">{fabric.icon}</span>
                        <span className="ml-4 text-gray-500">Image: {fabric.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{fabric.icon}</span>
                      <h2 className="text-3xl font-bold text-forest-green">{fabric.name}</h2>
                    </div>
                    <p className="text-xl text-thai-gold mb-6">{fabric.subtitle}</p>
                    <p className="text-gray-700 mb-6 whitespace-pre-line">
                      {fabric.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {fabric.certifications.map(cert => (
                        <span key={cert} className="bg-forest-green bg-opacity-10 text-forest-green px-3 py-1 rounded-full text-sm font-medium">
                          {cert} Certified
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-forest-green flex items-center">
                      <span className="text-thai-gold mr-3">✦</span> Key Features
                    </h3>
                    <ul className="space-y-2">
                      {fabric.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-thai-gold mr-3">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-forest-green flex items-center">
                      <span className="text-thai-gold mr-3">✦</span> Common Applications
                    </h3>
                    <ul className="space-y-2">
                      {fabric.applications.map((application, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-thai-gold mr-3">•</span>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 号召行动 */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-forest-green">Ready to Explore Our Eco-Friendly Fabrics?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover how our sustainable textiles can transform your products and help you meet your environmental goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Our Team
              </Link>
              <Link href="/products" className="btn-secondary">
                Browse Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}