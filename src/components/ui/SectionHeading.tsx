import { cn } from '../../lib/cn';

interface ISectionHeadingProps {
  /** Small kicker label above the title. */
  eyebrow?: string;
  title: string;
  /** Optional supporting lead paragraph. */
  lead?: string;
  /** Heading tag level for correct document outline. */
  as?: 'h1' | 'h2';
  align?: 'left' | 'center';
  /** Use light text for dark backgrounds. */
  invert?: boolean;
  className?: string;
}

/**
 * Standard section header: red eyebrow, heading, and optional lead paragraph.
 * @param as Heading level for the document outline (defaults to h2).
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  as: Tag = 'h2',
  align = 'center',
  invert = false,
  className,
}: ISectionHeadingProps): React.JSX.Element {
  return (
    <div className={cn('max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left', className)}>
      {eyebrow && (
        <p
          className={cn(
            'mb-3 font-semibold uppercase tracking-[0.18em]',
            invert ? 'text-brand-red-400' : 'text-brand-red-600',
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]',
          invert ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </Tag>
      {lead && (
        <p className={cn('mt-5 text-lg leading-relaxed', invert ? 'text-brand-blue-100' : 'text-steel')}>{lead}</p>
      )}
    </div>
  );
}
