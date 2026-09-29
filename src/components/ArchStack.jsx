const defaultLayers = [
  { name: 'Control plane', note: 'Web UI · API · projects · environments · state' },
  { name: 'Orchestration', note: 'Job scheduling · queues · policies' },
  { name: 'Execution plane', note: 'Isolated workers · workspaces' },
  { name: 'Terraform / Kubernetes / CI/CD', note: 'Tools that do the work' },
  { name: 'Cloud infrastructure', note: 'AWS · Azure · GCP' },
]

export default function ArchStack({ layers = defaultLayers, dark = false }) {
  return (
    <ol className={`arch-stack ${dark ? 'dark' : ''}`} aria-label="D-Worker architecture layers">
      {layers.map((l, i) => (
        <li key={l.name}>
          <span className="arch-i mono">L{i + 1}</span>
          <span className="arch-name">{l.name}</span>
          <span className="arch-note">{l.note}</span>
        </li>
      ))}
    </ol>
  )
}
