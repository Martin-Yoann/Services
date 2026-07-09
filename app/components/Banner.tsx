"use client";

import { useState, useEffect } from "react";

const bannerSlides = [
  {
    label: "Omnichannel Media",
    title: "Omnichannel Media Resources",
    desc: "Direct access to 50+ premium global media channels — social, search, video, DSP, OOH, and more.",
    bg: "/harbor-human-hero.png",
  },
  {
    label: "Full-Funnel",
    title: "Full-Funnel Marketing Solutions",
    desc: "From insights, media buying, and optimization to creative, branding, and data intelligence.",
    bg: "/harbor-human-hero.png",
  },
  {
    label: "AI-Powered",
    title: "AI-Powered Solutions",
    desc: "A leading AI-driven global marketing platform — data powers every marketing decision.",
    bg: "/harbor-human-hero.png",
  },
];

const stats = [
  { value: "500+", label: "Annual Placements" },
  { value: "95%", label: "Client Retention" },
  { value: "30d", label: "Avg. Time-to-Hire" },
];

const partnerLogos = [
  "Meta", "Google", "TikTok", "Microsoft", "Amazon",
  "BYD", "ByteDance", "Lilith", "Insta360", "TECNO", "Soul",
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = bannerSlides[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
    >
      {/* ═══ Background layers ═══ */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundImage: `url("${current.bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(170deg, rgba(10,47,42,0.85) 0%, rgba(10,47,42,0.5) 70%, rgba(10,47,42,0.3) 100%)",
        }}
      />

      {/* ═══ All content in one flex column, justify-between ═══ */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-5 pt-20 pb-5 md:pb-8">
        {/* ── Upper: Headline + CTA + Stats ── */}
        <div className="w-full max-w-lg md:max-w-2xl">

          {/* Tagline */}
          <p
            className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] mb-3 md:mb-4"
            style={{ color: "var(--hg-color-accent)" }}
          >
            Global Talent Solutions
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--hg-font-heading)",
              fontSize: "clamp(36px, 9vw, 72px)",
              fontWeight: "var(--hg-weight-h1)",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            Connecting
            <br />
            <span style={{ color: "var(--hg-color-accent)" }}>Leadership</span>
            <br />
            Worldwide
          </h1>

          {/* Subtitle */}
          <p
            className="mt-4 max-w-md"
            style={{
              fontSize: "clamp(14px, 1.6vw, 17px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            Executive search for C-suite, VP, and Director roles across U.S., China,
            and key global markets — average placement in 30 days.
          </p>

          {/* CTA */}
          <div className="mt-5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral w-full sm:w-auto"
              style={{
                color: "#fff",
                padding: "0 36px",
                minHeight: "52px",
                fontSize: "16px",
                boxShadow: "0 6px 28px rgba(217,108,87,0.35)",
              }}
            >
              Start a Conversation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 md:gap-10 mt-6 pt-5 border-t border-white/8">
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "var(--hg-font-heading)", color: "#fff" }}
                >
                  {s.value}
                </p>
                <p
                  className="text-[11px] md:text-xs font-medium mt-0.5"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Slide dots — mobile */}
          <div className="lg:hidden mt-4 flex items-center gap-2">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: index === activeIndex ? "22px" : "6px",
                  height: "6px",
                  background: index === activeIndex ? "var(--hg-color-accent)" : "rgba(255,255,255,0.2)",
                }}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom: Partner logos — hugs the bottom naturally ── */}
        <div>
          <p
            className="text-center text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-8">
            {partnerLogos.map((name, i) => (
              <span
                key={i}
                className="text-[11px] md:text-sm font-bold tracking-tight"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Right: circular nav — desktop only ═══ */}
      <div className="hidden lg:flex absolute top-1/2 right-8 -translate-y-1/2 z-10 flex-col gap-5">
        {bannerSlides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 relative ${
              index === activeIndex
                ? "bg-white shadow-2xl scale-105"
                : "bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/15"
            }`}
            aria-label={slide.label}
          >
            {index === activeIndex && (
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--hg-color-secondary)" }} />
            )}
            <div className="text-center px-2">
              <span
                className="block text-2xl font-bold mb-1"
                style={{
                  fontFamily: "var(--hg-font-heading)",
                  color: index === activeIndex ? "#1a1a1a" : "rgba(255,255,255,0.8)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span
                className="block text-[10px] font-medium leading-tight"
                style={{ color: index === activeIndex ? "#555" : "rgba(255,255,255,0.5)" }}
              >
                {slide.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
