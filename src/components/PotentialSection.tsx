import heroDashboard from "@/assets/hero-dashboard.png";
import productKanban from "@/assets/product-kanban.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PotentialSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-[2.75rem] font-semibold text-center mb-16 leading-tight">Intelligent Automation, Built for Business</h2>
        <p className="text-center text-sm text-muted-foreground -mt-12 mb-16 max-w-2xl mx-auto">
          PCS Bot is our proprietary automation platform that helps organizations reduce manual work, accelerate decision-making, and deploy intelligent tools — all without complex infrastructure.
        </p>

        <div className="space-y-20">
          {[
            {
              tag: "Automated Workflows",
              title: "Design and deploy AI-powered workflows",
              desc: "Design and deploy AI-powered robots for customer workflows that eliminate repetitive tasks and reduce operational overhead.",
              img: heroDashboard,
              reverse: false,
            },
            {
              tag: "Intelligent Chat Automation",
              title: "Build AI-powered chatbots",
              desc: "Build AI-powered chatbots for customer support, lead qualification, and internal process automation.",
              img: productKanban,
              reverse: true,
            },
          ].map((item, i) => (
            <div key={i} className={`flex flex-col ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
              <div className="flex-1 max-w-md">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{item.tag}</span>
                <h3 className="text-2xl md:text-3xl font-semibold mt-2 mb-4 leading-snug">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{item.desc}</p>
                <Button variant="outline" size="sm" className="rounded-full px-5 text-xs gap-2">
                  Request a Demo <ArrowRight className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-card border border-border">
                  <img src={item.img} alt={item.tag} className="w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
