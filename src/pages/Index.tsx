import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TrustedBySection from "@/components/TrustedBySection";
import FeaturesSection from "@/components/FeaturesSection";
import DesignDevelopmentSection from "@/components/DesignDevelopmentSection";
import BotSection from "@/components/BotSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import DialogflowChatbot from "@/components/DialogflowChatbot";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      // Clear the state immediately so a page reload doesn't re-scroll
      window.history.replaceState({}, "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <TrustedBySection />
      <FeaturesSection />
      <DesignDevelopmentSection />
      <BotSection />
      <TeamSection />
      <StatsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <DialogflowChatbot />
    </div>
  );
};

export default Index;
