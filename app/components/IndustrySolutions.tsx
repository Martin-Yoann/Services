"use client";

import { useState } from "react";
import Link from "next/link";

const BASE = "https://www.meetsocial.com";

const solutions = [
  {
    id: "tech",
    title: "Technology",
    titleZh: "Technology Sector",
    desc: "From AI startups to global tech giants — we place the engineers, data scientists, and product leaders who ship the future.",
    cta: "Explore Tech",
    ctaHref: "/industries",
    bg: `${BASE}/templates/dist/images/i001.jpg.webp`,
    icon: `${BASE}/templates/dist/images/i010.png`,
    badge: `${BASE}/templates/dist/images/logos001.png`,
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
    bg: `${BASE}/templates/dist/images/i002.jpg.webp`,
    icon: `${BASE}/templates/dist/images/i016-1.png`,
    badge: `${BASE}/templates/dist/images/logos002.png`,
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
    bg: `${BASE}/templates/dist/images/i003.jpg.webp`,
    icon: `${BASE}/templates/dist/images/i024.png`,
    badge: `${BASE}/templates/dist/images/logos003.png`,
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
    bg: `${BASE}/templates/dist/images/i004.jpg.webp`,
    icon: `${BASE}/templates/dist/images/i033.png`,
    badge: `${BASE}/templates/dist/images/logos004.png`,
    solidBg: "#AC00FF",
    labelColor: "#D4A0FF",
  },
];

export default function IndustrySolutions() {
  const [hovered, setHovered] = useState<number | null>(null);

  const activeIndex = hovered !== null ? hovered : 0;
  const activeSol = solutions[activeIndex];
  const collapsedBg = activeSol.solidBg;
  const labelTint = activeSol.labelColor;

  /* Label on right side when active is card 0 or 1 */
  const labelOnRight = activeIndex < 2;

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "98vh" }}>
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
                flex: isActive ? "0 0 685px" : "1 1 0%",
                minWidth: isActive ? "685px" : "120px",
                transition:
                  "flex 0.65s cubic-bezier(0.25,0.1,0.25,1), background-color 0.5s ease, min-width 0.65s cubic-bezier(0.25,0.1,0.25,1)",
                background: isActive
                  ? `url("${sol.bg}") center / cover no-repeat`
                  : collapsedBg,
              }}
            >
              {/* ── Vertical divider ── */}
              {i > 0 && (
                <div
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ left: 0, width: "1px", background: "rgba(255,255,255,0.12)", zIndex: 5 }}
                />
              )}

              {/* ── Dark overlay (active card only) ── */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.75) 100%)",
                  }}
                />
              )}

              {/* ── Expanded content ── */}
              <div className="relative z-10 flex flex-col justify-end h-full p-12">
                {isActive && (
                  <>
                    <img
                      src={sol.icon}
                      alt=""
                      className="w-16 h-16 object-contain mb-6 transition-transform duration-500"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />

                    <h3
                      className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight whitespace-nowrap"
                      style={{ fontFamily: "var(--hg-font-heading)" }}
                    >
                      {sol.title}
                    </h3>
                    <p className="text-xs text-white/40 font-semibold mb-4 tracking-[0.15em] uppercase whitespace-nowrap">
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
                        width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-400 group-hover/link:translate-x-1"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </Link>

                    <img
                      src={sol.badge}
                      alt=""
                      className="h-5 object-contain opacity-70"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </>
                )}

                {/* ── Collapsed card: horizontal title at bottom ── */}
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

      {/* ════════════════════════════════════════
          OVERLAY LABEL — spans 2 collapsed cards
          Position: TOP with padding, large text
          ════════════════════════════════════════ */}

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
              left: rightSide ? "calc(685px + (100% - 685px) / 3)" : 0,
              right: rightSide ? 0 : "calc(685px + (100% - 685px) / 3)",
              opacity: visible ? 1 : 0,
            }}
          >
            {/* Main label — one line, spans full width of 2 cards */}
            <span
              className="font-black uppercase whitespace-nowrap mb-2"
              style={{
                fontFamily: "var(--hg-font-heading)",
                fontSize: "clamp(32px, 5.5vw, 56px)",
                fontWeight: 900,
                color: labelTint,
                letterSpacing: "0.22em",
                lineHeight: 1.0,
              }}
            >
              INDUSTRY SOLUTION
            </span>
            {/* Subtitle — smaller, right below */}
            <span
              className="font-bold whitespace-nowrap"
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
