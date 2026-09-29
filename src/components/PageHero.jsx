export default function PageHero({ label, title, children, tag, aside }) {
  return (
    <section className="page-hero">
      <div className="stripes" aria-hidden="true"><i /><i /></div>
      <div className={`container page-hero-grid ${aside ? 'has-aside' : ''}`}>
        <div>
          {tag && <span className="rd-tag">{tag}</span>}
          {label && <p className="eyebrow">{label}</p>}
          <h1 className="page-title">{title}</h1>
          {children && <div className="page-lede">{children}</div>}
        </div>
        {aside && <div className="page-hero-aside">{aside}</div>}
      </div>
    </section>
  )
}
