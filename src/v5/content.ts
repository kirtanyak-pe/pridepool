/**
 * V5 copy and links, kept in one place so they're easy to change.
 * Matches the live site (pridepool.in) as edited by the product team.
 */

/** New users: sign up on Lemonn through the campaign invite. */
export const JOIN_URL = 'https://stocks.trade-kar.com/invite?data=PridePool';

/** Existing users: open the Lemonn app (Adjust link; on a Mac desktop it goes straight to the App Store page). */
export const OPEN_APP_URL = 'https://lemonn.go.link?adj_t=25j8tbn3';
const APP_STORE_URL = 'https://apps.apple.com/in/app/lemonn-share-market-app/id6474676842';

/** The Open-app link for this device: Mac desktops (no touch) get the App Store page via adj_redirect. */
export function openAppUrl() {
  if (typeof navigator === 'undefined') return OPEN_APP_URL;
  const ua = navigator.userAgent;
  const macDesktop = /Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad|iPod|Android|Mobile/i.test(ua) && navigator.maxTouchPoints <= 1;
  return macDesktop ? `${OPEN_APP_URL}&adj_redirect=${encodeURIComponent(APP_STORE_URL)}` : OPEN_APP_URL;
}

export const ANISH = {
  name: 'Anish Singh Thakur',
  rank: '#2',
  rankLabel: 'World rank',
  event: 'World Trading Championship',
  team: 'Booming Bulls',
  /** His words on the championship stage (from the YouTube short below). */
  quoteBefore: 'I came here to become the champion.',
  /** \n = forced line break on the page */
  quoteAfter: 'One more minute and\nI would be the champion.',
  videoId: 'WDVdQ0wyrvI',
};

export const POOL = {
  amount: '₹1 Crore',
  short: '₹1 Cr',
  /** Headline name of the pool (hero). The campaign itself is still "The Pride Pool". */
  title: 'Brokerage Pool',
  label: 'Brokerage pool',
  /** \n = forced line break on the page */
  pitch: 'More trades. More brokerage saved.\nHigher chances of winning a laptop.',
};

export const LAPTOPS = {
  count: 20,
  label: 'Laptops',
};

/** The Join (new user) label, used on every Join button. */
export const JOIN_LABEL = 'Sign Up & Join';
/** The Open-app (existing user) label. */
export const OPEN_APP_LABEL = 'Open Lemonn App';
/** Small captions above each label in the button pair */
export const EXISTING_USER = 'Existing user';
export const NEW_USER = 'New user';
/** The reassurance line under the button pair */
export const EXISTING_NOTE = 'Existing Lemonn customers are already part of the Pride Pool.';

/** Page anchors for the three story touchpoints (each hero tile scrolls to one). */
export const ANCHORS = {
  champion: '#moment',
  pool: '#enter',
  laptops: '#enter',
};
