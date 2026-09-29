import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Icon from '../components/Icon.jsx'
import AuditCTA from '../components/AuditCTA.jsx'
import NotFound from './NotFound.jsx'
import { getCaseStudy, caseStudies } from '../data/caseStudies.js'
import { getService } from '../data/services.js'

function Block({ label, children }) {
  return (
    <section className="cs-block">
      <h2 className="cs-h">{label}</h2>
      {children}
    </section>
  )
}
const List = ({ items }) => <ul className="bullet-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = getCaseStudy(slug)
  if (!cs) return <NotFound />
  const svc = getService(cs.service)
  const next = caseStudies[(caseStudies.indexOf(cs) + 1) % caseStudies.length]

  return (
    <>
      <Seo title={cs.title} description={cs.summary} />
      <section className="page-hero">
        <div className="stripes" aria-hidden="true"><i /><i /></div>
        <div className="container">
          <Link className="back-link" to="/case-studies"><Icon name="arrow" size={16} className="flip" /> All case studies</Link>
          <p className="cs-type"><span className="ref-badge">{cs.type}</span><span className="case-service">{cs.serviceLabel}</span></p>
          <h1 className="page-title">{cs.title}</h1>
          <p className="page-lede">{cs.summary}</p>
        </div>
      </section>

      <div className="container cs-layout">
        <aside className="cs-aside">
          <dl>
            <div><dt>Project type</dt><dd>{cs.type}</dd></div>
            <div><dt>Service</dt><dd>{svc ? <Link to={`/services/${svc.slug}`}>{svc.title}</Link> : cs.serviceLabel}</dd></div>
            <div><dt>Technologies</dt><dd><ul className="chips">{cs.tech.map((t) => <li key={t}>{t}</li>)}</ul></dd></div>
          </dl>
          <p className="disclosure small">A representative build showing our approach. No client names or business metrics are implied.</p>
        </aside>

        <article className="cs-body">
          <Block label="The challenge"><p>{cs.challenge}</p></Block>
          <Block label="The environment"><List items={cs.environment} /></Block>
          <Block label="What we changed"><List items={cs.changed} /></Block>
          <Block label="Architecture">
            <ol className="arch-flow" aria-label="Architecture, request path from top to bottom">
              {cs.architecture.map((a, i) => <li key={a}><span className="mono">{String(i + 1).padStart(2, '0')}</span>{a}</li>)}
            </ol>
          </Block>
          <Block label="Implementation"><List items={cs.implementation} /></Block>
          <Block label="Technologies"><ul className="chips">{cs.tech.map((t) => <li key={t}>{t}</li>)}</ul></Block>
          <Block label="Operational considerations"><List items={cs.operational} /></Block>
          <Block label="Result / technical outcome">
            <ul className="check-list stacked">{cs.outcomes.map((o) => <li key={o}><Icon name="check" size={18} />{o}</li>)}</ul>
          </Block>
          <Block label="Lessons learned"><List items={cs.lessons} /></Block>
          <Link className="next-case" to={`/case-studies/${next.slug}`}>
            <span className="stack-h">Next project</span>
            <span className="next-title">{next.title} <Icon name="arrow" size={18} /></span>
          </Link>
        </article>
      </div>
      <AuditCTA title="Facing a similar problem?" />
    </>
  )
}
