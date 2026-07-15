interface IBrandIconProps {
  className?: string;
}

/**
 * Inline Facebook glyph. lucide-react no longer ships third-party brand icons,
 * so brand marks are provided locally. Decorative by default.
 */
export function FacebookIcon({ className }: IBrandIconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable={false}>
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.026 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.684 4.533-4.684 1.313 0 2.686.235 2.686.235v2.966h-1.513c-1.49 0-1.955.93-1.955 1.886v2.26h3.328l-.532 3.49h-2.796v8.437C19.612 23.093 24 18.099 24 12.073z" />
    </svg>
  );
}

/**
 * Inline WhatsApp glyph. lucide-react no longer ships third-party brand icons,
 * so brand marks are provided locally. Decorative by default.
 */
export function WhatsAppIcon({ className }: IBrandIconProps): React.JSX.Element {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden focusable={false}>
      <path d="M12.04 0C5.463 0 .12 5.343.12 11.92c0 2.101.548 4.152 1.588 5.964L0 24l6.253-1.64a11.86 11.86 0 0 0 5.784 1.474h.005c6.576 0 11.918-5.343 11.918-11.92 0-3.184-1.24-6.177-3.492-8.428A11.845 11.845 0 0 0 12.04 0zm6.986 16.822c-.294.827-1.455 1.514-2.386 1.71-.635.134-1.464.242-4.256-.915-3.573-1.48-5.872-5.106-6.052-5.343-.173-.238-1.454-1.938-1.454-3.696 0-1.759.917-2.622 1.243-2.981.294-.325.68-.406.906-.406.226 0 .453.002.65.012.226.011.494-.086.773.588.294.71.998 2.459 1.086 2.638.087.18.145.39.03.628-.116.238-.174.386-.348.594-.174.208-.365.464-.522.623-.174.174-.355.362-.153.71.203.348.899 1.484 1.93 2.404 1.326 1.183 2.444 1.549 2.792 1.723.348.174.552.145.755-.087.203-.232.87-1.014 1.102-1.362.232-.348.464-.29.782-.174.319.116 2.018.951 2.364 1.124.348.174.58.26.667.406.087.145.087.84-.207 1.667z" />
    </svg>
  );
}
