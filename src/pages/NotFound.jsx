import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <Seo title="Page not found" />
      <div className="container">
        <p className="mono muted">HTTP 404 · route not found</p>
        <h1 className="page-title">This page does not exist.</h1>
        <p className="page-lede">The link may be out of date. Try the homepage or our services.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/">Go to homepage</Link>
          <Link className="btn btn-ghost" to="/services">View services</Link>
        </div>
      </div>
    </section>
  )
}
