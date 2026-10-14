import Background from '../components/Background';
import StickyJoin from '../components/StickyJoin';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Basis from '../sections/Basis';
import Moment from '../sections/Moment';
import Giveaway from '../sections/Giveaway';
import Leaderboard from '../sections/Leaderboard';
import Faqs from '../sections/Faqs';

export default function Home() {
  return (
    <>
      <main id="main" className="relative">
        <Background />
        <Hero />
        {/* Fade from hero into the page */}
        <div aria-hidden="true" className="pointer-events-none relative -z-[5] h-0">
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent sm:h-64" />
        </div>
        <Basis />
        <Moment />
        <Giveaway />
        <Leaderboard />
        <Faqs />
      </main>
      <Footer />
      <StickyJoin />
    </>
  );
}
