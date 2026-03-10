import dcImg from "@/assets/DC.png";
import linkedinIcon from "@/assets/linkedin.png";

const TeamSection = () => {
  return (
    <section id="minds" className="py-20">
      <style>{`
        @keyframes fadeSlideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .dc-img-col { animation: fadeSlideLeft 0.8s ease both; }
        .dc-bio-wrap { animation: fadeSlideRight 0.8s ease 0.15s both; }
        .dc-img-col img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .dc-img-col:hover img {
          transform: scale(1.04);
        }
        .dc-quote-line {
          border-left: 3px solid #0f72ba;
          padding-left: 1rem;
          transition: border-color 0.3s ease;
        }
        .dc-bio-wrap:hover .dc-quote-line { border-color: #1d4ed8; }
      `}</style>

      {/* Section heading */}
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight mb-4">
            Brilliant Minds Behind PCS
          </h2>
          <p className="text-sm text-muted-foreground">
            The people who shape our vision, culture, and technology — meet the leadership driving PCS forward.
          </p>
        </div>
      </div>

      {/* Two-column layout — zoom-safe, mobile-first */}
      <div className="flex flex-col md:flex-row w-full">

        {/* LEFT — DC image column (~40% on desktop, full width on mobile) */}
        <div className="dc-img-col relative overflow-hidden flex-none w-full md:w-5/12 lg:w-2/5 h-72 md:h-auto">
          <img
            src={dcImg}
            alt="Deepak Chandani — CEO, PCS"
            className="w-full h-full object-cover object-top"
          />
          {/* Blend right-edge into white bio column — desktop only */}
          <div
            className="absolute inset-0 hidden md:block pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent 60%, white 100%)" }}
          />
          {/* Blend bottom into white for mobile stacking */}
          <div
            className="absolute inset-0 block md:hidden pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }}
          />
        </div>

        {/* RIGHT — Bio column */}
        <div className="dc-bio-wrap flex-1 bg-white flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 lg:px-16 space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#081627]/10 text-[#0f72ba] border border-[#0f72ba] mb-4">
              Leadership
            </span>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Deepak Chandani</h3>
              <a
                href="https://www.linkedin.com/in/deepakchandani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-75 transition-opacity"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="h-6 w-6 md:h-7 md:w-7" />
              </a>
            </div>
            <p className="text-[#0f72ba] font-semibold text-base">Chief Executive Officer & Founder, PCS</p>
          </div>

          <div className="dc-quote-line">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
              "Our mission is simple — deliver technology that creates lasting value for the businesses we serve, and build a culture where every engineer is proud of what they ship."
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
            <p>
              Deepak Chandani is the founder and CEO of PCS, a Bay Area software development company established in February 2015. With over two decades of experience spanning enterprise architecture, product engineering, and business leadership, Deepak has been instrumental in growing PCS into a trusted technology partner for startups and established enterprises alike.
            </p>
            <p>
              Under his leadership, PCS has built and shipped products across fintech, healthcare, real estate, and SaaS verticals — serving clients from the Bay Area to global markets. His philosophy centers on outcome-driven engineering, transparent partnerships, and investing deeply in engineering talent both in the United States and India.
            </p>
            <p>
              Deepak brings together a rare combination of technical depth and business acumen, guiding PCS's expansion into AI/ML, cloud infrastructure, and managed services while maintaining the agility and personal attention of a boutique technology firm.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Strategic Leadership","Product Engineering","Cloud Architecture","AI & Innovation","US–India Operations"].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-[#081627]/10 text-[#0f72ba] border border-[#0f72ba]">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
