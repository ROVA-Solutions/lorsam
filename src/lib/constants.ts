import { ERoute } from '../types';
import type { INavLink } from '../types';

/**
 * Splash screen visible duration in milliseconds.
 * Change this single constant to retune the intro animation length.
 */
export const SPLASH_DURATION_MS = 4000;

/** sessionStorage key used to show the splash only once per browser session. */
export const SPLASH_SESSION_KEY = 'lorsam:splash-seen';

/** Canonical site origin, used for canonical URLs and Open Graph tags. */
export const SITE_URL = 'https://www.lorsam.com';

/** Default Open Graph share image (industry placeholder; replace with branded asset). */
export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop';

/** Global site metadata defaults. */
export const SITE = {
  name: 'LORSAM',
  legalName: 'Multi Servicios y Climas Lorsam SA de CV',
  locale: 'es_MX',
  titleTemplate: '%s | LORSAM',
  defaultTitle: 'LORSAM | Soluciones HVAC/R · Climatización y Refrigeración Industrial',
  defaultDescription:
    'LORSAM: soluciones integrales HVAC/R en climatización, refrigeración, ventilación e ingeniería VRF/TVR para los sectores industrial, comercial y corporativo. Más de 40 años de experiencia.',
} as const;

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
