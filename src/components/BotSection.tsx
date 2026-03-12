import { useState } from "react";
import { Zap, Briefcase, TrendingUp, ShieldCheck, Users, UserCheck, Award, Clock, UserPlus, Globe, Building2, Layers, BarChart3, Repeat } from "lucide-react";

const painPoints = [
  {
    icon: Zap,
    title: "Are you getting the right talent?",
    desc: "Funding, PMF, Engineering, Sales — getting the right talent is often second priority because of time constraints.",
  },
  {
    icon: Briefcase,
    title: "Do you have capacity constraints?",
    desc: "Pending feature backlogs that, if completed, would have meaningfully helped the company grow.",
  },
  {
    icon: TrendingUp,
    title: "Is your spending optimized?",
    desc: "Costs haven't received enough attention for optimisation and reduction.",
  },
  {
    icon: ShieldCheck,
    title: "Concerned about security and control?",
    desc: "Questions on IP leakage, security, compliance — and the risk of losing control.",
  },
];

type PhaseKey = "build" | "operate" | "transfer";

const phaseData: Record<PhaseKey, {
  label: string;
  tagline: string;
  items: { icon: React.ElementType; title: string; desc: string }[];
  highlight: string;
}> = {
  build: {
    label: "Build",
    tagline: "We lay every foundation — legal, structural, and operational — so you can hit the ground running.",
    items: [
      { icon: Building2, title: "Business Entity Formation", desc: "We handle all paperwork, statutory checks and transparently share every detail with you." },
      { icon: Layers, title: "Statutory & Regulatory Setup", desc: "India-compliant registrations, PAN, GST, and all statutory filings handled end-to-end." },
      { icon: Users, title: "Initial Office Setup & Infra", desc: "Physical and digital workspace configured — ready for your first hires on day one." },
      { icon: Globe, title: "Legal / HR / Finance Policies", desc: "India-compliant HR frameworks, statutory registrations, and finance policies put in place." },
    ],
    highlight: "Turn-key setup in as fast as 3 months",
  },
  operate: {
    label: "Operate",
    tagline: "We run the day-to-day operations — talent, governance, delivery — while you focus on growth.",
    items: [
      { icon: Users, title: "Vast Talent Pool", desc: "Access to pre-vetted engineers across all modern technology stacks via direct hiring channels." },
      { icon: BarChart3, title: "Trusted Project Governance", desc: "Agile delivery models with clear KPIs, sprint reviews, and real-time transparency." },
      { icon: Repeat, title: "Engineering & Product Mindset", desc: "We think like product teams, not just service providers — outcomes over outputs." },
      { icon: Clock, title: "Steady Stealth Operations", desc: "Operate seamlessly without disruption to your existing teams or processes." },
    ],
    highlight: "Fully operational captive unit within 6–12 months",
  },
  transfer: {
    label: "Transfer",
    tagline: "When you're ready, we hand over a fully functional, scaled organisation — completely yours.",
    items: [
      { icon: TrendingUp, title: "Scale Up", desc: "Expand infra, talent headcount and project throughput to match your growth velocity." },
      { icon: Globe, title: "Scale Out", desc: "Extend to new service lines and locations — a blueprint for geographic expansion." },
      { icon: UserCheck, title: "Knowledge Transfer", desc: "Structured knowledge handover: docs, processes, runbooks, and team introductions." },
      { icon: Building2, title: "Full Ownership", desc: "100% operational control transferred — your India captive, completely yours." },
    ],
    highlight: "Full turn-key transfer in 18–24 months",
  },
};

const buildItems = [
  "Formation of Biz Entity in India",
  "Initial Office Setup / Infra",
  "Legal / HR / Finance Policies",
  "India Regulatory & Statutory Compliance",
];

const runItems = [
  "Vast Talent Pool",
  "Trusted Project Governance",
  "Engineering and Product Mindset",
  "Legal / HR / Finance",
];

