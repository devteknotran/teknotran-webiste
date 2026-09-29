import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

export default function CaseCard({ cs, compact = false }) {
  return (
    <article className="case-card">
      <div className="case-card-head">
        <span className="ref-badge">{cs.type}</span>
        <span className="case-service">{cs.serviceLabel}</span>
      </div>
      <h3>{cs.title}</h3>
      <dl className="case-flow">
        <div><dt>Problem</dt><dd>{cs.problem}</dd></div>
        {!compact && <div><dt>What we did</dt><dd>{cs.did}</dd></div>}
        <div><dt>Technology</dt><dd className="mono">{cs.tech.join(' · ')}</dd></div>
        <div className="outcome"><dt>Outcome</dt><dd>{cs.outcome}</dd></div>
      </dl>
      <Link className="text-link" to={`/case-studies/${cs.slug}`}>Read the project <Icon name="arrow" size={16} /></Link>
    </article>
  )
}
