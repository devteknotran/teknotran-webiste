import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import useReveal from '../hooks/useReveal.js'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function Layout() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollManager />
      <Navbar />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  )
}
