import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position to the top on every route change so navigating to a
 * new page does not preserve the previous page's scroll offset.
 * Renders nothing.
 */
export function ScrollToTop(): null {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  }, [pathname]);

  return null;
}
