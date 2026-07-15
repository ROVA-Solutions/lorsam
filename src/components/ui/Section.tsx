import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';

interface ISectionProps {
  children: ReactNode;
  /** Optional anchor id for in-page navigation. */
  id?: string;
  /** Background tone. */
  tone?: 'white' | 'mist' | 'blue' | 'blue-deep';
  /** Accessible label for the section landmark. */
  ariaLabel?: string;
  className?: string;
  /** Render without the inner container (for full-bleed content). */
  bleed?: boolean;
}

const TONE_CLASSES: Record<NonNullable<ISectionProps['tone']>, string> = {
  white: 'bg-white text-graphite',
  mist: 'bg-mist text-graphite',
  blue: 'bg-brand-blue-50 text-graphite',
  'blue-deep': 'bg-brand-blue-950 text-brand-blue-100',
};

/**
 * A vertically padded page section acting as a semantic landmark.
 * @param tone Background color tone.
 * @param bleed When true, omits the centered container.
 */
export function Section({
  children,
  id,
  tone = 'white',
  ariaLabel,
  className,
  bleed = false,
}: ISectionProps): React.JSX.Element {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('scroll-mt-20 py-16 sm:py-24', TONE_CLASSES[tone], className)}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
