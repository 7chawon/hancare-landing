import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight } from '../components/Decorations.jsx'
import { useConsult } from '../components/ConsultModal.jsx'
import { getArticle, getRelated, TAB_LABELS, img } from '../data/recruitContent.js'

export default function RecruitDetailPage() {
  const { slug } = useParams()
  const article = getArticle(slug)
  const consult = useConsult()

  if (!article) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl font-extrabold">콘텐츠를 찾을 수 없어요</h1>
        <Link to="/recruit" className="btn-primary mt-6 inline-flex">
          채용 페이지로 돌아가기
        </Link>
      </div>
    )
  }

  const related = getRelated(slug)

  return (
    <div className="pt-6 sm:pt-10">
      {/* 뒤로가기 */}
      <div className="container-page">
        <Link
          to="/recruit"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-brand"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6 9 12l6 6" />
          </svg>
          설계사 채용
        </Link>
      </div>

      {/* 히어로 */}
      <section className="container-page mt-5">
        <div className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${article.bg} p-8 sm:p-12`}>
          <span className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-bold text-brand-700">
            {TAB_LABELS[article.tab]}
          </span>
          <h1 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 max-w-xl text-sm text-slate-700 sm:text-base">{article.summary}</p>
        </div>
      </section>

      {/* 쇼츠 영상 */}
      <section className="container-page mt-12">
        <h2 className="text-center text-xl font-extrabold tracking-tight sm:text-2xl">
          영상으로 <span className="text-brand">한눈에</span> 보기
        </h2>
        <div className="mx-auto mt-6 w-full max-w-[340px]">
          <ShortsEmbed shortsId={article.shortsId} title={article.title} />
        </div>
      </section>

      {/* 설명글 */}
      <section className="container-page mt-12">
        <div className="mx-auto max-w-2xl space-y-4">
          {article.body.map((p, i) => (
            <p key={i} className="text-[15px] leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>

        {/* 본문 CTA */}
        <div className="mx-auto mt-8 max-w-2xl">
          <button type="button" onClick={consult.open} className="cta-green">
            지금 파트너스 지원하기
            <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      {/* 관련 콘텐츠 — 카드 누르면 또 다른 상세로 */}
      <section className="container-page mt-16 sm:mt-20">
        <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">함께 보면 좋은 콘텐츠</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/recruit/${r.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-slate-100 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              <CardThumb name={r.image} bg={r.bg} />
              <div className="flex flex-1 flex-col p-4">
                <span className="text-[11px] font-bold text-brand-700">{TAB_LABELS[r.tab]}</span>
                <h3 className="mt-1 line-clamp-2 flex-1 text-sm font-bold text-slate-900">
                  {r.title}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-400 transition group-hover:text-brand">
                  자세히 보기
                  <ArrowUpRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

/* 쇼츠(YouTube 세로영상) 임베드 — ID 없으면 자리 placeholder */
function ShortsEmbed({ shortsId, title }) {
  if (shortsId) {
    return (
      <div className="aspect-[9/16] w-full overflow-hidden rounded-[24px] bg-black shadow-card">
        <iframe
          src={`https://www.youtube.com/embed/${shortsId}`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  return (
    <div className="flex aspect-[9/16] w-full flex-col items-center justify-center gap-3 rounded-[24px] border-2 border-dashed border-brand-200 bg-brand-50/50 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-glow">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <span className="px-4 text-xs font-semibold text-brand-700/80">
        쇼츠 영상 자리
        <br />
        YouTube 영상 ID를 알려주세요
      </span>
    </div>
  )
}

/* 관련 카드 썸네일 자리 */
function CardThumb({ name, bg }) {
  return (
    <div className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${bg}`}>
      <code className="rounded-md bg-white/60 px-2 py-1 text-[9px] font-semibold text-slate-700 backdrop-blur-sm">
        {name}
      </code>
    </div>
  )
}
