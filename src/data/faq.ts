import { ERoute } from '../types';
import type { IFaqItem } from '../types';

/**
 * Route-scoped FAQ content. Every entry is rendered on-page by `<FaqSection>`
 * and mirrored into `FAQPage` JSON-LD — Google only awards the rich result when
 * the same question and answer text is visible to the user.
 */
export const FAQ_BY_ROUTE: Partial<Record<ERoute, IFaqItem[]>> = {
  [ERoute.Servicios]: [
    {
      question: '¿Qué incluye una póliza de mantenimiento HVAC de LORSAM?',
      answer:
        'Nuestras pólizas de mantenimiento HVAC incluyen inspecciones programadas, limpieza de serpentines y filtros, medición de parámetros eléctricos y de refrigerante, ajuste de controles, reporte técnico por visita y gestión de reparaciones y refacciones. Cada póliza se dimensiona según el número de equipos, su criticidad y el nivel de disponibilidad que requiere tu operación.',
    },
    {
      question: '¿Realizan mantenimiento de chillers y torres de enfriamiento industriales?',
      answer:
        'Sí. Damos mantenimiento preventivo y correctivo a chillers de placas y de casco y tubo, manejadoras de expansión directa, fan & coils y torres de enfriamiento industrial. El servicio abarca análisis de eficiencia térmica, limpieza y restauración de intercambiadores, balanceo hidráulico y cálculo de capacidad cuando se requiere repotenciar el sistema.',
    },
    {
      question: '¿Qué ventajas tiene un sistema VRF o TVR frente a equipos convencionales?',
      answer:
        'Un sistema VRF/TVR (volumen de refrigerante variable) controla la temperatura de cada zona de forma independiente desde un solo circuito, lo que reduce el consumo eléctrico en cargas parciales, elimina la necesidad de múltiples condensadoras y simplifica la instalación en edificios verticales. En LORSAM realizamos el cálculo, la ingeniería y la instalación completa con software especializado y ductería fabricada a la medida.',
    },
    {
      question: '¿Diseñan e instalan cuartos fríos y cámaras de congelación?',
      answer:
        'Sí. Desarrollamos proyectos integrales de refrigeración especializada: cuartos fríos de conservación, cámaras de congelación y control preciso de temperatura y humedad para productos alimenticios, médicos y logísticos, incluyendo aislamiento, equipo de refrigeración, controles y puesta en marcha.',
    },
    {
      question: '¿En qué zonas prestan servicio de climatización industrial?',
      answer:
        'Operamos desde Santa Catarina, Nuevo León, con atención directa en Monterrey y su área metropolitana —incluidos San Pedro Garza García, General Escobedo y Apodaca— y capacidad logística para ejecutar proyectos en toda la República Mexicana, donde hemos instalado más de 500 unidades.',
    },
  ],
  [ERoute.Contacto]: [
    {
      question: '¿Cómo solicito una cotización de climatización o refrigeración industrial?',
      answer:
        'Puedes escribirnos por WhatsApp, llamar a nuestros teléfonos de oficina o enviarnos un correo. Para cotizar con precisión conviene compartir el tipo y la cantidad de equipos, la ubicación del proyecto, la carga térmica estimada o los planos disponibles, y si necesitas instalación, mantenimiento o una póliza.',
    },
    {
      question: '¿La cotización y la asesoría técnica tienen costo?',
      answer:
        'No. La asesoría técnica inicial y la cotización de tu proyecto HVAC/R son sin compromiso. Evaluamos tu requerimiento, proponemos la solución más eficiente en consumo energético y te entregamos el alcance y el presupuesto por escrito.',
    },
    {
      question: '¿Atienden emergencias y mantenimiento correctivo urgente?',
      answer:
        'Sí. Contamos con programas de mantenimiento correctivo con tiempos de respuesta rápidos para que tu operación no se detenga. Los clientes con póliza vigente reciben atención prioritaria en fallas de equipos críticos como chillers, cuartos fríos y climatización de precisión.',
    },
    {
      question: '¿Dónde se ubica LORSAM?',
      answer:
        'Nuestra base de operaciones está en Santa Catarina, Nuevo León, sobre la Avenida Luis Donaldo Colosio, dentro del área metropolitana de Monterrey.',
    },
  ],
};
