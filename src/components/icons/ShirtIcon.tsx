interface ShirtIconProps {
  className?: string
}

/** Simple line-art shirt icon used in the attire section. */
export default function ShirtIcon({ className }: ShirtIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 90 100"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#7C2E45"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M30 14 18 22l6 10 6-5v55h30V27l6 5 6-10-12-8-9 6-9-6Z" />
      <line x1="45" y1="32" x2="45" y2="88" />
      <circle cx="45" cy="40" r="1.4" fill="#7C2E45" stroke="none" />
      <circle cx="45" cy="50" r="1.4" fill="#7C2E45" stroke="none" />
      <circle cx="45" cy="60" r="1.4" fill="#7C2E45" stroke="none" />
      <circle cx="45" cy="70" r="1.4" fill="#7C2E45" stroke="none" />
    </svg>
  )
}
