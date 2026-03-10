import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight } from "lucide-react";

const positions = [
  { title: "Java Developer", salary: "₹3 LPA – ₹10 LPA", type: "Full-time" },
  { title: "React Frontend Developer", salary: "Competitive", type: "Full-time" },
  { title: "Cloud & DevOps Engineer", salary: "Competitive", type: "Full-time" },
];

const CareersSection = () => {
  return (
    <section id="careers" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-center mb-3 leading-tight">Careers at PCS</h2>
        <p className="text-center text-sm text-muted-foreground mb-12">
          We're building the future of enterprise technology. If you're passionate about engineering and innovation, we'd love to have you on the team.
        </p>
        <div className="space-y-3 mb-8">
          {positions.map((p) => (
            <div key={p.title} className="flex items-center justify-between p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-sm">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{p.salary} · {p.type}</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-full text-xs gap-1">
                Apply <ArrowRight className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Don't see a role that fits? <a href="#contact" className="underline hover:text-foreground">Send us your resume</a> and we'll be in touch.
        </p>
      </div>
    </section>
  );
};

export default CareersSection;
