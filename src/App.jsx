import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ServiceSlider from './components/ServiceSlider.jsx'
import ServiceCards from './components/ServiceCards.jsx'
import TrustSection from './components/TrustSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceSlider />
        <ServiceCards />
        <TrustSection />
      </main>
      <Footer />
    </div>
  )
}
