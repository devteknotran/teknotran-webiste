import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import BookButton from './BookButton.jsx'

const links = [
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/training', label: 'Training' },
  { to: '/d-worker', label: 'D-Worker' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${compact ? 'is-compact' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" aria-label="Teknotran home"><Logo size={compact ? 32 : 36} /></Link>
        <nav aria-label="Primary" className="navbar-nav">
          <ul id="primary-nav" className="navbar-links">
            {links.map((l) => (
              <li key={l.to}><NavLink to={l.to} className={({ isActive }) => (isActive ? 'active' : undefined)}>{l.label}</NavLink></li>
            ))}
            <li className="navbar-mobile-cta"><BookButton className="btn btn-primary btn-block" /></li>
          </ul>
        </nav>
        <div className="navbar-actions">
          <BookButton className="btn btn-primary btn-sm navbar-cta" />
          <button type="button" className="navbar-toggle" aria-expanded={open} aria-controls="primary-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((v) => !v)}>
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  )
}
