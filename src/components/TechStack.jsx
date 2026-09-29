import { techStack } from '../data/site.js'

export default function TechStack({ groups = techStack }) {
  return (
    <div className="stack-grid">
      {groups.map((g) => (
        <div key={g.group} className="stack-group">
          <h3 className="stack-h">{g.group}</h3>
          <ul className="stack-items">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
        </div>
      ))}
    </div>
  )
}
