import Hero from '../sections/Hero';
import Champion from '../sections/Champion';
import FinalCall from '../sections/FinalCall';
import Checkpoint from '../components/Checkpoint';
import StickyJoin from '../components/StickyJoin';
import { LAPTOPS, POOL } from '../content';

// Not redesigned yet: these still come from the original (v1).
// As each section gets redesigned, swap its import to ../sections/<Name>.
import Background from '../../v1/components/Background';
import Footer from '../../v1/components/Footer';
import Basis from '../../v1/sections/Basis';
import Giveaway from '../../v1/sections/Giveaway';
import Leaderboard from '../../v1/sections/Leaderboard';
import Faqs from '../../v1/sections/Faqs';

/**
 * Redesign (v2) of the campaign page.
 * Story order: trailer (hero) → Round 1 Anish → Round 2 ₹1 Crore pool → Round 3 laptops,
 * each round ending in a Join checkpoint, then the leaderboard and a final call.
 */
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

        {/* Round 1 · The Champion */}
        <div className="pt-12 lg:pt-20">
          <Champion />
        </div>
        <Checkpoint round={1} name="The Champion" lead="Celebrate Anish’s run" />

        {/* Round 2 · The Pool */}
        <Basis />
        <Checkpoint round={2} name="The Pool" lead={`A ${POOL.amount} pool for India’s traders`} />

        {/* Round 3 · The Bonus */}
        <Giveaway />
        <Checkpoint round={3} name="The Bonus" lead={`${LAPTOPS.count} laptops for participants`} />

        <Leaderboard />
        <FinalCall />
        <Faqs />
      </main>
      <Footer />
      <StickyJoin />
    </>
  );
}
