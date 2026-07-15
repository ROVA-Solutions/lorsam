import { ERoute } from '../types';
import type { ISeoMeta } from '../types';

const HVAC_KEYWORDS = [
  'HVAC',
  'HVAC/R',
  'climatización',
  'refrigeración industrial',
  'aire acondicionado',
  'VRF',
  'TVR',
  'chillers',
  'cuartos fríos',
  'ventilación industrial',
  'Nuevo León',
  'Monterrey',
];

/**
 * Per-route SEO metadata. Consumed by the `<Seo>` component to emit
 * document title, description, canonical URL and Open Graph tags.
 */
export const SEO_BY_ROUTE: Record<ERoute, ISeoMeta> = {
  [ERoute.Home]: {
    path: ERoute.Home,
    title: 'Soluciones HVAC/R · Climatización y Refrigeración Industrial',
    description:
      'LORSAM: ingeniería, instalación y mantenimiento HVAC/R con tecnología de vanguardia. Sistemas VRF/TVR, chillers, cuartos fríos y climatización de precisión. +40 años de experiencia.',
    keywords: HVAC_KEYWORDS,
  },
  [ERoute.Servicios]: {
    path: ERoute.Servicios,
    title: 'Servicios HVAC/R · Ingeniería, Instalación y Mantenimiento',
    description:
      'Asesoría técnica, ingeniería de proyectos, instalación, mantenimiento preventivo/correctivo y pólizas integrales para sistemas de climatización y refrigeración industrial y comercial.',
    keywords: HVAC_KEYWORDS,
  },
  [ERoute.Historia]: {
    path: ERoute.Historia,
    title: 'Nuestra Historia · Más de 40 años de excelencia térmica',
    description:
      'De Climas y Refrigeración del Valle (1982) a LORSAM: cuatro décadas de evolución técnica en climatización y refrigeración, líderes regionales en el sector HVAC/R.',
    keywords: HVAC_KEYWORDS,
  },
  [ERoute.Clientes]: {
    path: ERoute.Clientes,
    title: 'Clientes · Proyectos de misión crítica en México',
    description:
      'Respaldamos a los sectores salud, industrial, telecomunicaciones, gobierno, hospitalidad y retail con soluciones HVAC/R. Más de 500 unidades instaladas en la República Mexicana.',
    keywords: HVAC_KEYWORDS,
  },
  [ERoute.Contacto]: {
    path: ERoute.Contacto,
    title: 'Contacto · Cotiza tu proyecto de climatización',
    description:
      'Contáctanos por teléfono, WhatsApp o correo. Oficinas en Santa Catarina, Nuevo León. Solicita asesoría y cotización para tu proyecto HVAC/R.',
    keywords: HVAC_KEYWORDS,
  },
};
