import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'white' | 'ghost-invert';
type Size = 'md' | 'lg';

interface IBaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface IInternalProps extends IBaseProps {
  /** Internal route path (renders a react-router Link). */
  to: string;
  href?: never;
  onClick?: never;
}

interface IExternalProps extends IBaseProps {
  /** External URL (renders an anchor). */
  href: string;
  to?: never;
  onClick?: never;
  /** Open in a new tab. */
  external?: boolean;
}

interface IButtonProps extends IBaseProps {
  onClick: () => void;
  to?: never;
  href?: never;
  type?: 'button' | 'submit';
}

type ICTAButtonProps = IInternalProps | IExternalProps | IButtonProps;

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: 'bg-brand-red-500 text-white hover:bg-brand-red-600 shadow-sm shadow-brand-red-500/20',
  secondary: 'bg-brand-blue-600 text-white hover:bg-brand-blue-700 shadow-sm',
  outline: 'border-2 border-brand-blue-600 text-brand-blue-700 hover:bg-brand-blue-50',
  white: 'bg-white text-brand-blue-800 hover:bg-brand-blue-50 shadow-sm',
  'ghost-invert': 'border border-white/40 text-white hover:bg-white/10',
};

const SIZE_CLASSES: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

function classesFor(variant: Variant, size: Size, className?: string): string {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue-500',
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  );
}

/**
 * Polymorphic call-to-action. Renders a router `Link` (`to`), an anchor (`href`),
 * or a `button` (`onClick`) with consistent brand styling.
 */
export function CTAButton(props: ICTAButtonProps): React.JSX.Element {
  const { children, variant = 'primary', size = 'md', className } = props;
  const classes = classesFor(variant, size, className);

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const external = 'external' in props ? props.external : false;
    return (
      <a
        href={props.href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    );
  }

  const type = 'type' in props ? (props.type ?? 'button') : 'button';
  const onClick = 'onClick' in props ? props.onClick : undefined;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
