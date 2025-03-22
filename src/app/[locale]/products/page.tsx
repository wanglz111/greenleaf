'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Link from 'next/link';

// 产品页面组件
export default function Products() {
  // 获取翻译函数
  const t = useTranslations();

  // 产品分类
  const categories = [
    { id: 'organic', name: t('products.categories.organic') },
    { id: 'recycled', name: t('products.categories.recycled') },
    { id: 'bamboo', name: t('products.categories.bamboo') },
    { id: 'hemp', name: t('products.categories.hemp') },
    { id: 'blends', name: t('products.categories.blends') }
  ];

  // 筛选条件
  const filters = {
    material: [t('products.filters.materials.cotton'), t('products.filters.materials.polyester'), t('products.filters.materials.bamboo'), t('products.filters.materials.hemp'), t('products.filters.materials.blended')],
    certification: ['GOTS', 'OEKO-TEX', 'ASEAN Green', 'TIS'],
    application: [t('products.filters.applications.apparel'), t('products.filters.applications.homeTextiles'), t('products.filters.applications.industrial'), t('products.filters.applications.fashion')],
    weight: [t('products.filters.weights.light'), t('products.filters.weights.medium'), t('products.filters.weights.heavy')]
  };

  // 产品列表
  const [products] = useState([
    {
      id: 'p1',
      name: t('products.items.organicCotton.name'),
      category: 'organic',
      image: '/images/products/organic-cotton-jersey.jpg',
      description: t('materials.organicCotton.content').substring(0, 100) + '...',
      certifications: ['GOTS', 'OEKO-TEX'],
      applications: [t('products.filters.applications.apparel'), t('products.filters.applications.fashion')],
      weight: t('products.filters.weights.medium')
    },
    {
      id: 'p2',
      name: t('products.items.recycledPET.name'),
      category: 'recycled',
      image: '/images/products/recycled-pet.jpg',
      description: t('materials.recycledPolyester.content').substring(0, 100) + '...',
      certifications: ['ASEAN Green', 'OEKO-TEX'],
      applications: [t('products.filters.applications.apparel'), t('products.filters.applications.industrial')],
      weight: t('products.filters.weights.light')
    },
    {
      id: 'p3',
      name: t('products.items.bambooLyocell.name'),
      category: 'bamboo',
      image: '/images/products/bamboo-lyocell.jpg',
      description: t('materials.bamboo.content').substring(0, 100) + '...',
      certifications: ['OEKO-TEX', 'TIS'],
      applications: [t('products.filters.applications.homeTextiles'), t('products.filters.applications.apparel')],
      weight: t('products.filters.weights.light')
    },
    {
      id: 'p4',
      name: t('products.items.hempCanvas.name'),
      category: 'hemp',
      image: '/images/products/hemp-canvas.jpg',
      description: t('materials.hemp.content').substring(0, 100) + '...',
      certifications: ['ASEAN Green'],
      applications: [t('products.filters.applications.industrial'), t('products.filters.applications.homeTextiles')],
      weight: t('products.filters.weights.heavy')
    },
    {
      id: 'p5',
      name: t('products.items.cottonBamboo.name'),
      category: 'blends',
      image: '/images/products/cotton-bamboo.jpg',
      description: t('products.items.cottonBamboo.description'),
      certifications: ['GOTS', 'TIS'],
      applications: [t('products.filters.applications.fashion'), t('products.filters.applications.apparel')],
      weight: t('products.filters.weights.medium')
    },
    {
      id: 'p6',
      name: t('products.items.tropicalLinen.name'),
      category: 'blends',
      image: '/images/products/tropical-linen.jpg',
      description: t('materials.tropical.content').substring(0, 100) + '...',
      certifications: ['ASEAN Green', 'TIS'],
      applications: [t('products.filters.applications.fashion'), t('products.filters.applications.apparel')],
      weight: t('products.filters.weights.light')
    }
  ]);

  // 活跃筛选器状态
  type FilterType = 'material' | 'certification' | 'application' | 'weight';

  const [activeFilters, setActiveFilters] = useState<{
    material: string[];
    certification: string[];
    application: string[];
    weight: string[];
  }>({
    material: [],
    certification: [],
    application: [],
    weight: []
  });

  // 活跃分类
  const [activeCategory, setActiveCategory] = useState('all');

  // 筛选产品
  const filteredProducts = products.filter(product => {
    // 分类筛选
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }

    // 其他筛选条件
    for (const [filterType, filterValues] of Object.entries(activeFilters)) {
      if (filterValues.length === 0) continue;

      if (filterType === 'material') {
        // 材料筛选逻辑
        if (filterValues.length > 0 && !filterValues.some(filter => product.category.includes(filter.toLowerCase()))) {
          return false;
        }
      } else if (filterType === 'certification') {
        // 认证筛选逻辑
        if (filterValues.length > 0 && !filterValues.some(filter => product.certifications.includes(filter))) {
          return false;
        }
      } else if (filterType === 'application') {
        // 应用筛选逻辑
        if (filterValues.length > 0 && !filterValues.some(filter => product.applications.includes(filter))) {
          return false;
        }
      } else if (filterType === 'weight') {
        // 重量筛选逻辑
        if (filterValues.length > 0 && !filterValues.includes(product.weight)) {
          return false;
        }
      }
    }

    return true;
  });

  // 切换筛选器
  const toggleFilter = (type: FilterType, value: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[type].includes(value)) {
        newFilters[type] = newFilters[type].filter((v: string) => v !== value);
      } else {
        newFilters[type] = [...newFilters[type], value];
      }
      return newFilters;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 主标题 */}
      <section className="bg-forest-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('products.title')}
          </h1>
        </div>
      </section>

      {/* 产品分类 */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full ${activeCategory === 'all' ? 'bg-forest-green text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
            >
              {t('products.categories.all')}
            </button>

            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full ${activeCategory === category.id ? 'bg-forest-green text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 筛选器和产品列表 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* 筛选器侧边栏 */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-forest-green">
                  {t('products.filters.title')}
                </h2>

                {/* 材料筛选 */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-700">
                    {t('products.filters.material')}
                  </h3>
                  <div className="space-y-2">
                    {filters.material.map((material) => (
                      <label key={material} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.material.includes(material)}
                          onChange={() => toggleFilter('material', material)}
                          className="mr-2"
                        />
                        <span className="text-gray-600">{material}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 认证筛选 */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-700">
                    {t('products.filters.certification')}
                  </h3>
                  <div className="space-y-2">
                    {filters.certification.map((cert) => (
                      <label key={cert} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.certification.includes(cert)}
                          onChange={() => toggleFilter('certification', cert)}
                          className="mr-2"
                        />
                        <span className="text-gray-600">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 应用筛选 */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-700">
                    {t('products.filters.application')}
                  </h3>
                  <div className="space-y-2">
                    {filters.application.map((app) => (
                      <label key={app} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.application.includes(app)}
                          onChange={() => toggleFilter('application', app)}
                          className="mr-2"
                        />
                        <span className="text-gray-600">{app}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 重量筛选 */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3 text-gray-700">
                    {t('products.filters.weight')}
                  </h3>
                  <div className="space-y-2">
                    {filters.weight.map((weight) => (
                      <label key={weight} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.weight.includes(weight)}
                          onChange={() => toggleFilter('weight', weight)}
                          className="mr-2"
                        />
                        <span className="text-gray-600">{weight}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 产品列表 */}
            <div className="md:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">{t('products.noResults')}</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 transition-transform hover:scale-105">
                      <div className="h-48 relative bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400">Image: {product.name}</span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold mb-2 text-forest-green">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {product.certifications.map((cert, index) => (
                            <span key={index} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-600">{cert}</span>
                          ))}
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{product.weight}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}