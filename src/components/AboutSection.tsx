import { useState, useEffect, useCallback, useRef } from "react";
import whoWeAreImg from "@/assets/about/who we are.png";
import whatWeDoImg from "@/assets/about/What we do.png";
import ourApproachImg from "@/assets/about/our approach.png";
import engineeringTalentImg from "@/assets/about/ENgineering talent.png";
import globalImpactImg from "@/assets/about/global impact.png";

const cards = [
  {
    id: 0,
    title: "Who We Are",
    description:
      "PCS is a Bay Area software development company established in February 2015. We operate as a profitable US entity with a strong development subsidiary in India, delivering innovative software solutions to global businesses.",
    image: whoWeAreImg,
  },
  {
    id: 1,
    title: "What We Do",
    description:
      "We help businesses create value across the entire product lifecycle by engineering cutting-edge solutions and enabling existing products to evolve for digitally driven markets.",
    image: whatWeDoImg,
  },
  {
    id: 2,
    title: "Our Approach",
    description:
      "We connect makers and markets across the technology ecosystem, bringing together innovation, engineering expertise, and business insights to build impactful digital products.",
    image: ourApproachImg,
  },
  {
    id: 3,
    title: "Engineering Talent",
    description:
      "Our expert engineering teams help organizations scale their product and engineering capabilities rapidly by leveraging top talent from the United States and India.",
    image: engineeringTalentImg,
  },
  {
    id: 4,
    title: "Global Impact",
    description:
      "PCS supports more than 20 global clients, delivering scalable engineering solutions and long-term product innovation across multiple industries.",
    image: globalImpactImg,
  },
];

const N = cards.length;
// Desktop flex-grow: far-left, near-left, center, near-right, far-right
const FLEX_DESKTOP = [0.45, 0.85, 5.0, 0.85, 0.45];
// Mobile: only center visible
const FLEX_MOBILE  = [0, 0, 1, 0, 0];
// Height as % of the strip container — gives the "receding behind center" look
const HEIGHT_PCT   = [62, 78, 100, 78, 62];
// z-index so center always renders on top
const Z_LEVELS     = [1, 3, 10, 3, 1];

// Which card index is shown at each display position given the active center
const cardAtPos = (activeIndex: number, displayPos: number) =>
  ((activeIndex - 2 + displayPos) % N + N) % N;

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [contentKey, setContentKey] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const hoverRef = useRef(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const FLEX = isMobile ? FLEX_MOBILE : FLEX_DESKTOP;

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % N);
    setContentKey((k) => k + 1);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + N) % N);
    setContentKey((k) => k + 1);
  }, []);

  const goTo = useCallback((displayPos: number) => {
    if (displayPos === 2) return; // already center
    setActiveIndex((i) => {
      const offset = displayPos - 2;
      return (i + offset + N) % N;
    });
    setContentKey((k) => k + 1);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(id);
  }, [isPlaying, goNext]);

  const centerCard = cards[activeIndex];

  return (
    <section
      id="about"
      className="py-16 bg-white overflow-hidden"
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      {/* Section header */}
      <div className="text-center mb-10 px-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">
          About PCS
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight">
          Who We Are &amp; What We Stand For
        </h2>
      </div>

      {/* Card strip — items-center so shorter side cards sit in the middle vertically */}
      <div className="flex items-center gap-3 md:gap-4 px-3 md:px-8 h-[420px] md:h-[520px]">
        {[0, 1, 2, 3, 4].map((displayPos) => {
          const cardIndex = cardAtPos(activeIndex, displayPos);
          const card = cards[cardIndex];
          const isCenter = displayPos === 2;

          return (
            <div
              key={`slot-${displayPos}`}
              className={`relative overflow-hidden rounded-2xl ${isCenter ? "cursor-default" : "cursor-pointer"}`}
              style={{
                flex: `${FLEX[displayPos]} 0 0`,
                minWidth: 0,
                height: `${HEIGHT_PCT[displayPos]}%`,
                zIndex: Z_LEVELS[displayPos],
                transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1), height 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: isCenter ? "0 20px 60px rgba(0,0,0,0.28)" : "0 6px 20px rgba(0,0,0,0.14)",
              }}
              onClick={() => !isCenter && goTo(displayPos)}
            >
              {/* Overlay — dark on sides, lighter gradient on center */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isCenter
                    ? isMobile
                      ? "linear-gradient(to bottom, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.02) 35%, rgba(0,0,0,0) 50%)"
                      : "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.05) 55%, rgba(0,0,0,0.18) 100%)"
                    : displayPos === 1 || displayPos === 3
                    ? "rgba(0,0,0,0.52)"
                    : "rgba(0,0,0,0.65)",
                  transition: "background 0.6s ease",
                }}
              />

              {/* CENTER CARD — category pill at top */}
              {isCenter && (
                <div
                  key={`pill-${contentKey}`}
                  className="absolute top-5 left-5"
                  style={{ animation: "fadeSlideDown 0.45s ease forwards" }}
                >
                  <div className="inline-flex items-center bg-gray-900/85 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
                    ABOUT PCS
                  </div>
                </div>
              )}

              {/* CENTER CARD — white fade behind + content box */}
              {isCenter && (
                <>
                  {/* White fog gradient rising from bottom — lifts content off image */}
                  <div
                    className="absolute inset-x-0 bottom-0 pointer-events-none"
                    style={{
                      height: isMobile ? "80%" : "65%",
                      background: isMobile
                        ? "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 40%, rgba(255,255,255,0.85) 60%, rgba(255,255,255,0.5) 78%, rgba(255,255,255,0) 100%)"
                        : "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0) 100%)",
                    }}
                  />

                  {/* Content box */}
                  <div
                    key={`box-${contentKey}`}
                    className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-[80%]"
                    style={{ animation: "fadeSlideUp 0.45s ease forwards" }}
                  >
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug mb-2">
                      {centerCard.title}
                    </h3>
                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-[0.92rem] leading-relaxed">
                      {centerCard.description}
                    </p>
                  </div>
                </>
              )}

              {/* Side cards — hover ripple hint */}
              {!isCenter && (
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-white/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation controls — BCG style, bottom-left */}
      <div className="flex items-center justify-center md:justify-start gap-2 mt-6 px-3 md:px-8">
        {/* Play / Pause */}
        <button
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={() => setIsPlaying((p) => !p)}
          className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:border-gray-500 transition-colors bg-white"
        >
          {isPlaying ? (
            /* Pause icon — two vertical bars */
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <rect x="0.5" y="0.5" width="3.5" height="13" rx="1" fill="#374151" />
              <rect x="7.5" y="0.5" width="3.5" height="13" rx="1" fill="#374151" />
            </svg>
          ) : (
            /* Play icon — triangle */
            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
              <path d="M1 1L11 7L1 13V1Z" fill="#374151" />
            </svg>
          )}
        </button>

        {/* Prev */}
        <button
          aria-label="Previous"
          onClick={goPrev}
          className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:border-gray-500 transition-colors bg-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2L4 7L9 12" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next */}
        <button
          aria-label="Next"
          onClick={goNext}
          className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded hover:border-gray-500 transition-colors bg-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 2L10 7L5 12" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
