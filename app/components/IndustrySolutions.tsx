"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const solutions = [
  {
    id: "tech",
    title: "Technology",
    titleZh: "Technology Sector",
    desc: "From AI startups to global tech giants — we place the engineers, data scientists, and product leaders who ship the future.",
    cta: "Explore Tech",
    ctaHref: "/industries",
    bg: "/industry-technology.jpg",
    solidBg: "#0a2f2a",
    labelColor: "#D96C57",
  },
  {
    id: "finance",
    title: "Financial Services",
    titleZh: "Financial Services",
    desc: "CFOs, controllers, risk analysts, and compliance leaders — the financial minds that safeguard and scale your business.",
    cta: "Explore Finance",
    ctaHref: "/industries",
    bg: "/industry-finance.jpg",
    solidBg: "#1a4a3e",
    labelColor: "#5a9a8a",
  },
  {
    id: "healthcare",
    title: "Healthcare & Biotech",
    titleZh: "Healthcare & Biotech",
    desc: "Clinical leaders, R&D scientists, and med-tech executives who drive innovation from bench to bedside.",
    cta: "Explore Healthcare",
    ctaHref: "/industries",
    bg: "/industry-healthcare.jpg",
    solidBg: "#FFB419",
    labelColor: "#FFE0A0",
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Supply Chain",
    titleZh: "Advanced Manufacturing",
    desc: "Operations directors, supply chain strategists, and plant leaders — the engine behind global production and logistics.",
    cta: "Explore Manufacturing",
    ctaHref: "/industries",
    bg: "/industry-manufacturing.jpg",
    solidBg: "#197EE9",
    labelColor: "#235F78",
  },
];

/* ══════════════════════════════════════
   PC: accordion (hover-driven expand)
   Mobile: full-screen swipeable cards
   ══════════════════════════════════════ */

