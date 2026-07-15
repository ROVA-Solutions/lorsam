/**
 * Join conditional class names into a single string.
 * Lightweight alternative to `clsx` for merging Tailwind classes.
 * @param values Class name fragments; falsy values are ignored.
 * @returns Space-separated class string.
 */
export function cn(...values: Array<string | false | null | undefined>): string {
  return values.filter(Boolean).join(' ');
}
