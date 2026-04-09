import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import StatsSection from "./components/StatsSection";
import IndustrySpecialisations from "./components/IndustrySpecialisations";
import ServicesSection from "./components/ServicesSection";
import ExpertiseSection from "./components/ExpertiseSection";
import CEODesk from "./components/CEODesk";
import FAQ from "./components/FAQ";
import KnowledgeHub from "./components/KnowledgeHub";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoCarousel />
        <StatsSection />
        <IndustrySpecialisations />
        <ServicesSection />
        <ExpertiseSection />
        <CEODesk />
        <FAQ />
        <KnowledgeHub />
      </main>
      <Footer />
    </div>
  );
}
