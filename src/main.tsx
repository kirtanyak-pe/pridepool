import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import TermsPage from './pages/TermsPage';
import useReveal from './components/useReveal';

const path = window.location.pathname.replace(/\/$/, '');
const isTerms = path.endsWith('/terms-and-conditions');

function App() {
  useReveal(path);
  useEffect(() => {
    document.title = isTerms
      ? 'Terms & Conditions — The Pride Pool · Lemonn × Booming Bulls'
      : '₹1 Crore Brokerage Credits Pool — Lemonn × Booming Bulls';
  }, []);
  return isTerms ? <TermsPage /> : <Home />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
