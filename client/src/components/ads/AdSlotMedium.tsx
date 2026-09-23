import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotMedium({ slot, variant, onBidClick }: Props) {
    return (
        <div className="w-full">
            <div className="panel-box aspect-video md:aspect-square">
                <img src={slot.imageUrl} alt={slot.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-1 text-start text-sm">
                {variant === 'published' ? (
                    <a href={slot.targetUrl} target="_blank" rel="noreferrer">Sponsored by: {slot.title}</a>
                ) : (
                    <span className="no-underline">
                        ${slot.currentPrice} — <button onClick={() => onBidClick?.(slot)} className="text-link underline">Bid</button>
                    </span>
                )}
            </div>
        </div>
    )
}