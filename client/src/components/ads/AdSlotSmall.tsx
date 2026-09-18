import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotSmall({ slot, variant, onBidClick }: Props) {
    const content = (
        <article className="bevel-out bg-panel p-2 h-full">
            <div className="bevel-in bg-ink/10 h-16 overflow-hidden">
                <img src={slot.imageUrl} alt={slot.title} className="w-full h-full object-cover" />
            </div>
            <p className="font-display text-[9px] mt-2 truncate">{slot.title}</p>
            <span className="font-display text-[9px] text-accent">${slot.currentPrice}</span>
        </article>
    )

    if (variant === 'auction') {
        return (
            <button onClick={() => onBidClick?.(slot)} className="text-left w-full active:translate-y-px">
                {content}
            </button>
        )
    }

    return slot.targetUrl ? (
        <a href={slot.targetUrl} target="_blank" rel="noreferrer">{content}</a>
    ) : content
}