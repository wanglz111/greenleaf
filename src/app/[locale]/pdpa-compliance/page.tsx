'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function PDPACompliance() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-forest-green text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('footer.legal.pdpa')}
          </h1>
          <p className="text-lg">
            Last Updated: March 1, 2025
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Thailand Personal Data Protection Act (PDPA) Compliance</h2>
            <p>
              At Gleaftex, we are committed to protecting your personal data and complying with Thailand's Personal Data Protection Act B.E. 2562 (2019) ("PDPA"). This document outlines how we adhere to the PDPA requirements and respect your data protection rights.
            </p>

            <h2>1. Data Controller Information</h2>
            <p>
              Gleaftex Co., Ltd. acts as the data controller for personal information collected through our website, in-store interactions, and other business operations. Our Data Protection Officer can be contacted at:
            </p>
            <p>
              Email: dpo@gleaftex.com<br />
              Address: {t('footer.contact.address')}<br />
              Phone: {t('footer.contact.phone')}
            </p>

            <h2>2. Legal Basis for Processing</h2>
            <p>
              We process your personal data only when we have a lawful basis for doing so under the PDPA. The legal bases we rely on include:
            </p>
            <ul>
              <li><strong>Consent:</strong> When you have given explicit consent for processing your data for specific purposes</li>
              <li><strong>Contractual Necessity:</strong> When processing is necessary to fulfill a contract with you</li>
              <li><strong>Legal Obligation:</strong> When processing is required to comply with our legal obligations</li>
              <li><strong>Legitimate Interests:</strong> When processing is necessary for our legitimate interests or those of a third party</li>
              <li><strong>Vital Interests:</strong> When processing is necessary to protect someone's life</li>
              <li><strong>Public Interest:</strong> When processing is necessary for performing a task in the public interest</li>
            </ul>

            <h2>3. Collection of Personal Data</h2>
            <p>
              We collect personal data directly from you when you:
            </p>
            <ul>
              <li>Create an account on our website</li>
              <li>Make a purchase online or in our stores</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in surveys or promotional activities</li>
              <li>Apply for employment with us</li>
            </ul>
            <p>
              We collect only the personal data that is necessary and relevant for the purposes for which it is being processed.
            </p>

            <h2>4. Rights of Data Subjects</h2>
            <p>
              Under the PDPA, you have the following rights regarding your personal data:
            </p>
            <ul>
              <li><strong>Right to Be Informed:</strong> You have the right to be informed about the collection and use of your personal data</li>
              <li><strong>Right to Access:</strong> You have the right to request access to your personal data</li>
              <li><strong>Right to Rectification:</strong> You have the right to have inaccurate personal data corrected</li>
              <li><strong>Right to Erasure:</strong> You have the right to request the deletion of your personal data in certain circumstances</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request the restriction of processing your personal data</li>
              <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used format</li>
              <li><strong>Right to Object:</strong> You have the right to object to the processing of your personal data</li>
              <li><strong>Rights Related to Automated Decision-Making:</strong> You have rights related to automated decision-making and profiling</li>
            </ul>
            <p>
              To exercise any of these rights, please contact our Data Protection Officer using the contact information provided above.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Different types of personal data may be kept for different periods of time depending on the purpose for which they were collected.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul>
              <li>Encryption of personal data where appropriate</li>
              <li>Regular security assessments and testing</li>
              <li>Staff training on data protection</li>
              <li>Access controls to personal data</li>
              <li>Processes for regularly testing, assessing, and evaluating the effectiveness of security measures</li>
            </ul>

            <h2>7. Data Breach Notification</h2>
            <p>
              In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will notify both the relevant supervisory authority and you as a data subject without undue delay, as required by the PDPA.
            </p>

            <h2>8. International Data Transfers</h2>
            <p>
              If we transfer your personal data to countries outside of Thailand, we ensure that adequate safeguards are in place to protect your data in accordance with the PDPA. These may include transferring data to countries that have been deemed to provide an adequate level of protection by the Personal Data Protection Committee or using specific contracts approved by Thai authorities.
            </p>

            <h2>9. Changes to This Statement</h2>
            <p>
              We may update this PDPA Compliance Statement from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this statement periodically to stay informed about how we are protecting your information.
            </p>

            <h2>10. Contact and Complaints</h2>
            <p>
              If you have any questions about our PDPA compliance or wish to make a complaint, please contact our Data Protection Officer at dpo@gleaftex.com. You also have the right to lodge a complaint with the Thailand Personal Data Protection Committee if you believe that we have violated your data protection rights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}