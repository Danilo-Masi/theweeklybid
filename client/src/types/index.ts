export type SlotSize = 'hero' | 'medium' | 'small'

export interface AdSlot {
    id: string
    size: SlotSize
    title: string
    description: string
    imageUrl: string
    currentPrice: number
    minIncrement: number
    isSold: boolean
    targetUrl?: string
}