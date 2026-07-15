import { lorsamData } from '../../data/lorsam';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { Icon } from '../ui/Icon';

/**
 * "Por qué elegirnos" value-added differentiators on a deep-blue band.
 */
export function PorQueElegirnos(): React.JSX.Element {
  const { whyChooseUs } = lorsamData;

  return (
    <Section id="por-que-elegirnos" tone="blue-deep" ariaLabel="Por qué elegirnos">
      <SectionHeading
        invert
        eyebrow="Valor Agregado"
        title="Por qué elegir a LORSAM"
        lead="Tres pilares que respaldan la continuidad operativa y el retorno de inversión de tu empresa."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {whyChooseUs.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors hover:border-white/25">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-red-500 text-white">
                <Icon name={item.icon} className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-blue-100">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
