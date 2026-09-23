export default function Ticker() {
    // TODO: replace with real data from the server (current top bid, active bidders count)
    return (
        <div className="bg-danger text-paper overflow-hidden py-1 border-y border-border">
            <div className="marquee-track text-sm font-bold">
                BREAKING: Acme Studio wins the front page for $420 · 3 days left to bid on issue No. 13 · 8 sponsors competing for the hero slot
            </div>
        </div>
    )
}