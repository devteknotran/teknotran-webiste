import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ArchStack from '../components/ArchStack.jsx'
import Icon from '../components/Icon.jsx'

const exploring = [
  { title: 'Repeatable environments', text: 'Creating and changing environments from a known definition, without hand-written steps.' },
  { title: 'Safe Terraform execution', text: 'Running plans and applies in isolated workspaces with review, approval and history.' },
  { title: 'Infrastructure visibility', text: 'Understanding what exists in a cloud account, how it is configured and where it drifts.' },
  { title: 'Cost awareness at change time', text: 'Seeing the cost effect of an infrastructure change before it is applied.' },
  { title: 'Operational workflows', text: 'Turning recurring tasks such as upgrades, rotations and checks into tracked jobs.' },
  { title: 'Assisted troubleshooting', text: 'Using AI carefully to summarise findings and suggest next steps, with an engineer in control.' },
]

const control = ['Web UI and API', 'Authentication and access control', 'Projects and environments', 'Infrastructure state and configuration', 'Job management and history', 'Infrastructure scanning', 'Integration with secrets managers']
const execution = ['Isolated execution workspaces', 'Terraform plan and apply runners', 'Job queue and workers', 'Kubernetes-based worker scaling', 'Event-driven autoscaling', 'Short-lived credentials per job']

const philosophy = [
  { title: 'Problems first', text: 'A capability is explored only after we have seen the same problem repeatedly in real engineering work.' },
  { title: 'Use before selling', text: 'Anything we build is used internally and proven before it is offered to anyone else.' },
  { title: 'Integrate, don’t reinvent', text: 'Where excellent tools already exist, such as secrets managers or Terraform itself, D-Worker works with them.' },
  { title: 'Security by default', text: 'Infrastructure automation holds powerful access, so isolation, least privilege and audit trails come first.' },
]

export default function DWorker() {
  return (
    <>
      <Seo title="D-Worker — Product R&D" description="D-Worker is Teknotran's early-stage R&D initiative exploring infrastructure automation and DevOps execution workflows." />
      <section className="page-hero dworker-hero">
        <div className="container page-hero-grid has-aside">
          <div>
            <span className="rd-tag">Product R&amp;D — Early stage</span>
            <h1 className="page-title on-dark">D-Worker</h1>
            <p className="page-subtitle on-dark">Infrastructure automation, built from real engineering problems.</p>
            <div className="page-lede on-dark-text">
              <p>D-Worker is Teknotran's internal R&amp;D platform exploring infrastructure automation and DevOps execution workflows. It is not a commercial product, and the capabilities described on this page are research directions, not available features.</p>
            </div>
          </div>
          <div className="page-hero-aside"><ArchStack dark /></div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Why we are building it</p>
            <h2 className="section-title sm">The same work keeps coming back.</h2>
          </div>
          <div className="prose">
            <p>Infrastructure engineering is full of work that repeats: creating environments, running Terraform safely, checking accounts for risk and waste, rolling out changes across services. Each time it is done by hand, it costs time and introduces risk.</p>
            <p>D-Worker is where we explore turning those repeated workflows into reliable, reviewable automation. Our services work shows us which problems matter; D-Worker is where we study how to solve them once.</p>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="Problems we are exploring" title="Research areas.">
            <p>These are questions we are investigating. None of them are released features.</p>
          </SectionHead>
          <ul className="explore-grid">
            {exploring.map((e) => (
              <li key={e.title}><span className="status">Exploring</span><h3>{e.title}</h3><p>{e.text}</p></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Architecture" title="A control plane that decides, an execution plane that does.">
            <p>The direction separates what users see and configure from the isolated workers that run infrastructure changes.</p>
          </SectionHead>
          <div className="plane-grid">
            <div className="plane">
              <p className="plane-label mono">Control plane</p>
              <h3>Decide and record</h3>
              <ul className="bullet-list">{control.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
            <div className="plane-link" aria-hidden="true"><span>jobs</span><Icon name="arrow" size={20} /><span>results</span></div>
            <div className="plane">
              <p className="plane-label mono">Execution plane</p>
              <h3>Run in isolation</h3>
              <ul className="bullet-list">{execution.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Infrastructure automation</p>
            <h2 className="section-title sm">Built on the tools teams already trust.</h2>
          </div>
          <div className="prose">
            <p>D-Worker is explored as an orchestration layer over Terraform, Kubernetes and CI/CD systems, not a replacement for them. Engineers should still be able to read the code, review the plan and understand exactly what changed.</p>
            <ul className="chips">{['Terraform', 'Kubernetes', 'CI/CD', 'AWS', 'Job queues', 'Event-driven scaling'].map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="eyebrow">Future direction</p>
            <h2 className="section-title sm">Earned one step at a time.</h2>
          </div>
          <ol className="stage-list">
            <li><span className="mono">Stage 1</span><p><strong>Internal tooling.</strong> Automation used inside Teknotran engineering work.</p></li>
            <li><span className="mono">Stage 2</span><p><strong>Proven workflows.</strong> Capabilities that save measurable time across several projects.</p></li>
            <li><span className="mono">Stage 3</span><p><strong>External validation.</strong> Early access for a small number of teams, only when it is ready.</p></li>
          </ol>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="R&D philosophy" title="How we decide what to build." />
          <div className="belief-grid four">
            {philosophy.map((p) => <div key={p.title} className="belief"><h3>{p.title}</h3><p>{p.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container rd-foot">
          <p>D-Worker is part of Teknotran's product R&amp;D. Our core business is DevOps and cloud engineering services.</p>
          <Link className="btn btn-primary" to="/services">Explore our services <Icon name="arrow" size={18} className="btn-arrow" /></Link>
        </div>
      </section>
    </>
  )
}
