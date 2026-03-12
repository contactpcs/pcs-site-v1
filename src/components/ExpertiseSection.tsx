import { Settings, Mail, Grid, Info, MousePointer, Bell, Zap, Clock, Target, Globe } from "lucide-react";

import aboutImg from "@/assets/about.jpg";

const whoWeAreContent =
  "PCS is a bay area software development company, established in Feb 2015, a profitable US entity with a subsidiary in India.\n\nCreating Value We help businesses create value across the entire product lifecycle engineering cutting-edge solutions and helping mature products evolve as relevant to digitally savvy consumers\n\nConnecting Dots Throughout the ecosystem by bringing together makers and markets to create amazing products.\n\nEngineering Talent We help our clients scale their product and engineering functions rapidly leveraging talent in United States and India. We serve 20+ clients globally with expert engineering teams.";

const functionsList = [
  { icon: Settings, label: "Competent Employees" },
  { icon: Mail, label: "Warm Customer Approach" },
  { icon: Grid, label: "We Recommend Best Practices" },
  { icon: Globe, label: "Global Connection" },
  { icon: MousePointer, label: "Successful Track Record" },
  { icon: Bell, label: "Open To Opportunities" },
];

const historyCards = [
  {
    title: "Our History",
    desc: "Over 6+ years in product and software development, building 15+ high-impact business solutions with faster time to market.",
    icon: Clock,
  },
  {
    title: "Our Goal",
    desc: "We want to be your preferred partner for your product development.",
    icon: Target,
  },
  {
    title: "Who We Are",
    desc: "We are a team of experienced people who want to help our customers develop products that bring benefits and change for the good of society.",
    icon: Info,
  },
];

const values = [
  {
    title: "Faster Time to Market",
    desc: "Go to market faster with swift ramp-ups. Top-notch talent in emerging and niche technology areas through direct hiring channels.",
    gradient: "from-blue-600/20 to-blue-500/5",
    badge: "bg-blue-500/10 text-blue-400",
  },
  {
    title: "Niche Technologies",
    desc: "Business-centric solutions for IoT, Data Science, Mobile, and Cloud.",
    gradient: "from-cyan-600/20 to-cyan-500/5",
    badge: "bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "E2E Execution",
    desc: "Managed services with end-to-end execution of projects.",
    gradient: "from-purple-600/20 to-purple-500/5",
    badge: "bg-purple-500/10 text-purple-400",
  },
  {
    title: "Flexible Engagements",
    desc: "Engagement models suitable for a wide variety of organisational requirements.",
    gradient: "from-indigo-600/20 to-indigo-500/5",
    badge: "bg-indigo-500/10 text-indigo-400",
  },
  {
    title: "Right Location",
    desc: "Complement existing teams in Europe to scale rapidly with a follow-the-sun approach and cost advantage.",
    gradient: "from-sky-600/20 to-sky-500/5",
    badge: "bg-sky-500/10 text-sky-400",
  },
];

const ExpertiseSection = () => {
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
        .fn-chip {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .fn-chip:hover {
          transform: translateY(-3px);
          border-color: rgba(15,114,186,0.5);
          background: rgba(15,114,186,0.08);
        }
        .value-card {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .value-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(15,114,186,0.12);
        }
        .history-card {
          transition: all 0.3s ease;
        }
        .history-card:hover {
          border-color: rgba(15,114,186,0.4);
          background: rgba(15,114,186,0.04);
        }
      `}</style>

      {/* ── Section Header ─────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-4 about-section-animate">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 about-heading">About</h2>
        </div>
      </div>

      {/* ── Who We Are — two-column image + text ───────────────────── */}
      <div className="about-card-wrap flex flex-col md:flex-row w-full group">
        {/* LEFT — image */}
        <div className="relative overflow-hidden flex-none w-full md:w-3/5 lg:w-7/12 h-60 md:h-auto">
          <img
            src={aboutImg}
            alt="PCS IT Solutions"
            className="about-img-hover w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 55%, rgba(15,23,42,0.98) 100%)" }}
          />
          <div
            className="absolute inset-0 block md:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 45%, rgba(15,23,42,0.97) 100%)" }}
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
            style={{ background: "linear-gradient(135deg, transparent 50%, rgba(37,99,235,0.12) 100%)" }}
          />
        </div>

        {/* RIGHT — text */}
        <div className="flex-1 bg-slate-900 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-tight">
            Who We Are
          </h3>
          {whoWeAreContent.split("\n\n").map((para, i) => (
            <div key={i} className="about-text-line mb-0">
              <p className="text-sm md:text-base text-slate-200 leading-relaxed">{para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Functions ─────────────────────────────────────────────── */}
      <div className="py-20 px-4 bg-slate-950/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Functions</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We want to be your preferred partner for your product development.
            </p>
          </div>

          {/* Chips row */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {functionsList.map((fn, i) => (
              <div
                key={i}
                className="fn-chip flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium"
              >
                <fn.icon className="h-4 w-4 text-primary" />
                {fn.label}
              </div>
            ))}
          </div>

          {/* History / Goal / Who We Are cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {historyCards.map((card, i) => (
              <div
                key={i}
                className="history-card rounded-2xl border border-border bg-card p-7 flex flex-col gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-base">{card.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Values ────────────────────────────────────────────── */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              What drives us
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Our Values</h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Over 6 years in product and software development, building 15+ high-impact business solutions with faster time to market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => (
              <div
                key={i}
                className={`value-card rounded-2xl border border-border bg-gradient-to-br ${val.gradient} p-7 flex flex-col gap-4`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className={`text-xs font-semibold px-3 py-1 rounded-full self-start ${val.badge}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-semibold text-base leading-snug">{val.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
