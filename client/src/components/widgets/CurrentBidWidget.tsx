import { useCountUp } from '../../hooks/useCountUp'
import { currentBid } from '../../lib/mockData'
import HotBadge from '../ui/HotBadge'

export default function CurrentBidWidget() {
    const totalRaised = currentBid.reduce((sum, s) => sum + s.price, 0)
    const animatedTotal = useCountUp(totalRaised, 1000)
    const topSlot = [...currentBid].sort((a, b) => b.price - a.price)[0]

    return (
        <aside className="panel-box p-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">BIDS AT A GLANCE</h2>

            <p className="text-xs text-muted mb-2">
                Total raised this issue:{' '}
                <strong className="text-danger">${animatedTotal}</strong>
            </p>

            <ul className="space-y-1.5 text-xs">
                {currentBid.map((slot) => (
                    <li key={slot.id} className="flex items-center justify-between gap-1 border-b border-border/50 pb-1">
                        <span className="truncate">Slot {slot.id}</span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            ${slot.price}
                            {slot.id === topSlot?.id && <HotBadge />}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}