import ArenaHero from '../sections/ArenaHero';
import Champion from '../sections/Champion';
import Pool from '../sections/Pool';
import Bonus from '../sections/Bonus';
import Leaderboard from '../leaderboard/Leaderboard';
import Faqs from '../sections/Faqs';
import Footer from '../sections/Footer';

// Shared with V2
import FinalCall from '../../v2/sections/FinalCall';
import Checkpoint from '../../v2/components/Checkpoint';
import StickyJoin from '../../v2/components/StickyJoin';
import { LAPTOPS, POOL } from '../../v2/content';
import Background from '../../v1/components/Background';

/**
 * Redesign V3. First screen: reward stage with all three touchpoints visible.
 * Then the three rounds (each ending in a Join checkpoint), the Figma leaderboard,
 * the final call, a short FAQ and a slim footer. The page scales like an image (html.scale-artboard).
 */
export default function Home({ badgeStyle = 'medal' }: { badgeStyle?: 'medal' | 'stamp' }) {
  return (
    <>
      <main id="main" className="relative">
        <Background />
        <ArenaHero badgeStyle={badgeStyle} />
        <div aria-hidden="true" className="pointer-events-none relative -z-[5] h-0">
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-bg to-transparent sm:h-64" />
        </div>

        {/* Round 1 · The Champion */}
        <div className="pt-12 lg:pt-20">
          <Champion />
        </div>
        <Checkpoint round={1} name="The Champion" lead="Celebrate Anish’s run" />

        {/* Round 2 · The Pool */}
        <Pool />
        <Checkpoint round={2} name="The Pool" lead={`A ${POOL.amount} pool for India’s traders`} />

        {/* Round 3 · The Bonus */}
        <Bonus />
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
