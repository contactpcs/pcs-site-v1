import { useState, useEffect, useRef } from "react";

interface TeamMember {
  name: string;
  title: string;
  role: string;
  img: string | null;
  linkedin: string;
  bio: string[];
}

const TEAM: TeamMember[] = [
  {
    name: "Deepak Chandani",
    title: "Chief Executive Officer & Founder, PCS",
    role: "Leadership",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHFNEVguLk6dA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725156410171?e=1775088000&v=beta&t=WFNySACkvaNHD6s9Y2F7X7gFj0ofAu7S2ucRuFfJClE",
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
    img: "https://media.licdn.com/dms/image/v2/C4D03AQE6u0wmeB5VcA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1534133901853?e=1775088000&v=beta&t=gyK-gAjJhFK4qLR3sBeH8uFCxrta0_baLqfJnrnc6dA",
    linkedin: "https://www.linkedin.com/in/anu-shadeja-79128716a/",
    bio: [
      "Anu Shadeja is Co-Founder of PCS and leads strategic partnerships and operations. She brings extensive experience in building cross-border teams, establishing go-to-market strategies, and fostering client relationships that scale. Anu focuses on aligning product delivery with business outcomes and operational excellence.",
    ],
  },
  {
    name: "Vaasudev Chandani",
    title: "Director",
    role: "Leadership",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQHDGX3RP1oWVg/profile-displayphoto-crop_800_800/B4DZnHdg3dJUAI-/0/1759988027662?e=1775088000&v=beta&t=e0K_wB3SJsDNvYU7W9At__8QprRI5TSD48OnrpZ7Z_I",
    linkedin: "https://www.linkedin.com/in/vaasudevchandani/",
    bio: [
      "Vaasudev Chandani is Director at PCS, overseeing business operations and growth initiatives. With a background in finance and program management, he drives efficiency across delivery, vendor partnerships, and long-term strategic planning. Vaasudev ensures the company scales sustainably while maintaining high delivery standards.",
    ],
  },
  {
    name: "Unnati Chandani",
    title: "Product Lead",
    role: "Leadership",
    img: "https://media.licdn.com/dms/image/v2/D4E03AQGXOB_OW07LMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692457968671?e=1775088000&v=beta&t=kJDuaHp_vhVLzxk48um8kRoIPBJNoEKmYaNzFsPKjiI",
    linkedin: "https://www.linkedin.com/in/unnati-c-16148a289/",
    bio: [
      "Unnati Chandani is Product Lead at PCS, responsible for product strategy, user experience, and roadmap execution. She combines user-centered design with strong technical collaboration to shape product direction and deliver meaningful user outcomes. Unnati champions continuous discovery and rapid prototyping to validate ideas early.",
    ],
  },
  {
    name: "Mohan Rao Appikatla",
    title: "Developer",
    role: "Full-Stack Engineer",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEH4TuxKEM3jQ/profile-displayphoto-scale_400_400/B56ZzdVxF_HIAg-/0/1773239998806?e=1775088000&v=beta&t=eby_CP33sF_ma74OhtfodI8yIxCe53lwHVWv-j5smyc",
    linkedin: "https://www.linkedin.com/in/mohan-rao-appikatla-198375269/",
    bio: [
      "Mohan Rao is a seasoned full-stack engineer with expertise in building scalable APIs and cloud infrastructure. With a strong foundation in server-side architecture and system design, he has contributed to multiple high-performance projects across fintech and enterprise domains. Mohan excels at designing robust backend systems that power mission-critical applications.",
    ],
  },
  {
    name: "Jaswanth Krishna Perla",
    title: "Developer",
    role: "Frontend Developer",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGeJV676xiDEg/profile-displayphoto-crop_800_800/B56ZzcoERbI0AI-/0/1773228018752?e=1775088000&v=beta&t=pI7exwTT2wdCXOhP4yrMefa5Cx6jGKPLQVZRsRhubxI",
    linkedin: "https://www.linkedin.com/in/jaswanthperla/",
    bio: [
      "Jaswanth is a talented frontend engineer specializing in modern web technologies with deep expertise in React and TypeScript. He brings a passion for crafting intuitive, performant user interfaces and a keen eye for responsive design. Jaswanth is committed to writing clean, maintainable code and delivering exceptional user experiences across diverse projects.",
    ],
  },
  {
    name: "Amit Jape",
    title: "Developer",
    role: "Mobile Developer",
    img: "https://media.licdn.com/dms/image/v2/D4D03AQEQM3JTruYQJw/profile-displayphoto-crop_800_800/B4DZtw3mS8JUAI-/0/1767125183522?e=1775088000&v=beta&t=pLNRY4xH5WaMhcdsCe__E8YVrp4HTNfblImfIa8E_Rk",
    linkedin: "https://www.linkedin.com/in/amit-jape/",
    bio: [
      "Amit is a skilled mobile developer with expertise in cross-platform development using Flutter and native iOS/Android technologies. He specializes in creating engaging, performant mobile applications that deliver seamless user experiences on multiple platforms. Amit is passionate about leveraging the latest mobile technologies to solve real-world problems.",
    ],
  },
  {
    name: "Sneha Sanjana Avidi",
    title: "Developer",
    role: "Full-Stack Developer",
    img: "https://media.licdn.com/dms/image/v2/D5603AQH1S2bEwzG-IA/profile-displayphoto-crop_800_800/B56ZzdQzSFHwAI-/0/1773238697039?e=1775088000&v=beta&t=AMyoGMpuCs6CDsG9V9nULMO0BBO98GYfSoq1Xazapj4",
    linkedin: "https://www.linkedin.com/in/sneha-sanjana-avidi-b1462426a/",
    bio: [
      "Sneha is a versatile full-stack developer with comprehensive skills spanning frontend frameworks, backend systems, and database optimization. Her ability to seamlessly work across the stack makes her invaluable in building cohesive, end-to-end solutions. Sneha brings a problem-solving mindset and a collaborative approach to every project she undertakes.",
    ],
  },
];

