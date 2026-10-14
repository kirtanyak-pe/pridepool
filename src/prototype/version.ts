import { useCallback, useState } from 'react';

/**
 * PROTOTYPE ONLY: which version of the page to show.
 *   v1 = Original (the live site as it was), v2 = Redesign.
 * Chosen by ?v=1 / ?v=2 in the URL, else the last choice on this device, else the redesign.
 */
export type Version = 'v1' | 'v2';

const STORAGE_KEY = 'pridepool:version';

function readInitial(): Version {
  const fromUrl = new URLSearchParams(window.location.search).get('v');
  if (fromUrl === '1') return 'v1';
  if (fromUrl === '2') return 'v2';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'v1' || saved === 'v2') return saved;
  } catch {
    // storage blocked (private mode etc.) — fall through to the default
  }
  return 'v2';
}

export function useVersion() {
  const [version, setVersionState] = useState<Version>(readInitial);

  const setVersion = useCallback((next: Version) => {
    setVersionState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    // Keep the choice in the URL so a shared link opens the same version.
    const url = new URL(window.location.href);
    url.searchParams.set('v', next === 'v1' ? '1' : '2');
    url.hash = '';
    window.history.replaceState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return [version, setVersion] as const;
}
