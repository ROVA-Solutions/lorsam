import { cn } from '../../lib/cn';
import { EFeatureCardImgSize, FEATURE_CARD_IMG_SIZE_CLASSES } from './featureCardImgSize';

interface IFeatureCardImgProps {
  title: string;
  description: string;
  /** Background image (imported asset URL). */
  image: string;
  /** Grid col/row span preset. @default EFeatureCardImgSize.Xl */
  size?: EFeatureCardImgSize;
  className?: string;
  enableTransparecy?: boolean;
}

/**
 * Card with a full-bleed background image and a bottom gradient scrim
 * holding title and description. Purely presentational.
 */
export function FeatureCardImg({
  title,
  description,
  image,
  size = EFeatureCardImgSize.Xl,
  className,
  enableTransparecy = false,
}: IFeatureCardImgProps): React.JSX.Element {
  return (
    <article
      className={cn(
        'relative isolate flex aspect-4/3 h-full flex-col justify-end overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
        FEATURE_CARD_IMG_SIZE_CLASSES[size],
        className,
      )}
    >
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        loading="lazy"
      />

      {enableTransparecy ? (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-br from-brand-blue-950 via-brand-blue-950/70 to-brand-blue-900/80"
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-linear-to-t from-brand-blue-950 via-brand-blue-950/80 via-65% to-transparent"
        />
      )}

      <div className="p-6">
        <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">{title}</h3>
        <p className="mt-1 text-lg leading-relaxed text-brand-blue-100">{description}</p>
      </div>
    </article>
  );
}
