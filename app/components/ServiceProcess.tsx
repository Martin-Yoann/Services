"use client";

import { useState } from "react";
import Link from "next/link";

const BASE = "https://www.meetsocial.com";

const steps = [
  { num: "01", title: "Needs Analysis", subtitle: "Requirements Analysis", desc: "We deep-dive into your business goals, culture, and role requirements — mapping the ideal candidate profile and market strategy.", cta: "Learn more", ctaHref: "/services/executive-search", bg: `${BASE}/templates/dist/images/s001-2.jpg`, icon: `${BASE}/templates/dist/images/s001.png`, color: "#D96C57" },
  { num: "02", title: "Market Mapping", subtitle: "Market Positioning", desc: "Leveraging our global databases and local networks, we identify target organizations and map the talent landscape.", cta: "Learn more", ctaHref: "/services/professional-recruitment", bg: `${BASE}/templates/dist/images/s002-2.jpg`, icon: `${BASE}/templates/dist/images/s002.png`, color: "#14b8a6" },
  { num: "03", title: "Candidate Sourcing", subtitle: "Talent Sourcing", desc: "Multi-channel sourcing including passive candidate engagement, network referrals, and targeted outreach.", cta: "Learn more", ctaHref: "/services/executive-search", bg: `${BASE}/templates/dist/images/s003-2.jpg`, icon: `${BASE}/templates/dist/images/s003.png`, color: "#f59e0b" },
  { num: "04", title: "Assessment & Screening", subtitle: "Evaluation", desc: "Competency-based interviews, skills verification, culture-fit analysis — rigorous evaluation at every stage.", cta: "Learn more", ctaHref: "/services/professional-recruitment", bg: `${BASE}/templates/dist/images/s004-2.jpg`, icon: `${BASE}/templates/dist/images/s004.png`, color: "#2d8a7a" },
  { num: "05", title: "Offer & Onboarding", subtitle: "Onboarding", desc: "Compensation benchmarking, offer negotiation, and onboarding support — full close process for a smooth transition.", cta: "Learn more", ctaHref: "/services/talent-advisory", bg: `${BASE}/templates/dist/images/s005-2.jpg`, icon: `${BASE}/templates/dist/images/s005.png`, color: "#a855f7" },
  { num: "06", title: "Post-Placement", subtitle: "Long-Term Support", desc: "12-month integration tracking, performance check-ins, and retention support for long-term success.", cta: "Learn more", ctaHref: "/services/talent-advisory", bg: `${BASE}/templates/dist/images/s006-2.jpg`, icon: `${BASE}/templates/dist/images/s006.png`, color: "#f43f5e" },
];

const TOTAL = steps.length;
const SEG = 360 / TOTAL;
const RING_R = 42;
const TICK_POSITIONS = Array.from({ length: 12 }).map((_, i) => {
  const rad = (i * 30 * Math.PI) / 180;
  return { x: Math.round((50 + 48 * Math.cos(rad - Math.PI / 2)) * 100) / 100, y: Math.round((50 + 48 * Math.sin(rad - Math.PI / 2)) * 100) / 100, major: i % 2 === 0 };
});

