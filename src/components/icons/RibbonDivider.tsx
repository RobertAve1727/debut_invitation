interface RibbonDividerProps {
  className?: string
}

/** A small bow-shaped divider used beneath the hero title. */
export default function RibbonDivider({ className }: RibbonDividerProps) {
  return (
    <svg className={className} viewBox="0 0 80 30" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M40 15c-8-10-24-10-24 0s16 10 24 0Zm0 0c8-10 24-10 24 0s-16 10-24 0Z"
        fill="none"
        stroke="#C77E92"
        strokeWidth="1.4"
      />
      <circle cx="40" cy="15" r="2.4" fill="#7C2E45" />
    </svg>
  )
}
