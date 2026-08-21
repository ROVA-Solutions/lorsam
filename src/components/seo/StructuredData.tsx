import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { buildStructuredData } from '../../lib/seoSchema';

/**
 * Emits the site-wide schema.org `@graph` as a single JSON-LD block: `WebSite`,
 * the `HVACBusiness`/`LocalBusiness`/`Organization` entity with its offer
 * catalog, the current `WebPage`, its `BreadcrumbList` and the route `FAQPage`
 * when one exists.
 *
 * Rendered once at the layout level and rebuilt whenever the route changes.
 * Search engines parse JSON-LD anywhere in the document, so inline placement
 * inside the app shell is valid.
 */
export function StructuredData(): React.JSX.Element {
  const { pathname } = useLocation();
  const json = useMemo(() => JSON.stringify(buildStructuredData(pathname)), [pathname]);

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be injected as raw text; content is fully derived from local data.
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
