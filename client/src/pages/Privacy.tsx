import { privacySections, privacyLastUpdated } from '../lib/legalContent'

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-6 text-center">
        <p className="text-xs text-muted uppercase tracking-wide">Legal</p>
        <h1 className="font-serif text-3xl font-bold mt-1">Privacy Policy</h1>
        <p className="text-xs text-muted mt-2">
          Last updated:{' '}
          {new Date(privacyLastUpdated).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          })}
        </p>
      </header>

      <div className="space-y-4">
        {privacySections.map((section) => (
          <section key={section.id} className="panel-box p-4">
            <h2 className="text-sm font-bold">{section.heading}</h2>
            <p className="text-sm text-muted mt-2">{section.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}