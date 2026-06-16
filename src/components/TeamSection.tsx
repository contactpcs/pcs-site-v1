import { useState, useEffect, useRef, useCallback } from "react";
import { flushSync } from "react-dom";
import snehaImg from "@/assets/team/sneha-sanjana.jpg";
import amitImg from "@/assets/team/amit-jape.png";
import jaswanthImg from "@/assets/team/jaswanth-krishna.jpg";
import mohanImg from "@/assets/team/mohan-rao.png";
import deepakImg from "@/assets/team/deepakchandaniprofilephoto.jpeg";
import anuImg from "@/assets/team/anu_shadeja.jpeg";
import vaasudevImg from "@/assets/team/vaasudev_chandani.png";
import unnatiImg from "@/assets/team/unnati_chandani.jpeg";

interface TeamMember {
  name: string;
  title: string;
  role: string;
  img: string | null;
  initials?: string;
  imgPosition?: string;
  linkedin: string;
  bio: string[];
}

const TEAM: TeamMember[] = [
  {
    name: "Deepak Chandani",
    title: "Chief Executive Officer & Founder, PCS",
    role: "Leadership",
    img: deepakImg,
    linkedin: "https://www.linkedin.com/in/deepakchandani",
    bio: [
      "Deepak Chandani is the founder and CEO of PCS, a Bay Area software development company established in February 2015. With over two decades of experience spanning enterprise architecture, product engineering, and business leadership, Deepak has been instrumental in growing PCS into a trusted technology partner for startups and established enterprises alike.",
      "Under his leadership, PCS has built and shipped products across fintech, healthcare, real estate, and SaaS verticals — serving clients from the Bay Area to global markets. His philosophy centers on outcome-driven engineering, transparent partnerships, and investing deeply in engineering talent both in the United States and India.",
      "Deepak brings together a rare combination of technical depth and business acumen, guiding PCS's expansion into AI/ML, cloud infrastructure, and managed services while maintaining the agility and personal attention of a boutique technology firm.",
    ],
  },
  {
    name: "Anu Shadeja",
    title: "Co-Founder",
    role: "Leadership",
    img: anuImg,
    imgPosition: "70% 15%",
    linkedin: "https://www.linkedin.com/in/anu-shadeja-79128716a/",
    bio: [
      "Anu Shadeja is Co-Founder of PCS and leads strategic partnerships and operations. She brings extensive experience in building cross-border teams, establishing go-to-market strategies, and fostering client relationships that scale. Anu focuses on aligning product delivery with business outcomes and operational excellence.",
    ],
  },
  {
    name: "Vaasudev Chandani",
    title: "Director",
    role: "Leadership",
    img: vaasudevImg,
    linkedin: "https://www.linkedin.com/in/vaasudevchandani/",
    bio: [
      "Vaasudev Chandani is Director at PCS, overseeing business operations and growth initiatives. With a background in finance and program management, he drives efficiency across delivery, vendor partnerships, and long-term strategic planning. Vaasudev ensures the company scales sustainably while maintaining high delivery standards.",
    ],
  },
  {
    name: "Unnati Chandani",
    title: "Product Lead",
    role: "Leadership",
    img: unnatiImg,
    linkedin: "https://www.linkedin.com/in/unnati-c-16148a289/",
    bio: [
      "Unnati Chandani is Product Lead at PCS, responsible for product strategy, user experience, and roadmap execution. She combines user-centered design with strong technical collaboration to shape product direction and deliver meaningful user outcomes. Unnati champions continuous discovery and rapid prototyping to validate ideas early.",
    ],
  },
  {
    name: "Mohan Rao Appikatla",
    title: "Developer",
    role: "Full-Stack Engineer",
    img: mohanImg,
    linkedin: "https://www.linkedin.com/in/mohan-rao-appikatla-198375269/",
    bio: [
      "Mohan Rao is a seasoned full-stack engineer with expertise in building scalable APIs and cloud infrastructure. With a strong foundation in server-side architecture and system design, he has contributed to multiple high-performance projects across fintech and enterprise domains. Mohan excels at designing robust backend systems that power mission-critical applications.",
    ],
  },
  {
    name: "Jaswanth Krishna Perla",
    title: "Developer",
    role: "Frontend Developer",
    img: jaswanthImg,
    linkedin: "https://www.linkedin.com/in/jaswanthperla/",
    bio: [
      "Jaswanth is a talented frontend engineer specializing in modern web technologies with deep expertise in React and TypeScript. He brings a passion for crafting intuitive, performant user interfaces and a keen eye for responsive design. Jaswanth is committed to writing clean, maintainable code and delivering exceptional user experiences across diverse projects.",
    ],
  },
  {
    name: "Amit Jape",
    title: "Developer",
    role: "Developer",
    img: amitImg,
    linkedin: "https://www.linkedin.com/in/amit-jape/",
    bio: [
      "Amit Jape is a cross-platform developer with experience spanning full stack development and project management. He brings strong expertise in Flutter, React Native, and native iOS/Android development, enabling him to build high-performance mobile and web applications from the ground up.",
      "With a background that bridges development and delivery management, Amit coordinates effectively across design, engineering, and client stakeholders to ensure projects are shipped on time and at quality. He is passionate about clean architecture, scalable code, and delivering real-world solutions that make an impact.",
    ],
  },
  {
    name: "Sneha Sanjana Avidi",
    title: "Developer",
    role: "Full-Stack Developer",
    img: snehaImg,
    linkedin: "https://www.linkedin.com/in/sneha-sanjana-avidi-b1462426a/",
    bio: [
      "Sneha is a versatile full-stack developer with comprehensive skills spanning frontend frameworks, backend systems, and database optimization. Her ability to seamlessly work across the stack makes her invaluable in building cohesive, end-to-end solutions. Sneha brings a problem-solving mindset and a collaborative approach to every project she undertakes.",
    ],
  },
];

