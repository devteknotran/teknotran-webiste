import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import SectionHead from './SectionHead.jsx'
import { trainingTopics } from '../data/site.js'

const offerings = [
  { icon: 'users', title: 'Corporate training', text: 'Structured programs for engineering teams, built around your stack.' },
  { icon: 'terminal', title: 'Team workshops', text: 'Hands-on sessions on one topic, from half a day to two days.' },
  { icon: 'book', title: 'Practical DevOps programs', text: 'Lab-based learning paths for engineers moving into DevOps work.' },
]

export default function TrainingTeaser() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead label="Training" title="Engineering knowledge, taught by engineers.">
          <p>Practical training for engineers building real cloud and DevOps environments.</p>
        </SectionHead>
        <div className="training-grid">
          <div className="offer-list">
            {offerings.map((o) => (
              <div key={o.title} className="offer">
                <span className="icon-tile sm"><Icon name={o.icon} size={20} /></span>
                <div><h3>{o.title}</h3><p>{o.text}</p></div>
              </div>
            ))}
          </div>
          <div className="topic-panel">
            <p className="stack-h">Topics</p>
            <ul className="topic-list">{trainingTopics.map((t) => <li key={t}>{t}</li>)}</ul>
            <Link className="text-link" to="/training">Explore Training <Icon name="arrow" size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
