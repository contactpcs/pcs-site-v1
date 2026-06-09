import { useState, useEffect, useRef } from "react";
import {
  Brain, Database, Shield, Code2, Cloud, Smartphone,
  Settings, BarChart3, Layers, Cpu, Network, TestTube2,
  ArrowRight, Sparkles, Heart
} from "lucide-react";

// ── Service data ──────────────────────────────────────────────────────────────

type ServiceCategory = "all" | "ai" | "data" | "security" | "engineering";

interface Service {
  icon: React.ElementType;
  title: string;
  desc: string;
  category: ServiceCategory[];
  featured?: boolean;
  badge?: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
}

const services: Service[] = [
  {
    icon: Brain,
    title: "NeuroWellness Platform",
    desc: "Our flagship product — a B2B clinic management system and B2C patient app for neuromodulation therapy, EMRs, appointment scheduling, and long-term care workflows.",
    category: ["ai"],
    featured: true,
    badge: "Flagship Product",
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  {
    icon: BarChart3,
    title: "Healthcare Diagnostics",
    desc: "Structured clinical data capture, therapy outcome tracking, and longitudinal patient health records designed for neurological and mental health care settings.",
    category: ["ai", "data"],
    featured: true,
    badge: "Core",
    accentColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200 hover:border-indigo-400",
  },
  {
    icon: Heart,
    title: "Mental Health & Neuromodulation",
    desc: "Focused on brain stimulation therapies (TMS, tDCS, neurofeedback) — enabling clinics to manage treatment protocols and monitor patient progress over time.",
    category: ["ai"],
    featured: true,
    badge: "Specialty",
    accentColor: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200 hover:border-pink-400",
  },
  {
    icon: Database,
    title: "Clinical Data & EMR",
    desc: "Electronic medical records tailored for neuromodulation therapy — session notes, therapy dosage logs, patient history, and referral management.",
    category: ["data"],
    featured: true,
    badge: "Core Offering",
    accentColor: "text-cyan-700",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200 hover:border-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Patient Mobile App",
    desc: "A B2C patient-facing app for appointment booking, therapy session reminders, progress tracking, and secure communication with treating clinicians.",
    category: ["engineering"],
    featured: true,
    badge: "B2C",
    accentColor: "text-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-300 hover:border-sky-500",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure (AWS)",
    desc: "AWS-hosted platform architecture — secure, HIPAA-aligned, scalable cloud infrastructure powering the NeuroWellness backend and data pipelines.",
    category: ["engineering", "data"],
    featured: true,
    badge: "Infrastructure",
    accentColor: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200 hover:border-sky-400",
  },
  {
    icon: Code2,
    title: "Clinic Admin Portal",
    desc: "A B2B web portal for clinic administrators to manage therapists, patient rosters, scheduling, billing notes, and compliance documentation.",
    category: ["engineering"],
    featured: true,
    badge: "B2B",
    accentColor: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300 hover:border-blue-500",
  },
  {
    icon: Shield,
    title: "Data Privacy & Security",
    desc: "Patient data encryption, role-based access controls, audit logs, and compliance with India's healthcare data protection requirements.",
    category: ["security"],
    accentColor: "text-slate-700",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-300 hover:border-slate-500",
  },
  {
    icon: Layers,
    title: "Product Engineering",
    desc: "End-to-end product design and delivery for the NeuroWellness platform — architecture, UX, MVP builds, and iterative development.",
    category: ["engineering"],
    accentColor: "text-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200 hover:border-teal-400",
  },
  {
    icon: Network,
    title: "DevOps & Deployment",
    desc: "CI/CD pipelines, automated testing, and managed deployment workflows — ensuring reliable, fast releases for the NeuroWellness platform.",
    category: ["engineering"],
    accentColor: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-300 hover:border-indigo-500",
  },
  {
    icon: Cpu,
    title: "Analytics & Reporting",
    desc: "Clinic performance dashboards, patient outcome reports, and therapy utilisation analytics — helping providers make data-driven clinical decisions.",
    category: ["data"],
    accentColor: "text-slate-700",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-200 hover:border-slate-400",
  },
  {
    icon: TestTube2,
    title: "Quality Assurance",
    desc: "Rigorous testing of clinical workflows — automated test suites, user acceptance testing with clinic partners, and continuous quality monitoring.",
    category: ["engineering"],
    accentColor: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200 hover:border-teal-400",
  },
];

const categories: { key: ServiceCategory; label: string }[] = [
  { key: "all", label: "All Capabilities" },
  { key: "ai", label: "Platform & Product" },
  { key: "data", label: "Data & EMR" },
  { key: "security", label: "Security" },
  { key: "engineering", label: "Engineering" },
];

// ── Scroll-reveal hook ────────────────────────────────────────────────────────
function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Component ────────────────────────────────────────────────────────────────

const FeaturesSection = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("all");
  const headerReveal = useReveal(0.1);
  const gridReveal = useReveal(0.05);

  const filtered = services.filter(
    (s) => activeCategory === "all" || s.category.includes(activeCategory)
  );

  const featuredCards = filtered.filter((s) => s.featured);
  const otherCards = filtered.filter((s) => !s.featured);

  return (
    <section id="services" className="py-14 px-4 bg-white">
      <style>{`
        @keyframes svcFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .svc-header-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .svc-header-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-card-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.1,0.64,1);
        }
        .svc-card-reveal.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .svc-card {
          transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, border-color 0.25s ease;
          border-width: 1.5px;
        }
        .svc-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.09);
        }
        .svc-card .svc-icon-wrap {
          transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease;
        }
        .svc-card:hover .svc-icon-wrap {
          transform: scale(1.12) rotate(-4deg);
        }
        .svc-card .svc-arrow {
          opacity: 0;
          transform: translateX(-6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .svc-card:hover .svc-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .cat-pill {
          transition: all 0.2s ease;
          font-size: 0.78rem;
          font-weight: 600;
        }
        .cat-pill:hover { transform: translateY(-2px); }
        .featured-badge {
          animation: svcFadeUp 0.5s ease both;
        }

        /* Mobile horizontal scroll container */
        .svc-scroll-container {
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }
        .svc-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .svc-scroll-item {
          scroll-snap-align: start;
          flex: 0 0 auto;
        }

        /* On mobile, disable hover translateY so cards don't jump while scrolling */
        @media (max-width: 767px) {
          .svc-card:hover {
            transform: none;
            box-shadow: 0 4px 16px rgba(0,0,0,0.06);
          }
        }
      `}</style>

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div
        ref={headerReveal.ref}
        className={`svc-header-reveal ${headerReveal.visible ? "in-view" : ""} container mx-auto max-w-7xl mb-10`}
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-4">
            <Sparkles className="h-3 w-3" />
            What We Are Building
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            NeuroWellness Platform<br />Capabilities
          </h2>
          <p className="text-sm text-muted-foreground">
            A full-stack healthcare product for neuromodulation therapy — from clinic management and EMRs to patient engagement and outcome analytics.
          </p>
        </div>

        {/* ── Category Filter Pills ─────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`cat-pill px-4 py-2 rounded-full border transition-all ${
                activeCategory === cat.key
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Featured Services ─────────────────────────────────────── */}
      {featuredCards.length > 0 && (
        <div className="container mx-auto max-w-7xl mb-6">
          {/* Mobile: horizontal scroll / Desktop: grid */}
          <div className="md:hidden">
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Featured</span>
              <span className="text-[10px] text-muted-foreground/60">— swipe to explore</span>
            </div>
            <div className="svc-scroll-container flex gap-3 overflow-x-auto pb-3 -mx-4 px-4">
              {featuredCards.map((svc, i) => (
                <div
                  key={svc.title}
                  className={`svc-scroll-item svc-card rounded-2xl border ${svc.borderColor} bg-white p-5 flex flex-col gap-3 relative overflow-hidden`}
                  style={{ width: "260px", minWidth: "260px", animationDelay: `${i * 0.08}s` }}
                >
                  {/* Top glow strip */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${svc.accentColor.replace("text-", "bg-").replace("600", "400").replace("700", "400")}`} />
                  <div className="flex items-start justify-between">
                    <div className={`svc-icon-wrap h-11 w-11 rounded-xl ${svc.bgColor} flex items-center justify-center`}>
                      <svc.icon className={`h-5 w-5 ${svc.accentColor}`} />
                    </div>
                    {svc.badge && (
                      <span className={`featured-badge text-[10px] font-bold px-2.5 py-1 rounded-full ${svc.bgColor} ${svc.accentColor}`}>
                        {svc.badge}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1.5">{svc.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCards.map((svc, i) => (
              <div
                key={svc.title}
                className={`svc-card rounded-2xl border ${svc.borderColor} bg-white p-6 flex flex-col gap-4 relative overflow-hidden`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Top glow strip */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${svc.accentColor.replace("text-", "bg-").replace("600", "400").replace("700", "400")}`} />
                <div className="flex items-start justify-between">
                  <div className={`svc-icon-wrap h-11 w-11 rounded-xl ${svc.bgColor} flex items-center justify-center`}>
                    <svc.icon className={`h-5 w-5 ${svc.accentColor}`} />
                  </div>
                  {svc.badge && (
                    <span className={`featured-badge text-[10px] font-bold px-2.5 py-1 rounded-full ${svc.bgColor} ${svc.accentColor}`}>
                      {svc.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1.5">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Other Services Grid ──────────────────────────────────── */}
      {otherCards.length > 0 && (
        <div ref={gridReveal.ref} className="container mx-auto max-w-7xl">
          {/* Mobile: horizontal scroll */}
          <div className="md:hidden">
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">More Services</span>
              <span className="text-[10px] text-muted-foreground/60">— swipe to explore</span>
            </div>
            <div className="svc-scroll-container flex gap-3 overflow-x-auto pb-3 -mx-4 px-4">
              {otherCards.map((svc, i) => (
                <div
                  key={svc.title}
                  className={`svc-scroll-item svc-card svc-card-reveal ${gridReveal.visible ? "in-view" : ""} rounded-2xl border ${svc.borderColor} bg-white p-5 flex flex-col gap-3`}
                  style={{ width: "240px", minWidth: "240px", transitionDelay: `${i * 0.06}s` }}
                >
                  <div className={`svc-icon-wrap h-10 w-10 rounded-xl ${svc.bgColor} flex items-center justify-center`}>
                    <svc.icon className={`h-5 w-5 ${svc.accentColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1.5">{svc.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {otherCards.map((svc, i) => (
              <div
                key={svc.title}
                className={`svc-card svc-card-reveal ${gridReveal.visible ? "in-view" : ""} rounded-2xl border ${svc.borderColor} bg-white p-5 flex flex-col gap-3`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className={`svc-icon-wrap h-10 w-10 rounded-xl ${svc.bgColor} flex items-center justify-center`}>
                  <svc.icon className={`h-5 w-5 ${svc.accentColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1.5">{svc.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Bottom CTA ────────────────────────────────────────────── */}
      <div className="container mx-auto max-w-7xl">
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#061320] via-[#0a1f35] to-[#061320] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Interested in NeuroWellness for your clinic?
            </h3>
            <p className="text-white/60 text-sm max-w-md">
              We're onboarding early clinic partners. Book a 30-minute demo to see how NeuroWellness can simplify your therapy workflows.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
