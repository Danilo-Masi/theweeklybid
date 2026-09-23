import { NavLink } from 'react-router-dom'
import Ticker from '../ui/Ticker'
import VisitorCounter from '../ui/VisitorCounter'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/archive', label: 'Archive' },
]

export default function Header() {
  return (
    <header className="panel-box border-t-0">

      {/* Titolo + descrizione */}
      <div className="mx-auto w-full px-4 py-4 text-center border-b border-border">
        <NavLink to="/">
          <h1 className="font-serif text-4xl font-bold text-ink italic">The Weekly Bid</h1>
        </NavLink>
        <p className="text-sm text-muted italic mt-1">
          Every week, 10 spaces. The highest bidder makes the front page.
        </p>
        <p className="text-xs text-muted mt-1">
          {/* TODO: replace with the real last-published timestamp from the server */}
          Last updated: {new Date().toLocaleString('en-US')}
        </p>
      </div>

      {/* Navbar */}
      <nav className="bg-panel border-b border-border">
        <ul className="mx-auto max-w-3xl flex justify-center gap-1 text-sm">
          {navLinks.map((link) => (
            <li key={link.to} className="panel-box">
              <NavLink
                to={link.to}
                className="block px-3 py-1.5 no-underline hover:bg-ink hover:text-paper">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Barra che scorre */}
      <Ticker />

      {/* Counter numero visitatori */}
      <div className="text-center py-1 border-b border-border bg-paper">
        <VisitorCounter />
      </div>

    </header>
  )
}