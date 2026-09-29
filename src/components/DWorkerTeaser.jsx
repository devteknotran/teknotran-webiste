import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import ArchStack from './ArchStack.jsx'

export default function DWorkerTeaser() {
  return (
    <section className="section dworker-band">
      <div className="container dworker-grid">
        <div>
          <span className="rd-tag">Teknotran Product R&amp;D</span>
          <h2 className="section-title on-dark">Building the next layer of DevOps automation.</h2>
          <p className="on-dark-text">D-Worker is Teknotran's product R&amp;D initiative focused on infrastructure automation, execution workflows, and operational intelligence.</p>
          <p className="on-dark-muted">Early stage and built from problems we see in real engineering work. It is not a commercial product yet.</p>
          <Link className="btn btn-outline-white" to="/d-worker">Explore D-Worker R&amp;D <Icon name="arrow" size={18} className="btn-arrow" /></Link>
        </div>
        <ArchStack dark />
      </div>
    </section>
  )
}
