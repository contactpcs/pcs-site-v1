import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import TrustedBySection from "@/components/TrustedBySection";
import StatsSection from "@/components/StatsSection";
import FooterSection from "@/components/FooterSection";

const Clients = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="pt-32 pb-6 px-4 bg-gradient-to-br from-[#081627]/5 via-white to-[#081627]/5">
      <div className="container mx-auto max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
          Early Partners &amp; <span className="text-primary">Collaborators</span>
        </h1>
        <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
          Organisations our founding team has engaged with, bringing hands-on healthcare and technology experience to the NeuroWellness platform.
        </p>
      </div>
    </section>
    <TrustedBySection />
    <StatsSection />
    <FooterSection />
  </div>
);

export default Clients;
