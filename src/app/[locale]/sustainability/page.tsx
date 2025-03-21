'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// 可持续发展页面
export default function SustainabilityPage() {
  // 获取翻译函数
  const t = useTranslations();

  // 可持续发展实践
  const sustainablePractices = [
    {
      icon: '🌱',
      title: 'Eco-Friendly Materials',
      description: 'We prioritize organic, recycled, and naturally-sourced materials that reduce environmental impact.'
    },
    {
      icon: '💧',
      title: 'Water Conservation',
      description: 'Our manufacturing processes use 50% less water than industry standard through innovative recycling and purification systems.'
    },
    {
      icon: '⚡',
      title: 'Renewable Energy',
      description: 'Our Thailand facilities operate with 40% solar energy, with plans to reach 75% renewable energy by 2026.'
    },
    {
      icon: '♻️',
      title: 'Zero Waste Initiative',
      description: 'We have achieved 85% waste reduction through comprehensive recycling and upcycling programs.'
    }
  ];

  // 佛教原则
  const buddhistPrinciples = [
    {
      name: 'Ahimsa (非暴力)',
      description: 'Non-violence toward all living beings, reflected in our cruelty-free and vegan-friendly materials.',
      icon: '🕊️'
    },
    {
      name: 'Karuna (慈悲)',
      description: 'Compassion for all, guiding our fair labor practices and community support initiatives.',
      icon: '❤️'
    },
    {
      name: 'Anicca (无常)',
      description: 'Impermanence, inspiring our focus on biodegradable materials and circular product design.',
      icon: '🔄'
    },
    {
      name: 'Dana (慷慨)',
      description: 'Generosity, driving our profit-sharing model and donations to environmental causes.',
      icon: '🎁'
    }
  ];

  // 合作设计师
  const designers = [
    {
      name: 'Sunan Ongkulsuksa',
      specialty: 'Modern Buddhist-inspired textiles',
      collection: 'Dharma Threads',
      image: '/images/designers/sunan.jpg',
    },
    {
      name: 'Malai Ratana',
      specialty: 'Natural dye techniques',
      collection: 'Lotus Colors',
      image: '/images/designers/malai.jpg',
    },
    {
      name: 'Anurak Thaworn',
      specialty: 'Temple-inspired patterns',
      collection: 'Sacred Geometry',
      image: '/images/designers/anurak.jpg',
    }
  ];

  // 寺庙项目
  const templeProjects = [
    {
      name: 'Monk Robe Recycling Program',
      description: 'Collecting and repurposing worn monk robes into meditation cushions and accessories.',
      location: 'Wat Phra That Doi Suthep, Chiang Mai',
      icon: '👘'
    },
    {
      name: 'Solar Fabric Installations',
      description: 'Developing innovative solar-collecting textiles for temple awnings and pavilions.',
      location: 'Wat Arun, Bangkok',
      icon: '☀️'
    },
    {
      name: 'Meditation Cushion Initiative',
      description: 'Creating eco-friendly, ergonomic meditation cushions for temples across Thailand.',
      location: 'Multiple locations',
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
              Sustainability
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Our commitment to environmental stewardship and ethical practices, inspired by Buddhist principles
            </p>
          </div>
        </section>

        {/* 可持续发展实践 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              Our Sustainable Practices
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              Gleaftex is committed to creating eco-friendly textiles through innovative processes and responsible sourcing
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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

            <div className="mt-16 text-center">
              <Link href="/eco-fabrics" className="inline-block px-6 py-3 bg-thai-gold text-white rounded-md hover:bg-amber-600 transition-colors">
                Explore Our Eco-Friendly Fabrics
              </Link>
            </div>
          </div>
        </section>

        {/* 佛教可持续发展 */}
        <section className="py-16 bg-gray-50" id="buddhist-sustainability">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              Sustainability in Buddhist Culture
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              Our approach to sustainability is deeply influenced by Buddhist principles of compassion, mindfulness, and respect for all living beings
            </p>

            {/* 佛教原则 */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8 text-forest-green">Buddhist Principles in Our Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {buddhistPrinciples.map((principle) => (
                  <div key={principle.name} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="text-3xl mb-4">{principle.icon}</div>
                    <h4 className="text-xl font-semibold mb-3 text-forest-green">{principle.name}</h4>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 莲花图案 */}
            <div className="bg-white p-8 rounded-lg shadow-md mb-16">
              <h3 className="text-2xl font-semibold text-center mb-6 text-forest-green">Lotus Pattern Inspiration</h3>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-gray-200 h-64 rounded flex items-center justify-center text-gray-500">
                    Lotus Pattern Image
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="text-gray-700 mb-4">
                    The lotus flower holds deep significance in Buddhist culture, representing purity and enlightenment as it grows from muddy waters to blossom above the surface. This metaphor inspires our approach to creating beautiful, sustainable textiles that have minimal environmental impact.
                  </p>
                  <p className="text-gray-700">
                    Our signature lotus pattern textiles are created using natural dyes derived from plant sources, including the lotus plant itself. These fabrics embody the Buddhist principle of harmony with nature while offering elegant designs for modern applications.
                  </p>
                </div>
              </div>
            </div>

            {/* 设计师合作 */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-center mb-8 text-forest-green">Designer Collaborations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {designers.map((designer) => (
                  <div key={designer.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 relative bg-gray-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-500">Designer: {designer.name}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-forest-green">{designer.name}</h4>
                      <p className="text-gray-600 mb-1"><strong>Specialty:</strong> {designer.specialty}</p>
                      <p className="text-gray-600"><strong>Collection:</strong> {designer.collection}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 寺庙可持续发展项目 */}
            <div>
              <h3 className="text-2xl font-semibold text-center mb-8 text-forest-green">Temple Sustainability Projects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {templeProjects.map((project) => (
                  <div key={project.name} className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-3xl mb-4 text-center">{project.icon}</div>
                    <h4 className="text-xl font-semibold mb-3 text-forest-green text-center">{project.name}</h4>
                    <p className="text-gray-600 mb-3">{project.description}</p>
                    <p className="text-gray-500 text-sm italic">Location: {project.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 可持续发展报告 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-forest-green thai-border pb-4">
              Sustainability Reports
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto text-center">
              Transparent reporting on our environmental impact and progress toward sustainability goals
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-forest-green">2023 Sustainability Report</h3>
                  <p className="text-gray-600">
                    Our comprehensive annual report detailing environmental initiatives, carbon footprint, and sustainability metrics.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/reports/2023-sustainability" className="text-thai-gold font-medium inline-block">
                    Download PDF →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-forest-green">Carbon Footprint Analysis</h3>
                  <p className="text-gray-600">
                    Detailed breakdown of our carbon emissions across all operations and supply chain partners.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/reports/carbon-footprint" className="text-thai-gold font-medium inline-block">
                    Download PDF →
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-forest-green">Water Usage Report</h3>
                  <p className="text-gray-600">
                    Analysis of water consumption in our textile production and conservation initiatives.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Link href="/reports/water-usage" className="text-thai-gold font-medium inline-block">
                    Download PDF →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}