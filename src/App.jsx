import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { ConsultProvider } from './components/ConsultModal.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import RecruitPage from './pages/RecruitPage.jsx'
import RecruitDetailPage from './pages/RecruitDetailPage.jsx'
import FaqPage from './pages/FaqPage.jsx'

// 페이지 이동 시 맨 위로 / 해시(#services 등)가 있으면 해당 섹션으로 스크롤
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ConsultProvider>
        <ScrollManager />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/recruit" element={<RecruitPage />} />
              <Route path="/recruit/:slug" element={<RecruitDetailPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ConsultProvider>
    </BrowserRouter>
  )
}
