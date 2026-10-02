import { bids } from '../../lib/mockData'
import HotBadge from '../ui/HotBadge'

export default function NextBidListWidget() {
    const topSlot = [...bids].sort((a, b) => b.price - a.price)[0]

    return (
        <aside className="panel-box p-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">BID LIST</h2>
            <p className="text-xs text-muted mb-2">
                Sorted by most recent date
            </p>
            <ul className='space-y-1.5 text-xs'>
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