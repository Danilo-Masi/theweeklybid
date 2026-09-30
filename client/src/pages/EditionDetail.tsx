import { useParams, Link } from 'react-router-dom'
import AdSlotHero from '../components/ads/AdSlotHero'
import AdSlotMedium from '../components/ads/AdSlotMedium'
import AdSlotSmall from '../components/ads/AdSlotSmall'
import UnderConstruction from '../components/ads/UnderConstruction'
import BidStatsWidget from '../components/widgets/BidStatsWidget'
import SlotWidget from '../components/widgets/ClicksWidget'
import WeekRecordsWidget from '../components/widgets/WeekRecordsWidget'
import MonthlyRecordsWidget from '../components/widgets/MonthlyRecordsWidget'
import { mockEditions } from '../lib/mockData'

export default function EditionDetail() {
  const { issueNumber } = useParams()
  const edition = mockEditions.find((e) => e.issueNumber === Number(issueNumber))

  if (!edition) {
    return (
      <div className="text-center py-10">
        <p className="text-sm text-muted">Issue not found.</p>
        <Link to="/archive" className="text-sm">« Back to Archive</Link>
      </div>
    )
  }

  const hero = edition.slots.find((s) => s.size === 'hero')!
  const mediums = edition.slots.filter((s) => s.size === 'medium')
  const smalls = edition.slots.filter((s) => s.size === 'small')

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[180px_1fr_180px]">
      <div className="order-2 lg:order-1">
        <BidStatsWidget />
        <SlotWidget />
      </div>

      <main className="order-1 lg:order-2">
        <p className="text-center text-xs text-muted mb-4">
          Issue No. {edition.issueNumber} ·{' '}
          {new Date(edition.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </p>

        {hero.isSold ? (
          <AdSlotHero slot={hero} variant="published" />
        ) : (
          <div className="w-full aspect-square md:aspect-video"><UnderConstruction /></div>
        )}

        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {mediums.map((slot) =>
            slot.isSold ? (
              <AdSlotMedium key={slot.id} slot={slot} variant="published" />
            ) : (
              <div key={slot.id} className="w-full aspect-video md:aspect-square"><UnderConstruction /></div>
            )
          )}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {smalls.map((slot) =>
            slot.isSold ? (
              <AdSlotSmall key={slot.id} slot={slot} variant="published" />
            ) : (
              <div key={slot.id} className="w-full aspect-square"><UnderConstruction /></div>
            )
          )}
        </div>
      </main>

      <div className="order-3">
        <WeekRecordsWidget />
        <MonthlyRecordsWidget />
      </div>
    </div>
  )
}