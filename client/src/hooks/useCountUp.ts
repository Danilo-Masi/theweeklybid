import { useEffect, useState } from 'react'

export function useCountUp(target: number, durationMs = 900) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        let start: number | null = null
        let frame: number

        const step = (timestamp: number) => {
            if (start === null) start = timestamp
            const progress = Math.min((timestamp - start) / durationMs, 1)
            setValue(Math.floor(progress * target))
            if (progress < 1) frame = requestAnimationFrame(step)
        }

        frame = requestAnimationFrame(step)
        return () => cancelAnimationFrame(frame)
    }, [target, durationMs])

    return value
}