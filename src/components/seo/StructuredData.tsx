import { lorsamData } from '../../data/lorsam';
import { SITE, SITE_URL, COUNTRY_CODE } from '../../lib/constants';
import { digitsOnly } from '../../lib/format';

/**
 * Emits schema.org `LocalBusiness` JSON-LD for rich results and local SEO.
 * Rendered once at the layout level. Search engines parse JSON-LD anywhere
 * in the document, so inline placement is valid.
 */
export function StructuredData(): React.JSX.Element {
  const { company, contact } = lorsamData;
  const phones = [...contact.office, ...contact.whatsapp].map((p) => `+${COUNTRY_CODE}${digitsOnly(p)}`);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    name: SITE.name,
    legalName: company.legalName,
    slogan: company.slogan,
    description: SITE.defaultDescription,
    url: SITE_URL,
    foundingDate: String(company.foundedYear),
    telephone: phones[0],
    email: contact.email,
    sameAs: [contact.facebook],
    areaServed: company.regionsCovered,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      addressCountry: 'MX',
    },
    contactPoint: phones.map((tel) => ({
      '@type': 'ContactPoint',
      telephone: tel,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text; content is fully derived from local data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
