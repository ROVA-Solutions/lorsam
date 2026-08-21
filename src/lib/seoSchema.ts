import { lorsamData } from '../data/lorsam';
import { FAQ_BY_ROUTE } from '../data/faq';
import { SEO_BY_ROUTE } from './seoData';
import { digitsOnly } from './format';
import {
  AREAS_SERVED,
  COUNTRY_CODE,
  DEFAULT_OG_IMAGE,
  GEO_COORDINATES,
  LOGO_URL,
  OG_IMAGE,
  SCHEMA_ID,
  SITE,
  SITE_URL,
} from './constants';
import { ERoute } from '../types';
import type { IJsonLdNode, ISeoMeta } from '../types';

/** Service catalog exposed through `Organization.hasOfferCatalog`. */
const SERVICE_CATALOG: ReadonlyArray<{ name: string; description: string }> = [
  {
    name: 'Sistemas VRF / TVR de volumen de refrigerante variable',
    description:
      'Cálculo, ingeniería, instalación y puesta en marcha de sistemas VRF/TVR para edificios corporativos, hospitales y desarrollos verticales, con control independiente por zona y máxima eficiencia energética.',
  },
  {
    name: 'Chillers y sistemas de agua helada',
    description:
      'Instalación, restauración y mantenimiento de chillers de placas y de casco y tubo, manejadoras de expansión directa, fan & coils y torres de enfriamiento industrial.',
  },
  {
    name: 'Mantenimiento preventivo y correctivo HVAC/R',
    description:
      'Programas de mantenimiento preventivo y atención correctiva con tiempos de respuesta rápidos para climatización, refrigeración y ventilación industrial y comercial.',
  },
  {
    name: 'Pólizas de mantenimiento integral',
    description:
      'Pólizas personalizadas que cubren inspecciones programadas, reportes técnicos, gestión de reparaciones y suministro de refacciones para equipos críticos.',
  },
  {
    name: 'Cuartos fríos y refrigeración especializada',
    description:
      'Diseño, instalación y mantenimiento de cuartos fríos de conservación y cámaras de congelación con control preciso de temperatura y humedad para cadena de frío.',
  },
  {
    name: 'Ventilación, inyección y extracción industrial',
    description:
      'Ingeniería de redes de ductería, espiroductos, difusores y compuertas para eliminar contaminantes, controlar temperaturas extremas y cumplir normas de seguridad operativa.',
  },
  {
    name: 'Climatización comercial y corporativa',
    description:
      'Minisplits, multi splits, sistemas divididos, unidades paquete y equipos tipo cassette para comercios, oficinas y desarrollos residenciales premium.',
  },
  {
    name: 'Ingeniería y desarrollo de proyectos HVAC',
    description:
      'Asesoría técnica, cálculo de carga térmica, diseño conceptual y dirección de obra para proyectos de climatización de cualquier magnitud.',
  },
];

/** Ordered route list used to derive breadcrumb trails. */
const BREADCRUMB_ROUTES: readonly ERoute[] = [
  ERoute.Home,
  ERoute.Servicios,
  ERoute.Historia,
  ERoute.Clientes,
  ERoute.Contacto,
];

/**
 * Build the absolute canonical URL for a route.
 * @param path Route path (`/`, `/servicios`, …).
 * @returns Absolute URL, with the home route keeping its trailing slash.
 */