export default function IndustrySolutions() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  /* ── Detect mobile viewport ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── PC accordion logic ── */
  const activeIndex = hovered !== null ? hovered : 0;
  const activeSol = solutions[activeIndex];
  const collapsedBg = activeSol.solidBg;
  const labelTint = activeSol.labelColor;
  const labelOnRight = activeIndex < 2;

  /* ── Mobile swipe handlers ── */
  const goTo = useCallback(
    (index: number) => {
      const next = Math.max(0, Math.min(index, solutions.length - 1));
      setMobileIndex(next);
    },
    [],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only horizontal swipes (ignore vertical scrolls)
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goTo(mobileIndex + 1);
      else goTo(mobileIndex - 1);
    }
  };

  /* ══════════════════════════════════════
     MOBILE: Full-screen swipeable cards
     ══════════════════════════════════════ */
  if (isMobile) {
    const current = solutions[mobileIndex];

    return (
      <section
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: "100vh" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Full-screen background image */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            backgroundImage: `url("${current.bg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)",
          }}
        />

        {/* Content at bottom */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 pb-10">

          <h2
            className="text-3xl font-bold text-white mb-1 tracking-tight"
            style={{ fontFamily: "var(--hg-font-heading)" }}
          >
            {current.title}
          </h2>
          <p className="text-xs text-white/40 font-semibold mb-3 tracking-[0.15em] uppercase">
            {current.titleZh}
          </p>

          <p className="text-sm leading-relaxed text-white/65 mb-6 max-w-md">
            {current.desc}
          </p>

          <Link
            href={current.ctaHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-all"
          >
            {current.cta}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>

          {/* ═══ Dot indicators + labels ═══ */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              {solutions.map((sol, i) => (
                <button
                  key={sol.id}
                  onClick={() => goTo(i)}
                  className="flex flex-col items-center gap-2 transition-all duration-300 cursor-pointer"
                  style={{ opacity: i === mobileIndex ? 1 : 0.35 }}
                >
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: i === mobileIndex ? current.labelColor : "rgba(255,255,255,0.5)" }}
                  >
                    {sol.title.length > 12 ? sol.title.slice(0, 12) + "…" : sol.title}
                  </span>
                  <span
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === mobileIndex ? "24px" : "6px",
                      height: "6px",
                      background: i === mobileIndex ? current.labelColor : "rgba(255,255,255,0.3)",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ══════════════════════════════════════
     PC: Accordion (original behavior)
     ══════════════════════════════════════ */
  return (
    <section className="relative w-full overflow-hidden hidden md:block" style={{ height: "98vh" }}>
      {/* ── Cards row ── */}
      <div className="flex h-full w-full">
        {solutions.map((sol, i) => {
          const isActive = i === activeIndex;

          return (
            <div
              key={sol.id}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative cursor-pointer"
              style={{
                flex: isActive ? "0 0 min(685px, 85vw)" : "1 1 0%",
                minWidth: isActive ? "min(685px, 85vw)" : "80px",
                transition:
                  "flex 0.65s cubic-bezier(0.25,0.1,0.25,1), background-color 0.5s ease, min-width 0.65s cubic-bezier(0.25,0.1,0.25,1)",
                background: isActive
                  ? `url("${sol.bg}") center / cover no-repeat`
                  : collapsedBg,
              }}
            >
              {i > 0 && (
                <div
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ left: 0, width: "1px", background: "rgba(255,255,255,0.12)", zIndex: 5 }}
                />
              )}

              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)",
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col justify-end h-full p-12">
                {isActive && (
                  <>
                    <h3
                      className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight"
                      style={{ fontFamily: "var(--hg-font-heading)" }}
                    >
                      {sol.title}
                    </h3>
                    <p className="text-xs text-white/40 font-semibold mb-4 tracking-[0.15em] uppercase">
                      {sol.titleZh}
                    </p>
                    <p className="text-sm leading-relaxed text-white/65 mb-8 max-w-[420px]">
                      {sol.desc}
                    </p>
                    <Link
                      href={sol.ctaHref}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white group/link transition-all duration-400 hover:gap-3 mb-8"
                    >
                      {sol.cta}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-400 group-hover/link:translate-x-1"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>
                  </>
                )}

                {!isActive && (
                  <div className="absolute bottom-0 left-0 right-0 pb-8 flex justify-center">
                    <span
                      className="font-bold whitespace-nowrap"
                      style={{
                        fontFamily: "var(--hg-font-heading)",
                        fontSize: "14px",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.1em",
                        writingMode: "horizontal-tb",
                      }}
                    >
                      {sol.title}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ═══ OVERLAY LABEL ═══ */}
      {[true, false].map((rightSide) => {
        const visible = labelOnRight === rightSide;
        return (
          <div
            key={rightSide ? "right" : "left"}
            className="absolute z-20 pointer-events-none flex flex-col items-center justify-start transition-opacity duration-500"
            style={{
              top: 0,
              bottom: 0,
              paddingTop: "7%",
              left: rightSide ? "clamp(320px, 685px, 85%)" : 0,
              right: rightSide ? 0 : "clamp(320px, 685px, 85%)",
              opacity: visible ? 1 : 0,
            }}
          >
            <span
              className="font-black uppercase mb-2"
              style={{
                fontFamily: "var(--hg-font-heading)",
                fontSize: "clamp(32px, 5.5vw, 56px)",
                fontWeight: 900,
                color: labelTint,
                letterSpacing: "0.22em",
                lineHeight: 1.0,
              }}
            >
              INDUSTRY SOLUTIONS
            </span>
            <span
              className="font-bold"
              style={{
                fontFamily: "var(--hg-font-body)",
                fontSize: "clamp(14px, 2vw, 20px)",
                fontWeight: 700,
                color: labelTint,
                opacity: 0.55,
                letterSpacing: "0.08em",
              }}
            >
              Full-Funnel Industry Solutions
            </span>
          </div>
        );
      })}
    </section>
  );
}
