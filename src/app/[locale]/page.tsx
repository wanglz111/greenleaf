'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

// 主页组件
export default function Home() {
  // 获取翻译函数
  const t = useTranslations();

  // 滚动状态
  const [currentMaterialIndex, setCurrentMaterialIndex] = useState(0);
  const [currentAseanIndex, setCurrentAseanIndex] = useState(0);

  // 滚动容器引用
  const materialScrollRef = useRef<HTMLDivElement>(null);
  const aseanScrollRef = useRef<HTMLDivElement>(null);

  // 特色材料状态
  const [featuredMaterials] = useState([
    {
      id: 'organic',
      name: t('products.categories.organic'),
      image: '/images/materials/organic-cotton.jpg',
      description: t('materials.organicCotton.content').substring(0, 120) + '...'
    },
    {
      id: 'recycled',
      name: t('products.categories.recycled'),
      image: '/images/materials/recycled-polyester.jpg',
      description: t('materials.recycledPolyester.content').substring(0, 120) + '...'
    },
    {
      id: 'bamboo',
      name: t('products.categories.bamboo'),
      image: '/images/materials/bamboo-fabric.jpg',
      description: t('materials.bamboo.content').substring(0, 120) + '...'
    }
  ]);

  // 认证标准
  const certifications = [
    { id: 'grs', name: t('home.certifications.grs'), icon: '/images/certifications/GlobalRecycled.webp' },
    { id: 'gots', name: t('home.certifications.gots'), icon: '/images/certifications/logo-gots.webp' },
    // { id: 'tis', name: t('home.certifications.tis'), icon: '/images/certifications/tis.svg' },
    { id: 'oeko', name: t('home.certifications.oeko'), icon: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Oeko_tex_-_umbrella_brand_-_11_2022.svg' }
  ];

  // 支付方式
  const paymentMethods = [
    { id: 'promptpay', name: t('payment.methods.promptpay'), icon: '💳' },
    { id: 'linepay', name: t('payment.methods.linepay'), icon: '📱' },
    { id: 'international', name: t('payment.methods.international'), icon: '🌐' }
  ];

  // 监听材料滚动事件
  useEffect(() => {
    const scrollContainer = materialScrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (!scrollContainer) return;
      // 获取容器宽度（大约等于一个卡片的宽度加上外边距）
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = scrollContainer.scrollLeft;
      // 计算当前查看的卡片索引
      const currentIndex = Math.round(scrollPosition / containerWidth);
      setCurrentMaterialIndex(currentIndex);
    };

    // 初始化
    handleScroll();

    // 添加事件监听
    scrollContainer.addEventListener('scroll', handleScroll);
    // 添加触摸结束事件监听
    scrollContainer.addEventListener('touchend', () => {
      setTimeout(handleScroll, 350);
    });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchend', () => {
        setTimeout(handleScroll, 350);
      });
    };
  }, []);

  // 监听东盟认证滚动事件
  useEffect(() => {
    const scrollContainer = aseanScrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (!scrollContainer) return;
      // 获取容器宽度（大约等于一个卡片的宽度加上外边距）
      const containerWidth = scrollContainer.offsetWidth;
      const scrollPosition = scrollContainer.scrollLeft;
      // 计算当前查看的卡片索引
      const currentIndex = Math.round(scrollPosition / containerWidth);
      setCurrentAseanIndex(currentIndex);
    };

    // 初始化
    handleScroll();

    // 添加事件监听
    scrollContainer.addEventListener('scroll', handleScroll);
    // 添加触摸结束事件监听
    scrollContainer.addEventListener('touchend', () => {
      setTimeout(handleScroll, 350);
    });

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchend', () => {
        setTimeout(handleScroll, 350);
      });
    };
  }, []);

  return (
    <>
      {/* 英雄区域 */}
      <section className="relative h-[80vh] min-h-[480px] bg-gradient-to-r from-forest-green to-green-700 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        <div className="mobile-container h-full flex flex-col justify-center items-center text-center relative z-10">
          <h1 className="mobile-title mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="mobile-subtitle mb-8">
            {t('home.hero.subtitle')}
          </p>
          <Link href="/products" className="mobile-btn btn-secondary max-w-xs">
            {t('home.hero.cta')}
          </Link>
        </div>
      </section>

      {/* 特色材料 - 重新设计 */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mobile-container">
          <h2 className="mobile-title text-center mb-8 sm:mb-12 text-forest-green thai-border pb-4">
            {t('home.featured.title')}
          </h2>

          {/* 移动端卡片滚动视图 - 修复版 */}
          <div className="sm:hidden mb-4">
            <div className="mobile-scroll-container" ref={materialScrollRef}>
              <div className="scroll-items">
                {featuredMaterials.map((material) => (
                  <div key={material.id} className="scroll-item">
                    <div className="mobile-card h-full flex flex-col">
                      <div className="h-36 relative bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-gray-400">Image: {material.name}</span>
                      </div>
                      <h3 className="mobile-subtitle text-forest-green mb-2">{material.name}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">{material.description}</p>
                      <Link href={`/fabric#${material.id.replace('organic', 'organic-cotton').replace('recycled', 'recycled-polyester').replace('bamboo', 'bamboo-fabric')}`} className="touch-link text-forest-green font-medium inline-flex items-center mt-auto">
                        {t('home.about.learnMore')} <span className="ml-1">→</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 滚动指示器 */}
            <div className="flex justify-center gap-2 mt-4">
              {featuredMaterials.map((_, index) => (
                <span
                  key={index}
                  className={`inline-block h-2 rounded-full transition-all duration-300 ${index === currentMaterialIndex ? 'w-6 bg-forest-green' : 'w-2 bg-gray-300'
                    }`}
                ></span>
              ))}
            </div>
          </div>

          {/* 桌面版卡片网格 */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredMaterials.map((material) => (
              <div key={material.id} className="mobile-card transition-transform hover:scale-[1.02]">
                <div className="h-48 relative bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Image: {material.name}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-forest-green">{material.name}</h3>
                <p className="text-gray-600 mb-4">{material.description}</p>
                <Link href={`/fabric#${material.id.replace('organic', 'organic-cotton').replace('recycled', 'recycled-polyester').replace('bamboo', 'bamboo-fabric')}`} className="touch-link text-forest-green font-medium inline-flex items-center">
                  {t('home.about.learnMore')} <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/products" className="mobile-btn btn-primary inline-block">
              {t('home.featured.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mobile-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mobile-title mb-4 sm:mb-6 text-forest-green thai-border pb-4">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-gray-700 mb-6 sm:mb-8">
              {t('home.about.content')}
            </p>
            <Link href="/about" className="mobile-btn btn-secondary max-w-xs mx-auto">
              {t('home.about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* 佛教可持续发展 - 新增部分 */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="mobile-container">
          <h2 className="mobile-title text-center mb-6 sm:mb-8 text-forest-green thai-border pb-4">
            {t('buddhist.title')}
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto">
            {t('buddhist.intro')}
          </p>

          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-10 max-w-4xl mx-auto">
            <div className="mobile-card">
              <h3 className="mobile-subtitle mb-3 sm:mb-4 text-forest-green">
                {t('buddhist.principles.title')}
              </h3>
              <p className="text-gray-600">
                {t('buddhist.principles.content')}
              </p>
            </div>
            <div className="mobile-card">
              <h3 className="mobile-subtitle mb-3 sm:mb-4 text-forest-green">
                {t('buddhist.designs.title')}
              </h3>
              <p className="text-gray-600">
                {t('buddhist.designs.content')}
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/sustainability" className="mobile-btn btn-primary max-w-xs mx-auto">
              {t('home.about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* 认证标准 */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mobile-container">
          <h2 className="mobile-title text-center mb-8 sm:mb-12 text-forest-green thai-border pb-4">
            {t('home.certifications.title')}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 mb-3 sm:mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs sm:text-base">
                    <Image src={cert.icon} alt={cert.name} width={100} height={100} />
                  </span>
                </div>
                <h3 className="text-sm sm:text-lg font-medium text-center text-gray-800">{cert.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 东盟认证 - 新增部分 */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="mobile-container">
          <h2 className="mobile-title text-center mb-6 sm:mb-8 text-forest-green thai-border pb-4">
            {t('asean.title')}
          </h2>
          <p className="text-base sm:text-lg text-center text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto">
            {t('asean.intro')}
          </p>

          {/* 移动端卡片滚动视图 - 修复版 */}
          <div className="sm:hidden mb-4">
            <div className="mobile-scroll-container" ref={aseanScrollRef}>
              <div className="scroll-items">
                <div className="scroll-item">
                  <div className="mobile-card h-full flex flex-col">
                    <h3 className="mobile-subtitle mb-3 text-forest-green">
                      {t('asean.standards.title')}
                    </h3>
                    <p className="text-gray-600 line-clamp-4">
                      {t('asean.standards.content')}
                    </p>
                  </div>
                </div>
                <div className="scroll-item">
                  <div className="mobile-card h-full flex flex-col">
                    <h3 className="mobile-subtitle mb-3 text-forest-green">
                      {t('asean.logistics.title')}
                    </h3>
                    <p className="text-gray-600 line-clamp-4">
                      {t('asean.logistics.content')}
                    </p>
                  </div>
                </div>
                <div className="scroll-item">
                  <div className="mobile-card h-full flex flex-col">
                    <h3 className="mobile-subtitle mb-3 text-forest-green">
                      {t('asean.religious.title')}
                    </h3>
                    <p className="text-gray-600 line-clamp-4">
                      {t('asean.religious.content')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 滚动指示器 */}
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2].map((index) => (
                <span
                  key={index}
                  className={`inline-block h-2 rounded-full transition-all duration-300 ${index === currentAseanIndex ? 'w-6 bg-forest-green' : 'w-2 bg-gray-300'
                    }`}
                ></span>
              ))}
            </div>
          </div>

          {/* 桌面版网格 */}
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="mobile-card">
              <h3 className="mobile-subtitle mb-4 text-forest-green">
                {t('asean.standards.title')}
              </h3>
              <p className="text-gray-600">
                {t('asean.standards.content')}
              </p>
            </div>
            <div className="mobile-card">
              <h3 className="mobile-subtitle mb-4 text-forest-green">
                {t('asean.logistics.title')}
              </h3>
              <p className="text-gray-600">
                {t('asean.logistics.content')}
              </p>
            </div>
            <div className="mobile-card md:col-span-2 lg:col-span-1">
              <h3 className="mobile-subtitle mb-4 text-forest-green">
                {t('asean.religious.title')}
              </h3>
              <p className="text-gray-600">
                {t('asean.religious.content')}
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link href="/certifications" className="mobile-btn btn-secondary max-w-xs mx-auto">
              {t('home.about.learnMore')}
            </Link>
          </div>
        </div>
      </section>

      {/* 支付方式 - 新增部分 */}
      <section className="py-8 sm:py-12 bg-gray-50">
        <div className="mobile-container">
          <h3 className="text-lg sm:text-xl font-semibold text-center mb-6 sm:mb-8 text-forest-green">
            {t('payment.methods.title')}
          </h3>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-center border border-gray-200 bg-white px-3 sm:px-4 py-2 rounded-md shadow-sm">
                <span className="text-xl sm:text-2xl mr-2">{method.icon}</span>
                <span className="font-medium text-sm sm:text-base">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}