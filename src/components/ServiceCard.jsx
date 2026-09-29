import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function ServiceCard({ service, index }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="icon-tile"><Icon name={service.icon} /></span>
        <span className="mono muted">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="card-label">{service.label}</h3>
      <p>{service.short}</p>
      <ul className="chips" aria-label="Technologies">{service.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      <Link className="text-link" to={`/services/${service.slug}`}>Explore service <Icon name="arrow" size={16} /></Link>
    </article>
  )
}
