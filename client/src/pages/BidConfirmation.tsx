import { Link, useSearchParams } from 'react-router-dom'

export default function BidConfirmation() {
  const [params] = useSearchParams()
  const amount = params.get('amount')
  const slotId = params.get('slot')

  return (
    <div className="max-w-md mx-auto text-center py-10">
      <p className="text-xs text-muted uppercase tracking-wide">Bid received</p>
      <h1 className="font-serif text-3xl font-bold mt-1">You're in the running »</h1>

      <div className="panel-box mt-6 p-4 text-left text-sm">
        <p>
          Your bid{amount && <> of <strong className="text-danger">${amount}</strong></>}
          {slotId && <> for slot <strong>{slotId}</strong></>} has been placed.
        </p>
        <p className="text-muted mt-2">
          Your card has only been authorized, not charged. If someone bids higher before
          the auction closes, the hold is released automatically — you'll only be charged
          if you're still the winning bid when it ends.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
        <Link to="/next-edition" className="panel-box px-4 py-2 text-sm font-bold hover:bg-ink hover:text-paper">
          View current bids »
        </Link>
        <Link to="/" className="panel-box px-4 py-2 text-sm font-bold hover:bg-ink hover:text-paper">
          Back to the front page
        </Link>
      </div>
    </div>
  )
}