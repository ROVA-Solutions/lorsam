import { Seo } from '../components/seo/Seo';
import { SEO_BY_ROUTE } from '../lib/seoData';
import { Hero } from '../components/sections/Hero';
import { EspecialidadBento } from '../components/sections/EspecialidadBento';
import { ValoresCards } from '../components/sections/ValoresCards';
import { ServiciosPreview } from '../components/sections/ServiciosPreview';
import { PorQueElegirnos } from '../components/sections/PorQueElegirnos';
import { ClientesPreview } from '../components/sections/ClientesPreview';
import { HistoriaPreview } from '../components/sections/HistoriaPreview';
import { ContactoCTA } from '../components/sections/ContactoCTA';
import { ERoute } from '../types';

/**
 * Landing page — an infinite-scroll funnel that moves the visitor from brand
 * promise through specialty, services, proof and history to the contact CTA.
 */
export function HomePage(): React.JSX.Element {
  return (
    <>
      <Seo meta={SEO_BY_ROUTE[ERoute.Home]} />
      <Hero />
      <EspecialidadBento />
      <ValoresCards />
      <ServiciosPreview />
      <PorQueElegirnos />
      <ClientesPreview />
      <HistoriaPreview />
      <ContactoCTA />
    </>
  );
}
