import { useAuctionCountdown } from '../../hooks/useAuctionCountdown'

const pad = (n: number) => n.toString().padStart(2, '0')

export default function Countdown({ targetDate }: { targetDate: Date }) {
    const { days, hours, minutes, seconds, isOver } = useAuctionCountdown(targetDate)

    if (isOver) return <span className="text-sm text-muted">Auction closed</span>

    const urgent = days === 0 && hours < 1

    return (
        <span className="text-sm">
            <span className={`font-bold text-2xl lg:text-3xl text-white ${urgent ? 'blink' : ''}`}>
                {days > 0 && `${days}d `}
                {pad(hours)}:{pad(minutes)}:{pad(seconds)}
            </span>
        </span>
    )
}