const keyBenefits = [
  "India has an amazingly large talent pool — we help you secure and operate it.",
  "Set up operations and run in all aspects until you wish to take 100% control.",
  "India's statutory laws require high touchpoints. We manage all complexity for you.",
  "Scale fast with numbers and throughput backed by an experienced execution team.",
  "Not just an outsourcing partner — we are your engineering back-office.",
  "A committed long-term partner — our reputation is built on your success.",
];

const requirements = [
  { icon: Users, title: "Resource Ramp Up Plan", desc: "We need to know what engineers will work on, how many and when.", color: "bg-blue-500/10 text-blue-500" },
  { icon: UserCheck, title: "Talent Acquisition Support", desc: "In Year 1, last 1–2 rounds done by your staff; Year 2 fully from India.", color: "bg-cyan-500/10 text-cyan-600" },
  { icon: Award, title: "Knowledge Ramp Up Plan", desc: "Some people travel to India (reverse osmosis); some travel to HQ (osmosis).", color: "bg-violet-500/10 text-violet-600" },
  { icon: Clock, title: "Retrospection Sessions", desc: "Forward-looking 2-Qtr plan + monthly retrospection on what went right / wrong.", color: "bg-indigo-500/10 text-indigo-600" },
  { icon: UserPlus, title: "Agreed Engineering Model", desc: "You decide reporting structure, hierarchy, escalation — we provide options.", color: "bg-sky-500/10 text-sky-600" },
  { icon: BarChart3, title: "Sound Financial Operations", desc: "4 months advanced payments for agreed projections. Adjustments reviewed monthly.", color: "bg-teal-500/10 text-teal-600" },
];

