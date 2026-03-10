import { useRef, useState } from "react";

const clients = [
  { name: "ICE Mortgage Technology", color: "#003087" },
  { name: "FortifID", color: "#5B4FCF" },
  { name: "My Home Pathway", color: "#E8432A" },
  { name: "MIND Therapy Clinic", color: "#2E86C1" },
  { name: "Digital Spaces Inc.", color: "#556CD6" },
  { name: "CRIOT", color: "#FF6B35" },
  { name: "mychatri", color: "#00B4D8" },
  { name: "infiswift solutions", color: "#1A9AE0" },
  { name: "tavisca", color: "#E31837" },
  { name: "enquero", color: "#00A651" },
  { name: "The New York Times", color: "#121212" },
  { name: "accenture", color: "#A100FF" },
  { name: "PRIZELOGIC", color: "#FF6600" },
  { name: "Parking.com", color: "#C49B0A" },
  { name: "Connexis", color: "#1D6FA4" },
];

const TrustedBySection = () => {
  const [paused, setPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const repeated = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-16 px-4 bg-secondary/50 overflow-hidden">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-track.paused {
          animation-play-state: paused;
        }
        .client-chip {
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          cursor: default;
          user-select: none;
          white-space: nowrap;
          border: 1.5px solid transparent;
        }
        .client-chip.active {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(0,0,0,0.12);
        }
      `}</style>
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-[2.5rem] font-semibold mb-3 leading-tight">Trusted by Leading Organizations</h2>
        <p className="text-sm text-muted-foreground">We partner with enterprises and growing businesses to create real impact.</p>
      </div>
      <div
        className="overflow-hidden py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setHoveredIndex(null); }}
      >
        <div className={`marquee-track${paused ? " paused" : ""}`}>
          {repeated.map((client, i) => {
            const clientIdx = i % clients.length;
            const isHovered = hoveredIndex === clientIdx;
            return (
              <span
                key={i}
                className={`client-chip mx-6 px-6 py-2 rounded-full text-lg md:text-xl font-semibold${isHovered ? " active" : ""}`}
                style={isHovered ? {
                  color: client.color,
                  borderColor: client.color,
                  background: `${client.color}12`,
                } : {
                  color: "rgba(100,116,139,0.55)",
                }}
                onMouseEnter={() => setHoveredIndex(clientIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {client.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
