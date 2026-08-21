import { ERoute } from '../types';
import type { ISeoMeta } from '../types';

/**
 * Exact-match brand variants. Kept first in every keyword list so the brand
 * cluster is the strongest signal on every indexable page.
 */
const BRAND_KEYWORDS = [
  'lorsam',
  'climas lorsam',
  'lorsam climas',
  'multi servicios y climas lorsam',
  'lorsam monterrey',
  'climatizacion lorsam',
  'lorsam hvac',
  'lorsam santa catarina',
];

/** Core service + geography terms shared by every route. */
const CORE_KEYWORDS = [
  'HVAC',
  'HVAC/R',
  'climatización industrial monterrey',
  'refrigeración industrial santa catarina',
  'aire acondicionado industrial monterrey',
  'sistemas vrf monterrey',
  'VRF',
  'TVR',
  'Monterrey',
  'Nuevo León',
  'Santa Catarina',
];

/**
 * Compose a route keyword list: brand variants first, then shared core terms,
 * then route-specific long-tail. Duplicates are collapsed.
 * @param specific Long-tail terms unique to the route.
 * @returns Deduplicated keyword list.
 */
function keywords(specific: readonly string[]): string[] {
  return [...new Set([...BRAND_KEYWORDS, ...CORE_KEYWORDS, ...specific])];
}

/**
 * Per-route SEO metadata. Consumed by the `<Seo>` component to emit the
 * document title, description, canonical URL, robots directive and social tags.
 *
 * Titles follow `[intención / servicio] · [ubicación / propuesta] | LORSAM`
 * and are used verbatim — no template is applied downstream.
 */
export const SEO_BY_ROUTE: Record<ERoute, ISeoMeta> = {
  [ERoute.Home]: {
    path: ERoute.Home,
    title: 'LORSAM | Climatización y Refrigeración Industrial HVAC/R en Monterrey y México',
    description:
      'LORSAM (Multi Servicios y Climas Lorsam): climatización y refrigeración industrial HVAC/R en Monterrey y toda la República Mexicana. Sistemas VRF/TVR, chillers, cuartos fríos y pólizas de mantenimiento. +40 años y +500 unidades instaladas.',
    breadcrumbLabel: 'Inicio',
    keywords: keywords([
      'climatizacion industrial monterrey',
      'refrigeracion industrial monterrey',
      'empresa de climas en monterrey',
      'ingeniería HVAC nuevo león',
      'eficiencia energética HVAC',
    ]),
  },
  [ERoute.Servicios]: {
    path: ERoute.Servicios,
    title: 'Servicios HVAC/R · VRF, Chillers y Mantenimiento Industrial | LORSAM',
    description:
      'Ingeniería, instalación, mantenimiento preventivo y correctivo de sistemas HVAC/R: VRF/TVR, chillers, torres de enfriamiento, cuartos fríos, ductería y ventilación industrial. Pólizas de mantenimiento en Monterrey y Nuevo León.',
    breadcrumbLabel: 'Servicios',
    keywords: keywords([
      'mantenimiento de chillers',
      'cuartos frios monterrey',
      'polizas mantenimiento hvac',
      'torres de enfriamiento monterrey',
      'ventilación industrial monterrey',
      'instalación de minisplit industrial',
      'mantenimiento preventivo aire acondicionado industrial',
    ]),
  },
  [ERoute.Historia]: {
    path: ERoute.Historia,
    title: 'Nuestra Historia · +40 Años en Climatización y Refrigeración | LORSAM',
    description:
      'De Climas y Refrigeración del Valle (1982) a Multi Servicios y Climas Lorsam SA de CV: cuatro décadas de evolución técnica en climatización y refrigeración industrial, líderes regionales del sector HVAC/R en Nuevo León.',
    breadcrumbLabel: 'Historia',
    keywords: keywords([
      'historia lorsam',
      'climas y refrigeración del valle',
      'empresa hvac fundada en 1982',
      'trayectoria climatización nuevo león',
    ]),
  },
  [ERoute.Clientes]: {
    path: ERoute.Clientes,
    title: 'Clientes y Proyectos HVAC/R en México · Hospitales, Industria y Edificios | LORSAM',
    description:
      'Proyectos HVAC/R de misión crítica para IMSS, CFE, LG Industrial Systems, torres corporativas, data centers y cadena de frío. Más de 500 unidades instaladas en la República Mexicana.',
    breadcrumbLabel: 'Clientes',
    keywords: keywords([
      'proyectos hvac hospitales monterrey',
      'climatización data center monterrey',
      'climatización torres corporativas',
      'hvac industrial nuevo león',
      'cadena de frío monterrey',
    ]),
  },
  [ERoute.Contacto]: {
    path: ERoute.Contacto,
    title: 'Cotiza tu Proyecto HVAC/R · Climas LORSAM Santa Catarina | LORSAM',
    description:
      'Contacta a LORSAM por teléfono, WhatsApp o correo para cotizar tu proyecto de climatización o refrigeración industrial. Base de operaciones en Santa Catarina, Nuevo León; cobertura en toda la República Mexicana.',
    breadcrumbLabel: 'Contacto',
    keywords: keywords([
      'cotizar aire acondicionado industrial monterrey',
      'telefono climas lorsam',
      'contacto lorsam',
      'servicio hvac santa catarina',
      'presupuesto climatización industrial',
    ]),
  },
};

/** SEO metadata for the 404 route: descriptive but explicitly de-indexed. */
export const SEO_NOT_FOUND: ISeoMeta = {
  path: ERoute.Home,
  title: 'Página no encontrada | LORSAM',
  description:
    'La página que buscas no existe o fue movida. Regresa al inicio de LORSAM para explorar nuestras soluciones HVAC/R.',
  noindex: true,
};
