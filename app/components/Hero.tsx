"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

/* ───────────────────────────────────────────
 * Three distinct background themes
 * ─────────────────────────────────────────── */
interface BackgroundTheme {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  gradient: string;
  gradientAlt: string;
  accent: string;
  accentRgb: string;
  orbGradient: string;
  ringColor: string;
  stats: Array<{ value: string; label: string }>;
}

const themes: BackgroundTheme[] = [
  {
    id: 0,
    title: "Global Coverage",
    subtitle: "Present in U.S., China, and key international markets",
    icon: "🌍",
    gradient: "linear-gradient(135deg, #09233f 0%, #0d3a52 40%, #1a5a73 100%)",
    gradientAlt: "linear-gradient(225deg, #0a2847 0%, #0f3d5c 50%, #1e6b8a 100%)",
    accent: "#5dadec",
    accentRgb: "93,173,236",
    orbGradient:
      "radial-gradient(circle at 30% 50%, rgba(93,173,236,0.25) 0%, rgba(14,138,154,0.08) 60%, transparent 80%)",
    ringColor: "rgba(93,173,236,0.15)",
    stats: [
      { value: "500+", label: "Placements Annually" },
      { value: "8+", label: "Market Hubs" },
      { value: "95%", label: "Retention Rate" },
    ],
  },
  {
    id: 1,
    title: "Fast Results",
    subtitle: "Average placement time of 30 days or less",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #0a2a3d 0%, #0d5a6e 40%, #0e8a9a 100%)",
    gradientAlt: "linear-gradient(225deg, #0c3248 0%, #106478 50%, #14a0b4 100%)",
    accent: "#14b8a6",
    accentRgb: "20,184,166",
    orbGradient:
      "radial-gradient(circle at 30% 50%, rgba(20,184,166,0.25) 0%, rgba(14,138,154,0.08) 60%, transparent 80%)",
    ringColor: "rgba(20,184,166,0.15)",
    stats: [
      { value: "30d", label: "Avg. Placement" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "24h", label: "Initial Response" },
    ],
  },
  {
    id: 2,
    title: "Proven Execution",
    subtitle: "Track record of successful cross-border placements",
    icon: "✓",
    gradient: "linear-gradient(135deg, #0a1f33 0%, #0f2d4a 40%, #1a4a6e 100%)",
    gradientAlt: "linear-gradient(225deg, #0c2238 0%, #123652 50%, #1e5880 100%)",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    orbGradient:
      "radial-gradient(circle at 30% 50%, rgba(245,158,11,0.2) 0%, rgba(217,108,87,0.06) 60%, transparent 80%)",
    ringColor: "rgba(245,158,11,0.12)",
    stats: [
      { value: "2000+", label: "Placements Total" },
      { value: "50+", label: "Enterprise Clients" },
      { value: "12yr", label: "Avg. Partnership" },
    ],
  },
];

/* ───────────────────────────────────────────
 * Particle system
 * ─────────────────────────────────────────── */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
}

/* ───────────────────────────────────────────
 * Hero Component
 * ─────────────────────────────────────────── */
