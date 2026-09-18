import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotMedium({ slot, variant, onBidClick }: Props) {
    const content = (
        <article className="bevel-out bg-panel p-3">
            <div className="bevel-in bg-ink/10 h-28 overflow-hidden">
                <img src={slot.imageUrl} alt={slot.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-xs mt-3">{slot.title}</h3>
            <p className="font-sans text-lg text-muted mt-1">{slot.description}</p>

            {variant === 'auction' ? (
                <div className="flex items-center justify-between mt-3">
                    <span className="font-display text-[10px] text-accent">${slot.currentPrice}</span>
                    <button
                        onClick={() => onBidClick?.(slot)}
                        className="bevel-out bg-accent text-paper font-display text-[10px] px-2 py-1 active:bevel-in"
                    >
                        OFFRI
                    </button>
                </div>
            ) : (
                <span className="font-display text-[9px] text-muted block mt-3">SPONSOR</span>
            )}
        </article>
    )

    return variant === 'published' && slot.targetUrl ? (
        <a href={slot.targetUrl} target="_blank" rel="noreferrer">{content}</a>
    ) : content
}