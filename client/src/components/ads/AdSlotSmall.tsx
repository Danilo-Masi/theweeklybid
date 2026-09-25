import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotSmall({ slot, variant, onBidClick }: Props) {
    if (variant === 'auction') {
        return (
            <button type="button" onClick={() => onBidClick?.(slot)} className="block w-full text-center cursor-pointer">
                <div className="panel-box relative w-full aspect-square">
                    <img src={slot.imageUrl} alt="Current leading bid" className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 top-0 bg-danger text-paper py-1.5">
                        <p className="text-xs font-bold leading-tight blink">${slot.currentPrice}</p>
                    </div>
                </div>
            </button>
        )
    }

    return (
        <a href={slot.targetUrl} target="_blank" rel="noreferrer" className="block text-center">
            <div className="panel-box w-full aspect-square">
                <img src={slot.imageUrl} alt={slot.title} className="h-full w-full object-cover" />
            </div>
        </a>
    )
}