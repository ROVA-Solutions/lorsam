import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/cn';

const clientLogoModules = import.meta.glob<string>('../../assets/clients/*.webp', {
  eager: true,
  import: 'default',
});

/** Client logos sorted by filename (client001.webp, client002.webp, ...). */
const CLIENT_LOGOS = Object.keys(clientLogoModules)
  .sort()
  .map((key) => clientLogoModules[key]);

/** Seconds per logo for the marquee scroll speed. */
const SECONDS_PER_LOGO = 2.5;

interface IClientsCarouselProps {
  className?: string;
}

/**
 * Infinite right-to-left auto-scrolling marquee of client logos from
 * `src/assets/clients`. Purely decorative; honors reduced-motion preference
 * by rendering a static wrapped row instead of animating.
 */
export function ClientsCarousel({ className }: IClientsCarouselProps): React.JSX.Element {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn('flex flex-wrap items-center justify-center gap-8', className)} aria-hidden>
        {CLIENT_LOGOS.map((src, i) => (
          <img key={i} src={src} alt="" loading="lazy" className="h-12 w-auto object-contain opacity-70 grayscale" />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className,
      )}
      aria-hidden
    >
      <motion.div
        className="flex w-max items-center gap-20"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: CLIENT_LOGOS.length * SECONDS_PER_LOGO, repeat: Infinity, ease: 'linear' }}
      >
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="h-12 w-auto shrink-0 object-contain opacity-70 grayscale transition-opacity duration-300 hover:opacity-100"
          />
        ))}
      </motion.div>
    </div>
  );
}
