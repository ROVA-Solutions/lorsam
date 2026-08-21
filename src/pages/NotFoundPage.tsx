import { Home } from 'lucide-react';
import { Seo } from '../components/seo/Seo';
import { SEO_NOT_FOUND } from '../lib/seoData';
import { Container } from '../components/ui/Container';
import { CTAButton } from '../components/ui/CTAButton';
import { ERoute } from '../types';

/**
 * 404 route — friendly message and a route back to Home. Explicitly de-indexed
 * (`noindex, follow`) so soft-404s never dilute the brand result set.
 */
export function NotFoundPage(): React.JSX.Element {
  return (
    <>
      <Seo meta={SEO_NOT_FOUND} />
      <section className="flex min-h-[70vh] items-center bg-brand-blue-950 text-white">
        <Container className="py-24 text-center">
          <p className="font-display text-7xl font-extrabold text-brand-red-400 sm:text-9xl">404</p>
          <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Página no encontrada</h1>
          <p className="mx-auto mt-3 max-w-md text-brand-blue-100">
            La página que buscas no existe o fue movida. Regresa al inicio para seguir explorando las soluciones que
            tenemos para ti.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton to={ERoute.Home} variant="primary" size="lg">
              <Home className="h-5 w-5" aria-hidden focusable={false} />
              Volver al inicio
            </CTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
