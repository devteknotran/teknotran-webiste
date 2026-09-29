import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = '.section-head, .service-card, .case-card, .problem, .timeline li, .stack-group, .belief, .principle, .explore-grid li, .offer-card, .topic-grid li, .deliverable-grid li, .approach li'

// Subtle reveal for elements that start below the first viewport. Content above the fold,
// and all content for reduced-motion users or without IntersectionObserver, is never hidden.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = [...document.querySelectorAll(SELECTOR)].filter((el) => el.getBoundingClientRect().top > window.innerHeight)
    if (!els.length) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('rv-in'); e.target.classList.remove('rv'); io.unobserve(e.target) }
      })
    }, { rootMargin: '0px 0px -8% 0px' })
    els.forEach((el) => { el.classList.add('rv'); io.observe(el) })
    return () => { io.disconnect(); els.forEach((el) => el.classList.remove('rv')) }
  }, [pathname])
}
