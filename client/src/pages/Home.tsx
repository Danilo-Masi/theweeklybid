import AdSlotHero from '../components/ads/AdSlotHero'
import AdSlotMedium from '../components/ads/AdSlotMedium'
import AdSlotSmall from '../components/ads/AdSlotSmall'
import UnderConstruction from '../components/ads/UnderConstruction'
import CurrentBidWidget from '../components/widgets/CurrentBidWidget'
import StatsTicker from '../components/ui/StatsTicker'
import { mockSlots } from '../lib/mockData'
import CurrentClickWidget from '../components/widgets/CurrentClickWidget'
import CTAButton from '../components/ads/CTAButton'

export default function Home() {
  const hero = mockSlots.find((s) => s.size === 'hero')!
  const mediums = mockSlots.filter((s) => s.size === 'medium')
  const smalls = mockSlots.filter((s) => s.size === 'small')

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[180px_1fr_180px]">

      {/* Widget statistiche del numero */}
      <div className="order-2 lg:order-1">
        <CurrentBidWidget />
      </div>

      <main className="order-1 lg:order-2">
        {/* CTA per compare spot */}
        <CTAButton />

        {/* Barra di scorrimento con dati */}
        <StatsTicker />

        {/* Slot Hero*/}
        {hero.isSold ? (
          <AdSlotHero slot={hero} variant="published" />
        ) : (
          <div className="w-full aspect-square md:aspect-video">
            <UnderConstruction />
          </div>
        )}

        {/* Slots Medium*/}
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {mediums.map((slot) =>
            slot.isSold ? (
              <AdSlotMedium key={slot.id} slot={slot} variant="published" />
            ) : (
              <div key={slot.id} className="w-full aspect-video md:aspect-square">
                <UnderConstruction />
              </div>
            )
          )}
        </div>

        {/* Slots Small*/}
        <div className="grid grid-cols-3 gap-3">
          {smalls.map((slot) =>
            slot.isSold ? (
              <AdSlotSmall key={slot.id} slot={slot} variant="published" />
            ) : (
              <div key={slot.id} className="w-full aspect-square">
                <UnderConstruction />
              </div>
            )
          )}
        </div>
      </main>

      {/* Widget statistiche mensili */}
      <div className="order-3">
        <CurrentClickWidget />
      </div>
    </div>
  )
}