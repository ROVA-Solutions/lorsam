import { COUNTRY_CODE } from './constants';

/**
 * Strip every non-digit character from a phone string.
 * @param phone Raw phone input (may contain spaces, dashes, parentheses).
 * @returns Digit-only string.
 */
export function digitsOnly(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Format a 10-digit Mexican national number as `81 2345 6789` for display.
 * Falls back to the raw input when it is not 10 digits.
 * @param phone Raw phone input.
 * @returns Human-readable grouped number.
 */
export function formatPhone(phone: string): string {
  const d = digitsOnly(phone);
  if (d.length !== 10) return phone;
  return `${d.slice(0, 2)} ${d.slice(2, 6)} ${d.slice(6)}`;
}

/**
 * Build a `tel:` href with the Mexican country code prefix.
 * @param phone Raw national number.
 * @returns `tel:+52…` href.
 */
export function telHref(phone: string): string {
  return `tel:+${COUNTRY_CODE}${digitsOnly(phone)}`;
}

/**
 * Build a WhatsApp deep link (`https://wa.me/…`) with an optional prefilled message.
 * @param phone Raw national number.
 * @param message Optional prefilled text.
 * @returns wa.me URL.
 */
export function waHref(phone: string, message?: string): string {
  const base = `https://wa.me/${COUNTRY_CODE}${digitsOnly(phone)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Build a `mailto:` href with optional subject.
 * @param email Destination address.
 * @param subject Optional subject line.
 * @returns mailto href.
 */
export function mailHref(email: string, subject?: string): string {
  return subject ? `mailto:${email}?subject=${encodeURIComponent(subject)}` : `mailto:${email}`;
}
