import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Sharma", role: "CTO, Lead Architect", text: "Visionary leader with 15+ years of experience driving IT transformation for enterprises.", avatar: "RS" },
  { name: "Priya Mehta", role: "Product Manager", text: "Expert in cloud architecture and microservices with a passion for scalable system design.", avatar: "PM" },
  { name: "Amit Kumar", role: "Cloud Solutions Lead", text: "Drives product strategy and roadmaps across the full portfolio of PCS offerings.", avatar: "AK" },
];

const TeamSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold text-center mb-3 leading-tight">Meet the Team Behind PCS</h2>
        <p className="text-center text-sm text-muted-foreground mb-12">A dedicated group of engineers, architects, and strategists committed to delivering exceptional technology outcomes.</p>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-muted-foreground">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-xs">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
