interface ButterflyProps {
  className?: string
  style?: React.CSSProperties
  wingColorLight?: string
  wingColorDeep?: string
}

/** A single decorative butterfly, used throughout the invitation. */
export default function Butterfly({
  className,
  style,
  wingColorLight = '#E3A6B4',
  wingColorDeep = '#D993A8',
}: ButterflyProps) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 40 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 16c-3-8-11-12-15-9-3 2-2 8 4 10-6 1-8 6-5 9 4 3 12-1 16-10Z"
        fill={wingColorLight}
      />
      <path
        d="M20 16c3-8 11-12 15-9 3 2 2 8-4 10 6 1 8 6 5 9-4 3-12-1-16-10Z"
        fill={wingColorDeep}
      />
      <line x1="20" y1="8" x2="20" y2="24" stroke="#7C2E45" strokeWidth="1" />
    </svg>
  )
}
