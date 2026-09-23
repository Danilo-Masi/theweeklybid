import type { AdSlot } from '../../types'
import HotBadge from '../ui/HotBadge'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotHero({ slot, variant, onBidClick }: Props) {
    return (
        <div className="w-full">
            <div className="panel-box relative aspect-square md:aspect-video" >
                <img src={slot.imageUrl} alt={slot.title} className="h-full w-full object-cover" />
                <div className="absolute top-1 right-1"><HotBadge /></div>
            </div>
            <div className="mt-1 flex items-center justify-between text-sm">
                {variant === 'published' ? (
                    <a href={slot.targetUrl} target="_blank" rel="noreferrer">
                        Sponsored by: {slot.title}
                    </a>
                ) : (
                    <>
                        <span className="no-underline">
                            Current bid: <strong className="text-danger">${slot.currentPrice}</strong>
                        </span>
                        <button onClick={() => onBidClick?.(slot)} className="panel-box px-2 py-1 hover:bg-ink hover:text-paper">
                            Place a bid »
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}