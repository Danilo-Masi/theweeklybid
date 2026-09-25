import { useCountUp } from '../../hooks/useCountUp'

export default function WeekRecordsWidget() {
    // TODO: replace with real aggregated data from the server
    const biggestBid = useCountUp(200, 1000)
    const monthlyTotal = useCountUp(1999, 1200)

    return (
        <aside className="panel-box p-3 mb-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">THIS WEEK RECORDS</h2>

            <dl className="text-xs space-y-2">
                <div>
                    <dt className="text-muted">Biggest single bid</dt>
                    <dd className="font-bold text-danger">${biggestBid} <span className="text-muted font-normal">— postonreddit</span></dd>
                </div>
                <div>
                    <dt className="text-muted">Most contested slot</dt>
                    <dd className="font-bold">Slot no.3 <span className="text-muted font-normal">— 5 bids</span></dd>
                </div>
                <div>
                    <dt className="text-muted">Total raised this week</dt>
                    <dd className="font-bold text-danger">${monthlyTotal}</dd>
                </div>
            </dl>
        </aside>
    )
}