const N = TEAM.length;
const AUTO_INTERVAL = 4000;
// 3 copies (1 center + 1 each side) is enough since we normalize after each transition
const COPIES = 3;

const TeamSection = () => {
  // rawIndex is continuous — not clamped to [0,N). This lets wrap-around
  // transitions go the short way (e.g. 7→8 instead of 7→0).
  const [rawIndex, setRawIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);
  const [displayIndex, setDisplayIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const isNormalizing = useRef(false);

  // Observe section entering viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // After the CSS transition finishes, silently re-center rawIndex into [0, N)
  // so the track doesn't drift infinitely.
  // flushSync ensures React commits the DOM update synchronously before we
  // re-enable the transition — otherwise the jump would be visible.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const handler = (e: TransitionEvent) => {
      if (e.target !== el || e.propertyName !== "transform") return;
      if (isNormalizing.current) return;
      const normalized = ((rawIndex % N) + N) % N;
      if (normalized !== rawIndex) {
        isNormalizing.current = true;
        el.style.transition = "none";
        // flushSync forces React to commit the new translateX to the DOM
        // synchronously, so re-enabling the transition won't animate the jump
        flushSync(() => setRawIndex(normalized));
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        el.offsetHeight; // force reflow
        el.style.transition = "";
        isNormalizing.current = false;
      }
    };
    el.addEventListener("transitionend", handler);
    return () => el.removeEventListener("transitionend", handler);
  }, [rawIndex]);

  // Auto-advance
  useEffect(() => {
    if (paused || !inView) return;
    const id = setInterval(() => {
      // Always go +1 (next)
      setPanelVisible(false);
      setRawIndex(prev => {
        const next = prev + 1;
        setTimeout(() => {
          setDisplayIndex(((next % N) + N) % N);
          setPanelVisible(true);
        }, 200);
        return next;
      });
    }, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, inView]);

  // Click on a card — pause and navigate by physical position delta
  // (not realIdx, so clicking LEFT always animates left)
  const handleCardClick = (delta: number) => {
    if (delta === 0) return;
    setPaused(true);
    setPanelVisible(false);
    const nextRaw = rawIndex + delta;
    setRawIndex(nextRaw);
    setTimeout(() => {
      setDisplayIndex(((nextRaw % N) + N) % N);
      setPanelVisible(true);
    }, 200);
  };

  const current = TEAM[displayIndex];

  // Build carousel items: COPIES sets, with the middle set as "home"
  const items: { member: TeamMember; realIdx: number; key: string }[] = [];
  const setsOnEachSide = Math.floor(COPIES / 2);
  for (let offset = -setsOnEachSide * N; offset < (setsOnEachSide + 1) * N; offset++) {
    const realIdx = ((offset % N) + N) % N;
    items.push({ member: TEAM[realIdx], realIdx, key: `${offset}` });
  }
  // The "home" 0-index lives at array position setsOnEachSide * N
  const homeOffset = setsOnEachSide * N;

  const CARD_W_DESKTOP = 170;
  const CARD_W_MOBILE = 130;
  const GAP_DESKTOP = 16;
  const GAP_MOBILE = 12;

  return (
    <section id="minds" ref={sectionRef} style={{ background: "#ffffff", width: "100%", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');
        #minds * { box-sizing: border-box; }

        .tm-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }

        .tm-card-outer {
          flex-shrink: 0;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease;
          cursor: pointer;
        }

        .tm-card-img-wrap {
          overflow: hidden;
          border-radius: 10px;
          aspect-ratio: 3 / 4;
          background: #e8e8e6;
        }
        .tm-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
        }
        .tm-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #0a1f35, #0f2d4a);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Sora', sans-serif;
          font-size: clamp(22px, 4vw, 32px);
          font-weight: 600;
          color: #4aa3e8;
          letter-spacing: 0.04em;
        }

        .tm-bio-panel {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .tm-linkedin:hover { text-decoration: underline; }

        /* Desktop card sizes */
        .tm-card-outer {
          width: ${CARD_W_DESKTOP}px;
          margin-right: ${GAP_DESKTOP}px;
        }

        @media (max-width: 768px) {
          .tm-card-outer {
            width: ${CARD_W_MOBILE}px;
            margin-right: ${GAP_MOBILE}px;
          }
        }
      `}</style>

      {/* Heading — compact */}
      <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto", padding: "40px 20px 24px" }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.15, marginBottom: "10px", letterSpacing: "-0.01em" }}>
          Brilliant Minds Behind PCS
        </h2>
        <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "14px", fontWeight: 300, color: "#6b6b6b", lineHeight: 1.6, margin: 0 }}>
          Meet the leadership and engineers driving PCS forward.
        </p>
      </div>

      {/* Carousel — extra top padding so scaled center card border isn't clipped */}
      <div style={{ position: "relative", overflow: "hidden", padding: "16px 0 12px" }}>
        <CarouselTrack
          trackRef={trackRef}
          items={items}
          rawIndex={rawIndex}
          homeOffset={homeOffset}
          onCardClick={handleCardClick}
          onSwipe={(dir) => { handleCardClick(dir); }}
          cardWidthDesktop={CARD_W_DESKTOP}
          cardWidthMobile={CARD_W_MOBILE}
          gapDesktop={GAP_DESKTOP}
          gapMobile={GAP_MOBILE}
        />
      </div>

      {/* Bio panel — compact */}
      <div
        className="tm-bio-panel"
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          padding: "20px 24px 32px",
          opacity: panelVisible ? 1 : 0,
          transform: panelVisible ? "translateY(0)" : "translateY(8px)",
          minHeight: "140px",
        }}
      >
        <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.15, marginBottom: "4px", marginTop: 0 }}>
          {current.name}
        </h3>
        <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "14px", fontWeight: 400, color: "#0f72ba", marginBottom: current.linkedin ? "10px" : "16px" }}>
          {current.title}
        </div>
        {current.linkedin && (
          <a
            href={current.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="tm-linkedin"
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "11px", letterSpacing: "0.1em", fontWeight: 500, color: "#0f72ba", textDecoration: "none", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "14px" }}
          >
            LinkedIn ↗
          </a>
        )}
        {current.bio.map((para, idx) => (
          <p key={idx} style={{ fontFamily: "'Sora', sans-serif", fontSize: "14px", lineHeight: 1.7, color: "#4a4a4a", marginBottom: "12px", marginTop: 0, fontWeight: 300 }}>
            {para}
          </p>
        ))}
      </div>

      {/* Pause indicator */}
      {paused && (
        <div style={{ textAlign: "center", paddingBottom: "16px" }}>
          <button
            onClick={() => setPaused(false)}
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "#0f72ba",
              background: "none",
              border: "1px solid rgba(15,114,186,0.3)",
              borderRadius: "20px",
              padding: "6px 16px",
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            Resume auto-scroll
          </button>
        </div>
      )}
    </section>
  );
};

/* ── Carousel Track ── */
interface CarouselTrackProps {
  trackRef: React.RefObject<HTMLDivElement>;
  items: { member: TeamMember; realIdx: number; key: string }[];
  rawIndex: number;
  homeOffset: number;
  onCardClick: (delta: number) => void;
  onSwipe: (direction: 1 | -1) => void;
  cardWidthDesktop: number;
  cardWidthMobile: number;
  gapDesktop: number;
  gapMobile: number;
}

const CarouselTrack = ({ trackRef, items, rawIndex, homeOffset, onCardClick, onSwipe, cardWidthDesktop, cardWidthMobile, gapDesktop, gapMobile }: CarouselTrackProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [containerWidth, setContainerWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  // Touch/swipe state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchDeltaX = useRef(0);
  const isSwiping = useRef(false);
  const swipeHandled = useRef(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);
      setContainerWidth(window.innerWidth);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardW = isMobile ? cardWidthMobile : cardWidthDesktop;
  const gap = isMobile ? gapMobile : gapDesktop;
  const step = cardW + gap;

  // Center the item at homeOffset + rawIndex
  const centerItemIndex = homeOffset + rawIndex;
  const translateX = -(centerItemIndex * step) + (containerWidth / 2) - (cardW / 2);

  // Touch handlers for swipe
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchDeltaX.current = 0;
    isSwiping.current = false;
    swipeHandled.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    touchDeltaX.current = dx;

    // If horizontal movement dominates, we're swiping
    if (!isSwiping.current && Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
      isSwiping.current = true;
    }

    // Prevent vertical scroll while swiping horizontally
    if (isSwiping.current) {
      e.preventDefault();
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (swipeHandled.current) return;
    const SWIPE_THRESHOLD = 40;
    if (isSwiping.current && Math.abs(touchDeltaX.current) > SWIPE_THRESHOLD) {
      swipeHandled.current = true;
      onSwipe(touchDeltaX.current < 0 ? 1 : -1);
    }
    isSwiping.current = false;
  }, [onSwipe]);

  return (
    <div
      ref={trackRef}
      className="tm-track"
      style={{ transform: `translateX(${translateX}px)`, touchAction: "pan-y" }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {items.map((item, i) => {
        const distFromCenter = Math.abs(i - centerItemIndex);
        const isCenter = distFromCenter === 0;
        const isNear = distFromCenter <= 1;
        const scale = isCenter ? 1.08 : isNear ? 0.95 : 0.88;
        const opacity = isCenter ? 1 : isNear ? 0.8 : 0.5;

        return (
          <div
            key={item.key}
            className="tm-card-outer"
            onClick={() => {
              if (!swipeHandled.current) onCardClick(i - centerItemIndex);
            }}
            style={{
              transform: `scale(${scale})`,
              opacity,
              zIndex: isCenter ? 10 : isNear ? 5 : 1,
            }}
          >
            <div
              className="tm-card-img-wrap"
              style={{
                borderRadius: "10px",
                border: isCenter ? "2px solid #0f72ba" : "2px solid transparent",
                transition: "border-color 0.4s ease",
              }}
            >
              {item.member.img ? (
                <img src={item.member.img} alt={item.member.name} className="tm-card-img" draggable={false} style={item.member.imgPosition ? { objectPosition: item.member.imgPosition } : undefined} />
              ) : (
                <div className="tm-placeholder">{item.member.initials ?? "?"}</div>
              )}
            </div>
            <div style={{ padding: "8px 2px 0", textAlign: "center" }}>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: isMobile ? "11px" : "13px",
                fontWeight: isCenter ? 600 : 400,
                color: isCenter ? "#0f72ba" : "#1a1a1a",
                lineHeight: 1.3,
                transition: "color 0.3s, font-weight 0.3s",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                {item.member.name}
              </div>
              <div style={{
                fontFamily: "'Sora', sans-serif",
                fontSize: isMobile ? "10px" : "11px",
                fontWeight: 300,
                color: isCenter ? "#0f72ba" : "#999",
                marginTop: "2px",
                lineHeight: 1.3,
                transition: "color 0.3s",
              }}>
                {item.member.role}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamSection;
