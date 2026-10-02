import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="panel-box mt-10">
            <div className="mx-auto max-w-5xl px-4 py-5 flex flex-col items-center gap-3 text-center text-sm text-muted sm:flex-row sm:justify-between sm:text-left">
                <p>The Weekly Bid — Issue No. 12 · All rights reserved</p>
                <nav className="flex gap-4">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/how-it-works">How it works</Link>
                </nav>
            </div>
        </footer>
    )
}