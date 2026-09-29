import Seo from '../components/Seo.jsx'
import PageHero from '../components/PageHero.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'

const offerings = [
  { icon: 'users', title: 'Corporate training', who: 'Engineering teams', text: 'A structured program for your team, built around the tools and cloud you actually use.', format: 'Multi-day · live · on-site or remote' },
  { icon: 'terminal', title: 'Team workshops', who: 'Teams adopting a specific tool', text: 'Focused, hands-on sessions on one topic such as Terraform, Kubernetes or CI/CD.', format: 'Half-day to two days · live' },
  { icon: 'book', title: 'Practical DevOps programs', who: 'Engineers moving into DevOps', text: 'Lab-based learning that follows how real infrastructure is built and operated.', format: 'Weekly sessions · hands-on labs' },
]

const topics = [
  { t: 'AWS', d: 'Core services, networking, IAM, cost basics' },
  { t: 'DevOps', d: 'Practices, workflows and operating models' },
  { t: 'Terraform', d: 'Modules, state, environments, workflows' },
  { t: 'Kubernetes', d: 'Workloads, networking, Helm, operations' },
  { t: 'CI/CD', d: 'Pipelines, testing gates, release strategies' },
  { t: 'Linux', d: 'Administration and troubleshooting for engineers' },
  { t: 'Observability', d: 'Metrics, logs, dashboards and alerting' },
  { t: 'Cloud troubleshooting', d: 'Finding and fixing production problems' },
]

const flow = [
  { step: '01', title: 'Skill check', text: 'A short conversation or questionnaire to understand where the team is.' },
  { step: '02', title: 'Tailored plan', text: 'Topics, depth and labs chosen for your stack and goals.' },
  { step: '03', title: 'Hands-on training', text: 'Engineers work in sandbox environments, not slides.' },
  { step: '04', title: 'Practical outcome', text: 'Each session ends with something the team can do on its own.' },
  { step: '05', title: 'Follow-up', text: 'Feedback and reference material after the training.' },
]

export default function Training() {
  return (
    <>
      <Seo title="DevOps & Cloud Training" description="Practical, hands-on training in AWS, Terraform, Kubernetes, CI/CD, Linux and observability, taught by working DevOps engineers." />
      <PageHero label="Training" title="Engineering knowledge, taught by engineers.">
        <p>Practical training for engineers building real cloud and DevOps environments. Every session is hands-on and based on how production systems are actually run.</p>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead label="Offerings" title="Three ways to train with us." />
          <div className="offer-cards">
            {offerings.map((o) => (
              <article key={o.title} className="offer-card">
                <span className="icon-tile"><Icon name={o.icon} /></span>
                <h3>{o.title}</h3>
                <p className="offer-who">{o.who}</p>
                <p>{o.text}</p>
                <p className="mono muted small">{o.format}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <SectionHead label="Topics" title="What we teach." />
          <ul className="topic-grid">{topics.map((t) => <li key={t.t}><h3>{t.t}</h3><p>{t.d}</p></li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="How it works" title="Built around your team, not a fixed syllabus." />
          <ol className="timeline">
            {flow.map((s) => <li key={s.step}><span className="timeline-step">{s.step}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="section tinted" id="enquire">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Enquire</p>
            <h2 className="section-title">Plan training for your team.</h2>
            <p className="section-intro-text">Tell us your team size, current tools and what you want them to be able to do. We will suggest a format and outline.</p>
          </div>
          <EnquiryForm defaultHelp="Training" />
        </div>
      </section>
    </>
  )
}
