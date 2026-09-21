import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="panel-box mt-10">
            <div className="mx-auto max-w-3xl px-4 py-5 flex flex-col items-center gap-3 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
                <p>The Weekly Bid — Numero 12 · Tutti i diritti riservati</p>
                <nav className="flex gap-4">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/how-it-works">How it works</Link>
                </nav>
            </div>

            <div className="border-t border-border">
                <div className="mx-auto max-w-3xl px-4 py-3 flex flex-wrap justify-center gap-2">
                    <span className="panel-box px-2 py-1 text-[11px] no-underline">Ottimizzato per Netscape Navigator 4.0</span>
                    <span className="panel-box px-2 py-1 text-[11px] no-underline">Risoluzione consigliata 800x600</span>
                </div>
            </div>
        </footer>
    )
}