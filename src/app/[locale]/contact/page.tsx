'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

// 联系页面组件
export default function Contact() {
  // 获取翻译函数
  const t = useTranslations();

  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    consent: false
  });

  // 表单提交状态
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  // 处理输入变化
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const target = e.target as HTMLInputElement;
    const checked = target.type === 'checkbox' ? target.checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: target.type === 'checkbox' ? checked : value
    }));
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 模拟表单提交
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will contact you soon!'
    });

    // 重置表单
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
      consent: false
    });
  };

  return (
    <>
      {/* 主标题 */}
      <section className="bg-forest-green text-white py-10 sm:py-16">
        <div className="mobile-container text-center">
          <h1 className="mobile-title mb-2 sm:mb-4">
            {t('nav.contact')}
          </h1>
        </div>
      </section>

      {/* 联系信息和表单 */}
      <section className="py-10 sm:py-16 bg-white">
        <div className="mobile-container">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
            {/* 联系信息 */}
            <div className="order-2 md:order-1">
              <h2 className="mobile-subtitle mb-6 text-forest-green">
                {t('footer.contact.title')}
              </h2>
              <div className="space-y-5">
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl text-thai-gold mr-3 sm:mr-4">📍</span>
                  <p className="text-gray-700">{t('footer.contact.address')}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl text-thai-gold mr-3 sm:mr-4">📞</span>
                  <p className="text-gray-700">{t('footer.contact.phone')}</p>
                </div>
                <div className="flex items-start">
                  <span className="text-xl sm:text-2xl text-thai-gold mr-3 sm:mr-4">📧</span>
                  <p className="text-gray-700">
                    <a
                      href={`mailto:${t('footer.contact.email')}`}
                      className="text-forest-green hover:underline touch-link inline-block"
                    >
                      {t('footer.contact.email')}
                    </a>
                  </p>
                </div>
              </div>

              {/* 社交媒体 */}
              <div className="mt-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 text-forest-green">
                  {t('footer.social')}
                </h3>
                <div className="flex space-x-6">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-thai-gold transition-colors touch-link"
                    aria-label="Facebook"
                  >
                    📘
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-thai-gold transition-colors touch-link"
                    aria-label="Instagram"
                  >
                    📷
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-thai-gold transition-colors touch-link"
                    aria-label="LinkedIn"
                  >
                    🔗
                  </a>
                  <a
                    href="https://line.me"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:text-thai-gold transition-colors touch-link"
                    aria-label="Line"
                  >
                    💬
                  </a>
                </div>
              </div>
            </div>

            {/* 联系表单 */}
            <div className="order-1 md:order-2">
              <h2 className="mobile-subtitle mb-6 text-forest-green">
                {t('contact.form.title')}
              </h2>

              {formStatus.submitted ? (
                <div className="mobile-card bg-green-50 border-green-200 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {t('contact.form.success')}
                  </h3>
                  <p className="text-green-700">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block mb-2 text-gray-700 font-medium">
                      {t('contact.form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-green focus:border-forest-green"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        checked={formData.consent}
                        onChange={handleChange}
                        required
                        className="w-5 h-5 border border-gray-300 rounded focus:ring-forest-green"
                      />
                    </div>
                    <label htmlFor="consent" className="ml-3 text-sm text-gray-700">
                      {t('contact.form.consent')} *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="mobile-btn btn-primary w-full sm:w-auto sm:px-6 py-3"
                  >
                    {t('contact.form.submit')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 地图部分 */}
      <section className="py-6 sm:py-10 bg-gray-50">
        <div className="mobile-container">
          <h2 className="mobile-subtitle mb-6 text-center text-forest-green">
            {t('contact.location')}
          </h2>
          <div className="aspect-video bg-gray-200 rounded-lg w-full overflow-hidden shadow-md">
            <div className="h-full w-full flex items-center justify-center text-gray-400">
              {t('contact.mapPlaceholder')}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}