import { sponsor } from '../../lib/mockData'
import HotBadge from '../ui/HotBadge'

export default function NextSlotListWidget() {
    const topSlot = [...sponsor].sort((a, b) => b.price - a.price)[0]

    return (
        <aside className="panel-box p-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">AUCTION FOR SPOT</h2>
            <p className="text-xs text-muted mb-2">
                Sorted by spot id
            </p>
            <ul className="space-y-1.5 text-xs">
                {sponsor.map((sp) => (
                    <li key={sp.id} className="flex items-center justify-between gap-1 border-b border-border/50 pb-1">
                        <span className="truncate">Slot {sp.id}</span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            ${sp.price}
                            {sp.id === topSlot?.id && <HotBadge />}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}