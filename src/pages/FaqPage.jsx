import { useState } from 'react'
import { Star, ArrowUpRight } from '../components/Decorations.jsx'
import { useConsult } from '../components/ConsultModal.jsx'

const FAQS = [
  {
    q: '상담은 정말 무료인가요?',
    a: '네, 100% 무료입니다. 상담 비용은 일절 청구되지 않으며, 상담 후 가입 여부는 전적으로 고객님의 선택입니다.',
  },
  {
    q: '상담받으면 꼭 가입해야 하나요?',
    a: '전혀 그렇지 않습니다. 상담은 고객님의 현재 상황을 점검하고 정보를 드리는 과정이며, 가입을 강요하지 않습니다. 충분히 비교해 보고 결정하셔도 됩니다.',
  },
  {
    q: '상담은 어떻게 진행되나요?',
    a: '전화 상담, 방문 상담, 화상 상담 중 편하신 방식을 선택하실 수 있습니다. 신청 시 희망 방식과 시간대를 알려주시면 전문 설계사가 맞춰서 연락드립니다.',
  },
  {
    q: '상담 시간은 얼마나 걸리나요?',
    a: '평균 20~40분 정도 소요됩니다. 보장분석·자산설계 등 다루는 범위에 따라 달라질 수 있으며, 고객님 일정에 맞춰 진행합니다.',
  },
  {
    q: '기존에 가입한 보험도 분석해 주나요?',
    a: '네, 가능합니다. 현재 가입하신 보험의 보장 내용을 진단하여 중복되거나 부족한 부분을 찾아드리고, 합리적인 개선 방향을 제안해 드립니다.',
  },
  {
    q: '어떤 분야까지 상담 가능한가요?',
    a: '보험설계, 자산관리, 노후·연금 준비, 세무 컨설팅, 부동산 자문, 가족 보장 설계까지 폭넓게 상담해 드립니다.',
  },
  {
    q: '제공한 개인정보는 안전하게 관리되나요?',
    a: '관계 법령(개인정보보호법·신용정보법)에 따라 안전하게 관리되며, 수집된 정보는 상담 목적으로만 사용되고 목적 달성 후 지체 없이 파기됩니다.',
  },
  {
    q: '설계사 채용은 어떻게 지원하나요?',
    a: '설계사채용 페이지에서 간단한 정보를 남기시면 채용 담당자가 연락드립니다. 학력·경력 무관으로 지원 가능하며 체계적인 교육을 제공합니다.',
  },
]

export default function FaqPage() {
  const consult = useConsult()
  const [open, setOpen] = useState(0)

  return (
    <div className="pt-10 sm:pt-16">
      {/* 페이지 헤더 */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
          <Star className="absolute left-[12%] top-20 animate-twinkle text-lime-point" size={24} />
          <Star className="absolute right-[12%] top-28 animate-twinkle text-brand-200" size={18} />
        </div>
        <div className="container-page text-center">
          <span className="chip">FAQ</span>
          <h1 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            자주 묻는 <span className="relative inline-block">
              <span className="relative z-10 text-brand">질문</span>
              <span className="absolute -bottom-1 left-0 -z-0 h-3.5 w-full rounded-full bg-lime-point/60" />
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-500 sm:text-lg">
            상담 전 궁금하신 점을 모았어요. 더 궁금한 점은 언제든 무료 상담으로 물어보세요.
          </p>
        </div>
      </section>

      {/* FAQ 아코디언 */}
      <section className="container-page mt-12 sm:mt-16">
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-card border transition ${
                  isOpen ? 'border-brand bg-brand-50/40 shadow-card' : 'border-slate-100 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-extrabold text-white">
                    Q
                  </span>
                  <span className="flex-1 text-base font-bold text-slate-900">{item.q}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`shrink-0 text-slate-400 transition ${isOpen ? 'rotate-180 text-brand' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="flex gap-4 px-5 pb-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime-soft text-sm font-extrabold text-brand-700">
                      A
                    </span>
                    <p className="flex-1 pt-1 text-sm leading-relaxed text-slate-600">{item.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page mt-16 sm:mt-24">
        <div className="flex flex-col items-center justify-between gap-4 rounded-[28px] border border-brand-100 bg-white p-8 text-center shadow-card sm:flex-row sm:text-left">
          <div>
            <h2 className="text-xl font-extrabold sm:text-2xl">원하는 답을 못 찾으셨나요?</h2>
            <p className="mt-1 text-sm text-slate-500">전문 설계사가 직접 친절하게 답해드립니다.</p>
          </div>
          <button type="button" onClick={consult.open} className="btn-primary shrink-0 px-7 py-3.5 text-base">
            무료로 물어보기
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}
