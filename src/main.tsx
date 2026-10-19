import { StrictMode, Suspense, lazy, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FinalHome from './v4/pages/Home';
import useReveal from './v1/components/useReveal';
// PROTOTYPE ONLY: version + accent switcher. Remove these two imports, the switcher below and src/prototype/ before shipping.
import { usePrototypeSettings } from './prototype/settings';
import VersionSwitcher from './prototype/VersionSwitcher';

// V4 (final) is in the main bundle; the older prototype versions and the Terms page load only when opened
const OriginalHome = lazy(() => import('./v1/pages/Home'));
const RedesignHome = lazy(() => import('./v2/pages/Home'));
const StageHome = lazy(() => import('./v3/pages/Home'));
const LiveHome = lazy(() => import('./v5/pages/Home'));
const TermsPage = lazy(() => import('./v1/pages/TermsPage'));
const LiveTermsPage = lazy(() => import('./v5/pages/TermsPage'));

const path = window.location.pathname.replace(/\/$/, '');
const isTerms = path.endsWith('/terms-and-conditions');

/** Runs useReveal after the (possibly lazy) page in the same Suspense boundary has committed */
function Reveal({ k }: { k: string }) {
  useReveal(k);
  return null;
}

function App() {
  const { version, setVersion, accent, setAccent, bg, setBg, hero, setHero, badge, setBadge } = usePrototypeSettings();
  const revealKey = `${path}:${version}:${hero}`;

  useEffect(() => {
    // V5 uses the live site's titles
    document.title = isTerms
      ? version === 'v5'
        ? 'Terms and Conditions — The Pride Pool · Booming Bulls × Lemonn'
        : 'Terms & Conditions — The Pride Pool · Lemonn × Booming Bulls'
      : version === 'v5'
        ? '₹1 Crore Brokerage Pool — Lemonn × Booming Bulls'
        : '₹1 Crore Brokerage Credits Pool — Lemonn × Booming Bulls';
  }, [version]);

  if (isTerms) return <Suspense fallback={null}>{version === 'v5' ? <LiveTermsPage /> : <TermsPage />}<Reveal k={revealKey} /></Suspense>;

  return (
    <>
      <Suspense fallback={null}>
        {version === 'v5' ? <LiveHome badgeStyle={badge} /> : version === 'v4' ? <FinalHome badgeStyle={badge} /> : version === 'v3' ? <StageHome badgeStyle={badge} /> : version === 'v2' ? <RedesignHome heroStyle={hero} /> : <OriginalHome />}
        <Reveal k={revealKey} />
      </Suspense>
      <VersionSwitcher version={version} onVersionChange={setVersion} accent={accent} onAccentChange={setAccent} bg={bg} onBgChange={setBg} hero={hero} onHeroChange={setHero} badge={badge} onBadgeChange={setBadge} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
