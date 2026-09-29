import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'
import BookButton from '../components/BookButton.jsx'
import ProcessTimeline from '../components/ProcessTimeline.jsx'
import CaseCard from '../components/CaseCard.jsx'
import FAQ from '../components/FAQ.jsx'
import AuditCTA from '../components/AuditCTA.jsx'
import NotFound from './NotFound.jsx'
import { getService, services, engagementProcess } from '../data/services.js'
import { getCaseStudy } from '../data/caseStudies.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = getService(slug)
  if (!s) return <NotFound />
  const cs = getCaseStudy(s.caseStudy)
  const others = services.filter((x) => x.slug !== s.slug)

  return (
    <>
      <Seo title={s.title} description={`${s.short} ${s.outcome}`} />
      <PageHero
        label="Service"
        title={s.title}
        aside={<div className="outcome-card"><p className="stack-h">Business outcome</p><p>{s.outcome}</p></div>}
      >
        <p>{s.heroLine}</p>
        <div className="hero-actions">
          <BookButton arrow />
          <Link className="btn btn-ghost" to="/contact">Send an enquiry</Link>
        </div>
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="section-title sm">What usually goes wrong</h2>
            <ul className="bullet-list">{s.problem.map((p) => <li key={p}>{p}</li>)}</ul>
          </div>
          <div className="panel">
            <p className="eyebrow">When you need this</p>
            <ul className="check-list stacked">{s.whenYouNeed.map((w) => <li key={w}><Icon name="check" size={18} />{w}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="What we deliver" title="Deliverables you keep." />
          <ul className="deliverable-grid">
            {s.deliverables.map((d, i) => (
              <li key={d}><span className="mono">{String(i + 1).padStart(2, '0')}</span><p>{d}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Technical approach" title="How we build it." />
          <ol className="approach">
            {s.approach.map((a) => <li key={a.title}><h3>{a.title}</h3><p>{a.text}</p></li>)}
          </ol>
          <div className="stack-inline">
            <p className="stack-h">Technology</p>
            <ul className="chips">{s.stack.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="Engagement process" title="From first call to handover." />
          <ProcessTimeline steps={engagementProcess} />
        </div>
      </section>

      {cs && (
        <section className="section">
          <div className="container two-col align-start">
            <div>
              <p className="eyebrow">Reference project</p>
              <h2 className="section-title sm">See the approach in practice.</h2>
              <p className="section-intro-text">A representative build showing how we handle this kind of problem.</p>
            </div>
            <CaseCard cs={cs} />
          </div>
        </section>
      )}

      <section className="section tinted">
        <div className="container two-col align-start">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title sm">Common questions</h2>
          </div>
          <FAQ items={s.faqs} />
        </div>
      </section>

      <AuditCTA title={`Talk to an engineer about ${s.label.toLowerCase()}.`} />

      <section className="section slim">
        <div className="container">
          <p className="stack-h">Other services</p>
          <ul className="other-services">
            {others.map((o) => <li key={o.slug}><Link to={`/services/${o.slug}`}><Icon name={o.icon} size={18} />{o.title}</Link></li>)}
          </ul>
        </div>
      </section>
    </>
  )
}
