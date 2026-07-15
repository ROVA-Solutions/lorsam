import { useCallback, useEffect, useState } from 'react';
import { SPLASH_DURATION_MS, SPLASH_SESSION_KEY } from '../lib/constants';
import { logger } from '../lib/logger';

/** Safely read the splash-seen flag; treats storage errors as "not seen". */
function hasSeenSplash(): boolean {
  try {
    return sessionStorage.getItem(SPLASH_SESSION_KEY) === '1';
  } catch (error) {
    logger.warn('sessionStorage unavailable', error);
    return false;
  }
}

/** Safely persist the splash-seen flag. */
function markSplashSeen(): void {
  try {
    sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
  } catch (error) {
    logger.warn('Could not persist splash flag', error);
  }
}

/** Pure check (no writes) deciding whether the splash should play this mount. */
function shouldShowSplash(): boolean {
  if (typeof window === 'undefined') return false;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return !hasSeenSplash() && !prefersReducedMotion;
}

interface IUseSessionSplash {
  /** Whether the splash screen should currently be rendered. */
  visible: boolean;
  /** Dismiss the splash immediately and persist the seen flag. */
  dismiss: () => void;
}

/**
 * Controls the intro splash so it plays at most once per browser session.
 * Skipped entirely when the user prefers reduced motion. Auto-dismisses after
 * {@link SPLASH_DURATION_MS}. Initial visibility is derived synchronously from
 * storage in the state initializer to avoid setState-in-effect churn.
 */
export function useSessionSplash(): IUseSessionSplash {
  const [visible, setVisible] = useState<boolean>(shouldShowSplash);

  const dismiss = useCallback(() => {
    markSplashSeen();
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) {
      markSplashSeen();
      return;
    }
    const timer = window.setTimeout(dismiss, SPLASH_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [visible, dismiss]);

  return { visible, dismiss };
}
