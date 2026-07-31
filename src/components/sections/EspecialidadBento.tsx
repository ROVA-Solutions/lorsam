import { ArrowRight } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { CTAButton } from '../ui/CTAButton';
import { FeatureCardImg } from '../ui/FeatureCardImg';
import { ERoute } from '../../types';
import ingenieriasImage from '../../assets/ingenierias.webp';
import volumenVariableImage from '../../assets/volumen_variable.webp';
import comercialCorporativaImage from '../../assets/comercial_coorporativa.webp';
import sistemasAplicadosImage from '../../assets/sistemas_aplicados.webp';
import sistemasVentilacionImage from '../../assets/sistemas_ventilacion.webp';
import refrigeracionEspecializadaImage from '../../assets/refrigeracion_especializada.webp';
import { EFeatureCardImgSize } from '../ui/featureCardImgSize';

/** Background image per catalog index, aligned with `specialty.catalog` order. */
const CATALOG_IMAGE_BY_INDEX: Record<number, string> = {
  0: ingenieriasImage,
  1: volumenVariableImage,
  2: comercialCorporativaImage,
  3: sistemasAplicadosImage,
  4: sistemasVentilacionImage,
  5: refrigeracionEspecializadaImage,
};

/**
 * "Nuestra Especialidad" as a Bento grid: a featured VRF/TVR narrative tile
 * and capability tiles with background imagery.
 */
export function EspecialidadBento(): React.JSX.Element {
  const { specialty } = lorsamData;

  return (
    <Section id="especialidad" tone="mist" ariaLabel="Nuestra especialidad">
      <SectionHeading
        eyebrow="Nuestra Especialidad"
        title="Ingeniería VRF/TVR a Gran Escala"
        lead="Alta capacidad técnica en el cálculo, ingeniería e instalación de sistemas de volumen de refrigerante variable, apoyados en software de última generación."
      />

      <Reveal className="mt-14">
        <div className="grid auto-rows-auto grid-flow-row-dense gap-4 sm:grid-cols-1 lg:grid-cols-4">
          {/* Featured narrative tile */}
          {/* <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-brand-blue-950 p-7 text-white sm:col-span-2 sm:row-span-1">
            <img
              src={ingenieriasImage}
              alt=""
              aria-hidden
              className="absolute inset-0 -z-10 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-brand-blue-950 via-brand-blue-950/80 via-80% to-transparent"
            />
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl text-white">{specialty.headline}</h3>
            <p className="mt-3 max-w-md text-lg leading-relaxed text-brand-blue-100">{specialty.description}</p>
            <CTAButton to={ERoute.Servicios} variant="white" size="md" className="mt-6 self-start">
              Conoce el proceso
              <ArrowRight className="h-4 w-4" aria-hidden focusable={false} />
            </CTAButton>
          </article> */}

          {/* Capability tiles */}
          {specialty.catalog.map((item, i) => (
            <FeatureCardImg
              key={item.title}
              title={item.title}
              description={item.detail}
              image={CATALOG_IMAGE_BY_INDEX[i]}
              size={EFeatureCardImgSize.Md}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
