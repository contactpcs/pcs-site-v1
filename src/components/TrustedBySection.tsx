import { useState, useEffect } from "react";
import iceLogo        from "../assets/client/ellie-mae.png";
import fortifidLogo   from "../assets/client/FortidID.png";
import mhpLogo        from "../assets/client/mhp.png";
import mindLogo       from "../assets/client/mind-therapy.png";
import dsiLogo        from "../assets/client/dsi-logo-vector.svg";
import criotLogo      from "../assets/client/criot.png";
import mychatriLogo   from "../assets/client/mychatri.png";
import infiswiftLogo  from "../assets/client/infiswift-logo.png";
import taviscaLogo    from "../assets/client/tavisca.jpeg";
import enqueroLogo    from "../assets/client/enquero.png";
import nytLogo        from "../assets/client/nyt-logo.png";
import accentureLogo  from "../assets/client/accenture.png";
import prizelogicLogo from "../assets/client/prizelogic.77868f56.svg";
import sonyLogo       from "../assets/client/sony-logo.png";
import valfixLogo     from "../assets/client/valfix.svg";

const clients = [
  { name: "MIND Therapy Clinic",    color: "#2E86C1", logo: mindLogo,       url: "https://mindtherapyclinic.com/" },
  { name: "FortifID",               color: "#5B4FCF", logo: fortifidLogo,   url: "https://fortifid.com/" },
  { name: "My Home Pathway",        color: "#E8432A", logo: mhpLogo,        url: "https://www.myhomepathway.com/" },
  { name: "Digital Spaces Inc.",    color: "#556CD6", logo: dsiLogo,        url: "https://digitalspacesinc.com/" },
  { name: "CRIOT",                  color: "#FF6B35", logo: criotLogo,      url: "https://www.criotsolutions.com/" },
  { name: "mychatri",               color: "#00B4D8", logo: mychatriLogo,   url: "https://mychatri.com/" },
  { name: "infiswift solutions",    color: "#1A9AE0", logo: infiswiftLogo,  url: "https://infiswift.ai/" },
  { name: "tavisca",                color: "#E31837", logo: taviscaLogo,    url: "https://usepower.com/" },
  { name: "enquero",                color: "#00A651", logo: enqueroLogo,    url: "https://enquero.com/" },
  { name: "Valfix",                 color: "#0066CC", logo: valfixLogo,     url: "https://www.valfixmed.com/" },
];

const stats = [
  { value: "2017", label: "Founded in Pune" },
  { value: "6",    label: "Core Team Members" },
  { value: "B2B+B2C", label: "Business Model" },
  { value: "2026", label: "Platform Launch" },
];

const reasons = [
  {
    index: "01",
    heading: "Healthcare Domain Focus",
    body: "NeuroWellness is designed specifically for neuromodulation therapy — not a generic platform adapted to healthcare. Our team understands clinical workflows and patient care pathways.",
  },
  {
    index: "02",
    heading: "India-registered & Compliant",
    body: "PCS IT Solutions Pvt. Ltd. is incorporated in India. We build with Indian healthcare regulations, data residency requirements, and local clinical practice norms in mind.",
  },
  {
    index: "03",
    heading: "Founder-led, Transparent Team",
    body: "A lean 6-person team where the founders are directly involved in every product decision — fast iterations, open communication, and genuine accountability.",
  },
];

const TrustedBySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const VISIBLE_COUNT_MOBILE = 6;
  const visibleClients = clients;

  const repeated1 = [...clients, ...clients, ...clients];
  const repeated2 = [...clients, ...clients, ...clients].reverse();

  return (
    <section id="clients" className="py-16 px-4 bg-secondary/50 overflow-hidden">
      <style>{`
        @keyframes marqueeLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marqueeRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .mq-left  { display:flex; width:max-content; animation: marqueeLeft  42s linear infinite; }
        .mq-right { display:flex; width:max-content; animation: marqueeRight 42s linear infinite; }

        /* ── scrolling chips ── */
        .client-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: white;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          padding: 10px 24px;
          height: 60px;
          min-width: 150px;
          cursor: pointer;
          user-select: none;
          white-space: nowrap;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: inherit;
        }
        .client-chip:hover,
        .client-chip.active {
          box-shadow: 0 4px 18px rgba(0,0,0,0.10);
          transform: translateY(-2px);
          border-color: #d1d5db;
        }
        .client-chip-img {
          height: 28px;
          max-width: 120px;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.55);
          transition: filter 0.25s;
          display: block;
        }
        .client-chip:hover .client-chip-img,
        .client-chip.active .client-chip-img { filter: grayscale(0%) brightness(1); }
        .client-chip-text {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* ── static logo grid ── */
        .tb-logo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--border, #e5e7eb);
          border-radius: 16px;
          overflow: hidden;
          background: white;
        }
        @media (max-width: 640px) {
          .tb-logo-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .tb-logo-cell {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 16px;
          border-right: 1px solid var(--border, #e5e7eb);
          border-bottom: 1px solid var(--border, #e5e7eb);
          min-height: 80px;
          background: white;
          transition: background 0.2s;
        }
        .tb-logo-cell:hover { background: #f7f9fc; }
        .tb-logo-cell:nth-child(3n) { border-right: none; }
        .tb-logo-cell:nth-last-child(-n+3) { border-bottom: none; }
        @media (max-width: 640px) {
          .tb-logo-cell { padding: 12px 8px; min-height: 65px; }
          .tb-logo-cell:nth-child(3n) { border-right: inherit; }
          .tb-logo-cell:nth-child(2n) { border-right: none; }
          .tb-logo-cell:nth-last-child(-n+3) { border-bottom: inherit; }
          .tb-logo-cell:nth-last-child(-n+2) { border-bottom: none; }
        }
        .tb-logo-grid-img {
          max-height: 36px;
          max-width: 140px;
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%) brightness(0.55);
          transition: filter 0.3s;
          display: block;
        }
        @media (max-width: 640px) {
          .tb-logo-grid-img { max-height: 28px; max-width: 90px; }
        }
        .tb-logo-cell:hover .tb-logo-grid-img { filter: grayscale(0%) brightness(1); }
        .tb-logo-grid-fallback {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9ca3af;
          text-align: center;
          line-height: 1.3;
        }

        .tb-stat-box {
          text-align: center;
          padding: 28px 20px;
          border-right: 1px solid;
          border-color: var(--border, #e5e7eb);
        }
        .tb-stat-box:last-child { border-right: none; }

        .tb-reason-card {
          padding: 36px 32px;
          border-right: 1px solid var(--border, #e5e7eb);
          transition: background 0.25s;
        }
        .tb-reason-card:last-child { border-right: none; }
        .tb-reason-card:hover { background: #f8faff; }
        @media (max-width: 768px) {
          .tb-reason-card { border-right: none; border-bottom: 1px solid var(--border, #e5e7eb); padding: 28px 20px; }
          .tb-reason-card:last-child { border-bottom: none; }
        }

        @media (max-width: 640px) {
          .tb-stat-box {
            border-right: none;
            border-bottom: 1px solid;
            border-color: var(--border, #e5e7eb);
          }
          .tb-stat-box:last-child { border-bottom: none; }
        }
      `}</style>

      {/* ── Header ── */}
      <div className="container mx-auto text-center mb-10">
        <p className="text-[11px] font-bold tracking-[0.5em] text-foreground uppercase mb-3">EARLY PARTNERS & COLLABORATORS</p>
        <h2 className="text-3xl md:text-[2.75rem] font-light leading-tight mb-4">
          Organisations We Have Worked With
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          As a bootstrapped startup building NeuroWellness, these are organisations and projects our founding team has engaged with — bringing hands-on healthcare and technology experience to our product.
        </p>
      </div>

      {/* ── Stats strip ── */}
      <div className="container mx-auto mb-10">
        <div
          className="grid grid-cols-2 md:grid-cols-4 border border-border rounded-2xl overflow-hidden"
          style={{ background: "white" }}
        >
          {stats.map((s, i) => (
            <div key={s.label} className="tb-stat-box" style={i < stats.length - 1 ? {} : {}}>
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 300,
                  color: "#0f72ba",
                  lineHeight: 1,
                  marginBottom: "8px",
                  fontFamily: "inherit",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(100,116,139,0.7)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Client logo grid ── */}
      <div className="container mx-auto mb-10">
        <div className="tb-logo-grid">
          {visibleClients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tb-logo-cell"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <img
                src={client.logo || ""}
                alt={client.name}
                className="tb-logo-grid-img"
                style={{ display: client.logo ? "block" : "none" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
                  if (fb) fb.style.display = "block";
                }}
              />
              <span
                className="tb-logo-grid-fallback"
                style={{ display: client.logo ? "none" : "block" }}
              >
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Why clients choose PCS ── */}
      <div className="container mx-auto mb-10">
        <p
          style={{
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(100,116,139,0.6)",
            marginBottom: "28px",
          }}
        >
          Why NeuroWellness
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-3 border border-border rounded-2xl overflow-hidden"
          style={{ background: "white" }}
        >
          {reasons.map((r) => (
            <div key={r.index} className="tb-reason-card">
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#0f72ba",
                  marginBottom: "14px",
                }}
              >
                {r.index}
              </div>
              <div
                style={{
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#1a1a1a",
                  lineHeight: 1.3,
                  marginBottom: "12px",
                }}
              >
                {r.heading}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#6b6b6b",
                  lineHeight: 1.7,
                }}
              >
                {r.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Marquee row 1 — left ── */}
      <div className="overflow-hidden py-2 mb-2" onMouseLeave={() => setHoveredIndex(null)}>
        <div className="mq-left">
          {repeated1.map((client, i) => {
            const clientIdx = i % clients.length;
            const isHovered = hoveredIndex === clientIdx;
            return (
              <a
                key={i}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`client-chip mx-4${isHovered ? " active" : ""}`}
                onMouseEnter={() => setHoveredIndex(clientIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={client.logo || ""}
                  alt={client.name}
                  className="client-chip-img"
                  style={{ display: client.logo ? "block" : "none" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const el = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (el) el.style.display = "block";
                  }}
                />
                <span
                  className="client-chip-text"
                  style={{ display: client.logo ? "none" : "block" }}
                >
                  {client.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Marquee row 2 — right ── */}
      <div className="overflow-hidden py-2" onMouseLeave={() => setHoveredIndex(null)}>
        <div className="mq-right">
          {repeated2.map((client, i) => {
            const clientIdx = clients.indexOf(client);
            const isHovered = hoveredIndex === clientIdx;
            return (
              <a
                key={i}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`client-chip mx-4${isHovered ? " active" : ""}`}
                onMouseEnter={() => setHoveredIndex(clientIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={client.logo || ""}
                  alt={client.name}
                  className="client-chip-img"
                  style={{ display: client.logo ? "block" : "none" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const el = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (el) el.style.display = "block";
                  }}
                />
                <span
                  className="client-chip-text"
                  style={{ display: client.logo ? "none" : "block" }}
                >
                  {client.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Bottom trust line ── */}
      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground/70 max-w-md mx-auto leading-relaxed">
          Our founding team brings hands-on experience across healthcare technology, clinical workflows, and product engineering — building NeuroWellness from the ground up.
        </p>
      </div>
    </section>
  );
};

export default TrustedBySection;
