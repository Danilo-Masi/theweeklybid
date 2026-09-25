import { mockSlots } from "../../lib/mockData";

export default function SlotWidget() {
    return (
        <aside className="panel-box p-3 mt-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">SLOT DISPONIBILLITY</h2>

            <ul className="space-y-1.5 text-xs">
                {mockSlots.map((slot) => (
                    <li key={slot.id} className="flex items-center justify-between gap-1 border-b border-border/50 pb-1">
                        <span className="truncate">{slot.title}</span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                            ${slot.currentPrice}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}
