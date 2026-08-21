import { ChevronDown } from 'lucide-react';
import { FAQ_BY_ROUTE } from '../../data/faq';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ERoute } from '../../types';

interface IFaqSectionProps {
  /** Route whose FAQ entries should be rendered. */
  route: ERoute;
  /** Section title. */
  title?: string;
  /** Supporting lead paragraph. */
  lead?: string;
}

/**
 * Accessible FAQ block built on native `<details>`/`<summary>` disclosures.
 *
 * The rendered copy is the same text mirrored into the `FAQPage` JSON-LD, which
 * is what makes the route eligible for the FAQ rich result. Renders nothing when
 * the route has no registered questions.
 * @param route Route key into the FAQ registry.
 */
export function FaqSection({ route, title, lead }: IFaqSectionProps): React.JSX.Element | null {
  const items = FAQ_BY_ROUTE[route];
  if (!items?.length) return null;

  return (
    <Section tone="white" ariaLabel="Preguntas frecuentes">
      <SectionHeading
        eyebrow="Preguntas Frecuentes"
        title={title ?? 'Dudas Frecuentes Sobre Nuestros Servicios HVAC/R'}
        lead={lead ?? 'Respuestas rápidas antes de solicitar tu cotización con LORSAM.'}
      />

      <div className="mx-auto mt-14 max-w-3xl divide-y divide-fog rounded-2xl border border-fog bg-white shadow-sm">
        {items.map((item, i) => (
          <Reveal key={item.question} delay={(i % 3) * 0.06}>
            <details className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue-500">
                <h3 className="text-base font-semibold text-ink">{item.question}</h3>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-brand-blue-700 transition-transform duration-300 group-open:-rotate-180"
                  aria-hidden
                  focusable={false}
                />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
