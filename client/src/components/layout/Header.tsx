import { NavLink } from 'react-router-dom'
import Countdown from '../ui/Countdown'

const navLinks = [
    { to: '/how-it-works', label: 'How it works' },
    { to: '/history', label: 'History' },
    { to: '/archive', label: 'Archive' },
    { to: '/stats', label: 'Stats' },
]

// TODO: sostituire con la data reale letta dal server
const currentAuctionEnd = new Date(Date.now() + 1000 * 60 * 60 * 26)

export default function Header() {
    return (
        <header className="border-b-2 border-ink/90">
            <div className="mx-auto max-w-5xl">

                <div className="flex items-center justify-between py-3 text-xs text-muted bg-red-500">
                    <span>Number 12 · Week 34</span>
                    <Countdown targetDate={currentAuctionEnd} label="Next issue in:" />
                </div>

                <div className="pb-6 text-center bg-green-500">
                    <NavLink to="/" className="inline-block">
                        <h1 className="font-serif text-4xl sm:text-5xl font-medium tracking-tight italic">
                            The Weekly Bid
                        </h1>
                    </NavLink>
                    <p className="mt-2 text-sm text-muted">
                        10 slots every week. The highest bidder gets the front page.
                    </p>
                </div>

                <nav className="flex justify-center gap-8 border-t border-ink/10 py-3 text-sm bg-blue-300">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => `transition-colors hover:text-accent ${isActive ? 'text-ink font-medium' : 'text-muted'}`}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

            </div>
        </header>
    )
}