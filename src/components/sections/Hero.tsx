import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Wrench } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { IMAGES, unsplash } from '../../lib/images';
import { CTAButton } from '../ui/CTAButton';
import { Container } from '../ui/Container';
import { Stat } from '../ui/Stat';
import { ERoute } from '../../types';

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
        src={unsplash(IMAGES.hero, 1800)}
        alt=""
        aria-hidden
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        loading="eager"
        fetchPriority="high"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-br from-brand-blue-950 via-brand-blue-950/90 to-brand-blue-900/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-128 w-lg rounded-full bg-brand-red-500/15 blur-3xl"
      />

      <Container className="py-24 sm:py-32 lg:py-40">
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

        <motion.div
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Stat invert value={`${company.yearsExperience}`} label="Años de experiencia" />
          <Stat invert value={`${company.unitsInstalled}+`} label="Unidades VRF/TVR instaladas" />
          <Stat invert value="7" label="Sectores atendidos" />
        </motion.div>
      </Container>
    </section>
  );
}
