import ArenaHero from '../sections/ArenaHero';

// Everything below the first screen is shared with V2 for now.
import Champion from '../../v2/sections/Champion';
import FinalCall from '../../v2/sections/FinalCall';
import Checkpoint from '../../v2/components/Checkpoint';
import StickyJoin from '../../v2/components/StickyJoin';
import { LAPTOPS, POOL } from '../../v2/content';
import Background from '../../v1/components/Background';
import Footer from '../../v1/components/Footer';
import Basis from '../../v1/sections/Basis';
import Giveaway from '../../v1/sections/Giveaway';
import Leaderboard from '../../v1/sections/Leaderboard';
import Faqs from '../../v1/sections/Faqs';

/**
 * Redesign V3: same story as V2, but the first screen is a reward stage where all three
 * touchpoints stay visible, and the whole page scales like an image (html.scale-artboard).
 */
export default function Home() {
  return (
    <>
      <main id="main" className="relative">
        <Background />
        <ArenaHero />
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
