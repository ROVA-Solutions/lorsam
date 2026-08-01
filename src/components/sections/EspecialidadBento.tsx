import { lorsamData } from '../../data/lorsam';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { FeatureCardImg } from '../ui/FeatureCardImg';
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
          {specialty.catalog.map((item, i) => (
            <FeatureCardImg
              key={item.title}
              title={item.title}
              description={item.detail}
              image={CATALOG_IMAGE_BY_INDEX[i]}
              size={EFeatureCardImgSize.Md}
              enableTransparecy={false}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
