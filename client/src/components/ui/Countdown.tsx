import { useAuctionCountdown } from '../../hooks/useAuctionCountdown'

interface CountdownProps {
    targetDate: Date
    label?: string
}

const pad = (n: number) => n.toString().padStart(2, '0')

export default function Countdown({ targetDate, label = 'chiude tra' }: CountdownProps) {
    const { days, hours, minutes, seconds, isOver } = useAuctionCountdown(targetDate)

    if (isOver) return <span className="text-sm font-medium text-muted">asta chiusa</span>

    return (
        <span className="inline-flex items-center gap-1.5 text-sm">
            <span className="text-muted">{label}</span>
            <span className="inline-flex items-baseline gap-0.5 font-semibold text-accent animate-pulse tabular-nums">
                {days > 0 && <span>{days}g</span>}
                <span>{pad(hours)}:{pad(minutes)}:{pad(seconds)}</span>
            </span>
        </span>
    )
}