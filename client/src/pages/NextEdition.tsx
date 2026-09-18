import { useState } from 'react'
import Countdown from '../components/ui/Countdown'
import AdSlotHero from '../components/ads/AdSlotHero'
import AdSlotMedium from '../components/ads/AdSlotMedium'
import AdSlotSmall from '../components/ads/AdSlotSmall'
import BidModal from '../components/ads/BidModal'
import { mockAuctionSlots } from '../lib/mockData'
import type { AdSlot } from '../types'

const auctionEnd = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3)

export default function NextEdition() {
  const [selectedSlot, setSelectedSlot] = useState<AdSlot | null>(null)

  const hero = mockAuctionSlots.find((s) => s.size === 'hero')!
  const mediums = mockAuctionSlots.filter((s) => s.size === 'medium')
  const smalls = mockAuctionSlots.filter((s) => s.size === 'small')

  return (
    <div>
      <div className="bevel-out bg-gold p-3 mb-6 flex items-center justify-between flex-wrap gap-2">
        <p className="font-display text-xs">ASTA APERTA — NUMERO 13</p>
        <Countdown targetDate={auctionEnd} label="CHIUDE TRA" />
      </div>

      <AdSlotHero slot={hero} variant="auction" onBidClick={setSelectedSlot} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        {mediums.map((slot) => (
          <AdSlotMedium key={slot.id} slot={slot} variant="auction" onBidClick={setSelectedSlot} />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {smalls.map((slot) => (
          <AdSlotSmall key={slot.id} slot={slot} variant="auction" onBidClick={setSelectedSlot} />
        ))}
      </div>

      {selectedSlot && <BidModal slot={selectedSlot} onClose={() => setSelectedSlot(null)} />}
    </div>
  )
}