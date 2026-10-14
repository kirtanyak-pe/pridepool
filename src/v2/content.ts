/**
 * Redesign (v2) copy and links, kept in one place so they're easy to change.
 * Anything marked TODO still needs a business or legal decision before launch.
 */

/** Where "Join the ₹1 Crore Pool" goes. TODO: app install / sign-up link with campaign tracking. */
export const JOIN_URL = '#';

/** For people who already use Lemonn (they're in the pool automatically). TODO: app deep link / store link. */
export const OPEN_APP_URL = '#';

export const ANISH = {
  name: 'Anish Singh Thakur',
  /** TODO (legal): confirm the approved wording for his result, e.g. "World #2" or "Runner-up". */
  rank: '#2',
  rankLabel: 'World rank',
  event: 'World Trading Championship',
  team: 'Booming Bulls',
  /** His words on the championship stage (from the YouTube short below). */
  quoteBefore: 'I came here to become the champion.',
  quoteAfter: 'One more minute and I would be the champion.',
  videoId: 'WDVdQ0wyrvI',
};

export const POOL = {
  amount: '₹1 Crore',
  short: '₹1 Cr',
  label: 'Credits pool',
};

export const LAPTOPS = {
  count: 20,
  label: 'Laptops',
};

/** The one Join label, used on every Join button. */
export const JOIN_LABEL = `Join the ${POOL.amount} Pool`;

/** Page anchors for the three story touchpoints (each hero tile scrolls to one). */
export const ANCHORS = {
  champion: '#moment',
  pool: '#basis',
  laptops: '#giveaway',
};
