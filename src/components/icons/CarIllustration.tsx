interface CarIllustrationProps {
  className?: string;
}

export function CarIllustration({ className }: CarIllustrationProps) {
  return (
    <svg
      viewBox="0 0 400 220"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="200" cy="195" rx="160" ry="8" fill="oklch(0 0 0 / 0.3)" />
      <path
        d="M55 155 L75 110 Q82 95 98 92 L155 85 Q175 70 200 68 Q225 70 245 85 L302 92 Q318 95 325 110 L345 155 Q347 162 340 165 L60 165 Q53 162 55 155 Z"
        fill="oklch(0.96 0.01 260)"
      />
      <path
        d="M75 110 Q82 95 98 92 L155 85 Q175 70 200 68 Q225 70 245 85 L302 92 Q318 95 325 110 L320 115 L80 115 Z"
        fill="oklch(1 0 0)"
      />
      <path
        d="M110 105 L160 88 Q175 78 200 76 Q225 78 240 88 L290 105 L275 112 L125 112 Z"
        fill="oklch(0.25 0.05 255)"
        opacity="0.85"
      />
      <line x1="200" y1="76" x2="200" y2="112" stroke="oklch(0.96 0.01 260)" strokeWidth="2" />
      <path d="M115 104 L155 90 L160 95 L125 109 Z" fill="oklch(1 0 0)" opacity="0.25" />
      <line x1="200" y1="115" x2="200" y2="160" stroke="oklch(0.78 0.02 260)" strokeWidth="1.5" />
      <rect x="170" y="130" width="14" height="3" rx="1.5" fill="oklch(0.78 0.02 260)" />
      <rect x="216" y="130" width="14" height="3" rx="1.5" fill="oklch(0.78 0.02 260)" />
      <ellipse cx="335" cy="125" rx="10" ry="6" fill="oklch(0.95 0.15 90)" />
      <ellipse cx="335" cy="125" rx="6" ry="3" fill="oklch(1 0.05 90)" />
      <ellipse cx="65" cy="125" rx="10" ry="6" fill="oklch(0.6 0.22 25)" />
      <rect x="318" y="138" width="22" height="10" rx="2" fill="oklch(0.3 0.02 260)" />
      <circle cx="120" cy="170" r="32" fill="oklch(0.16 0.02 260)" />
      <circle cx="280" cy="170" r="32" fill="oklch(0.16 0.02 260)" />
      <circle cx="120" cy="170" r="26" fill="oklch(0.12 0.01 260)" />
      <circle cx="280" cy="170" r="26" fill="oklch(0.12 0.01 260)" />
      <circle cx="120" cy="170" r="14" fill="oklch(0.4 0.02 260)" />
      <circle cx="280" cy="170" r="14" fill="oklch(0.4 0.02 260)" />
      <circle cx="120" cy="170" r="5" fill="oklch(0.2 0.02 260)" />
      <circle cx="280" cy="170" r="5" fill="oklch(0.2 0.02 260)" />
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={`l-${angle}`}
          x1="120"
          y1="170"
          x2={120 + Math.cos((angle * Math.PI) / 180) * 13}
          y2={170 + Math.sin((angle * Math.PI) / 180) * 13}
          stroke="oklch(0.2 0.02 260)"
          strokeWidth="2"
        />
      ))}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <line
          key={`r-${angle}`}
          x1="280"
          y1="170"
          x2={280 + Math.cos((angle * Math.PI) / 180) * 13}
          y2={170 + Math.sin((angle * Math.PI) / 180) * 13}
          stroke="oklch(0.2 0.02 260)"
          strokeWidth="2"
        />
      ))}
      <line
        x1="20"
        y1="140"
        x2="50"
        y2="140"
        stroke="oklch(1 0 0 / 0.4)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="10"
        y1="155"
        x2="48"
        y2="155"
        stroke="oklch(1 0 0 / 0.3)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="25"
        y1="170"
        x2="50"
        y2="170"
        stroke="oklch(1 0 0 / 0.25)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
