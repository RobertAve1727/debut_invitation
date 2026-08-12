interface SilhouetteProps {
  className?: string
}

/** The soft gown silhouette that anchors the hero section. */
export default function Silhouette({ className }: SilhouetteProps) {
  return (
    <svg className={className} viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="80" cy="26" rx="15" ry="17" fill="#EFCBD3" />
      <path
        d="M65 40c0 0-4 10-14 16-18 11-26 30-24 46 10-4 20-4 28 2 4-30 10-45 10-45z"
        fill="#F0D2D9"
      />
      <path
        d="M95 40c0 0 4 10 14 16 18 11 26 30 24 46-10-4-20-4-28 2-4-30-10-45-10-45z"
        fill="#F0D2D9"
      />
      <path
        d="M80 42c-14 0-26 8-26 8s-10 60 6 118c8 4 40 4 40 0 16-58 6-118 6-118s-12-8-26-8z"
        fill="#EEC7CF"
      />
      <path d="M80 82c-30 4-46 40-40 84 26 14 54 14 80 0 6-44-10-80-40-84z" fill="#E9BEC7" />
    </svg>
  )
}
