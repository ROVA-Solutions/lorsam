import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface IRevealProps {
  children: ReactNode;
  /** Extra classes applied to the wrapper. */
  className?: string;
  /** Animation delay in seconds (useful for staggering siblings). */
  delay?: number;
  /** Vertical travel distance in pixels. */
  y?: number;
}

/**
 * Fades and lifts its children into view on first scroll intersection.
 * Motion is automatically neutralised for users who prefer reduced motion
 * (global CSS collapses transition/animation durations).
 * @param children Content to reveal.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: IRevealProps): React.JSX.Element {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
