import { sponsor } from '../../lib/mockData'
import HotBadge from '../ui/HotBadge'

export default function NextSlotListWidget() {
    const topSlot = [...sponsor].sort((a, b) => b.price - a.price)[0]

    return (
        <aside className="panel-box p-3">
            {/* Titolo */}
            <h2 className="text-sm font-bold border-b border-border pb-1 mb-2">AUCTION FOR SPOT 🛒</h2>
            {/* Sottotitolo */}
            <p className="text-xs text-muted mb-3">
                Sorted by spot id
            </p>
            {/* Lista */}
            <ul className="space-y-2.5 text-xs">
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