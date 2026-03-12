import { useState, useEffect, useRef } from "react";
import {
  Brain, Database, Shield, Code2, Cloud, Smartphone,
  Settings, BarChart3, Layers, Cpu, Network, TestTube2,
  ArrowRight, Sparkles
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
    title: "AI Solutions & Automation",
    desc: "End-to-end AI product engineering — LLM integration, RAG pipelines, intelligent automation, agents, and AI-powered SaaS platforms.",
    category: ["ai"],
    featured: true,
    badge: "Flagship",
    accentColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  {
    icon: BarChart3,
    title: "AI / ML & Data Science",
    desc: "Recommendation systems, NLP, computer vision, predictive analytics, and MLOps pipelines — from PoC to production.",
    category: ["ai", "data"],
    featured: true,
    badge: "High Demand",
    accentColor: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200 hover:border-indigo-400",
  },
  {
    icon: Database,
    title: "Data Solutions & Engineering",
    desc: "Dimensional modelling, ETL/ELT pipelines, data lakes, warehouses, and real-time streaming architectures.",
    category: ["data"],
    featured: true,
    badge: "Core Offering",
    accentColor: "text-cyan-700",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200 hover:border-cyan-400",
  },
  {
    icon: Shield,
    title: "Cyber Security",
    desc: "Security audits, penetration testing, zero-trust architecture, SOC setup, and ISO 27001 / SOC2 compliance.",
    category: ["security"],
    featured: true,
    badge: "Critical",
    accentColor: "text-slate-700",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-300 hover:border-slate-500",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Modern web apps with React, Next.js, Node.js, Python, and Java — end-to-end from architecture to deployment.",
    category: ["engineering"],
    accentColor: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300 hover:border-blue-500",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Cloud migrations, multi-cloud management, Kubernetes, Terraform IaC on AWS, Azure, and GCP.",
    category: ["engineering", "data"],
    accentColor: "text-sky-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200 hover:border-sky-400",
  },
  {
    icon: Layers,
    title: "Product Engineering",
    desc: "End-to-end product design and delivery — architecture, UX, MVP builds, scale-up, and engineering ownership.",
    category: ["engineering"],
    accentColor: "text-teal-700",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200 hover:border-teal-400",
  },
  {
    icon: Network,
    title: "DevOps & Platform Engineering",
    desc: "CI/CD pipelines, GitOps, observability stacks, SRE practices, and platform standardisation.",
    category: ["engineering"],
    accentColor: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-300 hover:border-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Native iOS and Android apps, React Native / Flutter cross-platform solutions, and API-first mobile backends.",
    category: ["engineering"],
    accentColor: "text-sky-700",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-300 hover:border-sky-500",
  },
  {
    icon: Cpu,
    title: "Enterprise Solutions",
    desc: "ERP, CRM, and business process automation designed for enterprise-scale efficiency and systems integration.",
    category: ["engineering"],
    accentColor: "text-slate-700",
    bgColor: "bg-slate-100",
    borderColor: "border-slate-200 hover:border-slate-400",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    desc: "Technology advisory — architecture reviews, digital transformation roadmaps, and CTO-as-a-service.",
    category: ["engineering"],
    accentColor: "text-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  {
    icon: TestTube2,
    title: "Quality Assurance",
    desc: "Test strategy, automation frameworks (Selenium, Cypress, Playwright), and continuous QA in your CI pipeline.",
    category: ["engineering"],
    accentColor: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200 hover:border-teal-400",
  },
];

const categories: { key: ServiceCategory; label: string }[] = [
  { key: "all", label: "All Services" },
  { key: "ai", label: "AI & ML" },
  { key: "data", label: "Data" },
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
      `}</style>

      {/* ── Header ──────────────────────────────────────────────────── */}
      <div
        ref={headerReveal.ref}
        className={`svc-header-reveal ${headerReveal.visible ? "in-view" : ""} container mx-auto max-w-7xl mb-10`}
      >
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs text-primary mb-4">
            <Sparkles className="h-3 w-3" />
            What We Deliver
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
            Comprehensive IT Services<br />for Every Business Need
          </h2>
          <p className="text-sm text-muted-foreground">
            From AI-powered products to hardened security — PCS delivers end-to-end technology solutions that scale.
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

      {/* ── Featured Row (visible on "all") ─────────────────────────── */}
      {activeCategory === "all" && (
        <div className="container mx-auto max-w-7xl mb-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.filter((s) => s.featured).map((svc, i) => (
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

      {/* ── Main Services Grid ──────────────────────────────────────── */}
      <div ref={gridReveal.ref} className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered
            .filter((s) => activeCategory !== "all" || !s.featured)
            .map((svc, i) => (
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

        {/* ── Bottom CTA ────────────────────────────────────────────── */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#061320] via-[#0a1f35] to-[#061320] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Not sure which service fits your needs?
            </h3>
            <p className="text-white/60 text-sm max-w-md">
              Book a free 30-minute consultation. Our engineers will assess your requirements and recommend the right stack.
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
