import type { AdSlot } from '../types'
import type { Edition } from '../types'
import sponsor_1 from "../assets/images/sponsor_1.jpeg";

// Edizione corrente
export const mockSlots: AdSlot[] = [
    {
        id: 'hero',
        size: 'hero',
        title: 'Microsoft OS',
        description: 'Product design and development for startups that need to move fast.',
        imageUrl: sponsor_1,
        currentPrice: 420,
        minIncrement: 15,
        isSold: true,
        targetUrl: 'https://example.com',
    },
    ...Array.from({ length: 6 }).map((_, i) => ({
        id: `medium-${i + 1}`,
        size: 'medium' as const,
        title: `Sponsor ${i + 1}`,
        description: 'Short ad description.',
        imageUrl: sponsor_1,
        currentPrice: 60 + i * 10,
        minIncrement: 5,
        isSold: true,
        targetUrl: 'https://example.com',
    })),
    ...Array.from({ length: 3 }).map((_, i) => ({
        id: `small-${i + 1}`,
        size: 'small' as const,
        title: `Sponsor ${i + 1}`,
        description: '',
        imageUrl: sponsor_1,
        currentPrice: 20 + i * 5,
        minIncrement: 5,
        isSold: true,
        targetUrl: 'https://example.com',
    })),
];

// Termine prossima edizione
export const nextAuctionEnd = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)

// Slot prossima edizione
export const mockAuctionSlots: AdSlot[] = mockSlots.map((s) => ({
    ...s,
    isSold: false,
    currentPrice: Math.round(s.currentPrice * 0.6),
}))

{/* Edizione specifica */ }
function buildEditionSlots(seed: number): AdSlot[] {
    return [
        {
            id: `hero-${seed}`,
            size: 'hero',
            title: `Sponsor Hero ${seed}`,
            description: 'Product design and development for startups that need to move fast.',
            imageUrl: 'https://placehold.co/728x600',
            currentPrice: 300 + seed * 15,
            minIncrement: 15,
            isSold: seed % 5 !== 0,
            targetUrl: 'https://example.com',
        },
        ...Array.from({ length: 6 }).map((_, i) => ({
            id: `medium-${seed}-${i + 1}`,
            size: 'medium' as const,
            title: `Sponsor ${seed}.${i + 1}`,
            description: 'Short ad description.',
            imageUrl: 'https://placehold.co/300x250',
            currentPrice: 50 + i * 8 + seed,
            minIncrement: 5,
            isSold: i < 5,
            targetUrl: 'https://example.com',
        })),
        ...Array.from({ length: 3 }).map((_, i) => ({
            id: `small-${seed}-${i + 1}`,
            size: 'small' as const,
            title: `Sponsor ${seed}.s${i + 1}`,
            description: '',
            imageUrl: 'https://placehold.co/125x125',
            currentPrice: 15 + i * 5 + seed,
            minIncrement: 5,
            isSold: i < 2,
            targetUrl: 'https://example.com',
        })),
    ]
}

{/* Miniature */ }
export const mockEditions: Edition[] = [
    { issueNumber: 6, publishedAt: '2026-09-22', slots: buildEditionSlots(11) },
    { issueNumber: 5, publishedAt: '2026-09-15', slots: buildEditionSlots(10) },
    { issueNumber: 4, publishedAt: '2026-09-08', slots: buildEditionSlots(9) },
    { issueNumber: 3, publishedAt: '2026-09-01', slots: buildEditionSlots(8) },
    { issueNumber: 2, publishedAt: '2026-08-25', slots: buildEditionSlots(7) },
    { issueNumber: 1, publishedAt: '2026-08-18', slots: buildEditionSlots(8) },
];

{/* CurrentBidWidget.tsx - Dati mock per le vendite dell'edizione corrente */ }
export const currentBid = [
    { id: 1, price: 567 },
    { id: 2, price: 320 },
    { id: 3, price: 45 },
    { id: 4, price: 78 },
    { id: 5, price: 11 },
    { id: 6, price: 23 },
    { id: 7, price: 0 },
    { id: 8, price: 11 },
    { id: 9, price: 223 },
    { id: 10, price: 119 },
];

{/* CurrentClickWidget.tsx - Dati mock per i click dell'edizione corrente */ }
export const currentClick = [
    { id: 1, click: 567 },
    { id: 2, click: 320 },
    { id: 3, click: 45 },
    { id: 4, click: 78 },
    { id: 5, click: 11 },
    { id: 6, click: 23 },
    { id: 7, click: 0 },
    { id: 8, click: 11 },
    { id: 9, click: 223 },
    { id: 10, click: 119 },
];

{/* NextBidListWidget.tsx - Dati mock per la lista completa delle offerte */ }
export const bids = [
    { title: 'Google', price: 567 },
    { title: 'Supabase', price: 320 },
    { title: 'Apple', price: 45 },
    { title: 'Udemy', price: 78 },
    { title: 'TryHackMe', price: 11 },
    { title: 'HackTheBox', price: 23 },
    { title: 'MrRobot', price: 3789 },
    { title: 'Fairchild', price: 11 },
    { title: 'Intel', price: 223 },
    { title: 'Postonreddit', price: 119 },
];

{/* NextSlotListWidget.tsx - Dati mock per le offerte su ogni slot */ }
export const sponsor = [
    { id: 1, price: 567 },
    { id: 2, price: 320 },
    { id: 3, price: 45 },
    { id: 4, price: 78 },
    { id: 5, price: 11 },
    { id: 6, price: 23 },
    { id: 7, price: 3789 },
    { id: 8, price: 11 },
    { id: 9, price: 223 },
    { id: 10, price: 119 },
];