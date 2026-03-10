import mockImg from "@/assets/mock.png";

const WorkflowSection = () => {
  return (
    <section id="solutions" className="py-20 px-4 bg-secondary/50">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .workflow-text-col { animation: fadeSlideUp 0.7s ease both; }
        .workflow-text-col > div { animation: fadeSlideUp 0.6s ease 0.1s both; }
        .workflow-text-col > div:nth-child(2) { animation-delay: 0.15s; }
        .workflow-text-col > div:nth-child(3) { animation-delay: 0.2s; }
        .workflow-img-col img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .workflow-img-col:hover img {
          transform: scale(1.02);
        }
      `}</style>
      <div className="text-center max-w-xl mx-auto mb-14">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-tight mb-3">
          How PCS Transforms<br />Your Business
        </h2>
        <p className="text-sm text-muted-foreground">See how our platform streamlines your processes and drives efficiency.</p>
      </div>

      {/* Two-column layout — text left, image right with gradient blend */}
      <div className="flex flex-col md:flex-row w-full gap-0 items-center">
        
        {/* LEFT — Text column */}
        <div className="workflow-text-col flex-1 px-4 md:px-10 lg:px-14 py-10 md:py-0 space-y-6">
          {[
            { step: "01", title: "Assess & Strategize", desc: "We analyze your existing infrastructure and define a technology roadmap aligned with your goals." },
            { step: "02", title: "Build & Integrate", desc: "Our certified engineers build and integrate scalable solutions using modern tech stacks and agile practices." },
            { step: "03", title: "Optimize & Support", desc: "We provide 24/7 monitoring, optimization, and support to ensure continuous performance and growth." },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <span className="text-2xl font-bold text-muted-foreground/30 flex-shrink-0">{item.step}</span>
              <div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — Image column with gradient blend (full bleed, no borders) */}
        <div className="workflow-img-col relative overflow-hidden flex-none w-full md:w-1/2 lg:w-7/12 h-64 md:h-auto md:min-h-96">
          <img 
            src={mockImg} 
            alt="PCS Workflow Dashboard" 
            className="w-full h-full object-cover"
          />
          {/* Left-edge gradient blend — fades from semi-transparent to image */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{ background: "linear-gradient(to right, rgba(248,250,252,0.8) 0%, rgba(248,250,252,0.3) 30%, transparent 60%)" }}
          />
          {/* Top gradient blend for mobile stacking */}
          <div
            className="absolute inset-0 block md:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, rgba(248,250,252,0.7) 0%, transparent 40%)" }}
          />
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;
