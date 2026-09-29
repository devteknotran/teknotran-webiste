import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Icon from '../components/Icon.jsx'
import BookButton from '../components/BookButton.jsx'
import SectionHead from '../components/SectionHead.jsx'
import PipelineConsole from '../components/PipelineConsole.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CaseCard from '../components/CaseCard.jsx'
import ProcessTimeline from '../components/ProcessTimeline.jsx'
import TechStack from '../components/TechStack.jsx'
import AuditCTA from '../components/AuditCTA.jsx'
import DWorkerTeaser from '../components/DWorkerTeaser.jsx'
import TrainingTeaser from '../components/TrainingTeaser.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { services } from '../data/services.js'
import { caseStudies } from '../data/caseStudies.js'
import { problems, processSteps } from '../data/site.js'
import { site } from '../config.js'

const capabilities = ['Infrastructure', 'Automation', 'Observability', 'Reliability', 'Cost control']

export default function Home() {
  return (
    <>
      <Seo description="Teknotran helps SaaS teams build, automate, deploy, observe, and scale reliable cloud infrastructure." />

      {/* HERO */}
      <section className="hero">
        <div className="stripes" aria-hidden="true"><i /><i /></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Develop · Deploy · Deliver</p>
            <h1 className="hero-title">Seamless cloud infrastructure. <span className="accent">Built to scale, designed to save.</span></h1>
            <p className="hero-lede">Teknotran helps early-stage SaaS teams build reliable infrastructure, automate deployments, improve observability, and scale without the overhead of building a full-time DevOps team.</p>
            <div className="hero-actions">
              <BookButton arrow />
              <Link className="btn btn-ghost" to="/services">Explore Services</Link>
            </div>
            <p className="hero-for"><span>For</span> seed to Series A SaaS teams without a dedicated platform engineer.</p>
          </div>
          <PipelineConsole />
        </div>
      </section>

      {/* VALUE BAR */}
      <section className="value-bar" aria-label="What we cover">
        <div className="container value-bar-inner">
          <ul className="value-list">{capabilities.map((c) => <li key={c}>{c}</li>)}</ul>
          <p>Engineering infrastructure for teams moving from startup speed to production reliability.</p>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section">
        <div className="container">
          <SectionHead label="Problems we solve" title={<>Your product is growing.<br />Your infrastructure should not become the bottleneck.</>}>
            <p>These are the signs we see most often in teams that have outgrown their first setup.</p>
            <Link className="btn btn-ghost" to="/contact">Talk to an Engineer <Icon name="arrow" size={18} className="btn-arrow" /></Link>
          </SectionHead>
          <ul className="problem-grid">
            {problems.map((p) => (
              <li key={p.title} className="problem">
                <span className="problem-mark" aria-hidden="true" />
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section tinted" id="services">
        <div className="container">
          <SectionHead label="Services" title="DevOps & cloud infrastructure, from foundation to scale.">
            <p>Start with one area or combine them. Every engagement ends with code in your repositories and documentation your team can own.</p>
          </SectionHead>
          <div className="service-grid">
            {services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <SectionHead label="How we work" title="From infrastructure problem to production solution." />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section tinted">
        <div className="container">
          <SectionHead label="Case studies" title="Engineering work that solves real infrastructure problems.">
            <p>Reference projects show how we approach common problems. They are labelled clearly and never presented as paid client work.</p>
            <Link className="btn btn-ghost" to="/case-studies">View case studies <Icon name="arrow" size={18} className="btn-arrow" /></Link>
          </SectionHead>
          <div className="case-grid">
            {caseStudies.slice(0, 3).map((c) => <CaseCard key={c.slug} cs={c} compact />)}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <div className="container">
          <SectionHead label="Technology" title="Built with proven engineering tools.">
            <p>Well-supported tools your team can hire for and maintain after handover.</p>
          </SectionHead>
          <TechStack />
        </div>
      </section>

      <AuditCTA />
      <DWorkerTeaser />
      <TrainingTeaser />

      {/* ABOUT */}
      <section className="section tinted">
        <div className="container about-strip">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">Engineering-first. Built for teams that need infrastructure to work.</h2>
          </div>
          <div className="about-strip-copy">
            <p>Teknotran is a small DevOps engineering team focused on helping growing technology companies build reliable infrastructure. We automate what repeats, document what we build, keep an eye on cost, and hand over systems your team can run.</p>
            <ul className="check-list">
              {['Practical engineering', 'Automation', 'Production reliability', 'Cost awareness', 'Documentation', 'Knowledge transfer'].map((t) => (
                <li key={t}><Icon name="check" size={18} />{t}</li>
              ))}
            </ul>
            <Link className="text-link" to="/about">More about Teknotran <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let's talk about your infrastructure.</h2>
            <p className="section-intro-text">Tell us briefly what is going on. An engineer reads every enquiry and replies within one working day.</p>
            <div className="contact-alt">
              <p className="stack-h">Prefer to talk first?</p>
              <BookButton className="btn btn-ghost" arrow />
              <p className="mono muted small">{site.email}</p>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </>
  )
}
