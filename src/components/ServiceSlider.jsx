import { useRef } from 'react'
import insurancePlan from '../public/icons/insurance-plan.svg'
import assetManagement from '../public/icons/asset-management.svg'
import retirementPlan from '../public/icons/retirement-plan.svg'
import taxConsulting from '../public/icons/tax-consulting.svg'
import realEstate from '../public/icons/real-estate.svg'
import familyProtection from '../public/icons/family-protection.svg'

// /src/image/service-*.png 가 있으면 우선 사용, 없으면 기존 SVG 폴백
const serviceIcons = import.meta.glob('../image/service-*.png', { eager: true, import: 'default' })
const iconUrl = (name, fallback) => serviceIcons[`../image/${name}`] || fallback

const ITEMS = [
  { png: 'service-insurance.png', src: insurancePlan, title: '보험설계', desc: '맞춤 보장 플랜', color: 'from-brand-100 to-lime-soft' },
  { png: 'service-asset.png', src: assetManagement, title: '자산관리', desc: '체계적인 포트폴리오', color: 'from-lime-soft to-brand-100' },
  { png: 'service-retirement.png', src: retirementPlan, title: '노후준비', desc: '여유로운 은퇴 설계', color: 'from-brand-100 to-emerald-50' },
  { png: 'service-tax.png', src: taxConsulting, title: '세무컨설팅', desc: '절세 전략 컨설팅', color: 'from-emerald-50 to-lime-soft' },
  { png: 'service-realestate.png', src: realEstate, title: '부동산', desc: '자산 기반 부동산 자문', color: 'from-lime-soft to-brand-100' },
  { png: 'service-family.png', src: familyProtection, title: '가족보장', desc: '온 가족 케어 플랜', color: 'from-brand-100 to-lime-soft' },
]

export default function ServiceSlider() {
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' })
  }

  return (
    <section id="services" className="container-page mt-24 sm:mt-32">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="chip">SERVICE</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            한케어가 제공하는 <span className="text-brand">금융 서비스</span>
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <SliderButton dir="left" onClick={() => scrollBy(-1)} />
          <SliderButton dir="right" onClick={() => scrollBy(1)} />
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {ITEMS.map((item) => (
          <article
            key={item.title}
            className="group w-[150px] shrink-0 snap-start sm:w-[200px]"
          >
            <div
              className={`flex aspect-square items-center justify-center rounded-card bg-gradient-to-br ${item.color} shadow-card transition group-hover:-translate-y-1.5 group-hover:shadow-glow`}
            >
              <img
                src={iconUrl(item.png, item.src)}
                alt={item.title}
                className="h-24 w-24 drop-shadow-sm transition group-hover:scale-110 sm:h-32 sm:w-32"
                loading="lazy"
              />
            </div>
            <h3 className="mt-3 text-center text-base font-bold sm:text-lg">{item.title}</h3>
            <p className="mt-0.5 text-center text-xs text-slate-500 sm:text-sm">{item.desc}</p>
          </article>
        ))}
      </div>

      {/* 모바일 화살표 */}
      <div className="mt-4 flex justify-center gap-2 sm:hidden">
        <SliderButton dir="left" onClick={() => scrollBy(-1)} />
        <SliderButton dir="right" onClick={() => scrollBy(1)} />
      </div>
    </section>
  )
}

function SliderButton({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'left' ? '이전' : '다음'}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-700 shadow-card transition hover:bg-brand hover:text-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'left' ? <path d="M15 6 9 12l6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  )
}
