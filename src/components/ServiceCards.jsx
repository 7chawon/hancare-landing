import { ArrowUpRight } from './Decorations.jsx'
import coverageAnalysisImg from '../image/CoverageAnalysis.png'
import assetPlanningImg from '../image/assetplanning.png'
import afterCareImg from '../image/Aftercare.png'

const CARDS = [
  {
    title: '보장분석',
    desc: '현재 가입한 보험을 꼼꼼히 진단하고 부족한 보장을 찾아드립니다.',
    emoji: '🔍',
    img: coverageAnalysisImg,
    featured: false,
  },
  {
    title: '자산설계',
    desc: '소득과 목표에 맞춘 1:1 맞춤 자산 포트폴리오를 설계합니다.',
    emoji: '💎',
    img: assetPlanningImg,
    featured: true,
  },
  {
    title: '사후관리',
    desc: '가입 이후에도 정기 점검과 보험금 청구까지 끝까지 책임집니다.',
    emoji: '🤝',
    img: afterCareImg,
    featured: false,
  },
]

export default function ServiceCards() {
  return (
    <section className="container-page mt-24 sm:mt-32">
      <div className="rounded-[28px] bg-brand-50/60 p-5 sm:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            우리의 <span className="text-brand">핵심 솔루션</span>
          </h2>
          <p className="max-w-md text-sm text-slate-500">
            한케어 금융파트너스가 고객님께 제공하는 세 가지 핵심 케어 프로세스입니다.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className={`group relative flex flex-col rounded-card p-6 transition hover:-translate-y-1.5 ${
                card.featured
                  ? 'bg-brand text-white shadow-glow md:-mt-4 md:mb-4'
                  : 'border border-slate-100 bg-white text-slate-900 shadow-card'
              }`}
            >
              {card.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-lime-point px-3 py-1 text-[11px] font-bold text-brand-700">
                  인기
                </span>
              )}
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${
                    card.featured ? 'bg-white/15' : 'bg-brand-50'
                  }`}
                >
                  {card.emoji}
                </span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition group-hover:rotate-45 ${
                    card.featured ? 'bg-white/20 text-white' : 'bg-brand text-white'
                  }`}
                >
                  <ArrowUpRight />
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold">{card.title}</h3>
              <p
                className={`mt-2 flex-1 text-sm leading-relaxed ${
                  card.featured ? 'text-white/85' : 'text-slate-500'
                }`}
              >
                {card.desc}
              </p>

              <div
                className={`mt-6 overflow-hidden rounded-card ${
                  card.featured ? 'bg-white/10 ring-1 ring-white/20' : 'bg-brand-50'
                }`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>

        {/* 페이지 도트 */}
        <div className="mt-8 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === 1 ? 'w-6 bg-brand' : 'w-1.5 bg-brand-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
