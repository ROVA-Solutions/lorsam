import { ERoute } from '../types';
import type { INavLink } from '../types';

/**
 * Splash screen visible duration in milliseconds.
 * Change this single constant to retune the intro animation length.
 */
export const SPLASH_DURATION_MS = 3000;

/** sessionStorage key used to show the splash only once per browser session. */
export const SPLASH_SESSION_KEY = 'lorsam:splash-seen';

/** Canonical site origin, used for canonical URLs, JSON-LD `@id`s and Open Graph tags. */
export const SITE_URL = 'https://www.lorsam.com';

/** Default Open Graph share image (served from `/public`, mirrors the hero photograph). */
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.webp`;

/** Intrinsic dimensions and MIME type of {@link DEFAULT_OG_IMAGE}, required by Facebook/X scrapers. */
export const OG_IMAGE = {
  width: 1920,
  height: 1072,
  type: 'image/webp',
  alt: 'LORSAM - Climatización y refrigeración industrial HVAC/R en Monterrey, Nuevo León',
} as const;

/** Absolute URL of the brand mark referenced by `Organization.logo`. */
export const LOGO_URL = `${SITE_URL}/favicon.svg`;

/** Approximate coordinates of the Santa Catarina, Nuevo León service base. */
export const GEO_COORDINATES = {
  latitude: 25.6766,
  longitude: -100.4633,
} as const;

/** Stable `@id` anchors so every JSON-LD node can cross-reference the same entity. */
export const SCHEMA_ID = {
  website: `${SITE_URL}/#website`,
  organization: `${SITE_URL}/#organization`,
  logo: `${SITE_URL}/#logo`,
} as const;

/** Global site metadata defaults. */
export const SITE = {
  name: 'LORSAM',
  legalName: 'Multi Servicios y Climas Lorsam SA de CV',
  /** Open Graph locale format (underscore). */
  locale: 'es_MX',
  /** BCP 47 language tag used by schema.org `inLanguage` and `<html lang>`. */
  language: 'es-MX',
  defaultTitle: 'LORSAM | Climatización y Refrigeración Industrial HVAC/R en Monterrey y México',
  defaultDescription:
    'LORSAM: climatización y refrigeración industrial HVAC/R en Monterrey, Santa Catarina y toda la República Mexicana. Sistemas VRF/TVR, chillers, cuartos fríos, ventilación y pólizas de mantenimiento. +40 años de experiencia.',
} as const;

/** Brand name variants, used by `alternateName` in the JSON-LD graph. */
export const BRAND_ALTERNATE_NAMES = [
  'Climas LORSAM',
  'Lorsam Climas',
  'Multi Servicios y Climas Lorsam',
  'Climas y Refrigeración del Valle',
  'Refri-Valle',
  'Servicios Generales y Aire Acondicionado',
] as const;

/**
 * Geographic markets the business actively serves, used by `areaServed`.
 * Each entry carries its Wikidata URI so the JSON-LD resolves to a formal
 * entity instead of a bare string, letting Google disambiguate the locality.
 */
export const AREAS_SERVED = [
  { name: 'Santa Catarina', wikidata: 'https://www.wikidata.org/wiki/Q1008272' },
  { name: 'Monterrey', wikidata: 'https://www.wikidata.org/wiki/Q81033' },
  { name: 'San Pedro Garza García', wikidata: 'https://www.wikidata.org/wiki/Q1018195' },
  { name: 'San Nicolás de los Garza', wikidata: 'https://www.wikidata.org/wiki/Q984409' },
  { name: 'Apodaca', wikidata: 'https://www.wikidata.org/wiki/Q618774' },
  { name: 'General Escobedo', wikidata: 'https://www.wikidata.org/wiki/Q1816911' },
  { name: 'Guadalupe', wikidata: 'https://www.wikidata.org/wiki/Q852697' },
  { name: 'García', wikidata: 'https://www.wikidata.org/wiki/Q2013897' },
  { name: 'Nuevo León', wikidata: 'https://www.wikidata.org/wiki/Q15282' },
  { name: 'República Mexicana', wikidata: 'https://www.wikidata.org/wiki/Q96' },
] as const;

/**
 * Technical domains the organisation is an authority on, used by `knowsAbout`.
 * Bound to Wikidata entities for semantic entity resolution.
 */
export const KNOWS_ABOUT = [
  { name: 'HVAC', wikidata: 'https://www.wikidata.org/wiki/Q200257' },
  { name: 'Aire acondicionado', wikidata: 'https://www.wikidata.org/wiki/Q132353' },
  { name: 'Refrigeración industrial', wikidata: 'https://www.wikidata.org/wiki/Q1131908' },
  { name: 'Chiller', wikidata: 'https://www.wikidata.org/wiki/Q925501' },
  { name: 'Variable Refrigerant Flow', wikidata: 'https://www.wikidata.org/wiki/Q21187498' },
  { name: 'Cámara frigorífica', wikidata: 'https://www.wikidata.org/wiki/Q1143896' },
  { name: 'Ventilación', wikidata: 'https://www.wikidata.org/wiki/Q192931' },
] as const;

/** Radius in metres of the `GeoCircle` covering the Monterrey metropolitan area. */
export const SERVICE_RADIUS_METERS = 50000;

/**
 * CSS selector marking the passage voice assistants may read aloud.
 * Limited to `h1`, the one element guaranteed present and unchanged on every route.
 */
export const SPEAKABLE_SELECTORS = ['h1'] as const;

/** Primary navigation, in funnel order. */
export const NAV_LINKS: INavLink[] = [
  { label: 'Inicio', to: ERoute.Home },
  { label: 'Servicios', to: ERoute.Servicios },
  { label: 'Historia', to: ERoute.Historia },
  { label: 'Clientes', to: ERoute.Clientes },
  { label: 'Contacto', to: ERoute.Contacto },
];

/** Country calling code for building international WhatsApp / tel links (Mexico). */
export const COUNTRY_CODE = '52';
