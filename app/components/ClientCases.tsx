"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const cases = [
  { id: 1, role: "VP of Engineering", company: "Series-C AI SaaS", industry: "Artificial Intelligence", location: "San Francisco → San Jose", result: "Placed in 28 days", quote: "Happy Global understood exactly what we needed — a VP who could scale our engineering org from 20 to 80 in the hyper-competitive Bay Area market. The candidate has since built a 40-person R&D team and shipped three major product releases.", client: "CTO, Series-C AI Startup", highlights: ["40-person R&D team built", "Bay Area talent market expertise", "28-day close"], stat: { value: "28", suffix: "d", label: "Time-to-Hire" }, accent: "#D96C57" },
  { id: 2, role: "Chief Financial Officer", company: "Cross-Border Fintech", industry: "Financial Technology", location: "New York → London", result: "3 finalists, 1 hire", quote: "We needed a CFO who could navigate both SEC and FCA regulatory frameworks. Happy Global understood the complexity and delivered three exceptional candidates — each pre-qualified on dual-jurisdiction expertise — in under two weeks.", client: "CEO, Cross-Border Fintech", highlights: ["Dual SEC + FCA expertise", "3 pre-vetted finalists", "14-day delivery"], stat: { value: "14", suffix: "d", label: "Shortlist" }, accent: "#14b8a6" },
  { id: 3, role: "Director, Clinical Ops", company: "Mid-Cap Biotech", industry: "Healthcare & Life Sciences", location: "Boston → Dallas", result: "2+ years retained", quote: "Finding clinical leadership with FDA submission experience is incredibly niche. Happy Global mapped every candidate nationwide, approached them discreetly, and found us the perfect hire — she's been with us over two years.", client: "VP HR, Mid-Cap Biotech", highlights: ["FDA submission expertise", "200-candidate market map", "2+ year retention"], stat: { value: "2", suffix: "yr+", label: "Retention" }, accent: "#f59e0b" },
  { id: 4, role: "GM, China Operations", company: "German Industrial Group", industry: "Advanced Manufacturing", location: "Stuttgart → Suzhou", result: "+40% revenue YoY", quote: "We needed a bilingual GM bridging German engineering precision with Chinese manufacturing scale. Happy Global found a Tier-1 automotive veteran. One year in, revenue is up 40% with two new facilities opened.", client: "Board Director", highlights: ["Trilingual ENG + DE + ZH", "Tier-1 automotive", "+40% revenue growth"], stat: { value: "40", suffix: "%+", label: "Revenue Growth" }, accent: "#a855f7" },
];

const TOTAL = cases.length;

function useCountUp(target: number, trigger: number) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let raf: number;
    let cancelled = false;
    const start = performance.now();
    const tick = (now: number) => { if (cancelled) return; const p = Math.min((now - start) / 800, 1); setVal(Math.round(target * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  }, [target, trigger]);
  return val;
}

