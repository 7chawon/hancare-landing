import { Star, ArrowUpRight } from '../components/Decorations.jsx'
import { useConsult } from '../components/ConsultModal.jsx'

const BENEFITS = [
  { emoji: '💰', title: '업계 최고 수수료', desc: '노력한 만큼 정직하게 보상받습니다.' },
  { emoji: '📚', title: '체계적인 교육', desc: '신입도 전문가로 성장하는 트레이닝.' },
  { emoji: '🤝', title: '든든한 영업 지원', desc: 'DB·마케팅·전산 시스템 풀 지원.' },
  { emoji: '⏰', title: '자유로운 근무', desc: '내 시간을 스스로 설계하는 워라밸.' },
]

const QUALIFY = ['학력·경력 무관, 도전정신이 있는 분', '고객과의 신뢰를 소중히 여기는 분', '꾸준히 성장하고 싶은 분']
const PREFER = ['보험·금융 업계 경력자', '영업·상담 경험 보유자', '재무설계(AFPK·CFP) 자격 보유자']

const STEPS = [
  { n: '01', title: '입사 지원', desc: '간단한 정보 입력으로 지원' },
  { n: '02', title: '상담 면접', desc: '편안한 분위기의 1:1 면접' },
  { n: '03', title: '교육 수료', desc: '체계적인 온보딩 교육' },
  { n: '04', title: '활동 시작', desc: '전문 설계사로 커리어 시작' },
]

export default function RecruitPage() {
  const consult = useConsult()
  return (
    <div className="pt-10 sm:pt-16">
      {/* 페이지 헤더 */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
          <Star className="absolute left-[12%] top-24 animate-twinkle text-lime-point" size={24} />
          <Star className="absolute right-[10%] top-16 animate-twinkle text-brand-200" size={18} />
        </div>
        <div className="container-page text-center">
          <span className="chip">RECRUIT</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            당신의 가능성을 펼칠 곳,
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">한케어 금융파트너스</span>
              <span className="absolute -bottom-1 left-0 -z-0 h-3.5 w-full rounded-full bg-lime-point/60" />
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 sm:text-lg">
            정직한 보상, 체계적인 교육, 든든한 지원. 한케어에서 금융 전문가로 성장하세요.
          </p>
          <div className="mt-8">
            <button type="button" onClick={consult.open} className="btn-primary px-7 py-3.5 text-base">
              지금 입사 지원하기
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 왜 한케어인가 */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="text-center">
          <span className="chip">WHY HANCARE</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            한케어에서 일하면 <span className="text-brand">다릅니다</span>
          </h2>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-card border border-slate-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
                {b.emoji}
              </span>
              <h3 className="mt-4 text-lg font-bold">{b.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 지원 자격 / 우대사항 */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="grid gap-5 md:grid-cols-2">
          <QualifyCard title="이런 분을 찾아요" items={QUALIFY} featured />
          <QualifyCard title="이런 분이면 더 좋아요" items={PREFER} />
        </div>
      </section>

      {/* 채용 절차 */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="text-center">
          <span className="chip">PROCESS</span>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
            간단한 <span className="text-brand">4단계</span> 채용 절차
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-card border border-slate-100 bg-white p-6 shadow-card">
              <span className="text-3xl font-extrabold text-brand-200">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="relative overflow-hidden rounded-[28px] bg-brand p-8 text-center text-white shadow-glow sm:p-12">
          <Star className="absolute left-8 top-8 animate-twinkle text-lime-point" size={20} />
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            새로운 커리어, 지금 시작하세요
          </h2>
          <p className="mt-2 text-white/85">간단한 정보만 남기면 채용 담당자가 연락드립니다.</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={consult.open}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-bold text-brand-700 transition hover:bg-lime-soft"
            >
              입사 지원하기
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

function QualifyCard({ title, items, featured }) {
  return (
    <div
      className={`rounded-card p-8 shadow-card ${
        featured ? 'bg-brand-50/70 border border-brand-100' : 'bg-white border border-slate-100'
      }`}
    >
      <h3 className="text-xl font-extrabold">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {it}
          </li>
        ))}
      </ul>
    </div>
  )
}
