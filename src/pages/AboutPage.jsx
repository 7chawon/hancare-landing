import { Star, ArrowUpRight } from '../components/Decorations.jsx'
import RollingNumber from '../components/RollingNumber.jsx'
import { useConsult } from '../components/ConsultModal.jsx'

const VALUES = [
  { emoji: '🤝', title: '신뢰', desc: '고객의 입장에서 정직하게 설계합니다.' },
  { emoji: '🎯', title: '전문성', desc: '공식 파트너로서 검증된 전문 역량.' },
  { emoji: '💚', title: '책임', desc: '가입부터 청구까지 평생 함께합니다.' },
]

const STATS = [
  { value: '2,000+', label: '누적 상담' },
  { value: '50+', label: '전문 설계사' },
  { value: '98%', label: '고객 만족도' },
]

export default function AboutPage() {
  const consult = useConsult()
  return (
    <div className="pt-10 sm:pt-16">
      {/* 페이지 헤더 */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
          <Star className="absolute left-[10%] top-20 animate-twinkle text-lime-point" size={24} />
          <Star className="absolute right-[14%] top-28 animate-twinkle text-brand-200" size={18} />
        </div>
        <div className="container-page text-center">
          <span className="chip">ABOUT US</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            당신의 평생 금융을 책임지는
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">한케어 금융파트너스</span>
              <span className="absolute -bottom-1 left-0 -z-0 h-3.5 w-full rounded-full bg-lime-point/60" />
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 sm:text-lg">
            한케어는 삼성화재 공식 금융파트너스로서, 보험설계부터 자산관리·노후준비·세무까지
            고객의 인생 전 주기를 함께 설계합니다.
          </p>
        </div>
      </section>

      {/* 미션 / 비전 */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-card border border-slate-100 bg-white p-8 shadow-card">
            <span className="chip">MISSION</span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight">
              금융을 <span className="text-brand">쉽고 투명하게</span>
            </h2>
            <p className="mt-3 text-slate-500">
              복잡한 금융 정보를 누구나 이해할 수 있게 풀어내고, 고객에게 가장 합리적인 선택을
              제안하는 것이 우리의 사명입니다.
            </p>
          </div>
          <div className="rounded-card bg-brand p-8 text-white shadow-glow">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              VISION
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight">
              평생 신뢰받는 금융 파트너
            </h2>
            <p className="mt-3 text-white/85">
              한 번의 상담이 아닌, 고객의 인생 전체를 함께하는 든든한 동반자가 되겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="text-center">
          <span className="chip">CORE VALUES</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            우리가 일하는 <span className="text-brand">세 가지 기준</span>
          </h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-card border border-slate-100 bg-white p-7 text-center shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-3xl">
                {v.emoji}
              </span>
              <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 숫자 지표 */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="rounded-[28px] bg-brand-50/60 p-8 sm:p-12">
          <div className="grid grid-cols-3 gap-4 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <RollingNumber
                  value={s.value}
                  className="text-3xl font-extrabold text-brand sm:text-4xl"
                />
                <div className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[28px] border border-brand-100 bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">
              한케어와 함께 미래를 설계해보세요
            </h2>
            <p className="mt-1 text-sm text-slate-500">전문 설계사가 무료로 상담해 드립니다.</p>
          </div>
          <button type="button" onClick={consult.open} className="btn-primary shrink-0 px-7 py-3.5 text-base">
            무료 상담 받기
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
