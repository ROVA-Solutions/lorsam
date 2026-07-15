import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { lorsamData } from '../../data/lorsam';
import { NAV_LINKS } from '../../lib/constants';
import { Logo } from '../ui/Logo';
import { FacebookIcon, WhatsAppIcon } from '../ui/BrandIcons';
import { Container } from '../ui/Container';
import { telHref, waHref, mailHref, formatPhone } from '../../lib/format';

/**
 * Site footer: brand blurb, quick navigation, primary contact channels and
 * legal line. Contact links use tel/WhatsApp/mailto (fully static).
 */
export function Footer(): React.JSX.Element {
  const { company, contact, mission } = lorsamData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-950 text-brand-blue-100">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo invert />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-blue-200">{mission}</p>
          </div>

          <nav aria-label="Enlaces del pie de página">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Navegación</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-brand-blue-200 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={telHref(contact.office[0])}
                  className="inline-flex items-center gap-2 text-brand-blue-200 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0" aria-hidden focusable={false} />
                  {formatPhone(contact.office[0])}
                </a>
              </li>
              <li>
                <a
                  href={waHref(contact.whatsapp[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue-200 transition-colors hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={mailHref(contact.email)}
                  className="inline-flex items-center gap-2 break-all text-brand-blue-200 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden focusable={false} />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-brand-blue-200">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden focusable={false} />
                <span>{contact.address.full}</span>
              </li>
              <li>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-blue-200 transition-colors hover:text-white"
                >
                  <FacebookIcon className="h-4 w-4 shrink-0" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-brand-blue-300">
          <p>
            © {year} {company.legalName}. Todos los derechos reservados.
          </p>
          <p className="mt-1">Soluciones HVAC/R · Climatización y Refrigeración · {company.regionsCovered}.</p>
        </div>
      </Container>
    </footer>
  );
}
