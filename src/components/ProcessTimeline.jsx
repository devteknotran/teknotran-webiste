export default function ProcessTimeline({ steps }) {
  return (
    <ol className="timeline">
      {steps.map((s) => (
        <li key={s.step}>
          <span className="timeline-step">{s.step}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