export default function ClientCases() {
  const [active, setActive] = useState(0);
  const [stage, setStage] = useState<"show" | "exit" | "enter">("show");
  const [animKey, setAnimKey] = useState(0);
  const activeRef = useRef(active);
  activeRef.current = active;

  const activeCase = cases[active];
  const animatedVal = useCountUp(Number(activeCase.stat.value), animKey);

  const goTo = useCallback((idx: number) => {
    const next = ((idx % TOTAL) + TOTAL) % TOTAL;
    if (next === activeRef.current) return;
    setStage("exit");
    setTimeout(() => { setActive(next); setAnimKey((k) => k + 1); setStage("enter"); setTimeout(() => setStage("show"), 50); }, 350);
  }, []);

  const next = useCallback(() => goTo(activeRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(activeRef.current - 1), [goTo]);

  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "ArrowLeft" || e.key === "ArrowUp") prev(); if (e.key === "ArrowRight" || e.key === "ArrowDown") next(); };
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [prev, next]);

  return (
    <section className="relative w-full overflow-hidden select-none bg-white" style={{ height: "100dvh" }}>
      <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.015]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[200px] transition-colors duration-700 pointer-events-none"
        style={{ background: `${activeCase.accent}06` }} />

      {/* HEADER */}
      <div className="absolute top-[7%] left-0 right-0 z-20 text-center">
        <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-3 px-4 py-1.5 rounded-full"
          style={{ color: activeCase.accent, background: `${activeCase.accent}0D`, border: `1px solid ${activeCase.accent}1A` }}>Client Success Story</span>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight hg-heading">Proven Placements, <span style={{ color: activeCase.accent }}>Real Impact</span></h2>
      </div>

      {/* CARD */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] max-w-4xl pointer-events-none">
        <div className="relative rounded-3xl overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]"
          style={{ background: "#fff", border: "1px solid var(--hg-color-border)", boxShadow: "0 24px 80px rgba(10,47,42,0.08), 0 6px 20px rgba(10,47,42,0.03)",
            opacity: stage === "show" ? 1 : stage === "exit" ? 0 : 0,
            transform: stage === "show" ? "translateY(0) scale(1)" : stage === "exit" ? "translateY(12px) scale(0.97)" : "translateY(-12px) scale(0.97)" }}>
          <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: activeCase.accent }} />
          <div className="p-8 md:p-12">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-7">
              <div className="flex-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-md"
                  style={{ color: activeCase.accent, background: `${activeCase.accent}10`, border: `1px solid ${activeCase.accent}1A` }}>{activeCase.industry}</span>
                <h3 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight">{activeCase.role}</h3>
                <p className="text-xs flex items-center gap-1.5 mt-2" style={{ color: "var(--hg-color-text-secondary)" }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  {activeCase.location}</p>
              </div>
              <div className="shrink-0 text-center rounded-2xl p-5 min-w-[130px]" style={{ background: `${activeCase.accent}08`, border: `1px solid ${activeCase.accent}15` }}>
                <p className="text-4xl md:text-5xl font-black hg-heading" style={{ color: activeCase.accent, letterSpacing: "-0.03em" }}>{animatedVal}<span className="text-lg md:text-xl align-top ml-0.5 opacity-60">{activeCase.stat.suffix}</span></p>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] mt-1" style={{ color: "var(--hg-color-text-secondary)" }}>{activeCase.stat.label}</p>
              </div>
            </div>
            <div className="relative mb-6">
              <svg className="absolute top-0 left-0 w-10 h-10 opacity-[0.05]" viewBox="0 0 24 24" fill="currentColor" style={{ color: activeCase.accent }}><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-base md:text-lg leading-relaxed italic pl-14" style={{ color: "var(--hg-color-text-secondary)" }}>&ldquo;{activeCase.quote}&rdquo;</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
              {activeCase.highlights.map((h, j) => (
                <div key={j} className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--hg-color-text-primary)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={activeCase.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>{h}</div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid var(--hg-color-border)" }}>
              <div><p className="text-sm font-bold hg-heading">{activeCase.client}</p><p className="text-[11px] mt-0.5" style={{ color: "var(--hg-color-text-secondary)" }}>{activeCase.company}</p></div>
              <span className="self-start inline-flex items-center gap-1.5 text-[11px] font-bold px-4 py-2 rounded-full pointer-events-auto"
                style={{ background: `${activeCase.accent}12`, color: activeCase.accent, border: `1px solid ${activeCase.accent}25` }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>{activeCase.result}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <button onClick={prev}
        className="absolute top-1/2 left-[2%] md:left-[4%] -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group pointer-events-auto"
        style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 2px 12px rgba(10,47,42,0.05)" }} aria-label="Previous">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:-translate-x-0.5 transition-transform"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button onClick={next}
        className="absolute top-1/2 right-[2%] md:right-[4%] -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group pointer-events-auto"
        style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 2px 12px rgba(10,47,42,0.05)" }} aria-label="Next">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Bottom bar */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 z-30 flex items-center gap-5 pointer-events-auto">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: "var(--hg-color-text-secondary)" }}>
          <span style={{ color: activeCase.accent, fontSize: "1.1em" }}>0{active + 1}</span><span className="opacity-25"> / 0{TOTAL}</span>
        </span>
        <div className="flex items-center gap-2">
          {cases.map((c, i) => (
            <button key={c.id} onClick={() => goTo(i)}
              className="rounded-full transition-all duration-500"
              style={{ width: i === active ? "28px" : "7px", height: "7px", background: i === active ? c.accent : "var(--hg-color-border)", boxShadow: i === active ? `0 0 8px ${c.accent}40` : "none" }} aria-label={`Go to case ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