export function canonicalUrl(path: string): string {
  return path === ERoute.Home ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

/**
 * Resolve the SEO metadata registered for a pathname.
 * @param pathname Current location pathname.
 * @returns Route metadata, or `undefined` for unregistered paths (404).
 */
function metaForPath(pathname: string): ISeoMeta | undefined {
  const normalized = pathname !== ERoute.Home && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  return BREADCRUMB_ROUTES.map((route) => SEO_BY_ROUTE[route]).find((meta) => meta.path === normalized);
}

/** All contact numbers normalised to E.164 (`+52…`). */
function e164Phones(): { office: string[]; whatsapp: string[] } {
  const { contact } = lorsamData;
  return {
    office: contact.office.map((phone) => `+${COUNTRY_CODE}${digitsOnly(phone)}`),
    whatsapp: contact.whatsapp.map((phone) => `+${COUNTRY_CODE}${digitsOnly(phone)}`),
  };
}

/** `PostalAddress` node, omitting fields the business has not published. */
function postalAddress(): IJsonLdNode {
  const { address } = lorsamData.contact;
  const node: IJsonLdNode = {
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.state,
    addressCountry: address.countryCode,
  };
  if (address.postalCode) node.postalCode = address.postalCode;
  return node;
}

/** The `WebSite` entity anchoring the domain in the Knowledge Graph. */
function websiteNode(): IJsonLdNode {
  return {
    '@type': 'WebSite',
    '@id': SCHEMA_ID.website,
    url: `${SITE_URL}/`,
    name: SITE.name,
    alternateName: [SITE.legalName, 'Climas LORSAM', 'Lorsam Climas'],
    description: SITE.defaultDescription,
    inLanguage: SITE.language,
    publisher: { '@id': SCHEMA_ID.organization },
  };
}

/** The `ImageObject` reused as the organisation logo. */
function logoNode(): IJsonLdNode {
  return {
    '@type': 'ImageObject',
    '@id': SCHEMA_ID.logo,
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 64,
    height: 64,
    caption: `${SITE.name} — ${lorsamData.company.slogan}`,
  };
}

/**
 * The corporate entity, typed simultaneously as `HVACBusiness`, `LocalBusiness`
 * and `Organization` so it satisfies both local-pack and knowledge-panel parsing.
 */
function organizationNode(): IJsonLdNode {
  const { company, contact, mission } = lorsamData;
  const { office, whatsapp } = e164Phones();

  return {
    '@type': ['HVACBusiness', 'LocalBusiness', 'Organization'],
    '@id': SCHEMA_ID.organization,
    name: SITE.name,
    legalName: company.legalName,
    alternateName: ['Climas LORSAM', 'Lorsam Climas', 'Multi Servicios y Climas Lorsam'],
    description: mission,
    slogan: company.slogan,
    url: SITE_URL,
    logo: { '@id': SCHEMA_ID.logo },
    image: [DEFAULT_OG_IMAGE, LOGO_URL],
    foundingDate: String(company.foundedYear),
    foundingLocation: {
      '@type': 'Place',
      name: 'Santa Catarina, Nuevo León, México',
    },
    priceRange: '$$$',
    currenciesAccepted: 'MXN',
    telephone: office[0],
    email: contact.emails[0],
    address: postalAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO_COORDINATES.latitude,
      longitude: GEO_COORDINATES.longitude,
    },
    areaServed: AREAS_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
    knowsLanguage: ['es-MX', 'es'],
    knowsAbout: [
      'Climatización industrial',
      'Refrigeración industrial',
      'Sistemas VRF y TVR',
      'Chillers y agua helada',
      'Cuartos fríos y cadena de frío',
      'Ventilación y extracción industrial',
      'Eficiencia energética HVAC',
    ],
    sameAs: [contact.facebook],
    contactPoint: [
      ...office.map((telephone) => ({
        '@type': 'ContactPoint',
        telephone,
        contactType: 'customer service',
        areaServed: 'MX',
        availableLanguage: ['es-MX'],
      })),
      ...whatsapp.map((telephone) => ({
        '@type': 'ContactPoint',
        telephone,
        contactType: 'sales',
        areaServed: 'MX',
        availableLanguage: ['es-MX'],
      })),
      ...contact.emails.map((email) => ({
        '@type': 'ContactPoint',
        email,
        contactType: 'customer service',
        areaServed: 'MX',
        availableLanguage: ['es-MX'],
      })),
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios HVAC/R LORSAM',
      itemListElement: SERVICE_CATALOG.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          serviceType: service.name,
          provider: { '@id': SCHEMA_ID.organization },
          areaServed: AREAS_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
        },
      })),
    },
  };
}

/**
 * Breadcrumb trail for a route: always `Inicio` first, then the route itself.
 * @param meta Route metadata.
 * @returns `BreadcrumbList` node.
 */
function breadcrumbNode(meta: ISeoMeta): IJsonLdNode {
  const home = SEO_BY_ROUTE[ERoute.Home];
  const trail = meta.path === ERoute.Home ? [home] : [home, meta];

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl(meta.path)}#breadcrumb`,
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.breadcrumbLabel ?? item.title,
      item: canonicalUrl(item.path),
    })),
  };
}

/** The `WebPage` node binding the current URL to the site and the organisation. */
function webPageNode(meta: ISeoMeta): IJsonLdNode {
  const url = canonicalUrl(meta.path);
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: meta.title,
    description: meta.description,
    inLanguage: SITE.language,
    isPartOf: { '@id': SCHEMA_ID.website },
    about: { '@id': SCHEMA_ID.organization },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: meta.image ?? DEFAULT_OG_IMAGE,
      width: OG_IMAGE.width,
      height: OG_IMAGE.height,
    },
  };
}

/**
 * `FAQPage` node for routes that render a visible FAQ block.
 * @param meta Route metadata.
 * @returns The node, or `undefined` when the route has no FAQ.
 */
function faqNode(meta: ISeoMeta): IJsonLdNode | undefined {
  const items = FAQ_BY_ROUTE[meta.path];
  if (!items?.length) return undefined;

  const url = canonicalUrl(meta.path);
  return {
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: SITE.language,
    isPartOf: { '@id': SCHEMA_ID.website },
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Build the full schema.org `@graph` for a route: `WebSite`, the multi-typed
 * organisation, its logo, the current `WebPage`, its `BreadcrumbList` and —
 * where applicable — the route `FAQPage`.
 *
 * Unregistered paths (the 404 route) receive only the site-level entities:
 * emitting a `WebPage` for a URL that must stay out of the index would
 * contradict its `noindex` directive and risk a soft-404 classification.
 *
 * @param pathname Current location pathname.
 * @returns A single JSON-LD document ready to serialise.
 */
export function buildStructuredData(pathname: string): IJsonLdNode {
  const nodes: IJsonLdNode[] = [websiteNode(), logoNode(), organizationNode()];
  const meta = metaForPath(pathname);

  if (meta) {
    nodes.push(webPageNode(meta), breadcrumbNode(meta));
    const faq = faqNode(meta);
    if (faq) nodes.push(faq);
  }

  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
