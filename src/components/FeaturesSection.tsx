import swDevImg from "@/assets/Software Development.png";
import prodEngImg from "@/assets/Product Engineering.png";
import cloudImg from "@/assets/Cloud & Infrastructure.png";
import enterpImg from "@/assets/Enterprise Solutions.png";
import itConsultImg from "@/assets/IT Consulting.png";
import supportImg from "@/assets/247 IT Support.png";
import webdevImg from "@/assets/webdev.png";
import devopsImg from "@/assets/devops.png";
import mobileImg from "@/assets/mobile.png";
import dataEngImg from "@/assets/data engineering.png";
import aimlImg from "@/assets/aiml.png";
import qaImg from "@/assets/quality assurance.png";
import { useState, useRef, useEffect } from "react";

const services = [
  { image: webdevImg, title: "FULL STACK", desc: "We develop full-stack web applications which processed, analyzed, and rendered data visually." },
  { image: devopsImg, title: "DEV OPS", desc: "We collaborate with the Development and Operations teams to build, test and deploy software in short, fast bursts." },
  { image: mobileImg, title: "MOBILE", desc: "We build apps for Android and Apple's iOS Phone platforms and APIs to support mobile functionality." },
  { image: dataEngImg, title: "DATA ENGINEER", desc: "We expertise in designing and building dimensional data models to improve accessibility, efficiency, quality of data." },
  { image: aimlImg, title: "AI, ML & DATA SCIENCE", desc: "We have experience with Information Retrieval, Recommendation Systems or NLP to provide end-to-end ML solution." },
  { image: qaImg, title: "QUALITY ASSURANCE", desc: "We expertise in developing test plans, test cases, assessing risk and defects managements" },
];

