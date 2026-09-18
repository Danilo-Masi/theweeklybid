import { NavLink } from 'react-router-dom'
import Countdown from '../ui/Countdown'

const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/how-it-works', label: 'HOW IT WORKS' },
    { to: '/archive', label: 'ARCHIVE' },
    { to: '/stats', label: 'STATS' },
]

const currentAuctionEnd = new Date(Date.now() + 1000 * 60 * 60 * 26)

export default function Header() {
    return (
        <header className="bg-panel bevel-out border-b-0">
            <div className="mx-auto max-w-5xl ">
                {/* Intestazione */}
                <div className="flex items-center justify-between py-2 font-display text-[10px]">
                    {/* TODO: Generare automaticamente i dati */}
                    <span>N.12 · SETTIMANA 34</span>
                    <Countdown targetDate={currentAuctionEnd} label="PROSSIMO NUMERO TRA" />
                </div>
                {/* Titolo */}
                <div className="bg-accent bevel-out py-6 text-center my-2">
                    <NavLink to="/">
                        <h1 className="font-display text-2xl sm:text-4xl text-gold drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                            THE WEEKLY BID
                        </h1>
                    </NavLink>
                    <p className="font-sans text-xl text-paper mt-2">
                        10 slots every week. The highest bidder gets the front page.
                    </p>
                </div>
                {/* Link */}
                <nav className="flex justify-center gap-6 py-2 font-display text-[10px]">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) => `px-2 py-1 bevel-out bg-panel hover:bg-gold transition-colors ${isActive ? 'bg-gold' : ''}`}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}