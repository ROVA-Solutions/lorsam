import { cn } from '../../lib/cn';
import { Icon } from './Icon';

interface IFeatureCardProps {
  /** lucide icon name from the dataset. */
  icon: string;
  title: string;
  description: string;
  /** Icon badge accent color. */
  accent?: 'blue' | 'red';
  className?: string;
}

/**
 * Card with an icon badge, title and description. Used for values, services
 * and differentiators. Purely presentational.
 */
export function FeatureCard({
  icon,
  title,
  description,
  accent = 'blue',
  className,
}: IFeatureCardProps): React.JSX.Element {
  return (
    <div
      className={cn(
        'group h-full rounded-2xl border border-fog bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue-200 hover:shadow-lg',
        className,
      )}
    >
      <div
        className={cn(
          'mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors',
          accent === 'red'
            ? 'bg-brand-red-50 text-brand-red-600 group-hover:bg-brand-red-500 group-hover:text-white'
            : 'bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-600 group-hover:text-white',
        )}
      >
        <Icon name={icon} className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-steel">{description}</p>
    </div>
  );
}
