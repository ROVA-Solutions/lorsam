import { Seo } from '../components/seo/Seo';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { lorsamData } from '../data/lorsam';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { ContactoCTA } from '../components/sections/ContactoCTA';
import { ERoute } from '../types';
import serviciosImage from '../assets/servicios.webp';
import asesoriaTecnicaImage from '../assets/asesoria_tecnica.webp';
import ingenieriaDesarrolloImage from '../assets/ingenieria_desarrollo.webp';
import instalacionPuestaMarchaImage from '../assets/instalacion_puesta_marcha.webp';
import mantenimientoPreventivoImage from '../assets/mantenimiento_preventivo.webp';
import polizaMantenimientoImage from '../assets/poliza_mantenimiento.webp';
import especializacionCoberturaImage from '../assets/especializacion_cobertura.webp';
import { FeatureCardImg } from '../components/ui/FeatureCardImg';
import { EFeatureCardImgSize } from '../components/ui/featureCardImgSize';
import ingenieriasImage from '../assets/ingenierias.webp';
import volumenVariableImage from '../assets/volumen_variable.webp';
import comercialCorporativaImage from '../assets/comercial_coorporativa.webp';
import sistemasAplicadosImage from '../assets/sistemas_aplicados.webp';
import sistemasVentilacionImage from '../assets/sistemas_ventilacion.webp';
import refrigeracionEspecializadaImage from '../assets/refrigeracion_especializada.webp';

/** Background image per catalog index, aligned with `specialty.catalog` order. */
const CATALOG_IMAGE_BY_INDEX: Record<number, string> = {
  0: ingenieriasImage,
  1: volumenVariableImage,
  2: comercialCorporativaImage,
  3: sistemasAplicadosImage,
  4: sistemasVentilacionImage,
  5: refrigeracionEspecializadaImage,
};

/** Background image per service index, aligned with `services` order. */
const SERVICE_IMAGE_BY_INDEX: Record<number, string> = {
  0: asesoriaTecnicaImage,
  1: ingenieriaDesarrolloImage,
  2: instalacionPuestaMarchaImage,
  3: mantenimientoPreventivoImage,
  4: polizaMantenimientoImage,
  5: especializacionCoberturaImage,
};

/**
 * Servicios page — full service catalog, technical coverage checklist and the
 * VRF/TVR specialty catalog.
 */
export function ServiciosPage(): React.JSX.Element {
  const { services, specialty } = lorsamData;

  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Servicios]} />
      <PageHeader
        eyebrow="Servicios"
        title="Ingeniería, Instalación y Mantenimiento HVAC/R"
        lead="Cubrimos todo el ciclo de vida de tus sistemas de climatización y refrigeración con técnicos certificados y estricto cumplimiento de presupuesto."
        image={serviciosImage}
      />
      <Section tone="white" ariaLabel="Catálogo de servicios">
        <SectionHeading
          eyebrow="Qué hacemos"
          title="Seis Servicios, Un Solo Proveedor"
          lead="De la asesoría inicial a las pólizas de mantenimiento integral."
        />
        <div className="mt-14 grid gap-5 auto-rows-auto grid-flow-row-dense sm:grid-cols-1 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.06} className="h-full">
              <FeatureCardImg
                title={service.title}
                description={service.description}
                image={SERVICE_IMAGE_BY_INDEX[i]}
                size={EFeatureCardImgSize.Lg}
                enableTransparecy={false}
              />
            </Reveal>
          ))}
        </div>
      </Section>
      <Section tone="mist" ariaLabel="Especialización y cobertura técnica">
        <SectionHeading
          eyebrow="Especialización y Cobertura Técnica"
          title="Proyectos de Cualquier Magnitud y Complejidad"
          lead="Somos expertos en el cálculo, ingeniería, instalación y mantenimiento de una amplia variedad de equipos."
        />
        <div className="mt-14 grid gap-5 auto-rows-auto grid-flow-row-dense sm:grid-cols-1 lg:grid-cols-2">
          {specialty.catalog.map((item, i) => (
            <FeatureCardImg
              key={item.title}
              title={item.title}
              description={item.detail}
              image={CATALOG_IMAGE_BY_INDEX[i]}
              size={EFeatureCardImgSize.Lg}
              enableTransparecy={false}
            />
          ))}
        </div>
      </Section>
      <ContactoCTA />
    </>
  );
}
