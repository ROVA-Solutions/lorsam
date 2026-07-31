import { lorsamData } from '../../data/lorsam';
import { Reveal } from '../ui/Reveal';
import { FeatureCardImg } from '../ui/FeatureCardImg';
import { EFeatureCardImgSize } from '../ui/featureCardImgSize';
import asesoriaTecnicaImage from '../../assets/asesoria_tecnica.webp';
import ingenieriaDesarrolloImage from '../../assets/ingenieria_desarrollo.webp';
import instalacionPuestaMarchaImage from '../../assets/instalacion_puesta_marcha.webp';
import mantenimientoPreventivoImage from '../../assets/mantenimiento_preventivo.webp';
import polizaMantenimientoImage from '../../assets/poliza_mantenimiento.webp';
import especializacionCoberturaImage from '../../assets/especializacion_cobertura.webp';

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
 * Grid of the six core service offerings. Wrapper-free so it can be embedded
 * in both the Home preview and the Servicios page.
 */
export function ServiciosGrid(): React.JSX.Element {
  const { services } = lorsamData;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
      {services.map((service, i) => (
        <Reveal key={service.title} delay={(i % 3) * 0.06} className="h-full">
          <FeatureCardImg
            title={service.title}
            description={service.description}
            image={SERVICE_IMAGE_BY_INDEX[i]}
            size={EFeatureCardImgSize.Md}
          />
        </Reveal>
      ))}
    </div>
  );
}
