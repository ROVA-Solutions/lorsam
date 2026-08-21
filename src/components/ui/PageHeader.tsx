import { motion } from 'framer-motion';
import { IMAGES, unsplash } from '../../lib/images';
import { Container } from './Container';

interface IPageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Background image id from the IMAGES registry key. Ignored if `image` is set. */
  imageId?: string;
  /** Direct background image source (e.g. a bundled asset import). Takes precedence over `imageId`. */
  image?: string;
  /**
   * Descriptive alternative text for the background photograph. Required for
   * image search indexing; when omitted the image is treated as decorative.
   */
  imageAlt?: string;
}

/**
 * Compact page header used by detail routes: eyebrow, H1 and lead over a
 * dark-blue band with a subtle industrial background image. The photograph is
 * the route LCP element, so it is fetched eagerly at high priority.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  imageId = IMAGES.rooftopUnits,
  image,
  imageAlt,
}: IPageHeaderProps): React.JSX.Element {
  return (
    <header className="relative isolate overflow-hidden bg-brand-blue-950 text-white">
      <img
        src={image ?? unsplash(imageId, 1600)}
        alt={imageAlt ?? ''}
        aria-hidden={imageAlt ? undefined : true}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        loading="eager"
        decoding="sync"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-br from-brand-blue-950 via-brand-blue-950/90 to-brand-blue-900/60"
      />
      <Container className="py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-3 font-semibold uppercase tracking-[0.18em] text-brand-red-400">{eyebrow}</p>
          <h1 className="text-balance font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl text-white">
            {title}
          </h1>
          {lead && <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-brand-blue-100">{lead}</p>}
        </motion.div>
      </Container>
    </header>
  );
}
