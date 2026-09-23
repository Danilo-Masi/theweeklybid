import type { AdSlot } from '../types'

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
        isSold: i < 4,
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
        isSold: i < 2,
        targetUrl: 'https://example.com',
    })),
];

// Single source of truth for the next auction's closing time
export const nextAuctionEnd = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)