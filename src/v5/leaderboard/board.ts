/**
 * Leaderboard data. On the live site (pridepool.in) this comes from the server on every visit
 * (top 3 + contest with the page, ranks 4+ from /api/leaderboard?page=N, 10 per page).
 * This prototype can't reach that server, so it ships a SNAPSHOT taken from pridepool.in on 19 Oct 2026, 12:59 pm IST.
 * Same shape as the live board, so swapping in the real feed is a data change only.
 */
export type Entry = { rank: number; participant: string; display: string };

export type Board = {
  status: 'live' | 'unavailable';
  updatedAt: string;
  contest: {
    name: string;
    status: string;
    startDate: string;
    endDate: string;
    poolSize: string;
    used: string;
    remaining: string;
    usersEnrolled: string;
    usersBenefited: string;
    /** % of the pool used, or null if unknown */
    usedPct: number | null;
  };
  /** everyone on the board, rank order (1–3 go on the podium) */
  entries: Entry[];
  total: number;
};

const ENTRIES: [number, string, string][] = [[1, "BH*****************KI", "₹1700"], [2, "SU*******************AR", "₹1300"], [3, "SH*********AR", "₹1260"], [4, "KH*************************AN", "₹920"], [5, "PR*********************DE", "₹840"], [6, "RA**********************LA", "₹680"], [7, "KA***************AO", "₹660"], [8, "AS*************AV", "₹640"], [9, "AN*******NA", "₹600"], [10, "SR***************IN", "₹560"], [11, "DI*********LA", "₹540"], [12, "SU********IA", "₹480"], [13, "AN******AR", "₹480"], [14, "SI********************AT", "₹380"], [15, "HA*************LI", "₹360"], [16, "LA*************AL", "₹320"], [17, "NE***************MA", "₹320"], [18, "MO************AL", "₹320"], [19, "PR**********YA", "₹300"], [20, "AD**************GH", "₹280"], [21, "JO*********AN", "₹280"], [22, "SA*********AR", "₹280"], [23, "VI*******GH", "₹260"], [24, "SH*********HA", "₹240"], [25, "SA******************IL", "₹240"], [26, "SH**************GH", "₹240"], [27, "DH*****************************YA", "₹220"], [28, "RA***********LE", "₹220"], [29, "RU***************HU", "₹200"], [30, "PR************************TA", "₹180"], [31, "AS*****AM", "₹180"], [32, "MI*********AP", "₹160"], [33, "UJ*****************HI", "₹160"], [34, "TA**************JE", "₹140"], [35, "MA**********GH", "₹120"], [36, "AT******************DE", "₹120"], [37, "SU*******AR", "₹120"], [38, "AR**************GH", "₹120"], [39, "AN**************AR", "₹120"], [40, "AJ*******UT", "₹120"], [41, "SA******************RI", "₹120"], [42, "PR*************************AN", "₹100"], [43, "PA**************************YA", "₹100"], [44, "MA*********EK", "₹100"], [45, "NI**********************YA", "₹100"], [46, "AB*****************DA", "₹100"], [47, "LO***********AL", "₹80"], [48, "VA*********************IL", "₹80"], [49, "KA*********AV", "₹80"], [50, "MU**I ", "₹80"], [51, "JI****************GI", "₹80"], [52, "DE*********DA", "₹80"], [53, "VI*********AR", "₹80"], [54, "KR*****RG", "₹60"], [55, "AM*************IK", "₹60"], [56, "IQ***********************AD", "₹60"], [57, "MA*********************DE", "₹60"], [58, "SA*******************RE", "₹40"], [59, "MA*********UT", "₹40"], [60, "RA***************HI", "₹40"], [61, "SO***A ", "₹40"], [62, "AN***G ", "₹40"], [63, "PR***************NI", "₹40"], [64, "AB**********NG", "₹40"], [65, "PR*****************IL", "₹40"], [66, "PR*************************AR", "₹40"], [67, "RA*****NT", "₹40"], [68, "NA******EN", "₹40"], [69, "RA**************LA", "₹40"], [70, "MA*********GH", "₹40"], [71, "SA**************KH", "₹40"], [72, "MO********UM", "₹40"], [73, "MU**************AV", "₹40"], [74, "AS******************AN", "₹40"], [75, "UR*********RI", "₹40"], [76, "PR*******************AR", "₹40"], [77, "SW******OY", "₹40"], [78, "AN*************TI", "₹40"], [79, "SA*********AR", "₹40"], [80, "SW******************AR", "₹40"], [81, "PA*********AR", "₹20"], [82, "AR**************AT", "₹20"], [83, "SH**********DI", "₹20"], [84, "SU**************AL", "₹20"], [85, "SO********************LE", "₹20"], [86, "DE******U ", "₹20"], [87, "SH*********AR", "₹20"], [88, "MA*******************AR", "₹20"], [89, "MI*****************AV", "₹20"], [90, "NI********TA", "₹20"], [91, "SA*********VI", "₹20"], [92, "NA*********IN", "₹20"], [93, "SH***********LA", "₹20"], [94, "MO********AR", "₹20"], [95, "PR*****************AH", "₹13"]];

export const BOARD: Board = {
  status: 'live',
  updatedAt: '19 Oct, 12:59 pm IST',
  contest: {
    name: '₹1 Cr Pride Pool',
    status: 'ACTIVE',
    startDate: '2026-10-17',
    endDate: '2026-11-20',
    poolSize: '₹10000000',
    used: '₹19293',
    remaining: '₹9980707',
    usersEnrolled: '3960',
    usersBenefited: '95',
    usedPct: 0.19293,
  },
  entries: ENTRIES.map(([rank, participant, display]) => ({ rank, participant, display })),
  total: ENTRIES.length,
};

/** The live site's page size for places 4 and below */
export const PAGE_SIZE = 10;

/** Places 4+ for one page (stands in for GET /api/leaderboard?page=N) */
export function pageRows(page: number): Entry[] {
  const from = 3 + (page - 1) * PAGE_SIZE;
  return BOARD.entries.slice(from, from + PAGE_SIZE);
}
