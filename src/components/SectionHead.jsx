export default function SectionHead({ label, title, children, align = 'split', as: H = 'h2' }) {
  return (
    <div className={`section-head ${align}`}>
      <div>
        {label && <p className="eyebrow">{label}</p>}
        <H className="section-title">{title}</H>
      </div>
      {children && <div className="section-intro">{children}</div>}
    </div>
  )
}
