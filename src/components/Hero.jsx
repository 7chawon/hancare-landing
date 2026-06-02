import { Star, ArrowUpRight, ArrowSwoosh } from './Decorations.jsx'
import RollingNumber from './RollingNumber.jsx'
import { useConsult } from './ConsultModal.jsx'
import insuranceImg from '../image/INSURANCE.png'
import investmentImg from '../image/INVERSTMENT.png'
import safeCoverageImg from '../image/SAFECOVERAGE.png'
import happyRetirementImg from '../image/HAPPYRETIREMENT.png'

const HERO_ICONS = [
  { label: '보험 설계', src: insuranceImg },
  { label: '자산 성장', src: investmentImg },
  { label: '안심 보장', src: safeCoverageImg },
  { label: '행복한 노후', src: happyRetirementImg },
]

const STATS = [
  { value: '2,000+', label: '누적 상담' },
  { value: '50+', label: '전문 설계사' },
  { value: '98%', label: '고객 만족도' },
]

export default function Hero() {
  const consult = useConsult()
  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-16">
      {/* 배경 데코 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
        <Star className="absolute left-[8%] top-24 animate-twinkle text-lime-point" size={28} />
        <Star className="absolute right-[12%] top-16 animate-twinkle text-brand" size={20} />
        <Star className="absolute right-[22%] top-44 animate-twinkle text-brand-200" size={16} />
      </div>

      <div className="container-page">
        {/* 상단 라벨 — 메인 문구 위 중앙 정렬 */}
        <div className="flex justify-center gap-2">
          <span className="chip">한케어 금융파트너스</span>
          <span className="chip bg-brand-100">2024 공식 파트너</span>
        </div>

        {/* 헤드라인 */}
        <div className="relative mx-auto mt-6 max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-[1.18] tracking-tight sm:text-6xl">
            당신의 미래를 설계하는
            <br className="hidden sm:block" />{' '}
            <span className="relative inline-block">
              <span className="relative z-10">금융 파트너</span>
              <span className="absolute -bottom-1 left-0 -z-0 h-4 w-full rounded-full bg-lime-point/70" />
            </span>
          </h1>

          <ArrowSwoosh className="absolute -left-2 top-2 hidden text-brand/50 sm:block" />

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-500 sm:text-lg">
            보험설계부터 자산관리, 노후준비, 세무컨설팅까지.
            <br />
            <span className="font-semibold text-brand-700">한케어 금융파트너스</span>가
            평생 곁에서 함께합니다.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button type="button" onClick={consult.open} className="btn-primary px-7 py-3.5 text-base">
              무료 상담 받기
              <ArrowUpRight size={18} />
            </button>
            <a href="#services" className="btn-ghost px-7 py-3.5 text-base">
              서비스 둘러보기
            </a>
          </div>
        </div>

        {/* 신뢰지표 */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-card border border-slate-100 bg-white px-4 py-5 text-center shadow-card"
            >
              <RollingNumber
                value={s.value}
                className="text-2xl font-extrabold text-brand sm:text-3xl"
              />
              <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        {/* 히어로 일러스트 — 박스 없이 아이콘 개체만 */}
        <div className="relative mx-auto mt-12 w-full">
          <div className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-4 sm:gap-x-0">
            {HERO_ICONS.map((item) => (
              <div
                key={item.label}
                className="group flex cursor-pointer items-center justify-center"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full drop-shadow-md transition duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <Star className="absolute -bottom-2 left-1/2 animate-twinkle text-lime-point" size={22} />
        </div>
      </div>
    </section>
  )
}
