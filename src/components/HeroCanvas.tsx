import { useEffect, useRef } from "react";
import * as THREE from "three";

const HeroCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = container.clientWidth;
    const h = container.clientHeight;

    // ─── Scene ───
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 500);
    // Angled view looking slightly down at the wave band
    camera.position.set(0, 6, 50);
    camera.lookAt(0, -4, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x081627, 1);
    container.appendChild(renderer.domElement);

    // ─── Create multiple wave ribbon layers ───
    const layers: {
      points: THREE.Points;
      basePos: Float32Array;
      geo: THREE.BufferGeometry;
      mat: THREE.ShaderMaterial;
      config: { speed: number; amp: number; freq: number; yOffset: number; phase: number };
    }[] = [];

    const vertexShader = /* glsl */ `
      uniform float uTime;
      uniform float uSpeed;
      uniform float uAmp;
      uniform float uFreq;
      uniform float uPhase;
      attribute float baseY;
      varying float vGlow;
      varying float vDepth;
      void main() {
        vec3 pos = position;
        // Wave displacement on Y
        float wave1 = sin(pos.x * uFreq + uTime * uSpeed + uPhase) * uAmp;
        float wave2 = sin(pos.x * uFreq * 0.6 + pos.z * 0.04 + uTime * uSpeed * 0.7 + uPhase * 1.3) * uAmp * 0.6;
        float wave3 = cos(pos.x * uFreq * 1.4 + uTime * uSpeed * 0.5) * uAmp * 0.3;
        pos.y += wave1 + wave2 + wave3;
        
        // Glow intensity based on elevation (peaks glow brighter)
        float elevation = wave1 + wave2 + wave3;
        vGlow = smoothstep(-uAmp * 0.3, uAmp * 1.5, elevation);
        
        vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
        vDepth = -mvPos.z;
        
        // Size: larger when closer, smaller when far, peaks slightly bigger
        float baseSize = 1.8 + vGlow * 1.2;
        gl_PointSize = baseSize * (100.0 / max(vDepth, 1.0));
        gl_Position = projectionMatrix * mvPos;
      }
    `;

    const fragmentShader = /* glsl */ `
      varying float vGlow;
      varying float vDepth;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        
        // Soft radial glow for each dot
        float core = smoothstep(0.5, 0.0, d);
        float bloom = smoothstep(0.5, 0.1, d);
        
        // Distance fog
        float fog = smoothstep(160.0, 20.0, vDepth);
        
        // Color: deep saturated blue valleys → vibrant electric blue peaks → bright saturated cyan crests
        vec3 valleyColor = vec3(0.01, 0.10, 0.38);
        vec3 peakColor = vec3(0.05, 0.45, 0.98);
        vec3 brightColor = vec3(0.35, 0.75, 1.0);
        
        vec3 color = mix(valleyColor, peakColor, vGlow);
        color = mix(color, brightColor, smoothstep(0.5, 1.0, vGlow) * bloom);
        
        // Alpha: core is solid, edges fade, distant particles fade
        float alpha = (core * 0.7 + bloom * 0.3) * fog * (0.4 + vGlow * 0.6);
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Layer configs: multiple ribbon waves at different Y offsets
    const layerConfigs = [
      { segW: 250, segD: 60, width: 160, depth: 35, speed: 0.35, amp: 2.0, freq: 0.055, yOffset: 0, phase: 0 },
      { segW: 200, segD: 50, width: 150, depth: 30, speed: 0.28, amp: 1.6, freq: 0.065, yOffset: -1.0, phase: 2.0 },
      { segW: 180, segD: 45, width: 140, depth: 25, speed: 0.42, amp: 1.3, freq: 0.075, yOffset: 0.8, phase: 4.0 },
    ];

    for (const cfg of layerConfigs) {
      const geo = new THREE.PlaneGeometry(cfg.width, cfg.depth, cfg.segW, cfg.segD);
      geo.rotateX(-Math.PI * 0.5);

      // Store base positions
      const posArr = geo.attributes.position.array as Float32Array;
      const basePos = new Float32Array(posArr.length);
      basePos.set(posArr);

      // Shift Y offset
      for (let i = 1; i < posArr.length; i += 3) {
        posArr[i] += cfg.yOffset;
        basePos[i] += cfg.yOffset;
      }
      geo.attributes.position.needsUpdate = true;

      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uSpeed: { value: cfg.speed },
          uAmp: { value: cfg.amp },
          uFreq: { value: cfg.freq },
          uPhase: { value: cfg.phase },
        },
        vertexShader,
        fragmentShader,
      });

      const points = new THREE.Points(geo, mat);
      scene.add(points);
      layers.push({ points, basePos, geo, mat, config: cfg });
    }

    // ─── Top-right glow light (matches screenshot) ───
    const glowTex = (() => {
      const size = 512;
      const c = document.createElement("canvas");
      c.width = size;
      c.height = size;
      const ctx = c.getContext("2d")!;
      const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      grad.addColorStop(0, "rgba(30, 120, 255, 0.45)");
      grad.addColorStop(0.2, "rgba(15, 80, 220, 0.18)");
      grad.addColorStop(0.5, "rgba(8, 40, 150, 0.05)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size);
      return new THREE.CanvasTexture(c);
    })();

    const glowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    glowSprite.scale.set(90, 90, 1);
    glowSprite.position.set(20, 22, -15);
    scene.add(glowSprite);

    // Secondary subtle glow for the wave peaks area
    const wavGlowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    wavGlowSprite.scale.set(120, 30, 1);
    wavGlowSprite.position.set(0, 3, 10);
    (wavGlowSprite.material as THREE.SpriteMaterial).opacity = 0.35;
    scene.add(wavGlowSprite);

    // ─── Mouse ───
    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ─── Resize ───
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", handleResize);

    // ─── Animate ───
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Update wave layers
      for (const layer of layers) {
        layer.mat.uniforms.uTime.value = t;

        // Animate vertex positions on CPU for shared geometry
        const pos = layer.geo.attributes.position.array as Float32Array;
        const base = layer.basePos;
        const { speed, amp, freq, phase } = layer.config;

        for (let i = 0; i < pos.length; i += 3) {
          const bx = base[i];
          const bz = base[i + 2];
          const w1 = Math.sin(bx * freq + t * speed + phase) * amp;
          const w2 = Math.sin(bx * freq * 0.6 + bz * 0.04 + t * speed * 0.7 + phase * 1.3) * amp * 0.6;
          const w3 = Math.cos(bx * freq * 1.4 + t * speed * 0.5) * amp * 0.3;
          pos[i + 1] = base[i + 1] + w1 + w2 + w3;
        }
        layer.geo.attributes.position.needsUpdate = true;
      }

      // Subtle glow pulse
      glowSprite.material.opacity = 0.85 + Math.sin(t * 0.4) * 0.1;

      // Camera parallax
      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.012;
      camera.position.y += (6 + mouse.y * 2 - camera.position.y) * 0.012;
      camera.lookAt(0, -4, 0);

      renderer.render(scene, camera);
    };

    animate();

    // ─── Cleanup ───
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      for (const layer of layers) {
        layer.geo.dispose();
        layer.mat.dispose();
      }
      glowTex.dispose();
      glowSprite.material.dispose();
      wavGlowSprite.material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none", filter: "blur(1.5px)" }}
    />
  );
};

export default HeroCanvas;
