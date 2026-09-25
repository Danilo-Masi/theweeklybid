import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotMedium({ slot, variant, onBidClick }: Props) {
    if (variant === 'auction') {
        return (
            <button type="button" onClick={() => onBidClick?.(slot)} className="block w-full text-left cursor-pointer">
                <div className="panel-box relative aspect-video md:aspect-square">
                    <img src={slot.imageUrl} alt="Current leading bid" className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 top-0 bg-danger text-paper text-center py-1">
                        <p className="text-[9px] font-bold uppercase tracking-wide">Current bid</p>
                        <p className="text-lg font-bold leading-none blink">${slot.currentPrice}</p>
                    </div>
                </div>
            </button>
        )
    }

    return (
        <div className="w-full">
            <div className="panel-box aspect-video md:aspect-square">
                <img src={slot.imageUrl} alt={slot.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-1 text-start text-sm">
                <a href={slot.targetUrl} target="_blank" rel="noreferrer">Sponsored by: {slot.title}</a>
            </div>
        </div>
    )
}