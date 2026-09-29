import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ProcessTimeline from '../components/ProcessTimeline.jsx'
import AuditCTA from '../components/AuditCTA.jsx'
import BookButton from '../components/BookButton.jsx'
import { services, engagementProcess } from '../data/services.js'

export default function Services() {
  return (
    <>
      <Seo title="DevOps & Cloud Engineering Services" description="Cloud architecture, Terraform automation, CI/CD, observability, cloud audits, reliability engineering and AI infrastructure for SaaS teams." />
      <PageHero label="Services" title="DevOps & cloud infrastructure, from foundation to scale.">
        <p>Six areas of work, one approach: understand the business need, choose the simplest architecture that meets it, build it as code, and hand it over properly.</p>
        <div className="hero-actions"><BookButton arrow /></div>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="service-grid">{services.map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}</div>
        </div>
      </section>
      <section className="section tinted">
        <div className="container">
          <SectionHead label="Engagement" title="How an engagement runs.">
            <p>Every service follows the same path, so you know what happens at each step.</p>
          </SectionHead>
          <ProcessTimeline steps={engagementProcess} />
        </div>
      </section>
      <AuditCTA />
    </>
  )
}
