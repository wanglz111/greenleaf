'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TISCertification() {
  const t = useTranslations();

  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-forest-green text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('footer.legal.tis')}
          </h1>
          <p className="text-lg">
            Last Updated: March 1, 2025
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Thai Industrial Standards (TIS) Certification</h2>
            <p>
              At Gleaftex, we are proud to adhere to the Thai Industrial Standards (TIS) established by the Thai Industrial Standards Institute (TISI). This commitment ensures that our textile products meet the highest quality and safety standards recognized in Thailand and throughout the ASEAN region.
            </p>

            <h2>What is TIS Certification?</h2>
            <p>
              The Thai Industrial Standards Institute (TISI) is Thailand's national standards body responsible for developing and promoting industrial standards. TIS certification is a mark of quality that indicates products conform to the standards established by TISI, ensuring they meet specific requirements for safety, quality, and performance.
            </p>

            <h2>Our TIS Certifications</h2>
            <p>
              Gleaftex has obtained the following TIS certifications for our textile products:
            </p>
            <ul>
              <li><strong>TIS 121-2553 (2010):</strong> Standard for Cotton Fabrics</li>
              <li><strong>TIS 2509-2553 (2010):</strong> Standard for Textile Eco-Labels</li>
              <li><strong>TIS 2346-2550 (2007):</strong> Standard for Eco-Friendly Textile Products</li>
              <li><strong>TIS 2505-2553 (2010):</strong> Standard for Recycled Polyester Fabrics</li>
            </ul>

            <h2>Benefits of TIS Certification</h2>
            <p>
              Our adherence to TIS standards provides several benefits to our customers:
            </p>
            <ul>
              <li><strong>Quality Assurance:</strong> Products meet established quality standards</li>
              <li><strong>Safety:</strong> Products are tested for safety and environmental compliance</li>
              <li><strong>Sustainability:</strong> Standards include eco-friendly production processes</li>
              <li><strong>Regulatory Compliance:</strong> Products meet Thai regulatory requirements</li>
              <li><strong>Regional Recognition:</strong> TIS is recognized throughout the ASEAN region</li>
            </ul>

            <h2>TIS Certification Process</h2>
            <p>
              To obtain and maintain our TIS certifications, Gleaftex undergoes a rigorous process that includes:
            </p>
            <ol>
              <li><strong>Documentation Review:</strong> TISI examines our production processes and quality management systems</li>
              <li><strong>Factory Inspection:</strong> Our manufacturing facilities are inspected to ensure compliance with standards</li>
              <li><strong>Product Testing:</strong> Our textile products are tested by TISI-accredited laboratories</li>
              <li><strong>Certification Issuance:</strong> Upon successful completion of all requirements, TISI issues the certification</li>
              <li><strong>Regular Surveillance:</strong> Our facilities and products undergo periodic inspections to maintain certification</li>
            </ol>

            <h2>Environmental Standards</h2>
            <p>
              TIS certification includes environmental standards that align with our commitment to sustainability. These standards cover:
            </p>
            <ul>
              <li>Reduced use of hazardous chemicals in production</li>
              <li>Energy efficiency in manufacturing processes</li>
              <li>Water conservation and wastewater management</li>
              <li>Waste reduction and responsible disposal</li>
              <li>Sustainable sourcing of raw materials</li>
            </ul>

            <h2>Verification of Our Certification</h2>
            <p>
              Customers can verify the authenticity of our TIS certification by:
            </p>
            <ul>
              <li>Checking the TIS mark on our product labels and packaging</li>
              <li>Requesting our certification documentation</li>
              <li>Contacting TISI directly to verify our certification status</li>
            </ul>

            <h2>Our Commitment to Standards</h2>
            <p>
              Gleaftex is committed to maintaining and exceeding the requirements of our TIS certifications. We continuously improve our processes, invest in new technologies, and train our staff to ensure compliance with these important standards.
            </p>

            <h2>Contact Information</h2>
            <p>
              For more information about our TIS certifications or to request verification documentation, please contact us:
            </p>
            <p>
              Email: quality@gleaftex.com<br />
              Address: {t('footer.contact.address')}<br />
              Phone: {t('footer.contact.phone')}
            </p>

            <div className="mt-8 border-t pt-8">
              <p className="text-sm text-gray-600">
                Note: The TIS certification and all related marks are the property of the Thai Industrial Standards Institute. The TIS mark may only be used by organizations that have received official certification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}