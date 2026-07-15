/**
 * Placeholder imagery (Unsplash). Centralised so they can be swapped for
 * final brand photography in one place. Keys describe intended subject matter.
 *
 * NOTE: These are temporary industry-relevant placeholders and will be replaced.
 */

/**
 * Build an optimized Unsplash URL for a given photo id.
 * @param id Unsplash photo id (the `photo-XXXX` slug).
 * @param w Target width in pixels.
 * @returns Fully-qualified Unsplash image URL.
 */
export function unsplash(id: string, w = 1200): string {
  return `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;
}

/** Named placeholder photo ids grouped by usage. */
export const IMAGES = {
  /** Hero — industrial HVAC / engineering. */
  hero: 'photo-1581092160562-40aa08e78837',
  /** Rooftop condenser units / industrial climate. */
  rooftopUnits: 'photo-1497435334941-8c899ee9e8e9',
  /** Engineering / blueprint planning. */
  engineering: 'photo-1503387762-592deb58ef4e',
  /** Technician at work. */
  technician: 'photo-1521791136064-7986c2920216',
  /** Data center / mission critical cooling. */
  dataCenter: 'photo-1558494949-ef010cbdcc31',
  /** Corporate building / vertical development. */
  corporate: 'photo-1486406146926-c627a92ad1ab',
  /** Industrial facility / manufacturing. */
  industrial: 'photo-1565793298595-6a879b1d9492',
  /** Ductwork / ventilation. */
  ductwork: 'photo-1504328345606-18bbc8c9d7d1',
  /** Contact / office. */
  office: 'photo-1497366216548-37526070297c',
} as const;
