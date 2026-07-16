"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronRight } from "@/app/components/Icons";

interface Theme {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  accent: string;
  accentRgb: string;
  stats: Array<{ value: string; label: string }>;
}

const themes: Theme[] = [
  {
    id: 0,
    title: "Global Coverage",
    subtitle: "Present in U.S., China, and key international markets",
    icon: "🌍",
    accent: "#D96C57",
    accentRgb: "217,108,87",
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
    accent: "#14b8a6",
    accentRgb: "20,184,166",
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
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    stats: [
      { value: "2000+", label: "Placements Total" },
      { value: "50+", label: "Enterprise Clients" },
      { value: "12yr", label: "Avg. Partnership" },
    ],
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const current = themes[activeIndex];

  useEffect(() => { setMounted(true); }, []);

  /* Parallax scroll */
  useEffect(() => {
    const bg = document.getElementById("hero-bg-layer");
    const dot = document.getElementById("hero-dot-layer");
    if (!bg) return;
    const handleScroll = () => {
      const offset = window.scrollY * 0.4;
      bg.style.transform = `translateY(${offset}px)`;
      if (dot) dot.style.transform = `translateY(${offset * 0.5}px)`;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden flex flex-col justify-center">
      {/* ═══ BACKGROUND ═══ */}
      <div className="absolute inset-0 bg-[#0a2f2a]" />
      <div id="hero-bg-layer" className="absolute inset-0 will-change-transform"
        style={{ background: "linear-gradient(135deg, #0a2f2a 0%, #1a4a3e 40%, #2d5a4a 100%)" }} />
      <div id="hero-dot-layer" className="hg-dot-grid-light absolute inset-0 z-[1] opacity-[0.03] pointer-events-none will-change-transform" />
      <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none z-[2] opacity-[0.08] transition-colors duration-700"
        style={{ background: current.accent }} />

      {/* ═══ CONTENT ═══ */}
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
          {/* ── Left: Text ── */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center">
            {/* Tagline badge */}
            <div className="inline-flex items-center gap-2.5 w-fit bg-white/10 backdrop-blur-md px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-white/15 mb-4 md:mb-6"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease, transform 0.6s ease", transitionDelay: "100ms" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: current.accent }} />
              <span className="text-xs md:text-sm font-semibold text-white/90 tracking-wide">Global Talent Solutions</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "var(--hg-font-heading)", fontSize: "clamp(32px, 6vw, 64px)", fontWeight: "var(--hg-weight-h1)", lineHeight: 1.05,
              opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(20px)", transition: "opacity 0.7s ease, transform 0.7s ease", transitionDelay: "200ms" }}>
              <span className="block text-white">Build Local Teams</span>
              <span className="block" style={{ backgroundImage: `linear-gradient(135deg, ${current.accent} 0%, #ffffff 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Drive Global</span>
              <span className="block text-white">Ambition</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 md:mt-6 max-w-lg text-sm md:text-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)", opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s" }}>
              We connect leadership and specialist talent across U.S., China, and international markets — helping companies find, hire, and retain the people who drive growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-5 md:mt-8"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s" }}>
              <Link href="/contact"
                className="group relative inline-flex items-center justify-center font-bold py-3 px-7 md:py-4 md:px-9 rounded-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden hg-gradient-coral text-sm md:text-base text-white"
                style={{ boxShadow: "0 4px 20px rgba(217,108,87,0.3)" }}>
                <span className="relative z-10 flex items-center gap-2">Start Hiring <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center justify-center border-2 border-white/25 hover:border-white/55 text-white font-bold py-3 px-7 md:py-4 md:px-9 rounded-lg transition-all duration-300 hover:bg-white/8 backdrop-blur-sm hover:-translate-y-1 text-sm md:text-base">
                Explore Services
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex gap-6 md:gap-8 mt-6 md:mt-10 pt-5 md:pt-8 border-t border-white/8"
              style={{ opacity: mounted ? 1 : 0, transform: mounted ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s" }}>
              {current.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-4xl font-bold transition-colors duration-500" style={{ color: current.accent, fontFamily: "var(--hg-font-heading)" }}>{stat.value}</p>
                  <p className="text-[11px] md:text-sm text-white/45 md:text-white/50 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Mobile: compact theme switcher */}
            <div className="lg:hidden flex items-center gap-2 mt-5">
              {themes.map((theme, index) => (
                <button key={`dot-${index}`} onClick={() => setActiveIndex(index)}
                  className="transition-all duration-300 rounded-full flex items-center gap-1.5" style={{ opacity: index === activeIndex ? 1 : 0.5 }}
                  aria-label={`Switch to ${theme.title}`}>
                  <span className="text-base">{theme.icon}</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.1em]" style={{ color: index === activeIndex ? theme.accent : "rgba(255,255,255,0.4)" }}>{theme.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ── Right: Feature Cards — desktop only ── */}
          <div className="hidden lg:flex flex-col gap-3 lg:gap-4 justify-center lg:pt-16 xl:pt-24 col-span-5 xl:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-1 pl-1">Why Choose Us</p>
            {themes.map((theme, index) => {
              const isActive = index === activeIndex;
              const isHovered = index === hoveredCard;
              return (
                <button key={theme.id}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative text-left w-full rounded-2xl p-5 lg:p-6 transition-all duration-300 cursor-pointer ${isActive ? "scale-[1.03] z-10" : "hover:scale-[1.01]"}`}
                  style={{
                    background: isActive ? `rgba(${theme.accentRgb},0.12)` : "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                    border: isActive ? `1.5px solid rgba(${theme.accentRgb},0.5)` : "1.5px solid rgba(255,255,255,0.1)",
                    boxShadow: isActive ? `0 8px 40px rgba(${theme.accentRgb},0.2), inset 0 1px 0 rgba(255,255,255,0.08)` : isHovered ? "0 4px 24px rgba(0,0,0,0.15)" : "0 2px 12px rgba(0,0,0,0.08)",
                  }}>
                  {isActive && <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full" style={{ background: theme.accent }} />}
                  <div className="flex items-start gap-4 lg:gap-5">
                    <div className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-xl lg:text-2xl transition-all duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                      style={{ background: isActive ? `linear-gradient(135deg, ${theme.accent}40, ${theme.accent}15)` : "rgba(255,255,255,0.08)", boxShadow: isActive ? `0 0 24px rgba(${theme.accentRgb},0.2)` : "none" }}>
                      <span className="transition-transform duration-300 group-hover:scale-110">{theme.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <h3 className="font-bold text-base lg:text-lg mb-1 transition-colors duration-300" style={{ color: isActive ? theme.accent : "rgba(255,255,255,0.9)", fontFamily: "var(--hg-font-heading)" }}>{theme.title}</h3>
                      <p className="text-xs lg:text-sm leading-relaxed transition-colors duration-300" style={{ color: isActive ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.5)" }}>{theme.subtitle}</p>
                    </div>
                    <div className={`flex-shrink-0 self-center transition-all duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0"}`}>
                      <ChevronRight size={20} strokeColor={theme.accent} />
                    </div>
                  </div>
                </button>
              );
            })}
            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-3 mt-3">
              {themes.map((theme, index) => (
                <button key={`desk-dot-${index}`} onClick={() => setActiveIndex(index)}
                  className="transition-all duration-300 rounded-full"
                  style={{ width: index === activeIndex ? "28px" : "8px", height: "8px", background: index === activeIndex ? theme.accent : "rgba(255,255,255,0.25)", boxShadow: index === activeIndex ? `0 0 10px ${theme.accent}80` : "none" }}
                  aria-label={`Switch to ${theme.title}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SCROLL INDICATOR ═══ */}
      <div className="relative z-10 pb-4 md:pb-6 hidden sm:flex justify-center">
        <div className="animate-bounce-slow flex flex-col items-center gap-2 text-white/25">
          <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <ChevronRight size={16} className="rotate-90" strokeColor="currentColor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
