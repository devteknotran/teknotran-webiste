import { useEffect, useState } from 'react'

const stages = ['Code', 'Build', 'Test', 'Deploy', 'Observe', 'Scale']
const checks = [
  ['Infrastructure', 'Ready'],
  ['Terraform', 'Applied'],
  ['CI/CD', 'Passed'],
  ['Deployment', 'Healthy'],
  ['Observability', 'Connected'],
]

// Illustrative deployment workflow for the hero. Fully readable at rest; the active stage
// highlight advances slowly unless the visitor prefers reduced motion.
export default function PipelineConsole() {
  const [active, setActive] = useState(stages.length - 1)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 1600)
    return () => clearInterval(id)
  }, [])

  return (
    <figure className="console" aria-label="Illustrative deployment workflow">
      <div className="console-bar">
        <span className="console-dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="mono">~/platform · production</span>
        <span className="console-badge">Illustrative workflow</span>
      </div>

      <ol className="pipeline" aria-label="Pipeline stages">
        {stages.map((s, i) => (
          <li key={s} className={i < active ? 'done' : i === active ? 'active' : ''}>
            <span className="pipeline-node" aria-hidden="true" />
            <span className="pipeline-label">{s}</span>
          </li>
        ))}
      </ol>

      <div className="terminal" role="img" aria-label="Terminal output: infrastructure ready, Terraform applied, CI/CD passed, deployment healthy, observability connected">
        <p className="terminal-cmd"><span className="prompt">$</span> teknotran deploy production</p>
        {checks.map(([k, v]) => (
          <p key={k} className="terminal-line"><span className="k">{k}</span><span className="ok">✓ {v}</span></p>
        ))}
        <p className="terminal-cmd muted"><span className="prompt">$</span> <span className="cursor" aria-hidden="true" /></p>
      </div>

      <figcaption className="console-foot">
        <span><b>env</b> production</span><span><b>region</b> ap-south-1</span><span><b>iac</b> terraform</span>
      </figcaption>
    </figure>
  )
}
