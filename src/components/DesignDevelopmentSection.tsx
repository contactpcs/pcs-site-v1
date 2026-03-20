import { useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as THREE from "three";
import responsiveDesignImg from "@/assets/Responsive Design.jpg";
import reactWebImg from "@/assets/React Web Development.jpg";
import androidAppsImg from "@/assets/Android Apps Development.jpg";
import uxuiImg from "@/assets/UXUI Design.png";
import aimlImg from "@/assets/AIML.jpg";
import iosAppsImg from "@/assets/iOS Apps Development.webp";

const designServices = [
  {
    title: "AI/ML",
    desc: "We build intelligent solutions leveraging machine learning, deep learning, NLP, and computer vision — from predictive analytics to production-ready AI systems that transform your data into actionable insights.",
    image: aimlImg,
  },
  {
    title: "UX/UI Design",
    desc: "We craft intuitive, user-centered interfaces through research-driven design, wireframing, prototyping, and usability testing — delivering pixel-perfect experiences across web and mobile platforms.",
    image: uxuiImg,
  },
  {
    title: "React Web Development",
    desc: "We engineer high-performance React applications with modern architecture — leveraging Next.js, TypeScript, and component-driven development for scalable, maintainable web solutions.",
    image: reactWebImg,
  },
  {
    title: "Responsive Design",
    desc: "We build fluid, adaptive layouts that deliver seamless experiences across all devices and screen sizes — using modern CSS, responsive frameworks, and mobile-first design principles.",
    image: responsiveDesignImg,
  },
  {
    title: "Android Apps Development",
    desc: "We develop native and cross-platform Android applications using Kotlin, Java, and Flutter — optimized for performance, material design compliance, and Google Play distribution.",
    image: androidAppsImg,
  },
  {
    title: "iOS Apps Development",
    desc: "We create polished iOS applications using Swift, SwiftUI, and React Native — delivering App Store-ready products with exceptional performance and native platform integration.",
    image: iosAppsImg,
  },
];

/* ── Lightweight Three.js wave background (GPU-only, no CPU vertex updates) ── */
const WaveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 500);
    camera.position.set(0, 8, 45);
    camera.lookAt(0, -2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setSize(w, h);
    // Cap at 1 on mobile for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, w < 768 ? 1 : 1.5));
    renderer.setClearColor(0x081627, 0);
    container.appendChild(renderer.domElement);

    // All wave math runs on GPU — no CPU vertex updates needed
    const vertexShader = /* glsl */ `
      uniform float uTime;
      uniform float uSpeed;
      uniform float uAmp;
      uniform float uFreq;
      uniform float uPhase;
      varying float vGlow;
      varying float vDepth;
      void main() {
        vec3 pos = position;
        float wave1 = sin(pos.x * uFreq + uTime * uSpeed + uPhase) * uAmp;
        float wave2 = sin(pos.x * uFreq * 0.6 + pos.z * 0.04 + uTime * uSpeed * 0.7 + uPhase * 1.3) * uAmp * 0.6;
        pos.y += wave1 + wave2;
        float elevation = wave1 + wave2;
        vGlow = smoothstep(-uAmp * 0.3, uAmp * 1.2, elevation);
        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        vDepth = -mvPos.z;
        float baseSize = 1.4 + vGlow * 0.6;
        gl_PointSize = baseSize * (70.0 / max(vDepth, 1.0));
        gl_Position = projectionMatrix * mvPos;
      }
    `;

    const fragmentShader = /* glsl */ `
      varying float vGlow;
      varying float vDepth;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float core = smoothstep(0.5, 0.0, d);
        float fog = smoothstep(120.0, 20.0, vDepth);
        vec3 valleyColor = vec3(0.01, 0.10, 0.38);
        vec3 peakColor = vec3(0.05, 0.45, 0.98);
        vec3 color = mix(valleyColor, peakColor, vGlow);
        float alpha = core * fog * (0.3 + vGlow * 0.35);
        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Single lightweight layer — GPU handles all animation
    const geo = new THREE.PlaneGeometry(140, 30, 80, 20);
    geo.rotateX(-Math.PI * 0.5);

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: 0.25 },
        uAmp: { value: 1.5 },
        uFreq: { value: 0.05 },
        uPhase: { value: 0 },
      },
      vertexShader,
      fragmentShader,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    let raf: number;
    const clock = new THREE.Clock();

    // Only update the uniform — no CPU vertex loops
    const animate = () => {
      raf = requestAnimationFrame(animate);
      mat.uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none", opacity: 0.4 }}
    />
  );
};

/* ── Main Section ── */
const DesignDevelopmentSection = () => {
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((direction: "left" | "right") => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.getBoundingClientRect().width ?? 260;
    const gap = 16;
    const step = cardWidth + gap;
    el.scrollBy({ left: direction === "right" ? step : -step, behavior: "smooth" });
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden" style={{ backgroundColor: "#081627" }}>
      <style>{`
        .dd-card {
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1),
                      box-shadow 0.35s cubic-bezier(0.4,0,0.2,1),
                      border-color 0.35s ease;
          will-change: transform;
        }
        .dd-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow:
            0 0 20px rgba(15, 114, 186, 0.25),
            0 12px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(15, 114, 186, 0.5);
        }
        .dd-card:hover .dd-card-img img {
          transform: scale(1.08);
        }
        .dd-card-img img {
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }

        /* Mobile horizontal scroll */
        .dd-scroll-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .dd-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .dd-arrow {
          transition: background 0.2s ease, opacity 0.2s ease;
        }
        .dd-arrow:active {
          background: rgba(15, 114, 186, 0.4);
        }
      `}</style>

      {/* Three.js wave background */}
      <WaveBackground />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[2.75rem] font-semibold leading-tight mb-4 text-white">
            Design & Development
          </h2>
          <p className="text-slate-400 text-base md:text-lg">
            End-to-end solutions from concept to deployment — powered by modern technologies.
          </p>
        </div>

        {/* Desktop: 3-col grid  |  Mobile: horizontal scroll with snap */}
        <div
          className="
            hidden md:grid md:grid-cols-3 gap-6
          "
        >
          {designServices.map((service, i) => (
            <CardItem key={i} service={service} />
          ))}
        </div>

        <div className="relative md:hidden">
          <div
            ref={mobileScrollRef}
            className="flex gap-4 overflow-x-auto dd-scroll-container pb-4"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {designServices.map((service, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: "80vw", maxWidth: "320px", scrollSnapAlign: "center" }}
              >
                <CardItem service={service} />
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center gap-3 mt-3">
            <button
              type="button"
              className="dd-arrow h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70"
              onClick={() => scrollBy("left")}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="dd-arrow h-8 w-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70"
              onClick={() => scrollBy("right")}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Card Component ── */
const CardItem = ({ service }: { service: { title: string; desc: string; image: string } }) => (
  <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm dd-card flex flex-col h-full">
    <div className="dd-card-img relative w-full h-40 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold mb-2 text-white">
        {service.title}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">
        {service.desc}
      </p>
    </div>
  </div>
);

export default DesignDevelopmentSection;
