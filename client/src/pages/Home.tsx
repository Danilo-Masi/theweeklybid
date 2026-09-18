import { Link } from 'react-router-dom'
import AdSlotHero from '../components/ads/AdSlotHero'
import AdSlotMedium from '../components/ads/AdSlotMedium'
import AdSlotSmall from '../components/ads/AdSlotSmall'
import { mockSlots } from '../lib/mockData'

export default function Home() {
  const hero = mockSlots.find((s) => s.size === 'hero')!
  const mediums = mockSlots.filter((s) => s.size === 'medium')
  const smalls = mockSlots.filter((s) => s.size === 'small')

  return (
    <div>
      
      <Link
        to="/next-edition"
        className="block bevel-out bg-gold p-4 mb-6 text-center hover:brightness-95 active:bevel-in">
        <p className="font-display text-sm">PRENOTA IL TUO SPOT PER IL N.13 →</p>
      </Link>

      <AdSlotHero slot={hero} variant="published" targetUrl={hero.targetUrl} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        {mediums.map((slot) => (
          <AdSlotMedium key={slot.id} slot={slot} variant="published" />
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {smalls.map((slot) => (
          <AdSlotSmall key={slot.id} slot={slot} variant="published" />
        ))}
      </div>
    </div>
  )
}