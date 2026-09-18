import type { AdSlot } from '../types'

export const mockSlots: AdSlot[] = [
    {
        id: 'hero', size: 'hero', title: 'Sponsor Grande 1',
        description: 'Etiam ipsum ante, consequat eleifend sodales eu, commodo sit amet massa. Cras dictum nisi vel fringilla dapibus. Nullam hendrerit dapibus orci. Curabitur erat nunc, lacinia sit amet lectus id, venenatis ornare leo. Sed velit metus, porttitor a dignissim ac, pulvinar ac enim. Phasellus nec felis pulvinar, molestie ipsum id, imperdiet.',
        imageUrl: 'https://placehold.co/800x400', currentPrice: 420, minIncrement: 15,
        isSold: true, targetUrl: 'https://example.com',
    },
    ...Array.from({ length: 6 }).map((_, i) => ({
        id: `medium-${i + 1}`, size: 'medium' as const, title: `Sponsor Medio ${i + 1}`,
        description: "Nam vestibulum congue nulla, sit amet placerat ex rutrum at. Duis sollicitudin ligula sit amet pellentesque scelerisque. Nam semper libero.",
        imageUrl: 'https://placehold.co/400x240', currentPrice: 60 + i * 10, minIncrement: 5,
        isSold: i < 4, targetUrl: 'https://example.com',
    })),
    ...Array.from({ length: 3 }).map((_, i) => ({
        id: `small-${i + 1}`, size: 'small' as const, title: `Sponsor ${i + 1}`,
        description: '', imageUrl: 'https://placehold.co/160x100', currentPrice: 20 + i * 5,
        minIncrement: 5, isSold: i < 2, targetUrl: 'https://example.com',
    })),
]

// Slot della PROSSIMA edizione, ancora in asta (nessuno "venduto")
export const mockAuctionSlots: AdSlot[] = mockSlots.map((s) => ({
    ...s,
    isSold: false,
    currentPrice: Math.round(s.currentPrice * 0.6), // offerte più basse, asta ancora aperta
}))