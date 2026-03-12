import { Zap, Briefcase, TrendingUp, ShieldCheck, Users, UserCheck, Award, Clock, UserPlus, Globe } from "lucide-react";

const painPoints = [
  {
    icon: Zap,
    title: "Are you getting the right talent?",
    desc: "I am very busy with Funding, Product Market Fitment, Engineering, Sales and Expansion. Getting right talent, focus and scale is often second priority because of time constraints.",
  },
  {
    icon: Briefcase,
    title: "Do you currently have capacity constraints?",
    desc: "There are often many pending feature backlogs that, if completed, would have helped the company grow further.",
  },
  {
    icon: TrendingUp,
    title: "Is your spending optimized and are you ready to scale up?",
    desc: "I have not given enough attention to optimised and lowering costs.",
  },
  {
    icon: ShieldCheck,
    title: "Concerned about losing control and security if you engage outside?",
    desc: "There is always a question on IP leakage, security, compliances — and you may lose control.",
  },
];

const phases = [
  {
    phase: "Phase 1",
    label: "Build",
    items: [
      { title: "Biz Formation", desc: "We take care of all paperwork, statutory checks and transparently share every detail with you." },
      { title: "Equity Split", desc: "Us 25% · You 75% — we are partners with skin in the game." },
    ],
  },
  {
    phase: "Phase 2",
    label: "Operate",
    items: [
      { title: "Talent Pool", desc: "Recruitment and Workforce Management powered by our vast India network." },
      { title: "Operations", desc: "Run in steady and stealth mode until you are ready to take the wheel." },
    ],
  },
  {
    phase: "Phase 3",
    label: "Transfer",
    items: [
      { title: "Scale Up", desc: "Scale up infra, talent and projects as your business demands." },
      { title: "Scale Out", desc: "Expand services and locations — turn-key in as fast as 2 years." },
    ],
  },
];

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
  "India's statutory laws require high touchpoints. We manage all that complexity for you.",
  "Scale fast with numbers and throughput backed by an experienced execution team.",
  "Not just an outsourcing partner — we are your engineering back-office.",
  "We have skin in the game for your success, benefiting only when you see positive outcomes.",
];

const requirements = [
  {
    icon: Users,
    title: "Resource Ramp Up Plan",
    desc: "We need to know what engineers will work on, how many and when.",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: UserCheck,
    title: "Talent Acquisition Support",
    desc: "In Year 1, last 1–2 rounds done by your staff; Year 2 fully from India.",
    color: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: Award,
    title: "Knowledge Ramp Up Plan",
    desc: "Some people travel to India (reverse osmosis); some travel to HQ (osmosis).",
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: Clock,
    title: "Retrospection Sessions",
    desc: "Forward-looking 2-Qtr plan + monthly retrospection on what went right / wrong.",
    color: "bg-indigo-500/10 text-indigo-400",
  },
  {
    icon: UserPlus,
    title: "Agreed Engineering Operating Model",
    desc: "You decide reporting structure, hierarchy, escalation — we provide the options.",
    color: "bg-sky-500/10 text-sky-400",
  },
  {
    icon: Globe,
    title: "Sound Financial Operations",
    desc: "4 months advanced payments for agreed projections. Adjustments reviewed monthly.",
    color: "bg-teal-500/10 text-teal-400",
  },
];

const BotSection = () => {
  return (
    <section id="bot" className="bg-background">
      <style>{`
        @keyframes botFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bot-animate { animation: botFadeUp 0.7s ease both; }
        .bot-card {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .bot-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(15,114,186,0.15);
        }
        .phase-card {
          transition: all 0.3s ease;
        }
        .phase-card:hover {
          border-color: rgba(15,114,186,0.5);
        }
        .req-card {
          transition: all 0.3s ease;
        }
        .req-card:hover {
          background: rgba(15,114,186,0.06);
          transform: translateX(4px);
        }
      `}</style>

      {/* ── Hero Banner ───────────────────────────────────────────────── */}
      <div className="relative bg-gradient-to-br from-[#061320] via-[#081a2e] to-[#061320] py-20 px-4 text-center overflow-hidden">
        {/* Decorative glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 container mx-auto max-w-3xl bot-animate">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-xs text-blue-300 mb-6">
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
            We help you set up your India captive unit with ease — Build, Operate, and Transfer on your timeline.
          </p>
        </div>
      </div>

      {/* ── Pain Points ───────────────────────────────────────────────── */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Do any of these sound familiar?
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              If you're a Founder or Executive and answered yes to any of the below — we can help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {painPoints.map((pt, i) => (
              <div
                key={i}
                className="bot-card rounded-2xl border border-border bg-card p-6 flex flex-col gap-4"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <pt.icon className="h-5 w-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm leading-snug">{pt.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-8 text-sm text-muted-foreground">
            Feel free to reach us at{" "}
            <a href="mailto:anu@perfect108.com" className="text-primary hover:underline font-medium">
              anu@perfect108.com
            </a>
          </p>
        </div>
      </div>

      {/* ── Three-Phase Model ─────────────────────────────────────────── */}
      <div className="bg-slate-900 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Partners with skin in the game
            </h3>
            <p className="text-white/60 text-sm max-w-lg mx-auto">
              A unique operating model that helps you set up your captive in India without the expanding pains.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((p, pi) => (
              <div
                key={pi}
                className="phase-card rounded-2xl border border-white/10 bg-white/5 p-7 flex flex-col gap-5"
              >
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">{p.phase}</span>
                  <h4 className="text-xl font-bold text-white mt-1">{p.label}</h4>
                  <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent mt-3" />
                </div>
                <div className="flex flex-col gap-4">
                  {p.items.map((item, ii) => (
                    <div key={ii} className="bg-white/5 rounded-xl p-4 border border-white/8">
                      <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How We Do It ─────────────────────────────────────────────── */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              How we do it — What you get
            </h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Scale in India, scale with us. We build your captive organisation and operate it till you want to manage it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Build + Run grid */}
            <div className="space-y-8">
              <div>
                <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 rounded-full bg-primary" />
                  Build
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {buildItems.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs font-medium leading-snug hover:border-primary/40 hover:bg-primary/5 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold mb-4 flex items-center gap-2">
                  <span className="h-6 w-1 rounded-full bg-cyan-500" />
                  Run
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {runItems.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border bg-secondary/40 px-4 py-3 text-xs font-medium leading-snug hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key benefits */}
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

      {/* ── What We Need ─────────────────────────────────────────────── */}
      <div className="bg-slate-950/50 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">What we need from you</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              You get a turn-key operation in as fast as 2 years.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {requirements.map((req, i) => (
              <div
                key={i}
                className="req-card rounded-2xl border border-border bg-card p-6 flex gap-4"
              >
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
