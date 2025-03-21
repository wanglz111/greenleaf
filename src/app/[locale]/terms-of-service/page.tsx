'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

// 服务条款页面
export default function TermsOfService() {
  // 获取翻译函数
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      {/* 主标题 */}
      <section className="bg-forest-green text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('legal.terms.title')}
          </h1>
          <p className="text-lg">
            {t('legal.terms.lastUpdated')}: March 1, 2025
          </p>
        </div>
      </section>

      {/* 服务条款内容 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>{t('legal.terms.acceptance')}</h2>
            <p>
              Welcome to the Gleaftex website. These terms and conditions outline the rules and regulations for the use of our website. By accessing this site, we assume you accept these terms and conditions. Do not continue to use Gleaftex if you do not agree to all the terms and conditions stated on this page.
            </p>

            <h2>{t('legal.terms.license')}</h2>
            <p>
              Gleaftex grants you a personal, non-exclusive, non-transferable license to access and use the website solely for viewing product information and making purchases. This license does not allow you to:
            </p>
            <ul>
              <li>Modify or copy our materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              Violating any of these restrictions will result in the automatic termination of this license, and Gleaftex may terminate this license at any time. Upon termination of your viewing of these materials or upon termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
            </p>

            <h2>{t('legal.terms.disclaimer')}</h2>
            <p>
              The materials on Gleaftex's website are provided on an 'as is' basis. Gleaftex makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p>
              Further, Gleaftex does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any websites linked to this site.
            </p>

            <h2>{t('legal.terms.productInfo')}</h2>
            <p>
              We strive to ensure all information on our website, including product descriptions, specifications, dimensions, images, prices, and availability, is up-to-date and accurate. However, Gleaftex does not guarantee the accuracy, completeness, or currency of information displayed on the website.
            </p>
            <p>
              We reserve the right to change product details, prices, and availability without notice. All sales are subject to availability and acknowledgment. If a purchased product is unavailable when your order is received, we will notify you promptly and offer a refund or alternative product option.
            </p>

            <h2>{t('legal.terms.intellectual')}</h2>
            <p>
              All content on the website, including but not limited to text, graphics, logos, images, button icons, downloadable digital files, data compilations, and software, is the property of Gleaftex and its content providers and is protected by Thai and international copyright laws.
            </p>
            <p>
              The reproduction, republication, uploading, posting, transmitting, or distributing of any material in any way is prohibited without the express written permission of Gleaftex (unless allowed by the functionality of the website).
            </p>

            <h2>{t('legal.terms.thirdParty')}</h2>
            <p>
              The Gleaftex website may contain links to other websites owned or operated by third parties. Gleaftex has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites.
            </p>
            <p>
              We strongly advise you to read the terms and conditions and privacy policies of any third-party websites that you visit.
            </p>

            <h2>{t('legal.terms.applicable')}</h2>
            <p>
              Use of this website and any claims or disputes arising out of such use are governed by the laws of Thailand, without regard to its conflict of law provisions.
            </p>

            <h2>{t('legal.terms.changes')}</h2>
            <p>
              Gleaftex may revise these terms of service at any time without notice. By continuing to use this website, you are deemed to accept such revised terms.
            </p>

            <h2>{t('legal.terms.contact')}</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
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