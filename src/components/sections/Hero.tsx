import { motion } from 'framer-motion';
import { PhoneCall, Wrench } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { CTAButton } from '../ui/CTAButton';
import { Container } from '../ui/Container';
import { ERoute } from '../../types';
import homeImage from '../../assets/home.webp';

/**
 * Landing hero: brand statement, slogan, primary CTAs and headline stats over
 * an industrial background image with a dark gradient overlay.
 */
export function Hero(): React.JSX.Element {
  const { company } = lorsamData;

  return (
    <section aria-label="Presentación" className="relative isolate overflow-hidden bg-brand-blue-950 text-white">
      {/* Background image + overlays */}
      <img
        src={homeImage}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-br from-brand-blue-950 via-brand-blue-950/90 to-brand-blue-900/70"
      />

      <Container className="py-10 sm:py-16 lg:py-24">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue-100">
            <Wrench className="h-3.5 w-3.5" aria-hidden focusable={false} />
            HVAC/R · Industrial · Comercial · Corporativo
          </p>

          <h1 className="text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl text-white">
            {company.slogan}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-brand-blue-100 sm:text-xl">
            Soluciones integrales y ecológicas en climatización y refrigeración: ingeniería, instalación y mantenimiento
            con tecnología de vanguardia para maximizar tu eficiencia energética.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <CTAButton to={ERoute.Contacto} variant="green" size="lg">
              Contáctanos
              <PhoneCall className="h-5 w-5" aria-hidden focusable={false} />
            </CTAButton>
            <CTAButton to={ERoute.Servicios} variant="ghost-invert" size="lg">
              Ver servicios
            </CTAButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
