import { useCountUp } from "../../hooks/useCountUp";
import { currentClick } from "../../lib/mockData";
import HotBadge from "../ui/HotBadge";

export default function CurrentClickWidget() {
    const totalClick = currentClick.reduce((sum, s) => sum + s.click, 0)
    const animatedTotal = useCountUp(totalClick, 1000)
    const topSlot = [...currentClick].sort((a, b) => b.click - a.click)[0]

    return (
        <aside className="panel-box p-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">CLICK COUNTER</h2>
            <p className="text-xs text-muted mb-2">
                Total click this issue:{' '}
                <strong className="text-danger">{animatedTotal} click</strong>
            </p>
            <ul className="space-y-1.5 text-xs">
                {currentClick.map((slot) => (
                    <li key={slot.id} className="flex items-center justify-between gap-1 border-b border-border/50 pb-1">
                        <span className="truncate">Slot {slot.id}</span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            {slot.click}
                            {slot.id === topSlot?.id && <HotBadge />}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
