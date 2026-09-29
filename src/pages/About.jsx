import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ProcessTimeline from '../components/ProcessTimeline.jsx'
import AuditCTA from '../components/AuditCTA.jsx'
import Icon from '../components/Icon.jsx'
import { principles, processSteps } from '../data/site.js'
import { site } from '../config.js'

const beliefs = [
  { title: 'Infrastructure should be boring', text: 'The best production systems are predictable. Excitement belongs in your product, not your deployments.' },
  { title: 'Your team should own the result', text: 'We build in your accounts and repositories, and we leave behind documentation, not dependency.' },
  { title: 'Right-sized beats impressive', text: 'A five-engineer startup rarely needs what a five-hundred-engineer company runs. We recommend what fits.' },
]

const why = [
  'Engineers do the work and talk to you directly',
  'Fixed scopes with clear deliverables and exclusions',
  'Everything as code in your repositories',
  'Documentation and handover included in every engagement',
  'Cost is treated as an engineering requirement',
  'Honest about what we have done and what we have not',
]

export default function About() {
  return (
    <>
      <Seo title="About" description="Teknotran is a small DevOps engineering team helping growing technology companies build reliable, well-documented infrastructure." />
      <PageHero label="About Teknotran" title="Engineering-first. Built for teams that need infrastructure to work.">
        <p>Teknotran is a small DevOps engineering team focused on helping growing technology companies build reliable infrastructure.</p>
      </PageHero>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title sm">A focused team of DevOps engineers.</h2>
          </div>
          <div className="prose">
            <p>We work with early-stage SaaS companies that have outgrown their first infrastructure but do not yet need, or cannot yet hire, a full-time platform team.</p>
            <p>Our work covers the path from first architecture to reliable production: infrastructure as code, deployment pipelines, observability, cost control and resilience. We are based in India and work with teams remotely.</p>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="What we believe" title="Three ideas behind every engagement." />
          <div className="belief-grid">
            {beliefs.map((b) => <div key={b.title} className="belief"><h3>{b.title}</h3><p>{b.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="How we work" title="The same five steps, every time." />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="Engineering principles" title="What we choose when there is a trade-off." />
          <ul className="principle-grid">
            {principles.map((p) => (
              <li key={p.a} className="principle">
                <p className="principle-line"><strong>{p.a}</strong> <span>over</span> {p.b}</p>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Team</p>
            <h2 className="section-title sm">The engineers behind Teknotran.</h2>
          </div>
          <div className="panel team-note">
            <p>Team profiles with names, roles and experience will be published here shortly.</p>
            <p>Until then, you can reach the team directly at <strong className="mono">{site.email}</strong> or on <a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>.</p>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Why Teknotran</p>
            <h2 className="section-title sm">What working with us is like.</h2>
          </div>
          <ul className="check-list stacked">{why.map((w) => <li key={w}><Icon name="check" size={18} />{w}</li>)}</ul>
        </div>
      </section>

      <AuditCTA />
    </>
  )
}
