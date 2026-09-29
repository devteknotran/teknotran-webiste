import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { site } from '../config.js'

const cols = [
  { title: 'Company', links: [['Services', '/services'], ['Case Studies', '/case-studies'], ['Training', '/training']] },
  { title: 'Teknotran', links: [['D-Worker', '/d-worker'], ['About', '/about'], ['Contact', '/contact']] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" aria-label="Teknotran home"><Logo /></Link>
            <p className="tagline">DEVELOP · DEPLOY · DELIVER</p>
            <p className="footer-statement">Cloud engineering for teams building what comes next.</p>
          </div>
          <div className="footer-cols">
            {cols.map((c) => (
              <div key={c.title}>
                <p className="footer-h">{c.title}</p>
                <ul>{c.links.map(([l, to]) => <li key={to}><Link to={to}>{l}</Link></li>)}</ul>
              </div>
            ))}
            <div>
              <p className="footer-h">Contact</p>
              <ul>
                <li><a href={`mailto:${site.email}`} className="footer-icon-link"><Icon name="mail" size={16} />{site.email}</a></li>
                <li><a href={site.linkedin} target="_blank" rel="noopener" className="footer-icon-link"><Icon name="linkedin" size={16} />LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Teknotran. All rights reserved.</span>
          <span className="mono">teknotran.com</span>
        </div>
      </div>
    </footer>
  )
}
