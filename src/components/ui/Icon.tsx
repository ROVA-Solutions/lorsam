import {
  ShieldCheck,
  Gauge,
  BadgeCheck,
  Users,
  Handshake,
  Thermometer,
  Droplets,
  Wind,
  Snowflake,
  Lightbulb,
  PencilRuler,
  Wrench,
  Settings,
  FileCheck2,
  Layers,
  Fan,
  AirVent,
  Zap,
  Award,
  HeartPulse,
  Building2,
  Factory,
  Server,
  Landmark,
  UtensilsCrossed,
  Store,
  HelpCircle,
} from 'lucide-react';
import type { LucideIcon, LucideProps } from 'lucide-react';

/** Registry mapping the icon names used in `lorsamData.json` to lucide components. */
const ICON_REGISTRY: Record<string, LucideIcon> = {
  ShieldCheck,
  Gauge,
  BadgeCheck,
  Users,
  Handshake,
  Thermometer,
  Droplets,
  Wind,
  Snowflake,
  Lightbulb,
  PencilRuler,
  Wrench,
  Settings,
  FileCheck2,
  Layers,
  Fan,
  AirVent,
  Zap,
  Award,
  HeartPulse,
  Building2,
  Factory,
  Server,
  Landmark,
  UtensilsCrossed,
  Store,
};

interface IIconProps extends LucideProps {
  /** Icon name as stored in the content dataset. */
  name: string;
}

/**
 * Render a lucide icon by its data-driven string name.
 * Icons are decorative by default (`aria-hidden`); label the parent element instead.
 * Falls back to a neutral placeholder when the name is unknown.
 * @param name Icon identifier from the content dataset.
 */
export function Icon({ name, ...props }: IIconProps): React.JSX.Element {
  const Component = ICON_REGISTRY[name] ?? HelpCircle;
  return <Component aria-hidden focusable={false} {...props} />;
}