const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = themes[activeIndex];

  /* ── Keep activeIndex in a ref so the animation loop doesn't restart on switch ── */
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  /* ── Switch background with transition ── */
  const switchTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      setPrevIndex(activeIndex);
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);

      // Reset auto-rotate timer on manual click
      if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
        autoTimerRef.current = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % themes.length);
        }, 6000);
      }
    },
    [activeIndex, isTransitioning],
  );

  /* ── Create particles ── */
  const seedParticles = useCallback((w: number, h: number): Particle[] => {
    const count = 80;
    const arr: Particle[] = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.45 + 0.2,
        baseOpacity: Math.random() * 0.45 + 0.2,
      });
    }
    return arr;
  }, []);

  /* ── Canvas particle animation (runs once, reads activeIndex from ref) ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = Math.max(window.innerHeight, 700);
    let running = true;

    /* Setup canvas size */
    const setupCanvas = () => {
      w = window.innerWidth;
      h = Math.max(window.innerHeight, 700);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setupCanvas();

    /* Create / recreate particles for current bounds */
    particlesRef.current = seedParticles(w, h);

    const onResize = () => {
      setupCanvas();
      // Re-seed particles on resize so they fill the new area
      particlesRef.current = seedParticles(w, h);
    };
    window.addEventListener("resize", onResize);

    const particles = particlesRef.current;

    /* ── Main loop ── */
    const animate = () => {
      if (!running) return;

      // Full clear — clean canvas each frame
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const accentRgb = themes[activeIndexRef.current].accentRgb;

      // Draw connection lines first (behind particles)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.22;
            ctx.strokeStyle = `rgba(${accentRgb},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        // Mouse attraction
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220 && dist > 0) {
          const force = (1 - dist / 220) * 0.025;
          p.vx += dx * force;
          p.vy += dy * force;
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          const maxSpeed = 1.8;
          if (speed > maxSpeed) {
            p.vx = (p.vx / speed) * maxSpeed;
            p.vy = (p.vy / speed) * maxSpeed;
          }
          p.opacity = Math.min(p.baseOpacity + 0.35, 0.85);
        } else {
          // Drift back to base opacity
          p.opacity += (p.baseOpacity - p.opacity) * 0.04;
        }

        // Damping — prevent runaway speed
        p.vx *= 0.999;
        p.vy *= 0.999;

        // Draw particle as soft radial glow
        const r = p.radius * 3; // glow radius larger than particle
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grd.addColorStop(0, `rgba(${accentRgb},${p.opacity * 0.9})`);
        grd.addColorStop(0.4, `rgba(${accentRgb},${p.opacity * 0.35})`);
        grd.addColorStop(1, `rgba(${accentRgb},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      running = false;
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [seedParticles]); // runs once — activeIndex read from ref

  /* ── Mouse tracking ── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  /* ── Auto-rotate timer ── */
  useEffect(() => {
    autoTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % themes.length);
    }, 6000);
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center">
      {/* ════════════════════════════════════════
          BACKGROUND LAYERS
          ════════════════════════════════════════ */}

      {/* Layer 0: Base gradient — always present */}
      <div className="absolute inset-0 bg-[#09233f]" />

      {/* Layer 1: Active gradient (cross-fade) */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ background: current.gradient, opacity: 1, zIndex: 1 }}
      />

      {/* Layer 1b: Previous gradient fades out */}
      {isTransitioning && (
        <div
          className="absolute inset-0 animate-hero-bg-out"
          style={{ background: themes[prevIndex].gradientAlt, zIndex: 2 }}
        />
      )}

      {/* Layer 2: CSS Globe — rotating concentric rings */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          {/* Ring 1 — slow clockwise */}
          <div
            className="absolute inset-0 rounded-full border border-dashed animate-spin-slow"
            style={{
              borderColor: current.ringColor,
              borderWidth: "1.5px",
              animationDuration: "40s",
            }}
          />
          {/* Ring 2 — medium counter-clockwise */}
          <div
            className="absolute inset-8 rounded-full border animate-spin-slow"
            style={{
              borderColor: current.ringColor,
              borderWidth: "1px",
              animationDuration: "25s",
              animationDirection: "reverse",
              borderStyle: "dotted",
            }}
          />
          {/* Ring 3 — fast clockwise, tilted */}
          <div
            className="absolute inset-16 rounded-full border animate-spin-slow"
            style={{
              borderColor: current.ringColor,
              borderWidth: "2px",
              animationDuration: "18s",
              transform: "rotateX(60deg)",
              borderStyle: "dashed",
            }}
          />
        </div>
      </div>

      {/* Layer 4: Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-[4]"
        style={{ pointerEvents: "none" }}
      />

      {/* ════════════════════════════════════════
          CONTENT  (matches nav container for logo alignment)
          ════════════════════════════════════════ */}
      <div className="relative z-10 container ml-auto mr-35 px-6 py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-140">
          {/* ── Left Column: Text Content  (lg:col-span-8 = wider, left edge aligns with logo) ── */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            {/* Tagline badge */}
            <div
              key={`badge-${activeIndex}`}
              className="inline-flex items-center gap-2.5 w-fit bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15 hg-banner-fade-in mb-0 hover:bg-white/15 transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse transition-colors duration-500"
                style={{ background: current.accent }}
              />
              <span className="text-sm font-semibold text-white/90 tracking-wide">
                Global Talent Solutions
              </span>
            </div>

            {/* Main headline — slides right→left on theme change */}
            <h1 key={`headline-${activeIndex}`} className="mt-7 space-y-1" style={{ fontFamily: "var(--hg-font-heading)", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: "var(--hg-weight-h1)" }}>
              <span
                className="block text-white leading-[1.05] animate-hero-slide-in-right"
                style={{ animationDelay: "0s" }}
              >
                Connect
              </span>
              <span
                className="block leading-[1.05] animate-hero-slide-in-right"
                style={{
                  animationDelay: "0.08s",
                  backgroundImage: `linear-gradient(135deg, ${current.accent} 0%, #ffffff 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Leadership
              </span>
              <span
                className="block text-white leading-[1.05] animate-hero-slide-in-right"
                style={{ animationDelay: "0.14s" }}
              >
                Across Borders
              </span>
            </h1>

            {/* Subtitle */}
            <p
              key={`sub-${activeIndex}`}
              className="mt-6 max-w-lg hg-banner-fade-in text-base md:text-lg leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.72)",
                animationDelay: "0.18s",
              }}
            >
              Executive search, professional recruitment, and talent advisory for
              companies expanding globally. We help you build teams that drive growth.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 hg-banner-fade-in"
              style={{ animationDelay: "0.25s" }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center font-bold py-4 px-9 rounded-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${current.accent} 0%, ${themes[activeIndex].id === 0 ? "#0e8a9a" : themes[activeIndex].id === 1 ? "#0d9488" : "#d97706"} 100%)`,
                  color: "#fff",
                  boxShadow: `0 4px 20px rgba(${current.accentRgb},0.3)`,
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Hiring
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </span>
                {/* Shine effect on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center border-2 border-white/25 hover:border-white/55 text-white font-bold py-4 px-9 rounded-lg transition-all duration-300 hover:bg-white/8 backdrop-blur-sm hover:-translate-y-1"
              >
                Explore Services
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/8">
              {current.stats.map((stat, i) => (
                <div
                  key={`${stat.label}-${activeIndex}`}
                  className="hg-banner-fade-in"
                  style={{ animationDelay: `${0.3 + i * 0.06}s` }}
                >
                  <p
                    className="text-3xl md:text-4xl font-bold transition-colors duration-500"
                    style={{
                      color: current.accent,
                      fontFamily: "var(--hg-font-heading)",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Interactive Feature Cards  (pushed down + right) ── */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-3 lg:gap-4 justify-center lg:pt-16 xl:pt-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-1 pl-1">
              Why Choose Us
            </p>

            {themes.map((theme, index) => {
              const isActive = index === activeIndex;
              const isHovered = index === hoveredCard;

              return (
                <button
                  key={theme.id}
                  onClick={() => switchTo(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative text-left w-full rounded-2xl p-5 lg:p-6 transition-all duration-500 cursor-pointer
                    ${isActive ? "scale-[1.03] z-10" : "hover:scale-[1.01]"}
                  `}
                  style={{
                    background: isActive
                      ? `rgba(${theme.accentRgb},0.12)`
                      : "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: isActive
                      ? `1.5px solid rgba(${theme.accentRgb},0.5)`
                      : "1.5px solid rgba(255,255,255,0.1)",
                    boxShadow: isActive
                      ? `0 8px 40px rgba(${theme.accentRgb},0.2), inset 0 1px 0 rgba(255,255,255,0.08)`
                      : isHovered
                        ? "0 4px 24px rgba(0,0,0,0.15)"
                        : "0 2px 12px rgba(0,0,0,0.08)",
                    transform: isActive ? "scale(1.03)" : isHovered ? "scale(1.01)" : "scale(1)",
                  }}
                >
                  {/* Active glow border */}
                  {isActive && (
                    <>
                      {/* Left accent bar */}
                      <div
                        className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-colors duration-500"
                        style={{ background: theme.accent }}
                      />
                      {/* Top-right corner glow */}
                      <div
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full blur-sm animate-pulse"
                        style={{ background: theme.accent }}
                      />
                    </>
                  )}

                  {/* Progress bar indicator (auto-rotate timer) */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 h-[2px] rounded-full animate-hero-progress"
                      style={{
                        background: `linear-gradient(90deg, ${theme.accent}, transparent)`,
                      }}
                    />
                  )}

                  <div className="flex items-start gap-4 lg:gap-5">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-xl lg:text-2xl transition-all duration-500
                        ${isActive ? "scale-110" : "group-hover:scale-105"}
                      `}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${theme.accent}40, ${theme.accent}15)`
                          : "rgba(255,255,255,0.08)",
                        boxShadow: isActive
                          ? `0 0 24px rgba(${theme.accentRgb},0.2)`
                          : "none",
                      }}
                    >
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {theme.icon}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3
                        className="font-bold text-base lg:text-lg mb-1 transition-colors duration-500"
                        style={{
                          color: isActive ? theme.accent : "rgba(255,255,255,0.9)",
                          fontFamily: "var(--hg-font-heading)",
                        }}
                      >
                        {theme.title}
                      </h3>
                      <p
                        className="text-xs lg:text-sm leading-relaxed transition-colors duration-500"
                        style={{
                          color: isActive
                            ? "rgba(255,255,255,0.7)"
                            : "rgba(255,255,255,0.5)",
                        }}
                      >
                        {theme.subtitle}
                      </p>
                    </div>

                    {/* Arrow indicator */}
                    <div
                      className={`flex-shrink-0 self-center transition-all duration-500
                        ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"}
                      `}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.accent}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-3 mt-3">
              {themes.map((theme, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => switchTo(index)}
                  className="transition-all duration-500 rounded-full"
                  style={{
                    width: index === activeIndex ? "28px" : "8px",
                    height: "8px",
                    background:
                      index === activeIndex
                        ? theme.accent
                        : "rgba(255,255,255,0.25)",
                    boxShadow:
                      index === activeIndex
                        ? `0 0 10px ${theme.accent}80`
                        : "none",
                  }}
                  aria-label={`Switch to ${theme.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          BOTTOM SCROLL INDICATOR
          ════════════════════════════════════════ */}
      <div className="relative z-10 pb-6 flex justify-center">
        <div className="animate-bounce-slow flex flex-col items-center gap-2 text-white/25">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
