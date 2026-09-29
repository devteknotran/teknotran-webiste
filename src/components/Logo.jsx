export function LogoMark({ size = 36, title }) {
  return (
    <svg width={size} height={size} viewBox="0 0 160 160" role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <rect width="160" height="160" rx="32" fill="#0F172A" />
      <g transform="translate(-6,13)">
        <polygon points="34,14 132,14 124.8,38 26.8,38" fill="#FFFFFF" />
        <polygon points="106,14 132,14 124.8,38 98.8,38" fill="#0B5FFF" />
        <polygon points="62,46 88,46 65.8,120 39.8,120" fill="#FFFFFF" />
        <polygon points="96,46 112,46 89.8,120 73.8,120" fill="#00BAFE" />
      </g>
    </svg>
  )
}

export default function Logo({ size = 36 }) {
  return (
    <span className="logo">
      <LogoMark size={size} />
      <span className="wordmark">TEKNO<span>TRAN</span></span>
    </span>
  )
}
