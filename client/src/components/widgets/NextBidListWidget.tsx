import { bids } from '../../lib/mockData'
import HotBadge from '../ui/HotBadge'

export default function NextBidListWidget() {
    const topSlot = [...bids].sort((a, b) => b.price - a.price)[0]

    return (
        <aside className="panel-box p-3">
            {/* Titolo */}
            <h2 className="text-sm font-bold border-b border-border pb-1 mb-2">BID LIST 📋</h2>
            {/* Sottotitolo */}
            <p className="text-xs text-muted mb-3">
                Sorted by most recent date
            </p>
            {/* Lista */}
            <ul className='space-y-2.5 text-xs'>
                {bids.map((bid) => (
                    <li key={bid.title} className="flex items-center justify-between gap-1 border-b border-border/50 pb-1">
                        <span className='truncate'>{bid.title}</span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            ${bid.price}
                            {bid.title === topSlot?.title && <HotBadge />}
                        </span>
                    </li>
                ))}

            </ul>
        </aside>
    )
}