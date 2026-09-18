// src/components/ads/AdSlotHero.tsx
import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
    targetUrl?: string
}

export default function AdSlotHero({ slot, variant, onBidClick, targetUrl }: Props) {
    const content = (
        <article className="bevel-out bg-panel p-4">
            <div className="bevel-in bg-ink/10 h-56 overflow-hidden">
                <img src={slot.imageUrl} alt={slot.title} className="w-full h-full object-cover" />
            </div>
            <h2 className="font-display text-lg mt-4">{slot.title}</h2>
            <p className="font-sans text-xl text-muted mt-1">{slot.description}</p>

            {variant === 'auction' ? (
                <div className="flex items-center justify-between mt-4">
                    <span className="font-display text-xs">
                        OFFERTA: <span className="text-accent">${slot.currentPrice}</span>
                    </span>
                    <button
                        onClick={() => onBidClick?.(slot)}
                        className="bevel-out bg-accent text-paper font-display text-xs px-3 py-2 active:bevel-in"
                    >
                        FAI UN'OFFERTA
                    </button>
                </div>
            ) : (
                <span className="font-display text-[10px] text-muted block mt-4">SPONSOR N.12</span>
            )}
        </article>
    )

    return variant === 'published' && targetUrl ? (
        <a href={targetUrl} target="_blank" rel="noreferrer">{content}</a>
    ) : content
}