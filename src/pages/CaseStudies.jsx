import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import CaseCard from '../components/CaseCard.jsx'
import AuditCTA from '../components/AuditCTA.jsx'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudies() {
  const labels = ['All', ...new Set(caseStudies.map((c) => c.serviceLabel))]
  const [filter, setFilter] = useState('All')
  const list = filter === 'All' ? caseStudies : caseStudies.filter((c) => c.serviceLabel === filter)

  return (
    <>
      <Seo title="Case Studies" description="Reference projects showing how Teknotran approaches AWS infrastructure, Terraform, Kubernetes, observability, cost reviews and reliability." />
      <PageHero label="Case studies" title="Engineering work that solves real infrastructure problems.">
        <p>Each project is written the same way: the problem, what we changed, the technology and the technical outcome.</p>
        <p className="disclosure"><span className="ref-badge">Reference project</span> means a representative engineering build, not a paid client engagement. Client case studies are published only with permission and verified results.</p>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="filter-bar" role="group" aria-label="Filter by service">
            {labels.map((l) => (
              <button key={l} type="button" className={filter === l ? 'active' : ''} aria-pressed={filter === l} onClick={() => setFilter(l)}>{l}</button>
            ))}
          </div>
          <div className="case-grid">{list.map((c) => <CaseCard key={c.slug} cs={c} />)}</div>
        </div>
      </section>
      <AuditCTA />
    </>
  )
}
