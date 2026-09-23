import type { AdSlot } from '../../types'

interface Props {
    slot: AdSlot
    variant: 'published' | 'auction'
    onBidClick?: (slot: AdSlot) => void
}

export default function AdSlotSmall({ slot, variant, onBidClick }: Props) {
    const image = (
        <div className="panel-box w-full" style={{ aspectRatio: '1 / 1' }}>
            <img src={slot.imageUrl} alt={slot.title} className="h-full w-full object-cover" />
        </div>
    )

    if (variant === 'auction') {
        return (
            <button onClick={() => onBidClick?.(slot)} className="block w-full text-center no-underline">
                {image}
                <span className="mt-0.5 block text-[10px]">${slot.currentPrice}</span>
            </button>
        )
    }

    return (
        <a href={slot.targetUrl} target="_blank" rel="noreferrer" className="block text-center">
            {image}
        </a>
    )
}