const TeamSection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [displayIndex, setDisplayIndex] = useState<number>(-1);
  const [panelVisible, setPanelVisible] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleSelect = (index: number) => {
    if (index === selectedIndex) return;
    setSelectedIndex(index);
    setPanelVisible(false);
    setTimeout(() => {
      setDisplayIndex(index);
      setPanelVisible(true);
    }, 180);
  };

  const current = displayIndex >= 0 ? TEAM[displayIndex] : null;
  useEffect(() => {
    if (!showAll && selectedIndex > 5) {
      setSelectedIndex(-1);
      setDisplayIndex(-1);
    }
  }, [showAll]);

  return (
    <section id="minds" style={{ background: "#ffffff", width: "100%" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&display=swap');

        #minds * { box-sizing: border-box; }

        /* ── shared image / placeholder styles ── */
        .tm-card-img-wrap {
          overflow: hidden;
          border-radius: 10px;
          aspect-ratio: 3 / 4;
          background: #e2e2e0;
        }
        .tm-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          filter: grayscale(35%);
          transition: filter 0.3s ease, transform 0.3s ease;
          display: block;
        }
        .tm-card:hover .tm-card-img,
        .tm-card.tm-active .tm-card-img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }
        .tm-card.tm-active { border-bottom: 2px solid #0f72ba; }
        .tm-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, #e8e8e6, #d8d8d6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          color: #aaa;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.3s ease;
        }
        .tm-card:hover .tm-placeholder,
        .tm-card.tm-active .tm-placeholder {
          background: linear-gradient(145deg, #d4dce8, #c0cede);
        }
        .tm-linkedin:hover { text-decoration: underline; }
        .tm-panel-content { transition: opacity 0.28s ease, transform 0.28s ease; }

        /* ── mobile layout hidden on desktop ── */
        .tm-mobile { display: none; }

        /* ── desktop: show split, hide mobile ── */
        @media (min-width: 769px) {
          .tm-split  { display: flex; }
          .tm-mobile { display: none; }
          .tm-heading { padding: 60px 24px 36px; }
        }

        /* ── mobile breakpoint ── */
        @media (max-width: 768px) {
          .tm-split  { display: none !important; }
          .tm-mobile { display: block; }
          .tm-heading { padding: 40px 20px 24px !important; }
          .tm-heading h2 { font-size: 28px !important; }

          /* horizontal scroll strip */
          .tm-mob-scroll {
            display: flex;
            overflow-x: auto;
            gap: 14px;
            padding: 0 20px 16px;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .tm-mob-scroll::-webkit-scrollbar { display: none; }

          .tm-mob-card {
            flex-shrink: 0;
            width: 130px;
            cursor: pointer;
            padding-bottom: 10px;
            border-bottom: 2px solid transparent;
            transition: border-color 0.25s;
          }
          .tm-mob-card.tm-active { border-bottom-color: #0f72ba; }

          .tm-mob-img-wrap {
            overflow: hidden;
            border-radius: 10px;
            aspect-ratio: 3 / 4;
            background: #e2e2e0;
          }
          .tm-mob-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            filter: grayscale(30%);
            transition: filter 0.3s ease;
            display: block;
          }
          .tm-mob-card.tm-active .tm-mob-img { filter: grayscale(0%); }
          .tm-mob-card.tm-active .tm-mob-placeholder {
            background: linear-gradient(145deg, #d4dce8, #c0cede);
          }
          .tm-mob-placeholder {
            width: 100%;
            height: 100%;
            background: linear-gradient(145deg, #e8e8e6, #d8d8d6);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Sora', sans-serif;
            font-size: 11px;
            color: #aaa;
            letter-spacing: 0.07em;
            text-transform: uppercase;
          }

          /* bio area below strip */
          .tm-mob-bio {
            padding: 28px 20px 48px;
            border-top: 1px solid #e8e8e8;
            transition: opacity 0.28s ease, transform 0.28s ease;
          }
        }
      `}</style>

      {/* ── Heading (shared) ── */}
      <div className="tm-heading" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.15, marginBottom: "14px", letterSpacing: "-0.01em" }}>
          Brilliant Minds Behind PCS
        </h2>
        <p style={{ fontFamily: "'Sora', sans-serif", fontSize: "15px", fontWeight: 300, color: "#6b6b6b", lineHeight: 1.65, margin: 0 }}>
          The people who shape our vision, culture, and technology — meet the leadership and engineers driving PCS forward.
        </p>
      </div>

      {/* ══════════════════════════════════
          DESKTOP — split screen
      ══════════════════════════════════ */}
      <div className="tm-split" style={{ width: "100%", minHeight: "100vh", alignItems: "flex-start" }}>

        {/* LEFT — scrollable photo grid */}
        <div className="tm-left" style={{ width: "50%", maxHeight: "100vh", overflowY: "auto", padding: "32px" }}>
          <div ref={gridRef} className="tm-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "18px" }}>
            {(() => {
              const visible = showAll ? TEAM : TEAM.slice(0, 6);
              return visible.map((member) => {
                const fullIndex = TEAM.indexOf(member);
                return (
                  <div
                    key={member.name}
                    className={`tm-card${selectedIndex === fullIndex ? " tm-active" : ""}`}
                    onClick={() => handleSelect(fullIndex)}
                    style={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      paddingBottom: "12px",
                      opacity: cardsVisible ? 1 : 0,
                      transform: cardsVisible ? "translateY(0)" : "translateY(30px)",
                      transition: cardsVisible
                        ? `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${fullIndex * 80}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${fullIndex * 80}ms`
                        : "none",
                    }}
                  >
                    <div className="tm-card-img-wrap">
                      {member.img ? (
                        <img src={member.img} alt={member.name} className="tm-card-img" />
                      ) : (
                        <div className="tm-placeholder">Photo</div>
                      )}
                    </div>
                    <div style={{ padding: "10px 4px 0" }}>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "15px", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.3 }}>
                        {member.name}
                      </div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "13px", fontWeight: 300, color: "#6b6b6b", marginTop: "4px", lineHeight: 1.3 }}>
                        {member.role}
                      </div>
                    </div>
                  </div>
                );
              });
            })()}
          </div>

          {TEAM.length > 6 && (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "18px" }}>
              <a
                onClick={() => setShowAll((s) => !s)}
                role="button"
                style={{ color: "#0f72ba", cursor: "pointer", fontFamily: "'Sora', sans-serif", fontSize: "14px", textDecoration: "none" }}
              >
                {showAll ? "Show less" : "Show more"}
              </a>
            </div>
          )}
        </div>

        {/* RIGHT — sticky bio panel */}
        <div
          className="tm-right"
          style={{
            width: "50%",
            position: "sticky",
            top: 0,
            height: "100vh",
            overflowY: "auto",
            padding: "48px 48px 48px 52px",
            borderLeft: "1px solid #e5e5e5",
            background: "#ffffff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            className="tm-panel-content"
            style={{ opacity: panelVisible ? 1 : 0, transform: panelVisible ? "translateY(0)" : "translateY(-12px)", width: "100%" }}
          >
            {current ? (
              <>
                <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 3.2vw, 52px)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.1, marginBottom: "10px", marginTop: 0 }}>
                  {current.name}
                </h3>
                <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "17px", fontWeight: 400, color: "#3a3a3a", marginBottom: current.linkedin ? "18px" : "28px" }}>
                  {current.title}
                </div>
                {current.linkedin && (
                  <a href={current.linkedin} target="_blank" rel="noopener noreferrer" className="tm-linkedin"
                    style={{ fontFamily: "'Sora', sans-serif", fontSize: "12px", letterSpacing: "0.1em", fontWeight: 500, color: "#0f72ba", textDecoration: "none", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "5px", marginBottom: "28px" }}>
                    LinkedIn ↗
                  </a>
                )}
                {current.bio.map((para, idx) => (
                  <p key={idx} style={{ fontFamily: "'Sora', sans-serif", fontSize: "15px", lineHeight: 1.78, color: "#3d3d3d", marginBottom: "20px", marginTop: 0, fontWeight: 300 }}>
                    {para}
                  </p>
                ))}
              </>
            ) : (
              <div style={{ fontFamily: "'Sora', sans-serif", color: "#000000", fontSize: "22px", lineHeight: 1.4 }}>
                Select a team member for more details.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          MOBILE — horizontal scroll + bio
      ══════════════════════════════════ */}
      <div className="tm-mobile">

        {/* Horizontal photo strip */}
        <div className="tm-mob-scroll">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className={`tm-mob-card${selectedIndex === i ? " tm-active" : ""}`}
              onClick={() => handleSelect(i)}
            >
              <div className="tm-mob-img-wrap">
                {member.img ? (
                  <img src={member.img} alt={member.name} className="tm-mob-img" />
                ) : (
                  <div className="tm-mob-placeholder">Photo</div>
                )}
              </div>
              <div style={{ padding: "8px 2px 0" }}>
                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: selectedIndex === i ? "#0f72ba" : "#1a1a1a",
                  lineHeight: 1.3,
                  transition: "color 0.25s",
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: selectedIndex === i ? "#0f72ba" : "#888",
                  marginTop: "3px",
                  lineHeight: 1.3,
                  transition: "color 0.25s",
                }}>
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bio panel below strip */}
        <div
          className="tm-mob-bio"
          style={{ opacity: panelVisible ? 1 : 0, transform: panelVisible ? "translateY(0)" : "translateY(10px)" }}
        >
          {current ? (
            <>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "26px", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.15, marginBottom: "8px", marginTop: 0 }}>
                {current.name}
              </h3>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "15px", fontWeight: 400, color: "#0f72ba", marginBottom: current.linkedin ? "14px" : "20px" }}>
                {current.title}
              </div>
              {current.linkedin && (
                <a
                  href={current.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tm-linkedin"
                  style={{ fontFamily: "'Sora', sans-serif", fontSize: "11px", letterSpacing: "0.1em", fontWeight: 500, color: "#0f72ba", textDecoration: "none", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "20px" }}
                >
                  LinkedIn ↗
                </a>
              )}
              {current.bio.map((para, idx) => (
                <p key={idx} style={{ fontFamily: "'Sora', sans-serif", fontSize: "14px", lineHeight: 1.8, color: "#3d3d3d", marginBottom: "16px", marginTop: 0, fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </>
          ) : (
            <div style={{ fontFamily: "'Sora', sans-serif", color: "#6b6b6b", fontSize: "15px", lineHeight: 1.6 }}>
              Select a team member for more details.
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default TeamSection;
