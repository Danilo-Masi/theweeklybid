import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-panel bevel-out mt-10">
            <div className="mx-auto max-w-5xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="font-display text-[9px]">THE WEEKLY BID — N.12</span>
                <nav className="flex gap-4 font-display text-[9px]">
                    <Link to="/privacy" className="px-2 py-1 bevel-out bg-panel hover:bg-gold">PRIVACY</Link>
                    <Link to="/terms" className="px-2 py-1 bevel-out bg-panel hover:bg-gold">TERMS</Link>
                </nav>
            </div>
        </footer>
    )
}