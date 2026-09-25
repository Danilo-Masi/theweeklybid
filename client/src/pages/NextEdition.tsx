import { useState } from 'react'
import Countdown from '../components/ui/Countdown'
import AdSlotHero from '../components/ads/AdSlotHero'
import AdSlotMedium from '../components/ads/AdSlotMedium'
import AdSlotSmall from '../components/ads/AdSlotSmall'
import BidModal from '../components/ads/BidModal'
import BidStatsWidget from '../components/widgets/BidStatsWidget'
import SlotWidget from '../components/widgets/SlotWidget'
import WeekRecordsWidget from '../components/widgets/WeekRecordsWidget'
import MonthlyRecordsWidget from '../components/widgets/MonthlyRecordsWidget'
import { mockAuctionSlots, nextAuctionEnd } from '../lib/mockData'
import type { AdSlot } from '../types'

export default function NextEdition() {
  const [selectedSlot, setSelectedSlot] = useState<AdSlot | null>(null)

  const hero = mockAuctionSlots.find((s) => s.size === 'hero')!
  const mediums = mockAuctionSlots.filter((s) => s.size === 'medium')
  const smalls = mockAuctionSlots.filter((s) => s.size === 'small')

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[180px_1fr_180px]">
      <div className="order-2 lg:order-1">
        <BidStatsWidget />
        <SlotWidget />
      </div>

      <main className="order-1 lg:order-2">
        <div className="panel-box mb-4 flex flex-col gap-1 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-bold">Auction open — Issue No. 13</span>
          <Countdown targetDate={nextAuctionEnd} />
        </div>

        <AdSlotHero slot={hero} variant="auction" onBidClick={setSelectedSlot} />

        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {mediums.map((slot) => (
            <AdSlotMedium key={slot.id} slot={slot} variant="auction" onBidClick={setSelectedSlot} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          {smalls.map((slot) => (
            <AdSlotSmall key={slot.id} slot={slot} variant="auction" onBidClick={setSelectedSlot} />
          ))}
        </div>
      </main>

      <div className="order-3">
        <WeekRecordsWidget />
        <MonthlyRecordsWidget />
      </div>

      {selectedSlot && (
        <BidModal slot={selectedSlot} onClose={() => setSelectedSlot(null)} />
      )}

    </div >
  )
}