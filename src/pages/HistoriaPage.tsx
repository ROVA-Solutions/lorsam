import { Seo } from '../components/seo/Seo';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { lorsamData } from '../data/lorsam';
import { PageHeader } from '../components/ui/PageHeader';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Reveal } from '../components/ui/Reveal';
import { Icon } from '../components/ui/Icon';
import { ContactoCTA } from '../components/sections/ContactoCTA';
import { ERoute } from '../types';
import historiaImage from '../assets/historia.webp';

/**
 * Historia page — narrative intro, a vertical milestone timeline, the technical
 * evolution grid and headline stats.
 */
export function HistoriaPage(): React.JSX.Element {
  const { history } = lorsamData;

  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Historia]} />
      <PageHeader eyebrow="Nuestra Historia" title={history.headline} lead={history.intro[0]} image={historiaImage} />

      <Section tone="white" ariaLabel="Reseña histórica">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-graphite">
          {history.intro.slice(1).map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="white" ariaLabel="Evolución técnica">
        <SectionHeading
          eyebrow="Nuestra Evolución Técnica"
          title="Dominio de Sistemas Críticos"
          lead="Con los años expandimos nuestra especialización para dominar la ingeniería, instalación y mantenimiento de sistemas cada vez más exigentes."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {history.technicalEvolution.map((cap, i) => (
            <Reveal key={cap.category} delay={(i % 3) * 0.06} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl border border-fog bg-white p-6 shadow-sm">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                  <Icon name={cap.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{cap.category}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-steel">{cap.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactoCTA />
    </>
  );
}
