'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

// 隐私政策页面
export default function PrivacyPolicy() {
  // 获取翻译函数
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 主标题 */}
      <section className="bg-forest-green text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('legal.privacy.title')}
          </h1>
          <p className="text-lg">
            {t('legal.privacy.lastUpdated')}: March 1, 2025
          </p>
        </div>
      </section>

      {/* 隐私政策内容 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>{t('legal.privacy.overview')}</h2>
            <p>{t('legal.privacy.overviewContent')}</p>

            <h2>{t('legal.privacy.information')}</h2>
            <p>
              We may collect the following types of information:
            </p>
            <ul>
              <li>Personal identification information (name, email address, phone number, etc.)</li>
              <li>Demographic information (such as age, gender, location)</li>
              <li>Your device and browser information</li>
              <li>Usage data about how you interact with our website</li>
              <li>Any other information you provide through form submissions or customer service interactions</li>
            </ul>

            <h2>{t('legal.privacy.usage')}</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide and improve our products and services</li>
              <li>Process orders and transactions</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you information about our products, services, and promotions</li>
              <li>Analyze and improve our website usage and functionality</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>{t('legal.privacy.pdpa')}</h2>
            <p>
              We comply with Thailand's Personal Data Protection Act (PDPA), which governs the collection, use, disclosure, and management of personal data. Under this law, we:
            </p>
            <ul>
              <li>Only collect and process your data when we have a lawful basis to do so</li>
              <li>Inform you about our data collection practices in a transparent manner</li>
              <li>Implement appropriate security measures to protect your data</li>
              <li>Respect your rights to access, correct, and delete your data</li>
              <li>Will not transfer your personal data outside of Thailand without your explicit consent</li>
            </ul>

            <h2>{t('legal.privacy.cookies')}</h2>
            <p>
              Our website uses cookies and similar technologies to improve your browsing experience, analyze site usage, optimize site functionality, and support our marketing efforts. You can control cookies through your browser settings, but this may affect your use of certain features.
            </p>

            <h2>{t('legal.privacy.sharing')}</h2>
            <p>
              We do not sell, rent, or share your personal information except in the following circumstances:
            </p>
            <ul>
              <li>When we have your consent</li>
              <li>With our service providers and business partners who are bound by confidentiality agreements</li>
              <li>To comply with legal processes such as court orders or subpoenas</li>
              <li>To protect our rights, property, or safety, or that of the public</li>
              <li>If our company is merged, acquired, or sold, as part of the transfer of assets</li>
            </ul>

            <h2>{t('legal.privacy.security')}</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against loss or unauthorized access. However, no system for transmitting or storing data over the internet is 100% secure.
            </p>

            <h2>{t('legal.privacy.rights')}</h2>
            <p>
              Under the PDPA, you have the right to:
            </p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Delete your data in certain circumstances</li>
              <li>Restrict or object to specific data processing</li>
              <li>Receive a machine-readable copy of your data (data portability)</li>
              <li>Withdraw any consent you have previously given</li>
              <li>Lodge a complaint with Thailand's Personal Data Protection Committee</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the contact information listed below.
            </p>

            <h2>{t('legal.privacy.changes')}</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post any changes on our website and notify you of significant changes. We encourage you to review this policy periodically to understand how we protect your information.
            </p>

            <h2>{t('legal.privacy.contact')}</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p>
              Email: {t('footer.contact.email')}<br />
              Address: {t('footer.contact.address')}<br />
              Phone: {t('footer.contact.phone')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}