import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import OriginalHome from './v1/pages/Home';
import RedesignHome from './v2/pages/Home';
import TermsPage from './v1/pages/TermsPage';
import useReveal from './v1/components/useReveal';
// PROTOTYPE ONLY: version + accent switcher. Remove these two imports, the switcher below and src/prototype/ before shipping.
import { usePrototypeSettings } from './prototype/settings';
import VersionSwitcher from './prototype/VersionSwitcher';

const path = window.location.pathname.replace(/\/$/, '');
const isTerms = path.endsWith('/terms-and-conditions');

function App() {
  const { version, setVersion, accent, setAccent, bg, setBg } = usePrototypeSettings();
  useReveal(`${path}:${version}`);

  useEffect(() => {
    document.title = isTerms
      ? 'Terms & Conditions — The Pride Pool · Lemonn × Booming Bulls'
      : '₹1 Crore Brokerage Credits Pool — Lemonn × Booming Bulls';
  }, []);

  if (isTerms) return <TermsPage />;

  return (
    <>
      {version === 'v2' ? <RedesignHome /> : <OriginalHome />}
      <VersionSwitcher version={version} onVersionChange={setVersion} accent={accent} onAccentChange={setAccent} bg={bg} onBgChange={setBg} />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
