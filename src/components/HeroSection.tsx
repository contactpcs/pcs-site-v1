import heroVideo from "@/assets/hero.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <style>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(255, 255, 255, 0.2); }
          50% { border-color: rgba(59, 130, 246, 0.4); }
        }
        .hero-badge {
          animation: fade-in-down 0.8s ease-out both;
          border-color: rgba(255, 255, 255, 0.2);
          animation: fade-in-down 0.8s ease-out both, pulse-border 2s ease-in-out 0.5s infinite;
        }
        .hero-title {
          animation: fade-in-down 1s ease-out 0.2s both;
        }
        .hero-description {
          animation: fade-in-up 1s ease-out 0.4s both;
        }
        .hero-stats {
          animation: fade-in-up 1s ease-out 0.6s both;
        }
        .stat-item {
          transition: all 0.3s ease;
        }
        .stat-item:hover {
          transform: translateY(-4px);
          color: #2563eb;
        }
      `}</style>

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-950/70 via-blue-900/60 to-blue-950/80" />

      {/* Centered content */}
      <div className="relative z-20 flex-1 flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center max-w-4xl flex flex-col items-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border bg-white/10 backdrop-blur-sm text-xs text-white/80 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-300 animate-pulse" />
            India's Trusted IT Partner
          </div>

          <h1 className="hero-title text-[clamp(2rem,5.5vw,4.5rem)] font-light tracking-tight leading-[1.08] mb-5 text-white px-2">
            Scalable{" "}
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300">
              IT Solutions
            </span>
            <br />
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300">
              Delivered.
            </span>
          </h1>

          <p className="hero-description text-base text-white/70 max-w-lg mx-auto mb-10 leading-relaxed">
            From IT support to cloud infrastructure — we build technology that grows with your business.
          </p>
        </div>
      </div>

      {/* Stats bar pinned to bottom */}
      <div className="hero-stats relative z-20 w-full">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-white/10 py-8">
          {[
            { value: "100+", label: "Clients Served" },
            { value: "500+", label: "Projects Delivered" },
            { value: "10+", label: "Years of Experience" },
            { value: "50+", label: "Expert Professionals" },
          ].map((stat, i) => (
            <div key={stat.label} className="stat-item" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
              <p className="text-xl md:text-2xl font-semibold text-white">{stat.value}</p>
              <p className="text-xs text-white/50 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
