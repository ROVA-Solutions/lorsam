import { cn } from '../../lib/cn';

interface IStatProps {
  /** Large headline figure, e.g. "500+". */
  value: string;
  /** Supporting label. */
  label: string;
  invert?: boolean;
  className?: string;
}

/**
 * A single headline statistic (figure + label).
 * @param invert Use light text for dark backgrounds.
 */
export function Stat({ value, label, invert = false, className }: IStatProps): React.JSX.Element {
  return (
    <div className={cn('text-center', className)}>
      <div
        className={cn(
          'font-display text-4xl font-extrabold tracking-tight sm:text-5xl',
          invert ? 'text-white' : 'text-brand-blue-700',
        )}
      >
        {value}
      </div>
      <div
        className={cn(
          'mt-2 text-sm font-medium uppercase tracking-wide',
          invert ? 'text-brand-blue-200' : 'text-steel',
        )}
      >
        {label}
      </div>
    </div>
  );
}
