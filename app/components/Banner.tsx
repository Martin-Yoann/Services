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
    desc: "From insights, media buying, and optimization to creative, branding, and data intelligence — covering every stage of global marketing.",
    bg: "/harbor-human-hero.png",
  },
  {
    label: "AI-Powered",
    title: "AI-Powered Solutions",
    desc: "A leading AI-driven global marketing platform — data powers every marketing decision.",
    bg: "/harbor-human-hero.png",
  },
];

const heroLogos = [
  "Meta", "Google", "TikTok", "Microsoft", "Amazon", "Anker",
  "BYD", "ByteDance", "Lilith", "Insta360", "TECNO", "Soul",
];

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = bannerSlides[activeIndex];

  // Auto-rotate every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundImage: `url("${current.bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(10,47,42,0.92) 0%, rgba(10,47,42,0.65) 50%, rgba(10,47,42,0.45) 100%)",
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="hg-container relative z-10 w-full flex-1 flex items-center py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left: Main content */}
          <div className="lg:col-span-8 space-y-7">
            {/* Slide badge */}
            <p
              key={`en-${activeIndex}`}
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase hg-banner-fade-in"
              style={{
                color: "var(--hg-color-accent)",
                background: "rgba(var(--hh-color-accent-rgb), 0.15)",
                border: "1px solid rgba(var(--hh-color-accent-rgb), 0.3)",
              }}
            >
              {current.title}
            </p>

            {/* Main title */}
            <div>
              <h1
                className="text-white leading-tight hg-banner-fade-in"
                style={{
                  fontFamily: "var(--hg-font-heading)",
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  fontWeight: "var(--hg-weight-h1)",
                  lineHeight: 1.1,
                  animationDelay: "0.08s",
                }}
              >
                Cross-Border Digital Marketing
              </h1>
              <h1
                key={`slide-${activeIndex}`}
                className="text-white leading-tight hg-banner-fade-in"
                style={{
                  fontFamily: "var(--hg-font-heading)",
                  fontSize: "clamp(36px, 5.5vw, 64px)",
                  fontWeight: "var(--hg-weight-h1)",
                  lineHeight: 1.1,
                  animationDelay: "0.12s",
                }}
              >
                <span style={{ color: "var(--hg-color-accent)" }}>{current.label}</span>
                <span className="text-white"> Solutions</span>
              </h1>
            </div>

            {/* Description */}
            <p
              key={`desc-${activeIndex}`}
              className="max-w-xl hg-banner-fade-in"
              style={{
                fontSize: "clamp(15px, 1.8vw, 19px)",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.8)",
                animationDelay: "0.2s",
              }}
            >
              {current.desc}
            </p>

            {/* CTA buttons */}
            <div key={`cta-${activeIndex}`} className="flex flex-col sm:flex-row items-start gap-4 hg-banner-fade-in" style={{ animationDelay: "0.28s" }}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 hg-button-primary"
                style={{ padding: "0 40px", minHeight: "52px", fontSize: "16px" }}
              >
                Get a Proposal
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 hg-button-secondary"
                style={{ padding: "0 36px", minHeight: "52px", fontSize: "16px" }}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Circular navigation */}
          <div className="lg:col-span-4 flex flex-col items-end gap-5">
            {bannerSlides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center transition-all duration-300 group relative overflow-hidden ${
                  index === activeIndex
                    ? "bg-white shadow-2xl scale-105"
                    : "bg-white/15 hover:bg-white/30 backdrop-blur-md border border-white/20"
                }`}
                aria-label={`Switch to: ${slide.label}`}
              >
                {index === activeIndex && (
                  <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--hg-color-secondary)" }} />
                )}
                <div className="text-center px-2">
                  <span
                    className={`block text-2xl font-bold mb-1 ${index === activeIndex ? "text-gray-800" : "text-white/80"}`}
                    style={{ fontFamily: "var(--hg-font-heading)" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`block text-[10px] font-medium leading-tight ${index === activeIndex ? "text-gray-500" : "text-white/60"}`}
                  >
                    {slide.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Partner logo wall */}
      <div className="relative z-10 pb-8 pt-6" style={{ background: "rgba(10,47,42,0.4)", backdropFilter: "blur(8px)" }}>
        <div className="hg-container">
          <p className="text-center text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
            Trusted by Industry Leaders Across Sectors
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {heroLogos.map((name, i) => (
              <span
                key={i}
                className="text-sm font-bold tracking-tight transition-all duration-300 hover:scale-110"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
