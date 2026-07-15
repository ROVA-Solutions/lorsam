import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useSessionSplash } from '../../hooks/useSessionSplash';
import { SplashScreen } from '../splash/SplashScreen';
import { StructuredData } from '../seo/StructuredData';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

/**
 * Application shell shared by every route: intro splash, structured data,
 * skip link, sticky navbar, routed `<main>` content and footer.
 */
export function Layout(): React.JSX.Element {
  const { visible, dismiss } = useSessionSplash();

  return (
    <>
      <StructuredData />

      <AnimatePresence>{visible && <SplashScreen onSkip={dismiss} />}</AnimatePresence>

      <a
        href="#main"
        className="sr-only z-60 rounded-md bg-brand-blue-700 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Saltar al contenido
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
