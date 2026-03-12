import { useState, useEffect, useRef } from "react";
import { Settings, Mail, Grid, Globe, MousePointer, Bell, Clock, Target, Info } from "lucide-react";
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
    desc: "Over 10+ years in product and software development, building 15+ high-impact business solutions with faster time to market.",
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

// Inline SVG illustrations — minimal, blue-toned, matching site theme
const ValueIllustrations = [
  // Faster Time to Market — rocket / launch
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#EFF6FF" />
      <path d="M40 16C40 16 52 24 52 36C52 44 46 50 40 54C34 50 28 44 28 36C28 24 40 16 40 16Z" fill="#3B82F6" opacity="0.2"/>
      <path d="M40 20C40 20 50 27 50 37C50 44 45 49 40 52C35 49 30 44 30 37C30 27 40 20 40 20Z" fill="#2563EB" opacity="0.35"/>
      <circle cx="40" cy="37" r="6" fill="#1D4ED8"/>
      <path d="M36 58L40 54L44 58L42 65L38 65Z" fill="#60A5FA"/>
      <path d="M25 50L28 46L23 42L19 47Z" fill="#93C5FD" opacity="0.7"/>
      <path d="M55 50L52 46L57 42L61 47Z" fill="#93C5FD" opacity="0.7"/>
    </svg>
  ),
  // Niche Technologies — chip / circuit
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#F0FDF4"/>
      <rect x="26" y="26" width="28" height="28" rx="4" fill="#06B6D4" opacity="0.2"/>
      <rect x="30" y="30" width="20" height="20" rx="3" fill="#0891B2" opacity="0.35"/>
      <rect x="35" y="35" width="10" height="10" rx="2" fill="#0E7490"/>
      <line x1="26" y1="36" x2="20" y2="36" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="26" y1="44" x2="20" y2="44" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="54" y1="36" x2="60" y2="36" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="54" y1="44" x2="60" y2="44" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="36" y1="26" x2="36" y2="20" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="26" x2="44" y2="20" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="36" y1="54" x2="36" y2="60" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="54" x2="44" y2="60" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  // E2E Execution — connected nodes
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#F5F3FF"/>
      <circle cx="20" cy="40" r="7" fill="#8B5CF6" opacity="0.25"/>
      <circle cx="20" cy="40" r="4" fill="#7C3AED"/>
      <circle cx="40" cy="22" r="7" fill="#8B5CF6" opacity="0.25"/>
      <circle cx="40" cy="22" r="4" fill="#7C3AED"/>
      <circle cx="60" cy="40" r="7" fill="#8B5CF6" opacity="0.25"/>
      <circle cx="60" cy="40" r="4" fill="#7C3AED"/>
      <circle cx="40" cy="58" r="7" fill="#8B5CF6" opacity="0.25"/>
      <circle cx="40" cy="58" r="4" fill="#7C3AED"/>
      <line x1="24" y1="40" x2="36" y2="26" stroke="#A78BFA" strokeWidth="1.5"/>
      <line x1="44" y1="26" x2="56" y2="36" stroke="#A78BFA" strokeWidth="1.5"/>
      <line x1="56" y1="44" x2="44" y2="54" stroke="#A78BFA" strokeWidth="1.5"/>
      <line x1="36" y1="54" x2="24" y2="44" stroke="#A78BFA" strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="5" fill="#6D28D9"/>
    </svg>
  ),
  // Flexible Engagements — handshake / puzzle
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#FFF7ED"/>
      <rect x="22" y="32" width="16" height="16" rx="3" fill="#F97316" opacity="0.25"/>
      <rect x="42" y="32" width="16" height="16" rx="3" fill="#F97316" opacity="0.25"/>
      <path d="M38 36H42V44H38Z" fill="#FB923C" opacity="0.6"/>
      <rect x="24" y="34" width="12" height="12" rx="2" fill="#EA580C" opacity="0.5"/>
      <rect x="44" y="34" width="12" height="12" rx="2" fill="#EA580C" opacity="0.5"/>
      <path d="M30 34V30C30 28.9 30.9 28 32 28H36C37.1 28 38 28.9 38 30V34" fill="#FED7AA"/>
      <path d="M50 34V30C50 28.9 49.1 28 48 28H44C42.9 28 42 28.9 42 30V34" fill="#FED7AA"/>
      <path d="M30 46V50C30 51.1 30.9 52 32 52H36C37.1 52 38 51.1 38 50V46" fill="#FED7AA"/>
      <path d="M50 46V50C50 51.1 49.1 52 48 52H44C42.9 52 42 51.1 42 50V46" fill="#FED7AA"/>
    </svg>
  ),
  // Right Location — globe / pin
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#F0F9FF"/>
      <circle cx="40" cy="38" r="16" fill="#0EA5E9" opacity="0.15"/>
      <circle cx="40" cy="38" r="12" fill="#0284C7" opacity="0.2"/>
      <ellipse cx="40" cy="38" rx="6" ry="12" fill="none" stroke="#0369A1" strokeWidth="1.5" opacity="0.6"/>
      <line x1="28" y1="38" x2="52" y2="38" stroke="#0369A1" strokeWidth="1.5" opacity="0.6"/>
      <line x1="28" y1="33" x2="52" y2="33" stroke="#BAE6FD" strokeWidth="1" opacity="0.7"/>
      <line x1="28" y1="43" x2="52" y2="43" stroke="#BAE6FD" strokeWidth="1" opacity="0.7"/>
      <circle cx="40" cy="38" r="12" fill="none" stroke="#0284C7" strokeWidth="1.5"/>
      <path d="M40 54L40 62" stroke="#0284C7" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="64" r="3" fill="#0284C7"/>
      <path d="M34 64H46" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  // Transparent Partnership — shield / trust
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#F0FDF4"/>
      <path d="M40 18L58 26V42C58 52 50 60 40 63C30 60 22 52 22 42V26L40 18Z" fill="#22C55E" opacity="0.15"/>
      <path d="M40 22L54 29V42C54 50 48 57 40 59.5C32 57 26 50 26 42V29L40 22Z" fill="#16A34A" opacity="0.2"/>
      <path d="M34 40L38 44L46 36" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
];

