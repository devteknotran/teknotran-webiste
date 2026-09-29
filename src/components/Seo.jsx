import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../config.js'

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

// Sets per-page title, description, canonical and Open Graph tags.
export default function Seo({ title, description }) {
  const { pathname } = useLocation()
  useEffect(() => {
    const full = title ? `${title} | Teknotran` : 'Teknotran | DevOps & Cloud Engineering for SaaS'
    const url = site.url + (pathname === '/' ? '/' : pathname)
    document.title = full
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
    }
    setMeta('property', 'og:title', full)
    setMeta('property', 'og:url', url)
    let link = document.head.querySelector('link[rel="canonical"]')
    if (link) link.setAttribute('href', url)
  }, [title, description, pathname])
  return null
}
