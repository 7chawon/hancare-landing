import { useEffect, useRef, useState } from 'react'

// 0부터 차오르는 룰렛(슬롯) 스타일 숫자 카운터
// value 예시: "2,000+", "50+", "98%"
// → 숫자 부분은 자릿수별 릴(reel)이 세로로 굴러 올라가고, 접미사(+,%)는 고정

const SPINS = 4 // 각 자리가 도는 바퀴 수(많을수록 더 화려하게 굴러감)

function parse(value) {
  const match = String(value).match(/^([\d,]+)(.*)$/)
  if (!match) return { digits: String(value), suffix: '' }
  return { number: match[1], suffix: match[2] }
}

function Reel({ digit, active, delay }) {
  // 0~9를 SPINS번 반복해 만든 뒤, 마지막 바퀴의 target 자리에서 멈춘다
  const target = SPINS * 10 + digit
  const offset = active ? target : 0
  return (
    <span className="relative inline-block h-[1em] w-[0.62em] overflow-hidden align-baseline">
      <span
        className="absolute left-0 top-0 flex flex-col will-change-transform"
        style={{
          transform: `translateY(-${offset}em)`,
          transition: active
            ? `transform 2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
            : 'none',
        }}
      >
        {Array.from({ length: SPINS * 10 + 10 }, (_, i) => (
          <span key={i} className="flex h-[1em] items-center justify-center leading-none">
            {i % 10}
          </span>
        ))}
      </span>
    </span>
  )
}

export default function RollingNumber({ value, className = '' }) {
  const { number = '', suffix = '' } = parse(value)
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // 오른쪽 자리부터 먼저 멈추도록 delay 부여(룰렛 느낌)
  const digitChars = number.split('')
  const digitCount = digitChars.filter((c) => /\d/.test(c)).length
  let digitIndex = -1

  return (
    <span ref={ref} className={`inline-flex tabular-nums ${className}`}>
      {digitChars.map((char, i) => {
        if (!/\d/.test(char)) {
          // 콤마 등 구분자는 고정
          return (
            <span key={i} className="inline-block">
              {char}
            </span>
          )
        }
        digitIndex += 1
        const delay = (digitCount - 1 - digitIndex) * 120
        return <Reel key={i} digit={Number(char)} active={active} delay={delay} />
      })}
      {suffix && <span className="inline-block">{suffix}</span>}
    </span>
  )
}
