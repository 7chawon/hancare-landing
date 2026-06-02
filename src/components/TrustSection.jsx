import { Star, ArrowUpRight } from './Decorations.jsx'
import { useConsult } from './ConsultModal.jsx'

// /src/image/trust-*.png 를 자동 매핑 (파일 없으면 undefined → 이모지로 폴백)
const trustIcons = import.meta.glob('../image/trust-*.png', { eager: true, import: 'default' })
const iconUrl = (name) => trustIcons[`../image/${name}`]

const POINTS = [
  { img: 'trust-expertise.png', emoji: '🏆', title: '검증된 전문성', desc: '검증된 공식 파트너 설계사' },
  { img: 'trust-fast.png', emoji: '⚡', title: '빠른 상담', desc: '신청 후 24시간 내 연락' },
  { img: 'trust-care.png', emoji: '💚', title: '평생 케어', desc: '가입부터 청구까지 책임' },
]

export default function TrustSection() {
  const consult = useConsult()
  return (
    <section id="trust" className="container-page mt-24 sm:mt-32">
      <div className="relative overflow-hidden rounded-[28px] border border-brand-100 bg-white p-7 shadow-card sm:p-14">
        {/* 데코 */}
        <Star className="absolute left-8 top-8 animate-twinkle text-lime-point" size={22} />
        <Star className="absolute right-10 top-16 animate-twinkle text-brand-200" size={16} />
        <Star className="absolute bottom-10 right-1/4 animate-twinkle text-brand/40" size={18} />
        <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-brand-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="chip">한케어 금융파트너스</span>
          <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-4xl">
            한케어와 함께라면{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">금융이 쉬워집니다</span>
              <span className="absolute -bottom-1 left-0 -z-0 h-3.5 w-full rounded-full bg-lime-point/60" />
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-slate-500 sm:text-base">
            복잡한 금융, 혼자 고민하지 마세요. 전문 설계사가 고객님의 상황을 함께 분석하고
            가장 합리적인 길을 안내해 드립니다.
          </p>
        </div>

        {/* 신뢰 포인트 */}
        <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="rounded-card border border-slate-100 bg-brand-50/40 p-6 text-center transition hover:-translate-y-1 hover:shadow-card"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-card">
                {p.emoji}
              </span>
              <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div id="contact" className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" onClick={consult.open} className="btn-primary px-7 py-3.5 text-base">
            지금 무료 상담 받기
            <ArrowUpRight size={18} />
          </button>
          <span className="text-sm font-semibold text-slate-600">
            전화 상담 <span className="text-brand-700">1881-8559</span>
          </span>
        </div>
      </div>
    </section>
  )
}
