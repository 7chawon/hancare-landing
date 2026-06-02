import { useState } from 'react'
import { Star, ArrowUpRight } from '../components/Decorations.jsx'
import { useConsult } from '../components/ConsultModal.jsx'

/* 소메뉴(탭) + 탭별 슬라이드(캐러셀) 데이터
 * 이미지 자리는 비워두었습니다. /src/image/ 에 아래 파일명으로 저장하면 표시됩니다. */
const TABS = [
  {
    key: 'about',
    label: '파트너스 알아보기',
    slides: [
      {
        title: '파트너스 수익 사례 모음.zip',
        desc: '한케어 파트너스가 가장 많이 받는 질문, "정말 벌 수 있나요?" 실제 활동 중인 설계사들의 수익 구조와 사례를 한눈에 모았습니다.',
        image: 'recruit-about-1.png',
        bg: 'from-violet-200 to-violet-100',
      },
      {
        title: '파트너스는 이런 일을 해요',
        desc: '고객의 보장을 분석하고 맞춤 설계를 제안하는 금융 전문가. 한케어 파트너스의 하루 일과를 소개합니다.',
        image: 'recruit-about-2.png',
        bg: 'from-brand-100 to-lime-soft',
      },
    ],
  },
  {
    key: 'guide',
    label: '지원 & 교육',
    slides: [
      {
        title: '신입도 전문가로, 체계적인 교육',
        desc: '보험·금융 지식이 없어도 괜찮아요. 입사 후 단계별 온보딩 교육과 1:1 멘토링으로 전문가로 성장합니다.',
        image: 'recruit-guide-1.png',
        bg: 'from-sky-200 to-sky-100',
      },
      {
        title: '지원부터 활동까지, 단 4단계',
        desc: '입사 지원 → 상담 면접 → 교육 수료 → 활동 시작. 복잡한 절차 없이 새로운 커리어를 시작하세요.',
        image: 'recruit-guide-2.png',
        bg: 'from-brand-100 to-emerald-50',
      },
    ],
  },
  {
    key: 'review',
    label: '합격 후기',
    slides: [
      {
        title: '먼저 시작한 파트너스의 이야기',
        desc: '"육아와 병행하면서도 안정적인 수입을 얻고 있어요." 실제 한케어 파트너스들의 생생한 후기를 확인하세요.',
        image: 'recruit-review-1.png',
        bg: 'from-amber-200 to-amber-100',
      },
      {
        title: '한케어를 선택한 이유',
        desc: '업계 최고 수준의 수수료와 든든한 영업 지원. 파트너스들이 한케어에 정착한 이유를 들어보세요.',
        image: 'recruit-review-2.png',
        bg: 'from-rose-200 to-rose-100',
      },
    ],
  },
]

export default function RecruitPage() {
  const consult = useConsult()
  const [tab, setTab] = useState(0)
  const [slide, setSlide] = useState(0)

  const current = TABS[tab]
  const data = current.slides[slide]
  const slideCount = current.slides.length

  const changeTab = (i) => {
    setTab(i)
    setSlide(0)
  }
  const move = (dir) => setSlide((s) => (s + dir + slideCount) % slideCount)

  return (
    <div className="pt-10 sm:pt-16">
      {/* 페이지 헤더 */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl" />
          <Star className="absolute left-[12%] top-16 animate-twinkle text-lime-point" size={22} />
          <Star className="absolute right-[12%] top-24 animate-twinkle text-brand-200" size={16} />
        </div>
        <div className="container-page text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">설계사 채용</h1>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            한케어 파트너스에 대한 모든 정보
          </p>
        </div>
      </section>

      {/* 소메뉴 탭 */}
      <section className="container-page mt-10">
        <div className="flex flex-wrap justify-center gap-2.5">
          {TABS.map((t, i) => {
            const active = tab === i
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => changeTab(i)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                  active
                    ? 'border-brand bg-brand text-white shadow-glow'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand'
                }`}
              >
                {t.label}
              </button>
            )
          })}
        </div>
      </section>

      {/* 탭 콘텐츠 (창 안에서 바뀜) */}
      <section className="container-page mt-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* 좌: 텍스트 + 캐러셀 컨트롤 */}
          <div>
            <span className="chip">{current.label}</span>
            <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
              {data.title}
            </h2>
            <p className="mt-4 max-w-md text-slate-500">{data.desc}</p>

            {slideCount > 1 && (
              <div className="mt-8 flex items-center gap-3">
                <CarouselButton dir="left" onClick={() => move(-1)} />
                <CarouselButton dir="right" onClick={() => move(1)} />
                <div className="ml-1 flex gap-1.5">
                  {current.slides.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === slide ? 'w-6 bg-brand' : 'w-1.5 bg-brand-200'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 우: 이미지 자리 */}
          <ImageSlot name={data.image} bg={data.bg} />
        </div>
      </section>

      {/* 하단 프로모션 배너 */}
      <section className="container-page mt-16 sm:mt-20">
        <div className="flex flex-col items-center gap-5 overflow-hidden rounded-[28px] bg-brand-50/70 p-6 text-center sm:flex-row sm:p-8 sm:text-left">
          {/* 배너 캐릭터 이미지 자리 */}
          <BannerImageSlot name="recruit-banner.png" />
          <div className="flex-1">
            <p className="text-sm font-bold text-brand-700">[1+1 찬스] 한케어 스타터팩!</p>
            <p className="mt-1 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              교육비 + 활동 지원금 지급!
            </p>
          </div>
          <button
            type="button"
            onClick={consult.open}
            className="btn-primary shrink-0 px-7 py-3.5 text-base"
          >
            지금 지원하기
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}

/* ---- 캐러셀 화살표 ---- */
function CarouselButton({ dir, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === 'left' ? '이전' : '다음'}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-card transition hover:border-brand hover:bg-brand hover:text-white"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {dir === 'left' ? <path d="M15 6 9 12l6 6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  )
}

/* ---- 메인 이미지 자리 (우측 카드) ---- */
function ImageSlot({ name, bg }) {
  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br ${bg} shadow-card`}
    >
      <div className="flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-white/70 bg-white/40 px-5 py-4 text-center backdrop-blur-sm">
        <span className="text-2xl">🖼️</span>
        <span className="text-[11px] font-semibold text-slate-700">
          이미지 자리
          <br />
          <code className="text-[10px]">/src/image/{name}</code>
        </span>
      </div>
    </div>
  )
}

/* ---- 배너 이미지 자리 (캐릭터) ---- */
function BannerImageSlot({ name }) {
  return (
    <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-2 border-dashed border-brand-200 bg-white/70 text-center">
      <span className="text-xl">🦁</span>
      <code className="px-1 text-[9px] font-semibold text-brand-700/70">{name}</code>
    </div>
  )
}
