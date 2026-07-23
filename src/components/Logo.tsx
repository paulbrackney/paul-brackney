import { useId } from 'react'

type LogoProps = {
  variant?: 'full' | 'mark'
  className?: string
}

export function Logo({ variant = 'full', className = '' }: LogoProps) {
  const gradientId = useId()

  if (variant === 'mark') {
    return (
      <svg
        className={`logo-mark ${className}`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0d9488" />
            <stop offset="1" stopColor="#0369a1" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="14" fill={`url(#${gradientId})`} />
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontWeight="800"
          fontSize="14"
          letterSpacing="0.5"
          fill="#fff"
        >
          IWS
        </text>
      </svg>
    )
  }

  return (
    <span className={`logo ${className}`}>
      <Logo variant="mark" />
      <span className="logo-text">
        <span className="logo-name">Immaculate</span>
        <span className="logo-tagline">Web Solutions</span>
      </span>
    </span>
  )
}