const BotSection = () => {
  const [activePhase, setActivePhase] = useState<PhaseKey>("build");
  const phase = phaseData[activePhase];

  return (
    <section id="bot" className="bg-background">
      <style>{`
        @keyframes botFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes phaseContentIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bot-animate { animation: botFadeUp 0.7s ease both; }
        .phase-content { animation: phaseContentIn 0.4s ease both; }
        .bot-card {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .bot-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(15,114,186,0.15);
        }
        .phase-tab {
          position: relative;
          transition: all 0.25s ease;
          font-weight: 600;
          letter-spacing: 0.06em;
          font-size: 0.85rem;
          text-transform: uppercase;
        }
        .phase-tab::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #0f72ba, #3b82f6);
          transform: scaleX(0);
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border-radius: 2px;
        }
        .phase-tab.active::after { transform: scaleX(1); }
        .phase-item-card {
          transition: all 0.25s ease;
        }
        .phase-item-card:hover {
          background: rgba(15,114,186,0.06);
          border-color: rgba(15,114,186,0.3);
          transform: translateX(4px);
        }
        .req-card { transition: all 0.25s ease; }
        .req-card:hover {
          background: rgba(15,114,186,0.04);
          transform: translateX(4px);
          border-color: rgba(15,114,186,0.25);
        }
      `}</style>

      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#061320] via-[#081a2e] to-[#061320] py-16 px-4 text-center overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 container mx-auto max-w-3xl bot-animate">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-xs text-blue-300 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
            Build · Operate · Transfer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Scale with the{" "}
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-200 to-white">
              BOT Model
            </span>
          </h2>
          <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto">
            We help you set up your India captive unit — Build, Operate, and Transfer on your timeline.
          </p>
        </div>
      </div>

      {/* ── Pain Points ─────────────────────────────────────────────── */}
      <div className="py-14 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Do any of these sound familiar?</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              If you're a Founder or Executive and answered yes — we can help.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {painPoints.map((pt, i) => (
              <div key={i} className="bot-card rounded-2xl border border-border bg-card p-6 flex flex-col gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <pt.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm leading-snug">{pt.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Interactive Phases ──────────────────────────────────────── */}
      <div className="bg-slate-900 py-14 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
              Partners with skin in the game
            </h3>
            <p className="text-white/55 text-sm max-w-lg mx-auto">
              A unique operating model that helps you set up your captive in India without the pain.
            </p>
          </div>

          {/* Phase Content */}
          <div key={activePhase} className="phase-content">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Left: tagline + items */}
              <div>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 mb-3 uppercase tracking-widest">
                    {phase.label}
                  </span>
                  <p className="text-white/75 text-sm leading-relaxed">{phase.tagline}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {phase.items.map((item, i) => (
                    <div
                      key={i}
                      className="phase-item-card flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="h-9 w-9 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm mb-0.5">{item.title}</p>
                        <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: animated phase visual */}
              <div className="flex flex-col gap-4">
                <style>{`
                  @keyframes phaseGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
                    50% { box-shadow: 0 0 0 10px rgba(59,130,246,0); }
                  }
                  .phase-node-active { animation: phaseGlow 2s ease-in-out infinite; }
                `}</style>

                {(["build", "operate", "transfer"] as PhaseKey[]).map((key, i) => {
                  const isActive = key === activePhase;
                  const isPast = ["build", "operate", "transfer"].indexOf(activePhase) > i;
                  const icons = [Building2, BarChart3, TrendingUp];
                  const labels = ["Build", "Operate", "Transfer"];
                  const subs = ["Entity, Infrastructure & Setup", "Talent, Governance & Delivery", "Scale Up & Full Ownership"];
                  const Icon = icons[i];
                  return (
                    <div key={key}>
                      <button
                        onClick={() => setActivePhase(key)}
                        className={`w-full flex gap-4 items-center p-4 rounded-2xl transition-all duration-300 text-left ${
                          isActive
                            ? "bg-blue-500/20 border border-blue-400/40"
                            : "bg-white/5 border border-white/10 hover:bg-white/8"
                        }`}
                      >
                        <div className={`h-11 w-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all duration-300 ${
                          isActive
                            ? "bg-blue-500 text-white phase-node-active"
                            : isPast
                            ? "bg-blue-500/30 text-blue-300 border border-blue-500/40"
                            : "bg-white/5 text-white/30 border border-white/15"
                        }`}>
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className={`font-semibold text-sm transition-colors ${isActive ? "text-white" : isPast ? "text-white/60" : "text-white/30"}`}>
                              {labels[i]}
                            </p>
                            {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />}
                          </div>
                          <p className={`text-xs transition-colors ${isActive ? "text-white/65" : "text-white/25"}`}>{subs[i]}</p>
                        </div>
                        <Icon className={`h-5 w-5 flex-shrink-0 transition-colors ${isActive ? "text-blue-300" : "text-white/20"}`} />
                      </button>
                      {i < 2 && (
                        <div className="flex items-center ml-[1.625rem] py-1">
                          <div className={`w-px h-4 transition-colors duration-500 ${isPast || isActive ? "bg-blue-500/50" : "bg-white/10"}`} />
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="mt-2 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-white/55 text-xs leading-relaxed text-center">{phase.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── How We Do It ────────────────────────────────────────────── */}
      <div className="py-14 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">How we do it — What you get</h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Scale in India, scale with us. We build your captive organisation and operate it till you want to manage it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-7">
              <div>
                <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <span className="h-5 w-1 rounded-full bg-primary" />
                  Build
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {buildItems.map((item, i) => (
                    <div key={i} className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs font-medium leading-snug hover:border-primary/40 hover:bg-primary/5 transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-3 flex items-center gap-2">
                  <span className="h-5 w-1 rounded-full bg-cyan-500" />
                  Run
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {runItems.map((item, i) => (
                    <div key={i} className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs font-medium leading-snug hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── What We Need ────────────────────────────────────────────── */}
      <div className="bg-slate-50/70 py-14 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">What we need from you</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              You get a turn-key operation in as fast as 2 years.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {requirements.map((req, i) => (
              <div key={i} className="req-card rounded-2xl border border-border bg-white p-5 flex gap-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 ${req.color}`}>
                  <req.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">{req.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{req.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotSection;
