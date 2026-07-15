import { cn } from '../../lib/cn';

interface ILogoProps {
  /** Light wordmark for dark backgrounds. */
  invert?: boolean;
  className?: string;
}

/**
 * LORSAM brand lockup: geometric "L" mark plus wordmark.
 * @param invert Render the wordmark in white for dark surfaces.
 */
export function Logo({ invert = false, className }: ILogoProps): React.JSX.Element {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" role="img" aria-label="LORSAM" focusable="false">
        <rect width="64" height="64" rx="14" className="fill-brand-blue-800" />
        <rect x="14" y="12" width="7" height="40" rx="3.5" className="fill-white" />
        <rect x="14" y="45" width="28" height="7" rx="3.5" className="fill-white" />
        <rect x="45" y="12" width="7" height="40" rx="3.5" className="fill-brand-red-500" />
      </svg>
      <span className={cn('font-display text-xl font-extrabold tracking-tight', invert ? 'text-white' : 'text-ink')}>
        LORSAM
      </span>
    </span>
  );
}