const values = [
  {
    title: "Faster Time to Market",
    desc: "Go to market faster with swift ramp-ups. Top-notch talent in emerging and niche technology areas through direct hiring channels.",
    accent: "border-blue-200 hover:border-blue-400",
    labelColor: "text-blue-600 bg-blue-50",
  },
  {
    title: "Niche Technologies",
    desc: "Business-centric solutions for IoT, Data Science, Mobile, and Cloud.",
    accent: "border-cyan-200 hover:border-cyan-400",
    labelColor: "text-cyan-700 bg-cyan-50",
  },
  {
    title: "E2E Execution",
    desc: "Managed services with end-to-end execution of projects from inception to deployment.",
    accent: "border-violet-200 hover:border-violet-400",
    labelColor: "text-violet-700 bg-violet-50",
  },
  {
    title: "Flexible Engagements",
    desc: "Engagement models suitable for a wide variety of organisational requirements.",
    accent: "border-orange-200 hover:border-orange-400",
    labelColor: "text-orange-700 bg-orange-50",
  },
  {
    title: "Right Location",
    desc: "Complement existing teams in Europe to scale rapidly with a follow-the-sun approach and cost advantage.",
    accent: "border-sky-200 hover:border-sky-400",
    labelColor: "text-sky-700 bg-sky-50",
  },
  {
    title: "Transparent Partnership",
    desc: "We operate with full transparency — shared goals, clear financials, and open communication at every stage.",
    accent: "border-green-200 hover:border-green-400",
    labelColor: "text-green-700 bg-green-50",
  },
];

