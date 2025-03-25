'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

// 定义类型
type FabricFeature = string;
type FabricApplication = string;

// 生态面料详细介绍页面
export default function EcoFabricsPage() {
  // 获取翻译函数
  const t = useTranslations();

  // 面料数据
  const fabrics = [
    {
      id: 'organic-cotton',
      name: t('fabric.organicCotton.name'),
      subtitle: t('fabric.organicCotton.subtitle'),
      description: t('fabric.organicCotton.description'),
      features: Array.isArray(t.raw('fabric.organicCotton.features'))
        ? t.raw('fabric.organicCotton.features') as FabricFeature[]
        : [] as FabricFeature[],
      applications: Array.isArray(t.raw('fabric.organicCotton.applications'))
        ? t.raw('fabric.organicCotton.applications') as FabricApplication[]
        : [] as FabricApplication[],
      image: '/images/cotton.webp',
      icon: '🌱',
      certifications: ['GOTS', 'OEKO-TEX']
    },
    {
      id: 'recycled-polyester',
      name: t('fabric.recycledPolyester.name'),
      subtitle: t('fabric.recycledPolyester.subtitle'),
      description: t('fabric.recycledPolyester.description'),
      features: Array.isArray(t.raw('fabric.recycledPolyester.features'))
        ? t.raw('fabric.recycledPolyester.features') as FabricFeature[]
        : [] as FabricFeature[],
      applications: Array.isArray(t.raw('fabric.recycledPolyester.applications'))
        ? t.raw('fabric.recycledPolyester.applications') as FabricApplication[]
        : [] as FabricApplication[],
      image: '/images/polyester.jpeg',
      icon: '♻️',
      certifications: ['GRS', 'OEKO-TEX']
    },
    {
      id: 'bamboo-fabric',
      name: t('fabric.bambooFabric.name'),
      subtitle: t('fabric.bambooFabric.subtitle'),
      description: t('fabric.bambooFabric.description'),
      features: Array.isArray(t.raw('fabric.bambooFabric.features'))
        ? t.raw('fabric.bambooFabric.features') as FabricFeature[]
        : [] as FabricFeature[],
      applications: Array.isArray(t.raw('fabric.bambooFabric.applications'))
        ? t.raw('fabric.bambooFabric.applications') as FabricApplication[]
        : [] as FabricApplication[],
      image: '/images/materials/bamboo-fabric.jpg',
      icon: '🎋',
      certifications: ['FSC', 'OEKO-TEX']
    },
    {
      id: 'soy-fabric',
      name: t('fabric.soyFabric.name'),
      subtitle: t('fabric.soyFabric.subtitle'),
      description: t('fabric.soyFabric.description'),
      features: Array.isArray(t.raw('fabric.soyFabric.features'))
        ? t.raw('fabric.soyFabric.features') as FabricFeature[]
        : [] as FabricFeature[],
      applications: Array.isArray(t.raw('fabric.soyFabric.applications'))
        ? t.raw('fabric.soyFabric.applications') as FabricApplication[]
        : [] as FabricApplication[],
      image: '/images/materials/soy_fabric.jpg',
      icon: '🌿',
      certifications: ['OEKO-TEX']
    },
    {
      id: 'linen-fabric',
      name: t('fabric.linenFabric.name'),
      subtitle: t('fabric.linenFabric.subtitle'),
      description: t('fabric.linenFabric.description'),
      features: Array.isArray(t.raw('fabric.linenFabric.features'))
        ? t.raw('fabric.linenFabric.features') as FabricFeature[]
        : [] as FabricFeature[],
      applications: Array.isArray(t.raw('fabric.linenFabric.applications'))
        ? t.raw('fabric.linenFabric.applications') as FabricApplication[]
        : [] as FabricApplication[],
      image: '/images/materials/linen.webp',
      icon: '🌾',
      certifications: ['OEKO-TEX']
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
              {t('fabric.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              {t('fabric.subtitle')}
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
                        alt={fabric.name}
                        fill
                        className="object-cover"
                      />
                    ) : fabric.id === 'recycled-polyester' ? (
                      <Image
                        src="/images/polyester.jpeg"
                        alt={fabric.name}
                        fill
                        className="object-cover"
                      />
                    ) : fabric.id === 'bamboo-fabric' ? (
                      <Image
                        src="/images/bamboo.jpg"
                        alt={fabric.name}
                        fill
                        className="object-cover"
                      />
                    ) : fabric.id === 'soy-fabric' ? (
                      <Image
                        src="/images/materials/soy_fabric.jpg"
                        alt={fabric.name}
                        fill
                        className="object-cover"
                      />
                    ) : fabric.id === 'linen-fabric' ? (
                      <Image
                        src="/images/materials/linen.webp"
                        alt={fabric.name}
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
                      <span className="text-thai-gold mr-3">✦</span> {t('fabric.keyFeatures')}
                    </h3>
                    <ul className="space-y-2">
                      {fabric.features.map((feature: FabricFeature, i: number) => (
                        <li key={i} className="flex items-start">
                          <span className="text-thai-gold mr-3">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-forest-green flex items-center">
                      <span className="text-thai-gold mr-3">✦</span> {t('fabric.commonApplications')}
                    </h3>
                    <ul className="space-y-2">
                      {fabric.applications.map((application: FabricApplication, i: number) => (
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
            <h2 className="text-3xl font-bold mb-6 text-forest-green">{t('fabric.ready')}</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              {t('fabric.readyDescription')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                {t('fabric.contactTeam')}
              </Link>
              <Link href="/products" className="btn-secondary">
                {t('fabric.browseProducts')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}