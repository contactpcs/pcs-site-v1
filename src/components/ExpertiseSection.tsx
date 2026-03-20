import { useState, useEffect, useRef } from "react";
import { Settings, Mail, Grid, Globe, MousePointer, Bell, Clock, Target, Info, Brain, Database, Cloud, Code2, Shield, Smartphone, Heart, MapPin, Calendar, Users } from "lucide-react";


const whoWeAreRow1 = [
  { icon: Calendar, title: "Est. 2015", text: "Bay Area company, profitable US entity with an India subsidiary and global reach." },
  { icon: Brain, title: "AI & LLM Solutions", text: "GPT integrations, RAG pipelines, agents and AI-powered SaaS platforms." },
  { icon: Users, title: "20+ Global Clients", text: "Fintech, healthcare, real estate and SaaS across US, Europe and Asia." },
  { icon: Database, title: "Data Engineering", text: "ETL/ELT pipelines, data lakes, warehouses and real-time streaming architectures." },
  { icon: Cloud, title: "Cloud Native", text: "Multi-cloud expertise across AWS, Azure and GCP — migrations to IaC and Kubernetes." },
  { icon: Code2, title: "Full Stack Dev", text: "React, Next.js, Node.js, Python, Java — end-to-end delivery from idea to production." },
];

const whoWeAreRow2 = [
  { icon: Clock, title: "10+ Years", text: "Building 15+ high-impact business solutions with faster time to market." },
  { icon: Shield, title: "Cybersecurity", text: "Penetration testing, zero-trust architecture, ISO 27001 & SOC 2 compliance." },
  { icon: Globe, title: "BOT Model", text: "Build-Operate-Transfer: your India engineering captive in 18–24 months." },
  { icon: Smartphone, title: "Mobile Apps", text: "Flutter, React Native, native iOS & Android — cross-platform performance." },
  { icon: MapPin, title: "US + India Teams", text: "Engineering talent on both coasts — follow-the-sun delivery and cost advantage." },
  { icon: Heart, title: "Transparent Partner", text: "Open communication, shared goals, and clear financials at every stage." },
];

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
  const [activeHistory, setActiveHistory] = useState<number | null>(null);
  const valuesReveal = useScrollReveal();
  const functionsReveal = useScrollReveal();
  const valuesScrollRef = useRef<HTMLDivElement>(null);
  const valuesAutoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [valuesPaused, setValuesPaused] = useState(false);
  const historyScrollRef = useRef<HTMLDivElement>(null);
  const historyAutoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [historyPaused, setHistoryPaused] = useState(false);

  // Auto-scroll values on mobile every 4.5s
  useEffect(() => {
    if (valuesPaused) return;
    const el = valuesScrollRef.current;
    if (!el) return;
    valuesAutoRef.current = setInterval(() => {
      const cardWidth = el.firstElementChild?.getBoundingClientRect().width ?? 220;
      const gap = 12;
      const step = cardWidth + gap;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4500);
    return () => { if (valuesAutoRef.current) clearInterval(valuesAutoRef.current); };
  }, [valuesPaused]);

  // Auto-scroll history cards on mobile every 4s
  useEffect(() => {
    if (historyPaused) return;
    const el = historyScrollRef.current;
    if (!el) return;
    historyAutoRef.current = setInterval(() => {
      const cardWidth = el.firstElementChild?.getBoundingClientRect().width ?? 220;
      const gap = 12;
      const step = cardWidth + gap;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4000);
    return () => { if (historyAutoRef.current) clearInterval(historyAutoRef.current); };
  }, [historyPaused]);

  // Clear active history card when tapping outside
  useEffect(() => {
    const handleOutsideClick = (e: TouchEvent | MouseEvent) => {
      const el = historyScrollRef.current;
      if (el && !el.contains(e.target as Node)) {
        setActiveHistory(null);
      }
    };
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section id="expertise">
      <style>{`
        /* Who We Are marquee */
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .who-left { animation: scrollLeft 45s linear infinite; }
        .who-right { animation: scrollRight 38s linear infinite; }
        .who-row:hover .who-left,
        .who-row:hover .who-right { animation-play-state: paused; }
        .who-card-dark, .who-card-light {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease;
        }
        .who-card-dark:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(13,50,100,0.4);
        }
        .who-card-light:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
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
        /* Mobile values horizontal scroll */
        .values-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .values-scroll::-webkit-scrollbar { display: none; }
        .values-scroll-item {
          scroll-snap-align: start;
        }
        /* Mobile history horizontal scroll */
        .history-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .history-scroll::-webkit-scrollbar { display: none; }
      `}</style>

      {/* ── Who We Are — animated horizontal marquee ─────────────── */}
      <div className="py-20 bg-white overflow-hidden">
        {/* Header */}
        <div className="container mx-auto max-w-5xl px-4 text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-600 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            About PCS IT Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">
            About Us
          </h2>
          <p className="text-lg text-slate-400 font-medium mb-5">Get To Know Us</p>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A Bay Area-founded technology company delivering world-class software, AI, and data solutions since 2015 — partnering with 20+ clients globally to engineer, scale, and transform.
          </p>
        </div>

        {/* Row 1 — scrolls left */}
        <div className="who-row mb-5">
          <div className="who-left flex gap-5" style={{ width: "max-content" }}>
            {[...whoWeAreRow1, ...whoWeAreRow1].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="who-card-dark flex-none w-[270px] rounded-3xl p-6"
                  style={{ background: "linear-gradient(135deg, #0d3264 0%, #061320 100%)" }}
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-white/15 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-blue-200" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2 leading-snug">{card.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="who-row">
          <div className="who-right flex gap-5" style={{ width: "max-content" }}>
            {[...whoWeAreRow2, ...whoWeAreRow2].map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="who-card-light flex-none w-[270px] rounded-3xl bg-white border border-slate-100 shadow-sm p-6"
                >
                  <div className="mb-4 h-10 w-10 rounded-2xl bg-blue-50 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-[#0f72ba]" />
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">{card.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Functions ─────────────────────────────────────────────── */}
      <div ref={functionsReveal.ref} className="py-8 md:py-14 px-4 bg-[#061320]">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-6 md:mb-10 fn-reveal ${functionsReveal.visible ? "in-view" : ""}`}>
            <h3 className="text-xl md:text-3xl font-semibold mb-2 text-white">Functions</h3>
            <p className="text-xs md:text-sm text-white/55 max-w-md mx-auto">
              We want to be your preferred partner for your product development.
            </p>
          </div>

          {/* Chips — compact on mobile */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 md:mb-12">
            {functionsList.map((fn, i) => (
              <div
                key={i}
                className={`fn-chip fn-reveal ${functionsReveal.visible ? "in-view" : ""} flex items-center gap-1.5 md:gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 md:px-5 md:py-2.5 text-xs md:text-sm font-medium text-white/85`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <fn.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-blue-300" />
                {fn.label}
              </div>
            ))}
          </div>

          {/* History / Goal / Who We Are — horizontal scroll on mobile, grid on desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-5">
            {historyCards.map((card, i) => {
              const hovered = hoveredHistory !== null ? hoveredHistory : activeHistory;
              const isDimmed = hovered !== null && hovered !== i;
              const isActive = hovered === i;
              return (
                <div
                  key={i}
                  className={`history-card rounded-2xl border border-white/15 bg-white p-7 flex flex-col gap-4 cursor-default
                    ${isDimmed ? "history-card-dimmed" : ""}
                    ${isActive ? "history-card-active" : ""}
                  `}
                  style={{ transitionDelay: `${i * 0.04}s` }}
                  onMouseEnter={() => setHoveredHistory(i)}
                  onMouseLeave={() => setHoveredHistory(null)}
                  onClick={() => setActiveHistory(activeHistory === i ? null : i)}
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
          {/* Mobile: horizontal scroll with infinite loop + tap-to-dim */}
          <div
            ref={historyScrollRef}
            className="flex md:hidden gap-3 overflow-x-auto history-scroll pb-2 -mx-4 px-4"
            style={{ scrollSnapType: "x mandatory" }}
            onTouchStart={() => setHistoryPaused(true)}
            onTouchEnd={() => setHistoryPaused(false)}
          >
            {[...historyCards, ...historyCards, ...historyCards].map((card, i) => {
              const realIndex = i % historyCards.length;
              const isDimmed = activeHistory !== null && activeHistory !== realIndex;
              const isActive = activeHistory === realIndex;
              return (
                <div
                  key={i}
                  className={`history-card rounded-xl border border-white/15 bg-white p-4 flex flex-col gap-2.5 flex-shrink-0
                    ${isDimmed ? "history-card-dimmed" : ""}
                    ${isActive ? "history-card-active" : ""}
                  `}
                  style={{ width: "72vw", maxWidth: "280px", scrollSnapAlign: "center" }}
                  onClick={() => setActiveHistory(activeHistory === realIndex ? null : realIndex)}
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-semibold text-sm">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Our Values ────────────────────────────────────────────── */}
      <div ref={valuesReveal.ref} className="py-8 md:py-14 px-4 bg-[#061320]">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-6 md:mb-12 fn-reveal ${valuesReveal.visible ? "in-view" : ""}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-[11px] md:text-xs text-blue-300 mb-3 md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              What drives us
            </div>
            <h3 className="text-xl md:text-3xl font-semibold mb-2 md:mb-3 text-white">Our Values</h3>
            <p className="text-xs md:text-sm text-white/55 max-w-lg mx-auto">
              Over 10+ years in product and software development, building 15+ high-impact business solutions with faster time to market.
            </p>
          </div>

          {/* Desktop: grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                      {val.title}
                    </span>
                  </div>
                  <h4 className="font-semibold text-base leading-snug">{val.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile: horizontal scroll with snap + auto-scroll */}
          <div
            ref={valuesScrollRef}
            className="flex sm:hidden gap-3 overflow-x-auto values-scroll pb-2 -mx-4 px-4"
            onTouchStart={() => setValuesPaused(true)}
            onTouchEnd={() => setValuesPaused(false)}
          >
            {values.map((val, i) => {
              const Illustration = ValueIllustrations[i];
              return (
                <div
                  key={i}
                  className={`values-scroll-item value-card value-card-reveal ${valuesReveal.visible ? "in-view" : ""} rounded-xl border bg-white p-4 flex flex-col gap-2.5 flex-shrink-0 ${val.accent}`}
                  style={{ width: "72vw", maxWidth: "280px", transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 [&>svg]:w-8 [&>svg]:h-8"><Illustration /></div>
                    <div>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${val.labelColor}`}>
                        {val.title}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-sm leading-snug">{val.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
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
