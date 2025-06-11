import HeroSection from "./components/HeroSection"
import GamesSection from "./components/GamesSection"
import EnvironmentsSection from "./components/EnvironmentsSection"
import AssetsSection from "./components/AssetsSection"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
export default function Home() {
  return (
    <div>
      <HeroSection />
      <GamesSection />
      <EnvironmentsSection />
      <AssetsSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}