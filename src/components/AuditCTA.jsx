import { Link } from 'react-router-dom'
import BookButton from './BookButton.jsx'

export default function AuditCTA({ title = 'Not sure where your infrastructure stands?' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="audit-cta">
          <div className="audit-cta-stripes" aria-hidden="true"><i /><i /></div>
          <div className="audit-cta-copy">
            <p className="eyebrow on-dark">30-minute conversation</p>
            <h2>{title}</h2>
            <p>Get a focused 30-minute conversation with a DevOps engineer. We'll look at your current infrastructure, identify obvious risks or cost issues, and discuss practical next steps.</p>
            <p className="fine">This is an initial discovery conversation. A full audit or implementation is scoped separately.</p>
          </div>
          <div className="audit-cta-actions">
            <BookButton className="btn btn-white" arrow />
            <Link className="btn btn-outline-white" to="/contact">Tell Us About Your Infrastructure</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
