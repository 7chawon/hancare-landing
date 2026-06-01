// 별 / 화살표 / 일러스트 placeholder 데코 모음

export function Star({ className = '', size = 24 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 0c.8 6.4 4.8 10.4 11.2 11.2C16.8 12 12.8 16 12 22.4 11.2 16 7.2 12 0.8 11.2 7.2 10.4 11.2 6.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ArrowUpRight({ className = '', size = 16 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function ArrowSwoosh({ className = '' }) {
  return (
    <svg
      className={className}
      width="120"
      height="48"
      viewBox="0 0 120 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 30C24 8 64 4 112 18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <path
        d="M100 8c6 4 10 7 14 10-5 2-9 5-13 9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

// 3D 느낌 일러스트 자리 — 부드러운 그라데이션 + 떠다니는 모션
// src(SVG/이미지)가 주어지면 emoji 대신 해당 일러스트를 렌더링
export function IllustrationPlaceholder({
  label = '3D Illustration',
  className = '',
  emoji = '✦',
  src,
}) {
  return (
    <div
      className={`relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-card ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-100 via-white to-lime-soft" />
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-lime-point/40 blur-2xl" />
      <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        {src ? (
          <img
            src={src}
            alt={label}
            className="h-16 w-16 animate-floaty drop-shadow-sm sm:h-20 sm:w-20"
            loading="lazy"
          />
        ) : (
          <span className="animate-floaty text-4xl drop-shadow-sm">{emoji}</span>
        )}
        <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-700/70">
          {label}
        </span>
      </div>
    </div>
  )
}
