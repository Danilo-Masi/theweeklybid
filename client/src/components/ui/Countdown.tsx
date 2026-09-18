import { useAuctionCountdown } from '../../hooks/useAuctionCountdown'

interface CountdownProps {
    targetDate: Date
    label?: string
}

const pad = (n: number) => n.toString().padStart(2, '0')

export default function Countdown({ targetDate, label = 'CHIUDE TRA' }: CountdownProps) {
    const { days, hours, minutes, seconds, isOver } = useAuctionCountdown(targetDate)

    if (isOver) {
        return <span className="font-display text-xs text-muted">ASTA CHIUSA</span>
    }

    return (
        <div className="inline-flex items-center gap-2">
            <span className="font-display text-[10px] text-ink">{label}</span>
            <span className="bevel-in bg-ink text-gold font-display text-sm px-2 py-1 tabular-nums">
                {days > 0 && `${days}G `}
                {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </span>
        </div>
    )
}