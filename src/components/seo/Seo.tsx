import { useEffect } from 'react';
import type { ISeoMeta } from '../../types';
import { SITE, DEFAULT_OG_IMAGE, OG_IMAGE } from '../../lib/constants';
import { canonicalUrl } from '../../lib/seoSchema';

/** Robots directive for indexable routes: full snippets, large image previews. */
const ROBOTS_INDEX = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

/** Robots directive for routes that must stay out of the index but keep link equity. */
const ROBOTS_NOINDEX = 'noindex, follow';

/** Guards the one-time removal of the static `index.html` SEO fallback tags. */
let staticSeoRemoved = false;

/**
 * Delete the crawler fallback tags shipped in `index.html`.
 *
 * Those tags exist for scrapers that never execute JavaScript. Once React has
 * mounted and hoisted its own per-route metadata, leaving them in place would
 * produce duplicate `<title>`, `description`, `canonical`, Open Graph and
 * Twitter tags — and the browser resolves duplicates by first-in-document-order,
 * which would pin every route to the home page values.
 */
function removeStaticSeoTags(): void {
  if (staticSeoRemoved) return;
  staticSeoRemoved = true;
  document.querySelectorAll('[data-static-seo]').forEach((element) => element.remove());
}

interface ISeoProps {
  meta: ISeoMeta;
}

/**
 * Emits per-page SEO metadata. Relies on React 19 native metadata hoisting:
 * `<title>`, `<meta>` and `<link>` rendered here are automatically moved into
 * the document `<head>`. Covers robots directives, canonical URL, Open Graph
 * and Twitter Card tags.
 * @param meta Route-specific SEO metadata.
 */
export function Seo({ meta }: ISeoProps): React.JSX.Element {
  useEffect(removeStaticSeoTags, []);

  const canonical = canonicalUrl(meta.path);
  const image = meta.image ?? DEFAULT_OG_IMAGE;
  const imageAlt = meta.imageAlt ?? OG_IMAGE.alt;
  const keywords = meta.keywords?.join(', ');
  const indexable = !meta.noindex;

  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={SITE.legalName} />
      <meta name="robots" content={indexable ? ROBOTS_INDEX : ROBOTS_NOINDEX} />
      <meta name="googlebot" content={indexable ? ROBOTS_INDEX : ROBOTS_NOINDEX} />
      {indexable && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      {indexable && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={OG_IMAGE.type} />
      <meta property="og:image:width" content={String(OG_IMAGE.width)} />
      <meta property="og:image:height" content={String(OG_IMAGE.height)} />
      <meta property="og:image:alt" content={imageAlt} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </>
  );
}
