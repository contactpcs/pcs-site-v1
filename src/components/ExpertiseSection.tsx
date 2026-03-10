const capabilities = [
  "Custom Software Development & Product Engineering",
  "Cloud Infrastructure & DevOps (AWS, Azure, GCP)",
  "Enterprise Solutions — ERP, CRM & Automation",
  "24/7 IT Support & Managed Services",
];

import aboutImg from "@/assets/about.jpg";

const ExpertiseSection = () => {
  const sections = [
    {
      title: "Who We Are",
      content:
        "PCS is a bay area software development company, established in Feb 2015, a profitable US entity with a subsidiary in India.\n\nCreating Value We help businesses create value across the entire product lifecycle engineering cutting-edge solutions and helping mature products evolve as relevant to digitally savvy consumers\n\nConnecting Dots Through out the ecosystem by bringing together makers and markets to create amazing products.\n\nEngineering Talent We help our clients scale their product and engineering functions rapidly leveraging talent in United States and India. We serve 20+ clients globally with expert engineering teams.",
    },
  ];

  return (
    <section id="about" className="py-20">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        .about-section-animate .about-heading { animation: fadeSlideUp 0.7s ease both; }
        .about-section-animate .about-stat { animation: countUp 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
        .about-section-animate .about-stat:nth-child(2) { animation-delay: 0.15s; }
        .about-section-animate .about-card-wrap { animation: fadeSlideUp 0.8s ease 0.2s both; }
        .about-img-hover {
          transition: transform 0.7s cubic-bezier(0.4,0,0.2,1), filter 0.5s ease;
        }
        .about-card-wrap:hover .about-img-hover {
          transform: scale(1.04);
          filter: brightness(1.05);
        }
        .about-text-line {
          border-left: 3px solid rgba(59,130,246,0.5);
          padding-left: 1rem;
          margin-bottom: 1rem;
          transition: border-color 0.3s ease;
        }
        .about-card-wrap:hover .about-text-line {
          border-color: rgba(59,130,246,1);
        }
        .stat-badge {
          transition: all 0.3s ease;
          position: relative;
        }
        .stat-badge::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background: radial-gradient(circle at 50% 120%, rgba(37,99,235,0.18), transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .stat-badge:hover::after { opacity: 1; }
        .stat-badge:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(37,99,235,0.18); }
      `}</style>
      <div className="container mx-auto max-w-7xl px-4 about-section-animate">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 about-heading">About</h2>
        </div>
      </div>
      {/* Two-column layout — zoom-safe, mobile-first */}
      <div className="about-card-wrap flex flex-col md:flex-row w-full group">

        {/* LEFT — image column (~55% on desktop, full width on mobile) */}
        <div className="relative overflow-hidden flex-none w-full md:w-3/5 lg:w-7/12 h-60 md:h-auto">
          <img
            src={aboutImg}
            alt="PCS IT Solutions"
            className="about-img-hover w-full h-full object-cover"
          />
          {/* Blend right-edge into dark text column — desktop only */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 55%, rgba(15,23,42,0.98) 100%)" }}
          />
          {/* Blend bottom into dark panel for mobile stacking */}
          <div
            className="absolute inset-0 block md:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(15,23,42,0.97) 100%)" }}
          />
          {/* Blue shimmer on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: "linear-gradient(135deg, transparent 50%, rgba(37,99,235,0.12) 100%)" }}
          />
        </div>

        {/* RIGHT — text column with dark background */}
        <div className="flex-1 bg-slate-900 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-tight">
            Who We Are
          </h3>
          {sections[0].content.split("\n\n").map((para, i) => (
            <div key={i} className="about-text-line mb-0">
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">
                {para}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExpertiseSection;
