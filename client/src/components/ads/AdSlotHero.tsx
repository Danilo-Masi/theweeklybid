import type { AdSlot } from '../../types'
import PriceBanner from './PriceBanner'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotHero({ slot, variant, onBidClick }: Props) {
    {/* 
    if (variant === 'auction') {
        return (
            <button type="button" onClick={() => onBidClick?.(slot)} className="block w-full text-left cursor-pointer">
                <div className="panel-box relative aspect-square md:aspect-video">
                    <img src={slot.imageUrl} alt="Current leading bid" className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 top-0 bg-danger text-paper text-center py-1.5">
                        <p className="text-[10px] font-bold uppercase tracking-wide">Current bid</p>
                        <p className="text-2xl font-bold leading-none blink">${slot.currentPrice}</p>
                    </div>
                </div>
            </button>
        )
    }
        */}

    if (variant === 'auction') {
        return (
            <button type="button" onClick={() => onBidClick?.(slot)} className="block w-full text-left cursor-pointer">
                <div className="panel-box relative aspect-square md:aspect-video">
                    <img src={slot.imageUrl} alt="Current leading bid" className="h-full w-full object-cover" />
                    <PriceBanner price={500} />
                </div>
            </button>
        )
    }

    return (
        <a href={slot.targetUrl} target="_blank" rel="noreferrer" className="block text-left">
            <div className="panel-box aspect-square md:aspect-video">
                <img src={slot.imageUrl} alt={slot.title} className="h-full w-full object-cover object-center" />
            </div>
            <div className="mt-1 text-sm">
                <p>Sponsored by: {slot.title}</p>
            </div>
        </a>
    )
}