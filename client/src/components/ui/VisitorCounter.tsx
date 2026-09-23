import { useCountUp } from '../../hooks/useCountUp'

export default function VisitorCounter() {
    // TODO: replace with real page view count from the server
    const count = useCountUp(4231, 1200)
    const digits = count.toString().padStart(6, '0').split('')

    return (
        <span className="inline-flex items-center gap-2 text-xs text-muted">
            YOU ARE VISITOR NO.
            <span className="inline-flex bg-ink text-lime-400 font-mono text-sm px-1 py-0.5 tracking-widest">
                {digits.map((d, i) => (
                    <span key={i} className="w-3 text-center">{d}</span>
                ))}
            </span>
        </span>
    )
}