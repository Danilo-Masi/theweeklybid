import { useEffect, useState } from 'react'

export function useAuctionCountdown(targetDate: Date) {
    const calculate = () => Math.max(targetDate.getTime() - Date.now(), 0)
    const [timeLeft, setTimeLeft] = useState(calculate())

    useEffect(() => {
        const interval = setInterval(() => setTimeLeft(calculate()), 1000)
        return () => clearInterval(interval)
    }, [targetDate])

    return {
        days: Math.floor(timeLeft / 86_400_000),
        hours: Math.floor((timeLeft / 3_600_000) % 24),
        minutes: Math.floor((timeLeft / 60_000) % 60),
        seconds: Math.floor((timeLeft / 1000) % 60),
        isOver: timeLeft <= 0,
    }
}