import { useEffect, useRef, useState } from "react";

// Inline SVG illustrations — minimal, blue-toned, matching site theme
const ValueIllustrations = [
  // Patient-First Design — heart
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#EFF6FF" />
      <path d="M40 56C40 56 22 44 22 32C22 26.477 26.477 22 32 22C35.314 22 38.238 23.607 40 26.05C41.762 23.607 44.686 22 48 22C53.523 22 58 26.477 58 32C58 44 40 56 40 56Z" fill="#3B82F6" opacity="0.2"/>
      <path d="M40 52C40 52 24 41 24 31C24 26.582 27.582 23 32 23C35.07 23 37.746 24.697 40 27.16C42.254 24.697 44.93 23 48 23C52.418 23 56 26.582 56 31C56 41 40 52 40 52Z" fill="#2563EB" opacity="0.5"/>
      <path d="M40 47C40 47 28 38 28 30.5C28 27.462 30.462 25 33.5 25C36.538 25 38 27 40 29C42 27 43.462 25 46.5 25C49.538 25 52 27.462 52 30.5C52 38 40 47 40 47Z" fill="#1D4ED8"/>
    </svg>
  ),
  // Healthcare Technology — chip
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
  // End-to-End Platform — connected nodes
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
  // India-registered — globe/pin
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#FFF7ED"/>
      <circle cx="40" cy="38" r="16" fill="#F97316" opacity="0.15"/>
      <circle cx="40" cy="38" r="12" fill="#EA580C" opacity="0.2"/>
      <ellipse cx="40" cy="38" rx="6" ry="12" fill="none" stroke="#C2410C" strokeWidth="1.5" opacity="0.6"/>
      <line x1="28" y1="38" x2="52" y2="38" stroke="#C2410C" strokeWidth="1.5" opacity="0.6"/>
      <circle cx="40" cy="38" r="12" fill="none" stroke="#EA580C" strokeWidth="1.5"/>
      <path d="M40 54L40 62" stroke="#EA580C" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="40" cy="64" r="3" fill="#EA580C"/>
    </svg>
  ),
  // Bootstrapped — lean rocket
  () => (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <circle cx="40" cy="40" r="38" fill="#F0F9FF"/>
      <path d="M40 16C40 16 52 24 52 36C52 44 46 50 40 54C34 50 28 44 28 36C28 24 40 16 40 16Z" fill="#3B82F6" opacity="0.2"/>
      <path d="M40 20C40 20 50 27 50 37C50 44 45 49 40 52C35 49 30 44 30 37C30 27 40 20 40 20Z" fill="#2563EB" opacity="0.35"/>
      <circle cx="40" cy="37" r="6" fill="#1D4ED8"/>
      <path d="M36 58L40 54L44 58L42 65L38 65Z" fill="#60A5FA"/>
    </svg>
  ),
  // Transparent — shield
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
    title: "Patient-First Design",
    desc: "Every feature starts with the patient's care journey — making therapy management accessible, trackable, and stress-free for individuals and caregivers.",
    accent: "border-blue-200 hover:border-blue-400",
    labelColor: "text-blue-600 bg-blue-50",
  },
  {
    title: "Healthcare Technology",
    desc: "Purpose-built for neuromodulation therapy — integrating EMRs, session scheduling, and outcome monitoring into one unified platform.",
    accent: "border-cyan-200 hover:border-cyan-400",
    labelColor: "text-cyan-700 bg-cyan-50",
  },
  {
    title: "End-to-End Platform",
    desc: "From onboarding to discharge — a single platform managing the full treatment lifecycle for neurological and mental health care.",
    accent: "border-violet-200 hover:border-violet-400",
    labelColor: "text-violet-700 bg-violet-50",
  },
  {
    title: "India-registered Entity",
    desc: "PCS IT Solutions Pvt. Ltd. is incorporated and operating in India — compliant with Indian healthcare regulations and data privacy norms.",
    accent: "border-orange-200 hover:border-orange-400",
    labelColor: "text-orange-700 bg-orange-50",
  },
  {
    title: "Bootstrapped & Focused",
    desc: "A lean, self-funded team of 8 — no bloat, no distractions. Every resource goes into building and validating NeuroWellness for the Indian market.",
    accent: "border-sky-200 hover:border-sky-400",
    labelColor: "text-sky-700 bg-sky-50",
  },
  {
    title: "Transparent Operations",
    desc: "Open communication, honest timelines, and clear product roadmaps — with stakeholders, clinic partners, and our founding team.",
    accent: "border-green-200 hover:border-green-400",
    labelColor: "text-green-700 bg-green-50",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const ExpertiseSection = () => {
  const valuesReveal = useScrollReveal();
  const valuesScrollRef = useRef<HTMLDivElement>(null);
  const [valuesPaused, setValuesPaused] = useState(false);

  useEffect(() => {
    if (valuesPaused) return;
    const el = valuesScrollRef.current;
    if (!el) return;
    const id = setInterval(() => {
      const cardWidth = el.firstElementChild?.getBoundingClientRect().width ?? 220;
      const step = cardWidth + 12;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 4500);
    return () => clearInterval(id);
  }, [valuesPaused]);

  return (
    <section id="about">
      <style>{`
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
        .values-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
        }
        .values-scroll::-webkit-scrollbar { display: none; }
        .values-scroll-item { scroll-snap-align: start; }
      `}</style>

      {/* ── About PCS + NeuroWellness intro ── */}
      <div className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-blue-600 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
            About PCS IT Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
            Who We Are
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            PCS IT Solutions Pvt. Ltd. is a Pune-registered technology startup founded in 2017. We are an 8-person team building NeuroWellness — our flagship product and India's first dedicated neuromodulation therapy management platform.
          </p>

          {/* NeuroWellness product card */}
          <div className="mx-auto max-w-2xl rounded-2xl border border-blue-100 bg-blue-50 px-6 py-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[11px] font-semibold text-blue-700 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              Flagship Product — Launching 2026
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">NeuroWellness Platform</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A B2C patient-facing and clinic-integrated platform for managing neuromodulation therapies — covering EMRs, appointments, treatment protocols, and long-term care workflows for neurological and mental health conditions across India.
            </p>
          </div>
        </div>
      </div>

      {/* ── Our Values ── */}
      <div ref={valuesReveal.ref} className="py-12 md:py-16 px-4 bg-[#061320]">
        <div className="container mx-auto max-w-7xl">
          <div className={`text-center mb-8 md:mb-12 value-card-reveal ${valuesReveal.visible ? "in-view" : ""}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-blue-400/30 bg-blue-400/10 text-[11px] md:text-xs text-blue-300 mb-3 md:mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
              What drives us
            </div>
            <h3 className="text-xl md:text-3xl font-semibold mb-2 md:mb-3 text-white">Our Values</h3>
            <p className="text-xs md:text-sm text-white/55 max-w-lg mx-auto">
              A bootstrapped startup with strong foundations — our values shape how we build NeuroWellness and serve the healthcare community.
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
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full self-start ${val.labelColor}`}>
                    {val.title}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Mobile: horizontal scroll */}
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
                  <div className="w-8 h-8 [&>svg]:w-8 [&>svg]:h-8"><Illustration /></div>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full self-start ${val.labelColor}`}>
                    {val.title}
                  </span>
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
