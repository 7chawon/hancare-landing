import Hero from '../components/Hero.jsx'
import ServiceSlider from '../components/ServiceSlider.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import TrustSection from '../components/TrustSection.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceSlider />
      <ServiceCards />
      <TrustSection />
    </>
  )
}