const features = [
  { image: swDevImg, title: "Software Development", desc: "Custom application development and enterprise solutions built with modern tech stacks and agile methodologies tailored to your business goals." },
  { image: prodEngImg, title: "Product Engineering", desc: "End-to-end engineering of scalable software products — from architecture and design to deployment and support." },
  { image: cloudImg, title: "Cloud & Infrastructure", desc: "Secure cloud migrations, infrastructure management, and optimization across AWS, Azure, and Google Cloud platforms." },
  { image: enterpImg, title: "Enterprise Solutions", desc: "Streamline operations with ERP, CRM, and business automation systems designed for enterprise-scale efficiency." },
  { image: itConsultImg, title: "IT Consulting", desc: "Strategic IT consulting and architecture guidance to align your technology roadmap with long-term business objectives." },
  { image: supportImg, title: "24/7 IT Support", desc: "Round-the-clock technical support and AMC services to ensure maximum uptime and operational continuity." },
];

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [animateService, setAnimateService] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    setAnimateService(true);
    const timer = setTimeout(() => setAnimateService(false), 500);
    return () => clearTimeout(timer);
  }, [currentServiceIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handleServicePrev = () => {
    setCurrentServiceIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleServiceNext = () => {
    setCurrentServiceIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleServiceTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleServiceSwipe();
  };

  const handleServiceSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        handleServiceNext();
      } else {
        handleServicePrev();
      }
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      if (e.deltaY > 0) {
        handleNext();
      } else if (e.deltaY < 0) {
        handlePrev();
      }
    }, 100);
  };

  const handleServiceWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      if (e.deltaY > 0) {
        handleServiceNext();
      } else if (e.deltaY < 0) {
        handleServicePrev();
      }
    }, 100);
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight mb-4">
            Comprehensive IT Services for Every Business Need
          </h2>
          <p className="text-sm text-muted-foreground">
            From product engineering to enterprise automation — PCS delivers end-to-end technology solutions.
          </p>
        </div>

        {/* Side by Side Carousels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Carousel Container - Stacked Cards */}
          <div>
            <div className="flex items-center justify-center perspective">
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleServiceTouchEnd}
                onWheel={handleServiceWheel}
                className="w-full cursor-grab active:cursor-grabbing"
              style={{ perspective: "1000px", height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <style>{`
                @keyframes stackSlideIn {
                  from {
                    opacity: 0;
                    transform: translateY(20px) scale(0.9) rotateX(10deg);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0) scale(1) rotateX(0deg);
                  }
                }
                .stacked-card {
                  position: absolute;
                  width: 100%;
                  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                  transform-style: preserve-3d;
                }
                .stacked-card-base {
                  animation: stackSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
              `}</style>
              {services.map((service, index) => {
                const offset = index - currentServiceIndex;
                const isActive = offset === 0;
                const isPrev = offset === -1;
                const isNext = offset === 1;
                
                const scale = isActive ? 1 : isPrev ? 0.96 : isNext ? 0.94 : 0.85;
                const yOffset = isActive ? 0 : isPrev ? -25 : isNext ? 25 : -50;
                const opacity = isActive || isPrev || isNext ? 1 : 0;
                const zIndex = services.length - Math.abs(offset);
                
                return (
                  <div
                    key={`service-stack-${index}`}
                    className={`stacked-card rounded-2xl p-8 border bg-white text-foreground border-gray-200 shadow-lg hover:shadow-2xl ${isActive ? "stacked-card-base" : ""}`}
                    style={{
                      width: "100%",
                      opacity: opacity > 0.5 ? opacity : 0,
                      transform: `translateY(${yOffset}px) scale(${scale}) ${!isActive ? "rotateX(-5deg)" : "rotateX(0deg)"}`,
                      zIndex: zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <img src={service.image} alt={service.title} className="h-20 w-20 mb-6 object-contain" />
                    <h3 className="text-2xl font-semibold text-black mb-3">{service.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{service.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentServiceIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentServiceIndex ? "bg-[#0f72ba] w-6" : "bg-[#0f72ba]/40"
                }`}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Features Carousel Container - Stacked Cards */}
        <div>
          <div className="flex items-center justify-center perspective">
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
              className="w-full cursor-grab active:cursor-grabbing"
              style={{ perspective: "1000px", height: "500px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <style>{`
                @keyframes stackSlideIn {
                  from {
                    opacity: 0;
                    transform: translateY(20px) scale(0.9) rotateX(10deg);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0) scale(1) rotateX(0deg);
                  }
                }
                .stacked-feature-card {
                  position: absolute;
                  width: 100%;
                  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                  transform-style: preserve-3d;
                }
                .stacked-feature-base {
                  animation: stackSlideIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .feature-hover-gradient {
                  background: white;
                  transition: all 0.5s ease-out;
                }
                .feature-hover-gradient:hover {
                  background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%), white;
                }
              `}</style>
              {features.map((feature, index) => {
                const offset = index - currentIndex;
                const isActive = offset === 0;
                const isPrev = offset === -1;
                const isNext = offset === 1;
                
                const scale = isActive ? 1 : isPrev ? 0.94 : isNext ? 0.90 : 0.82;
                const yOffset = isActive ? 0 : isPrev ? -30 : isNext ? 30 : -60;
                const opacity = isActive || isPrev || isNext ? 1 : 0;
                const zIndex = features.length - Math.abs(offset);
                
                return (
                  <div
                    key={`feature-stack-${index}`}
                    className={`stacked-feature-card rounded-2xl p-8 border bg-white text-foreground border-gray-200 shadow-lg hover:shadow-2xl feature-hover-gradient ${isActive ? "stacked-feature-base" : ""}`}
                    style={{
                      width: "100%",
                      opacity: opacity > 0.5 ? opacity : 0,
                      transform: `translateY(${yOffset}px) scale(${scale}) ${!isActive ? "rotateX(-5deg)" : "rotateX(0deg)"}`,
                      zIndex: zIndex,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <img src={feature.image} alt={feature.title} className="h-20 w-20 mb-6 object-contain" />
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#0f72ba] w-6" : "bg-[#0f72ba]/40"
                }`}
                aria-label={`Go to card ${i + 1}`}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;