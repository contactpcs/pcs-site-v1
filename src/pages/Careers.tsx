import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const positions = [
  { title: "Java Developer", salary: "₹3 LPA – ₹10 LPA", type: "Full-time", dept: "Engineering" },
  { title: "React Frontend Developer", salary: "Competitive", type: "Full-time", dept: "Engineering" },
  { title: "Cloud & DevOps Engineer", salary: "Competitive", type: "Full-time", dept: "Infrastructure" },
  { title: "Business Analyst", salary: "Competitive", type: "Full-time", dept: "Consulting" },
  { title: "QA Engineer", salary: "Competitive", type: "Full-time", dept: "Quality" },
];

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#081627]/5 via-white to-[#081627]/5">
        <div className="container mx-auto max-w-3xl text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5">
            Careers at <span className="text-gradient">PCS</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            We're building the future of enterprise technology. If you're passionate about engineering and innovation, we'd love to have you on the team.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
          <div className="space-y-3 mb-12">
            {positions.map((p) => (
              <div
                key={p.title}
                className="flex items-center justify-between p-5 rounded-xl bg-card border border-border hover:shadow-elevated hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{p.title}</p>
                    <p className="text-xs text-muted-foreground">{p.dept} · {p.salary} · {p.type}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full text-xs gap-1">
                  Apply <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>

          {/* No role match */}
          <div className="rounded-2xl bg-gradient-to-br from-[#081627] to-[#051020] text-white p-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Don't see a role that fits?</h3>
            <p className="text-sm text-white/70 mb-6 max-w-sm mx-auto">
              Send us your resume and we'll reach out when the right opportunity comes up.
            </p>
            <Button variant="secondary" size="sm" className="rounded-full px-6 text-xs gap-2">
              Send Your Resume <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Careers;