// Hook: trigger animation when element enters viewport
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const ExpertiseSection = () => {
  const [hoveredHistory, setHoveredHistory] = useState<number | null>(null);
  const valuesReveal = useScrollReveal();
  const functionsReveal = useScrollReveal();

  return (
    <section id="about" className="pt-16 pb-0">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: scale(0.7); }
          to { opacity: 1; transform: scale(1); }
        }
        .about-heading { animation: fadeSlideUp 0.7s ease both; }
        .about-card-wrap { animation: fadeSlideUp 0.8s ease 0.15s both; }
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
        .fn-chip {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1);
        }
        .fn-chip:hover {
          transform: translateY(-3px);
          border-color: rgba(15,114,186,0.5);
          background: rgba(15,114,186,0.06);
          box-shadow: 0 4px 16px rgba(15,114,186,0.1);
        }
        .history-card {
          transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .history-card-dimmed {
          opacity: 0.35;
          transform: scale(0.97);
        }
        .history-card-active {
          opacity: 1;
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(15,114,186,0.14);
          border-color: rgba(15,114,186,0.4) !important;
        }
        /* Value card scroll reveal */
        .value-card-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.55s ease, transform 0.55s cubic-bezier(0.34,1.2,0.64,1);
        }
        .value-card-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .value-card {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.3s ease;
          border-width: 1.5px;
        }
        .value-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 18px 44px rgba(0,0,0,0.09);
        }
        .value-card svg {
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .value-card:hover svg {
          transform: scale(1.1) rotate(-3deg);
        }
        /* Functions reveal */
        .fn-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .fn-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* ── Section Header ─────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 about-heading">About</h2>
        </div>
      </div>

      {/* ── Who We Are — two-column image + text ───────────────────── */}
      <div className="about-card-wrap flex flex-col md:flex-row w-full group">
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
      <div ref={functionsReveal.ref} className="py-14 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-10 fn-reveal ${functionsReveal.visible ? "in-view" : ""}`}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">Functions</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              We want to be your preferred partner for your product development.
            </p>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {functionsList.map((fn, i) => (
              <div
                key={i}
                className={`fn-chip fn-reveal ${functionsReveal.visible ? "in-view" : ""} flex items-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-medium shadow-sm`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <fn.icon className="h-4 w-4 text-primary" />
                {fn.label}
              </div>
            ))}
          </div>

          {/* History / Goal / Who We Are — group hover fade */}
          <div className="grid md:grid-cols-3 gap-5">
            {historyCards.map((card, i) => {
              const isDimmed = hoveredHistory !== null && hoveredHistory !== i;
              const isActive = hoveredHistory === i;
              return (
                <div
                  key={i}
                  className={`history-card rounded-2xl border border-border bg-white p-7 flex flex-col gap-4 cursor-default
                    ${isDimmed ? "history-card-dimmed" : ""}
                    ${isActive ? "history-card-active" : ""}
                  `}
                  style={{ transitionDelay: `${i * 0.04}s` }}
                  onMouseEnter={() => setHoveredHistory(i)}
                  onMouseLeave={() => setHoveredHistory(null)}
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <card.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-base">{card.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Our Values ────────────────────────────────────────────── */}
      <div ref={valuesReveal.ref} className="py-14 px-4 bg-slate-50/60">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-12 fn-reveal ${valuesReveal.visible ? "in-view" : ""}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              What drives us
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Our Values</h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Over 10+ years in product and software development, building 15+ high-impact business solutions with faster time to market.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val, i) => {
              const Illustration = ValueIllustrations[i];
              return (
                <div
                  key={i}
                  className={`value-card value-card-reveal ${valuesReveal.visible ? "in-view" : ""} rounded-2xl border bg-white p-7 flex flex-col gap-4 ${val.accent}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <Illustration />
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${val.labelColor}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h4 className="font-semibold text-base leading-snug">{val.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
