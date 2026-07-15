import { lorsamData } from '../../data/lorsam';
import { Reveal } from '../ui/Reveal';
import { FeatureCard } from '../ui/FeatureCard';

/**
 * Grid of the six core service offerings. Wrapper-free so it can be embedded
 * in both the Home preview and the Servicios page.
 */
export function ServiciosGrid(): React.JSX.Element {
  const { services } = lorsamData;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <Reveal key={service.title} delay={(i % 3) * 0.06} className="h-full">
          <FeatureCard icon={service.icon} title={service.title} description={service.description} accent="blue" />
        </Reveal>
      ))}
    </div>
  );
}
