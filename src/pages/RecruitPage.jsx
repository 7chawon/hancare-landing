import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Star, ArrowUpRight } from '../components/Decorations.jsx'
import { useConsult } from '../components/ConsultModal.jsx'
import { TAB_ORDER, TAB_LABELS, getByTab, img } from '../data/recruitContent.js'
import bannerImg from '../image/recruit-banner.png'

export default function RecruitPage() {
  const consult = useConsult()
  const [tab, setTab] = useState(0)
  const [slide, setSlide] = useState(0)

  const tabKey = TAB_ORDER[tab]
  const slides = getByTab(tabKey)
  const data = slides[slide]
  const slideCount = slides.length

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
        <div className="mx-auto flex max-w-xl gap-2.5">
          {TAB_ORDER.map((key, i) => {
            const active = tab === i
            return (
              <button
                key={key}
                type="button"
                onClick={() => changeTab(i)}
                className={`flex-1 whitespace-nowrap rounded-full border px-3 py-2.5 text-center text-sm font-semibold transition ${
                  active
                    ? 'border-brand bg-brand text-white shadow-glow'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-brand-200 hover:text-brand'
                }`}
              >
                {TAB_LABELS[key]}
              </button>
            )
          })}
        </div>
      </section>

      {/* 탭 콘텐츠 */}
      <section className="container-page mt-12">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* 좌: 텍스트 + 캐러셀 컨트롤 */}
          <div>
            <span className="chip">{TAB_LABELS[tabKey]}</span>
            <h2 className="mt-4 text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
              {data.title}
            </h2>
            <p className="mt-4 max-w-md text-slate-500">{data.summary}</p>

            <Link
              to={`/recruit/${data.slug}`}
              className="btn-primary mt-6 inline-flex px-6 py-3 text-sm"
            >
              자세히 보기
              <ArrowUpRight size={16} />
            </Link>

            {slideCount > 1 && (
              <div className="mt-8 flex items-center gap-3">
                <CarouselButton dir="left" onClick={() => move(-1)} />
                <CarouselButton dir="right" onClick={() => move(1)} />
                <div className="ml-1 flex gap-1.5">
                  {slides.map((_, i) => (
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

          {/* 우: 이미지 (누르면 상세로 이동) */}
          <Link
            to={`/recruit/${data.slug}`}
            className={`group relative flex aspect-[3/2] w-full items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br ${data.bg} shadow-card transition hover:shadow-glow`}
          >
            <img
              src={img(data.image)}
              alt={data.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold text-brand-700 backdrop-blur-sm">
              눌러서 보기 <ArrowUpRight size={12} />
            </span>
          </Link>
        </div>
      </section>

      {/* 하단 프로모션 배너 (얇게 + 캐릭터는 위로 튀어나오게) */}
      <section className="container-page mt-20 sm:mt-28">
        <div className="relative flex items-center gap-3 rounded-[24px] bg-brand-50/70 py-4 pl-24 pr-5 sm:gap-4 sm:py-5 sm:pl-44 sm:pr-8">
          {/* 캐릭터: 밑면을 박스 바닥에 맞추고 위로 돌출 */}
          <img
            src={bannerImg}
            alt="한케어 스타터팩"
            className="pointer-events-none absolute bottom-0 left-2 h-28 w-auto object-contain sm:left-5 sm:h-40"
          />
          <div className="flex-1">
            <p className="text-xs font-bold text-brand-700 sm:text-sm">[1+1 찬스] 한케어 스타터팩!</p>
            <p className="mt-0.5 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              교육비 + 활동 지원금 지급!
            </p>
          </div>
          <button
            type="button"
            onClick={consult.open}
            className="btn-primary shrink-0 px-5 py-3 text-sm sm:px-7 sm:py-3.5 sm:text-base"
          >
            지금 지원하기
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}

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
