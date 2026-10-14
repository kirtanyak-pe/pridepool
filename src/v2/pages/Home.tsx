import Hero from '../sections/Hero';

// Not redesigned yet: these still come from the original (v1).
// As each section gets redesigned, swap its import to ../sections/<Name>.
import Background from '../../v1/components/Background';
import StickyJoin from '../../v1/components/StickyJoin';
import Footer from '../../v1/components/Footer';
import Basis from '../../v1/sections/Basis';
import Moment from '../../v1/sections/Moment';
import Giveaway from '../../v1/sections/Giveaway';
import Leaderboard from '../../v1/sections/Leaderboard';
import Faqs from '../../v1/sections/Faqs';

/** Redesign (v2) of the campaign page. */
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
