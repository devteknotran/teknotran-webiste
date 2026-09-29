export default function FAQ({ items }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary><span>{f.q}</span><span className="faq-plus" aria-hidden="true" /></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  )
}
