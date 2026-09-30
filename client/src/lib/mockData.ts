import type { AdSlot } from '../types'
import type { Edition } from '../types'

// Edizione corrente
export const mockSlots: AdSlot[] = [
    {
        id: 'hero',
        size: 'hero',
        title: 'Acme Studio',
        description: 'Product design and development for startups that need to move fast.',
        imageUrl: 'https://placehold.co/728x600',
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
        imageUrl: 'https://placehold.co/300x250',
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
        imageUrl: 'https://placehold.co/125x125',
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
]