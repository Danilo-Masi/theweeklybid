import { Link } from 'react-router-dom'
import { mockEditions } from '../lib/mockData'

export default function Archive() {
  return (
    <div>
      <header className="mb-6 text-center">
        <p className="text-xs text-muted uppercase tracking-wide">The Archive</p>
        <h1 className="font-serif text-3xl font-bold mt-1">Past Issues</h1>
        <p className="text-sm text-muted mt-2">Every edition ever published, in order.</p>
      </header>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {mockEditions.map((edition) => (
          <Link
            key={edition.issueNumber}
            to={`/archive/${edition.issueNumber}`}
            className="panel-box block p-3 text-center no-underline hover:bg-panel"
          >
            <div className="panel-box flex aspect-4/5 items-center justify-center text-3xl" aria-hidden="true">
              📰
            </div>
            <p className="mt-2 text-sm font-bold">Issue No. {edition.issueNumber}</p>
            <p className="text-xs text-muted">
              {new Date(edition.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric',
              })}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}