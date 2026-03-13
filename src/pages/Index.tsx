import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ChallengesSection from "@/components/ChallengesSection";
import BridgingSection from "@/components/BridgingSection";
import TechBackgrounds from "@/components/TechBackgrounds";
import PartnerSection from "@/components/PartnerSection";
import PathwaysSection from "@/components/PathwaysSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ChallengesSection />
      <BridgingSection />
      <TechBackgrounds />
      <PartnerSection />
      <PathwaysSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
