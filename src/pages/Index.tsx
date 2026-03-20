import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import DesignDevelopmentSection from "@/components/DesignDevelopmentSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import TrustedBySection from "@/components/TrustedBySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import WorkflowSection from "@/components/WorkflowSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import BotSection from "@/components/BotSection";
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
      <FeaturesSection />
      <DesignDevelopmentSection />
      <BotSection />
      <TeamSection />
      <StatsSection />
      <TrustedBySection />
      <WorkflowSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
      <DialogflowChatbot />
    </div>
  );
};

export default Index;
