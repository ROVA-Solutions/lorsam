import type { ISeoMeta } from '../../types';
import { SITE, SITE_URL, DEFAULT_OG_IMAGE } from '../../lib/constants';

interface ISeoProps {
  meta: ISeoMeta;
}

/**
 * Emits per-page SEO metadata. Relies on React 19 native metadata hoisting:
 * `<title>`, `<meta>` and `<link>` rendered here are automatically moved into
 * the document `<head>`. Includes Open Graph and Twitter Card tags.
 * @param meta Route-specific SEO metadata.
 */
export function Seo({ meta }: ISeoProps): React.JSX.Element {
  const fullTitle = `${meta.title} | ${SITE.name}`;
  const canonical = `${SITE_URL}${meta.path === '/' ? '' : meta.path}`;
  const image = meta.image ?? DEFAULT_OG_IMAGE;
  const keywords = meta.keywords?.join(', ');

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={meta.description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