export default function ServiceProcess() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const step = steps[active];

  const rotateBy = (delta: number) => {
    setRotation((prev) => prev - delta * SEG);
    setActive((prev) => { let next = (prev + delta) % TOTAL; if (next < 0) next += TOTAL; return next; });
  };

  const jumpTo = (index: number) => {
    const fwd = (index - active + TOTAL) % TOTAL;
    const bwd = TOTAL - fwd;
    const delta = fwd <= bwd ? fwd : -bwd;
    for (let i = 0; i < Math.abs(delta); i++) rotateBy(delta > 0 ? 1 : -1);
  };

  const posOnRing = (i: number) => {
    const deg = (i * SEG + rotation) % 360;
    const rad = (deg * Math.PI) / 180;
    return { left: `${Math.round((50 + RING_R * Math.cos(rad - Math.PI / 2)) * 100) / 100}%`, top: `${Math.round((50 + RING_R * Math.sin(rad - Math.PI / 2)) * 100) / 100}%` };
  };

  const visibleStepIndices = [(active - 1 + TOTAL) % TOTAL, active, (active + 1) % TOTAL];

  return (
    <section className="relative w-full overflow-hidden select-none" style={{ height: "100dvh", background: "#061410" }}>
      {visibleStepIndices.map((i) => {
        const s = steps[i];
        return (
          <div key={s.num} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}>
            <div className="absolute inset-0" style={{ background: `url("${s.bg}") center / cover no-repeat` }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(6,20,16,0.4) 0%, rgba(6,20,16,0.8) 100%)" }} />
          </div>
        );
      })}
      <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />

      {/* HEADER */}
      <div className="absolute top-[5%] left-[5%] md:left-[6%] z-30">
        <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-white/35 mb-2 md:mb-3">Our Process</p>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--hg-font-heading)" }}>How We Deliver Results</h2>
        <div className="hidden md:flex items-center gap-2 mt-3 text-white/25 text-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
          <span className="uppercase tracking-[0.15em] font-semibold">Click steps to explore</span>
        </div>
      </div>

      {/* WHEEL */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" style={{ width: "min(60vw, 60vh)", height: "min(60vw, 60vh)" }}>
        <div className="absolute inset-0 rounded-full border border-dashed border-white/8" />
        <div className="absolute inset-[15%] rounded-full border border-white/5" />
        {TICK_POSITIONS.map((t, i) => (
          <div key={`tick-${i}`} className="absolute rounded-full bg-white/15" style={{ left: `${t.x}%`, top: `${t.y}%`, width: t.major ? "4px" : "2px", height: t.major ? "4px" : "2px", transform: "translate(-50%, -50%)" }} />
        ))}
        {steps.map((s, i) => {
          const isTop = i === active;
          const pos = posOnRing(i);
          return (
            <button key={s.num} onClick={() => jumpTo(i)} className="absolute cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ left: pos.left, top: pos.top, transform: "translate(-50%, -50%)", width: "78px", height: "78px", opacity: isTop ? 1 : 0.55, zIndex: isTop ? 30 : 20 }}>
              <div className="absolute inset-0 rounded-full transition-all duration-700"
                style={{ border: isTop ? `2px solid ${s.color}` : "1px solid rgba(255,255,255,0.12)", boxShadow: isTop ? `0 0 28px ${s.color}40` : "none", background: isTop ? `${s.color}15` : "rgba(255,255,255,0.03)" }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xl font-black leading-none text-white/90" style={{ fontFamily: "var(--hg-font-heading)" }}>{s.num}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* CENTER DETAIL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-25 text-center w-[88%] max-w-[320px] md:max-w-sm px-2 md:px-4 pointer-events-none">
        <p className="text-7xl md:text-8xl font-black tracking-tighter mb-1 md:mb-2 select-none" style={{ fontFamily: "var(--hg-font-heading)", color: step.color, opacity: 0.15 }}>{step.num}</p>
        <img src={step.icon} alt="" className="hidden md:block w-14 h-14 object-contain mx-auto mb-4" style={{ filter: "brightness(0) invert(1)", opacity: 0.8 }} />
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--hg-font-heading)" }}>{step.title}</h3>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: step.color }}>{step.subtitle}</p>
        <p className="text-sm leading-relaxed text-white/50 mb-5">{step.desc}</p>
        <Link href={step.ctaHref} className="pointer-events-auto inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: step.color }}>
          {step.cta} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </Link>
      </div>

      {/* Triangle indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none" style={{ top: "calc(50% - min(30vw, 30vh) - 12px)" }}>
        <div style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: `9px solid ${step.color}`, margin: "0 auto", opacity: 0.7 }} />
      </div>

      {/* Mobile nav */}
      <div className="md:hidden absolute bottom-[6%] left-1/2 -translate-x-1/2 z-30 flex items-center gap-1">
        {steps.map((s, i) => {
          const isActive = i === active;
          return (
            <button key={s.num} onClick={() => jumpTo(i)} className="transition-all duration-300 rounded-full flex items-center gap-1 px-2.5 py-1.5"
              style={{ background: isActive ? `${s.color}15` : "transparent", border: isActive ? `1px solid ${s.color}30` : "1px solid transparent" }} aria-label={`Step ${s.num}: ${s.title}`}>
              <span className="text-[11px] font-bold" style={{ fontFamily: "var(--hg-font-heading)", color: isActive ? s.color : "rgba(255,255,255,0.3)" }}>{s.num}</span>
              {isActive && <span className="text-[10px] font-semibold" style={{ color: s.color }}>{s.title}</span>}
            </button>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <Link href="/contact" className="absolute bottom-[4%] right-[5%] md:right-[6%] z-30 inline-flex items-center gap-2 text-xs font-bold text-white/35 hover:text-white/60 transition-colors uppercase tracking-[0.15em]">
        Get Started <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
      </Link>
    </section>
  );
}
