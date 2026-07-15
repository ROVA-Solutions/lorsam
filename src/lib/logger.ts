/**
 * Minimal environment-aware logger.
 * Avoids raw `console.log` in application code and suppresses debug/info noise
 * in production builds while preserving warnings and errors.
 */
const isDev = import.meta.env.DEV;

export const logger = {
  /** Verbose diagnostic output; emitted only in development. */
  debug(...args: unknown[]): void {
    if (isDev) console.debug('[LORSAM]', ...args);
  },
  /** Informational output; emitted only in development. */
  info(...args: unknown[]): void {
    if (isDev) console.info('[LORSAM]', ...args);
  },
  /** Warnings; always emitted. */
  warn(...args: unknown[]): void {
    console.warn('[LORSAM]', ...args);
  },
  /** Errors; always emitted. */
  error(...args: unknown[]): void {
    console.error('[LORSAM]', ...args);
  },
};
