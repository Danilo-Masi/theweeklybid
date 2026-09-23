import { useCountUp } from '../../hooks/useCountUp'

export default function MonthlyRecordsWidget() {
    // TODO: replace with real aggregated data from the server
    const biggestBid = useCountUp(650, 1000)
    const monthlyTotal = useCountUp(2140, 1200)

    return (
        <aside className="panel-box p-3">
            <h2 className="text-xs font-bold border-b border-border pb-1 mb-2">THIS MONTH'S RECORDS</h2>

            <dl className="text-xs space-y-2">
                <div>
                    <dt className="text-muted">Biggest single bid</dt>
                    <dd className="font-bold text-danger">${biggestBid} <span className="text-muted font-normal">— Globex Inc.</span></dd>
                </div>
                <div>
                    <dt className="text-muted">Most contested slot</dt>
                    <dd className="font-bold">Hero <span className="text-muted font-normal">— 14 bids</span></dd>
                </div>
                <div>
                    <dt className="text-muted">Total raised this month</dt>
                    <dd className="font-bold text-danger">${monthlyTotal}</dd>
                </div>
            </dl>
        </aside>
    )
}