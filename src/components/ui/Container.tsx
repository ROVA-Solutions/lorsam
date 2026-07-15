import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Centered, width-constrained content wrapper with responsive horizontal padding.
 * @param children Content to constrain.
 */
export function Container({ children, className }: IContainerProps): React.JSX.Element {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}
