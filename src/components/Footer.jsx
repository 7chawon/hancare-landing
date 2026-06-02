import { Link } from 'react-router-dom'
import hansolLogo from '../image/HANSOL_LOGO.png'
import naverLogo from '../image/네이버_AI-05.png'
import instagramLogo from '../image/Instagram.svg.png'

const SNS = [
  {
    label: '네이버 블로그',
    img: naverLogo,
    href: 'https://blog.naver.com/hancare_partners',
  },
  {
    label: '인스타그램',
    img: instagramLogo,
    href: 'https://www.instagram.com/hancare_partners',
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="mt-24 border-t border-slate-100 bg-brand-50/40 sm:mt-32">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* 회사정보 */}
          <div>
            <div className="flex items-center gap-2.5">
              <img src={hansolLogo} alt="한케어" className="h-9 w-auto" />
              <span className="text-lg font-extrabold text-slate-900">금융파트너스</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              한케어 금융파트너스. 보험설계부터 자산관리까지,
              <br />
              고객의 평생 금융 파트너가 되겠습니다.
            </p>
            <dl className="mt-5 space-y-1.5 text-sm text-slate-500">
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-700">대표번호</dt>
                <dd className="text-brand-700">1881-8559</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold text-slate-700">서비스 지역</dt>
                <dd>전국</dd>
              </div>
            </dl>
          </div>

          {/* SNS + 빠른 메뉴 */}
          <div className="flex flex-col gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600 md:justify-end">
              <Link to="/" className="transition hover:text-brand">홈</Link>
              <Link to="/#services" className="transition hover:text-brand">보험상담</Link>
              <Link to="/about" className="transition hover:text-brand">회사소개</Link>
              <Link to="/faq" className="transition hover:text-brand">자주 묻는 질문</Link>
              <Link to="/recruit" className="transition hover:text-brand">설계사채용</Link>
            </nav>
            <div className="flex gap-2.5">
              {SNS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={s.label}
                  className="transition hover:-translate-y-0.5 hover:opacity-80"
                >
                  <img src={s.img} alt={s.label} className="h-10 w-10 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2024 한케어 금융파트너스. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="transition hover:text-brand-700">이용약관</a>
            <a href="#" className="transition hover:text-brand-700">개인정보처리방침</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
