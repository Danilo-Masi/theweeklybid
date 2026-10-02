import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto text-center py-10">
      <p className="font-serif text-6xl font-bold text-danger">404</p>
      <h1 className="text-lg font-bold mt-2">Page not found</h1>
      <p className="text-sm text-muted mt-2">
        This page doesn't exist — or this issue hasn't been printed yet.
      </p>
      <Link to="/" className="panel-box inline-block mt-6 px-4 py-2 text-sm font-bold hover:bg-ink hover:text-paper">
        « Back to the front page
      </Link>
    </div>
  )
}