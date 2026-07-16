"use client";

import { useState } from "react";
import Link from "next/link";
import { caseStudies, type CaseStudy } from "@/app/data/cases";
import { STATS } from "@/app/data/site";
import { ChevronRight, ChevronLeft, Checkmark } from "@/app/components/Icons";

type FilterLevel = "All" | "C-Suite" | "VP/Director" | "Cross-Border" | "Board";

const levels: FilterLevel[] = ["All", "C-Suite", "VP/Director", "Cross-Border", "Board"];

function useCountUp(target: number, trigger: number) {
  const [val, setVal] = useState(0);
  const rafRef = useState<number>(0);
  const [rafId, setRafId] = rafRef;

  useState(() => {
    let cancelled = false;
    const start = performance.now();
    const tick = (now: number) => {
      if (cancelled) return;
      const p = Math.min((now - start) / 800, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) setRafId(requestAnimationFrame(tick));
    };
    setRafId(requestAnimationFrame(tick));
    return () => { cancelled = true; cancelAnimationFrame(rafId); };
  });

  return val;
}

export default function TrackRecordPage() {
  const [filter, setFilter] = useState<FilterLevel>("All");
  const [expandedId, setExpandedId] = useState<number>(caseStudies[0].id);

  const filteredCases = filter === "All"
    ? caseStudies
    : caseStudies.filter(c => c.level === filter);

  const active = caseStudies.find(c => c.id === expandedId) || filteredCases[0];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none opacity-[0.05]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            Track Record
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight">
            Proven Placements, <span style={{ color: "var(--hg-color-accent)" }}>Real Impact</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-2xl mx-auto mb-8">
            Every case study represents a real search we completed. Client names and identifying details are anonymized to protect confidentiality — but the results are verifiable.
          </p>

          {/* Stats dashboard */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-14 pt-6 border-t border-white/8">
            {[
              { v: STATS.totalPlacements, l: "Total Placements" },
              { v: STATS.clientRetentionRate, l: "Retention Rate" },
              { v: STATS.avgTimeToHire, l: "Avg. Time-to-Hire" },
              { v: "12", l: "Month Guarantee" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl md:text-4xl font-black text-white hg-heading">{s.v}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FILTER BAR ═══ */}
      <section className="relative py-8" style={{ background: "var(--hg-color-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => { setFilter(lvl); setExpandedId(filteredCases[0]?.id || caseStudies[0].id); }}
                className="text-[11px] font-bold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{
                  background: filter === lvl ? "var(--hg-color-accent)" : "rgba(217,108,87,0.06)",
                  color: filter === lvl ? "#fff" : "var(--hg-color-text-secondary)",
                  border: filter === lvl ? "1px solid var(--hg-color-accent)" : "1px solid var(--hg-color-border)",
                }}
              >
                {lvl === "All" ? `${lvl} (${caseStudies.length})` : `${lvl} (${caseStudies.filter(c => c.level === lvl).length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CASE STUDY LIST ═══ */}
      <section className="relative py-8 md:py-12" style={{ background: "var(--hg-color-bg)" }}>
        <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.012]" />
        <div className="relative container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col gap-4">
            {filteredCases.map((c) => {
              const isExpanded = c.id === expandedId;
              return (
                <div key={c.id}
                  className="relative rounded-2xl overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer"
                  style={{
                    background: "var(--hg-color-surface)",
                    border: isExpanded ? `1px solid ${c.accent}30` : "1px solid var(--hg-color-border)",
                    boxShadow: isExpanded ? "0 12px 40px rgba(10,47,42,0.06)" : "0 2px 8px rgba(10,47,42,0.02)",
                  }}
                  onClick={() => setExpandedId(isExpanded ? 0 : c.id)}
                >
                  {/* Accent strip */}
                  <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: c.accent }} />

                  <div className="p-5 md:p-8">
                    {/* Always visible — summary row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-md"
                          style={{ color: c.accent, background: `${c.accent}10`, border: `1px solid ${c.accent}1A` }}>
                          {c.level}
                        </span>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold hg-heading">{c.role}</h3>
                          <p className="text-[11px] font-semibold italic" style={{ color: c.accent }}>
                            {c.company} · {c.industry}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 shrink-0">
                        <div className="text-right">
                          <p className="text-2xl font-black hg-heading" style={{ color: c.accent }}>
                            {c.stat.value}{c.stat.suffix}
                          </p>
                          <p className="text-[9px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--hg-color-text-secondary)" }}>
                            {c.stat.label}
                          </p>
                        </div>
                        <div className="transition-transform duration-300" style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0)" }}>
                          <ChevronLeft size={16} className="opacity-30 rotate-90" />
                        </div>
                      </div>
                    </div>

                    {/* Expanded detail */}
                    {isExpanded && (
                      <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--hg-color-border)" }}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          {/* Key facts */}
                          <div className="space-y-3">
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--hg-color-text-secondary)" }}>
                                Location
                              </p>
                              <p className="text-sm font-semibold">{c.location}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--hg-color-text-secondary)" }}>
                                Result
                              </p>
                              <p className="text-sm font-semibold" style={{ color: c.accent }}>{c.result}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1" style={{ color: "var(--hg-color-text-secondary)" }}>
                                Client
                              </p>
                              <p className="text-xs font-semibold">{c.client}</p>
                            </div>
                          </div>

                          {/* Quote */}
                          <div className="md:col-span-2">
                            <div className="relative">
                              <svg className="absolute -top-1 -left-1 w-8 h-8 opacity-[0.06]" viewBox="0 0 24 24" fill="currentColor" style={{ color: c.accent }}>
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                              </svg>
                              <p className="text-sm md:text-base leading-relaxed italic pl-10" style={{ color: "var(--hg-color-text-secondary)" }}>
                                &ldquo;{c.quote}&rdquo;
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {c.highlights.map((h, j) => (
                            <div key={j} className="flex items-center gap-2 text-xs font-semibold"
                              style={{ color: "var(--hg-color-text-primary)" }}>
                              <Checkmark size={14} strokeColor={c.accent} />
                              {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg font-bold hg-heading mb-2">No cases in this category yet</p>
              <p className="text-sm" style={{ color: "var(--hg-color-text-secondary)" }}>
                Try selecting a different filter, or{" "}
                <Link href="/contact" className="font-semibold" style={{ color: "var(--hg-color-accent)" }}>
                  contact us
                </Link>{" "}
                to discuss your specific needs.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.05]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />

        <div className="relative container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white hg-heading mb-4 tracking-tight">
            Ready to be our <span style={{ color: "var(--hg-color-accent)" }}>next case study</span>?
          </h2>
          <p className="text-sm leading-relaxed text-white/50 mb-8">
            Tell us about the leadership role you need to fill — we&apos;ll show you how we&apos;d approach it, with specific market data and a candidate map outline, in our first conversation.
          </p>
          <Link href="/contact" className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
            Start a Search
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
