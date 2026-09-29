import { Link } from 'react-router-dom'
import { site } from '../config.js'
import Icon from './Icon.jsx'

// Primary conversion CTA. Uses the booking link when configured, otherwise the contact page.
export default function BookButton({ className = 'btn btn-primary', children = 'Book a 30-Min Audit', arrow = false, onClick }) {
  const content = (<>{children}{arrow && <Icon name="arrow" size={18} className="btn-arrow" />}</>)
  if (site.bookingUrl) {
    return <a className={className} href={site.bookingUrl} target="_blank" rel="noopener" onClick={onClick}>{content}</a>
  }
  return <Link className={className} to="/contact#book" onClick={onClick}>{content}</Link>
}
