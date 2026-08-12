interface DressIconProps {
  className?: string
}

/** Simple line-art dress icon used in the attire section. */
export default function DressIcon({ className }: DressIconProps) {
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
      <path d="M32 12c0 8-4 10-4 10s6 4 17 4 17-4 17-4-4-2-4-10" />
      <path d="M28 22c-6 4-10 12-10 12l8 6 4-6-3 20 3 40h30l3-40-3-20 4 6 8-6s-4-8-10-12" />
      <line x1="45" y1="48" x2="45" y2="60" />
    </svg>
  )
}
