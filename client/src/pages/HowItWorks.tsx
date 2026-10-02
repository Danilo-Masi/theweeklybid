import CTAButton from '../components/ads/CTAButton'

const sections = [
  {
    number: '01',
    title: 'What is The Weekly Bid',
    body: "The Weekly Bid simulates the front page of a newspaper. Every issue has exactly 10 ad spaces: 1 hero spot, 6 medium spots and 3 small spots. Each week, the highest bidder for each spot gets their ad shown to every visitor for the entire following week.",
  },
  {
    number: '02',
    title: 'How editions work',
    body: "A new edition goes live every Monday at 00:00, replacing the previous one on the Home page. At the very same time, a new auction opens for the edition after that — visible on the Next Edition page, with all 10 spots up for bidding. That auction closes on Sunday night, right before the next Monday's edition goes live.",
  },
  {
    number: '03',
    title: 'How to bid on a spot',
    body: "No account needed — just your email. Enter a bid at or above the minimum increase for that spot, along with your ad title, link and image. Your card is only held, never charged, while your bid stands. If someone outbids you, your hold is released instantly and you're free to bid again. Only the final winner is actually charged, when the auction closes.",
  },
  {
    number: '04',
    title: "When your ad goes live",
    body: "If you win a spot, your ad appears on the Home page starting the following Monday at 00:00, and stays there for the full week — seen by every visitor until the next edition replaces it. Until then, your ad is shown as the current leading bid on the Next Edition page, but the link to your site only becomes clickable once the edition actually goes live.",
  },
  {
    number: '05',
    title: 'Every past issue, kept on record',
    body: "Every edition that has ever gone live stays on the Archive page, lined up in order by issue number and date. Each one stays fully visible and clickable, so anyone can browse a past issue exactly as it looked the week it ran — including the ads that won it.",
  },
]

export default function HowItWorks() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-6 text-center">
        <p className="text-xs text-muted uppercase tracking-wide">Special Report</p>
        <h1 className="font-serif text-3xl font-bold mt-1">How It Works</h1>
        <p className="text-sm text-muted mt-2">
          Everything you need to know before placing your first bid — in five short parts.
        </p>
      </header>
      {/*  Content */}
      <div className="space-y-4">
        {sections.map((section) => (
          <section key={section.number} className="panel-box p-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold text-danger leading-none">{section.number}</span>
              <h2 className="text-base font-bold">{section.title}</h2>
            </div>
            <p className="text-sm text-muted mt-2">{section.body}</p>
          </section>
        ))}
      </div>
      {/* CTA */}
      <div className="mt-8">
        <CTAButton />
      </div>
    </div>
  )
}