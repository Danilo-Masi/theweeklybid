import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-t border-ink/10 mt-16">

            <div className="mx-auto max-w-5xl py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted bg-orange-300">
                <span>The Weekly Bid — Number 12</span>
                <nav className="flex gap-6">
                    <Link to="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
                    <Link to="/terms" className="hover:text-ink transition-colors">Terms</Link>
                </nav>
            </div>

        </footer>
    )
}