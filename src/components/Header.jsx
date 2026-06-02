import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Decorations.jsx'
import { useConsult } from './ConsultModal.jsx'
import hansolLogo from '../image/HANSOL_LOGO.png'

const NAV = [
  { label: '홈', to: '/' },
  { label: '보험상담', to: '/#services' },
  { label: '회사소개', to: '/about' },
  { label: '자주 묻는 질문', to: '/faq' },
  { label: '설계사채용', to: '/recruit' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const consult = useConsult()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-page relative flex h-16 items-center justify-between sm:h-20">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={hansolLogo}
            alt="한솔"
            className="h-8 w-auto sm:h-9"
          />
          <span className="text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
            금융파트너스
          </span>
        </Link>

        {/* 데스크탑 메뉴 — 페이지 정중앙 고정 */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-slate-600 transition hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={consult.open}
            aria-label="상담 신청"
            className="group flex h-12 origin-center animate-ringbell items-center gap-0 rounded-full bg-brand px-3.5 text-white shadow-glow transition-all duration-300 hover:animate-none hover:gap-2 hover:bg-brand-600 hover:px-5"
          >
            {/* 닫혀 있을 땐 아이콘만 (클릭 유도) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.1 2.8 2 2 0 0 1 3.1.6h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L7.1 8.9a16 16 0 0 0 6 6l1.8-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
            </svg>
            {/* 호버 시 가로로 펼쳐지며 등장 */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[80px] group-hover:opacity-100">
              상담 신청
            </span>
          </button>
        </div>

        {/* 모바일 토글 */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {open && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur md:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand-50 hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                consult.open()
              }}
              className="btn-primary mt-2 justify-center"
            >
              상담 신청
              <ArrowUpRight />
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
