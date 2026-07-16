"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { caseStudies, type CaseStudy } from "@/app/data/cases";
import { STATS } from "@/app/data/site";
import { ChevronRight, Checkmark } from "@/app/components/Icons";

type FilterLevel = "All" | "C-Suite" | "VP/Director" | "Cross-Border" | "Board";
const levels: FilterLevel[] = ["All", "C-Suite", "VP/Director", "Cross-Border", "Board"];

/* ── Level → gradient accent ── */
const levelColors: Record<string, string> = {
  "C-Suite": "#D96C57",
  "VP/Director": "#14b8a6",
  "Cross-Border": "#f59e0b",
  "Board": "#a855f7",
};

/* ── Animated counter ── */
function AnimatedNumber({ value }: { value: string }) {
  const num = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || fired.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          fired.current = true;
          let start = 0;
          const duration = 1000;
          const step = () => {
            start += 16;
            const p = Math.min(start / duration, 1);
            setDisplay(Math.round(num * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ── Mini progress bar component ── */
function MiniBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-1 rounded-full bg-gray-100 overflow-hidden w-full">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}

/* ── Case card ── */
function CaseCard({ c, index }: { c: CaseStudy; index: number }) {
  const [hovered, setHovered] = useState(false);

  /* Derive extra metrics from highlights for richer display */
  const timelineMetric = c.stat;
  const impactMetrics = c.highlights.slice(0, 2);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden hg-card-lift cursor-default"
      style={{
        background: "var(--hg-color-surface)",
        border: `1px solid ${hovered ? c.accent + "30" : "var(--hg-color-border)"}`,
        boxShadow: hovered
          ? `0 20px 48px rgba(10,47,42,0.08), 0 0 0 1px ${c.accent}20`
          : "0 2px 12px rgba(10,47,42,0.03)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent strip + image area */}
      <div className="relative h-36 md:h-44 overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.accent}18, ${c.accent}06)` }}>
        {/* Abstract geometric pattern as image placeholder */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, ${c.accent} 1px, transparent 1px), radial-gradient(circle at 80% 60%, ${c.accent} 1px, transparent 1px), radial-gradient(circle at 50% 80%, ${c.accent} 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 80px 80px, 40px 40px",
          }} />

        {/* Large accent circle */}
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-[0.08]" style={{ background: c.accent }} />
        <div className="absolute -bottom-10 -left-6 w-24 h-24 rounded-full opacity-[0.05]" style={{ background: c.accent }} />

        {/* Level badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-lg"
            style={{ color: c.accent, background: `${c.accent}14`, border: `1px solid ${c.accent}20` }}>
            {c.level}
          </span>
        </div>

        {/* Big stat number overlay */}
        <div className="absolute bottom-3 right-4 text-right">
          <p className="text-3xl md:text-4xl font-black hg-heading opacity-[0.12]"
            style={{ fontFamily: "var(--hg-font-heading)", color: c.accent }}>
            {c.stat.value}{c.stat.suffix}
          </p>
          <p className="text-[9px] font-bold uppercase tracking-[0.12em] opacity-30" style={{ color: c.accent }}>
            {c.stat.label}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 md:p-6">
        {/* Role + company */}
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-bold hg-heading tracking-tight mb-1 group-hover:text-[var(--hg-color-accent)] transition-colors">
            {c.role}
          </h3>
          <p className="text-[11px] font-semibold" style={{ color: c.accent }}>
            {c.company} · {c.industry}
          </p>
        </div>

        {/* Location + result row */}
        <div className="flex items-center gap-2 mb-4 text-[11px] font-medium" style={{ color: "var(--hg-color-text-secondary)" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span>{c.location}</span>
          <span className="mx-1 opacity-30">·</span>
          <span className="font-bold" style={{ color: c.accent }}>{c.result}</span>
        </div>

        {/* Timeline bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.1em] mb-1.5"
            style={{ color: "var(--hg-color-text-secondary)" }}>
            <span>{c.stat.label}</span>
            <span style={{ color: c.accent }}>{c.stat.value}{c.stat.suffix}</span>
          </div>
          <MiniBar pct={Math.min(parseInt(c.stat.value) * 3, 100)} color={c.accent} />
        </div>

        {/* Quote excerpt */}
        <div className="relative mb-4 pl-3 border-l-2" style={{ borderColor: `${c.accent}25` }}>
          <p className="text-xs leading-relaxed italic line-clamp-3" style={{ color: "var(--hg-color-text-secondary)" }}>
            &ldquo;{c.quote}&rdquo;
          </p>
        </div>

        {/* Highlights as tags */}
        <div className="flex flex-wrap gap-2">
          {c.highlights.map((h, j) => (
            <span key={j} className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-md"
              style={{ background: `${c.accent}08`, color: "var(--hg-color-text-primary)", border: `1px solid ${c.accent}12` }}>
              <Checkmark size={10} strokeColor={c.accent} />
              {h}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Key stat metric card ── */
function MetricCard({ value, label, icon, color }: { value: string; label: string; icon: string; color: string }) {
  return (
    <div className="text-center p-5 rounded-2xl hg-card-lift cursor-default"
      style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)" }}>
      <span className="text-2xl block mb-2">{icon}</span>
      <p className="text-2xl md:text-3xl font-black hg-heading" style={{ color }}>
        <AnimatedNumber value={value} />
      </p>
      <p className="text-[10px] font-bold uppercase tracking-[0.12em] mt-1" style={{ color: "var(--hg-color-text-secondary)" }}>
        {label}
      </p>
    </div>
  );
}

export default function TrackRecordPage() {
  const [filter, setFilter] = useState<FilterLevel>("All");

  const filtered = filter === "All" ? caseStudies : caseStudies.filter((c) => c.level === filter);

  /* Split: first 2 as featured, rest as grid */
  const featured = filtered.slice(0, 2);
  const grid = filtered.slice(2);

  /* Aggregate stats for dashboard */
  const aggregateStats = [
    { value: STATS.totalPlacements, label: "Total Placements", icon: "🏆", color: "#D96C57" },
    { value: STATS.clientRetentionRate, label: "Placement Retention", icon: "🔁", color: "#14b8a6" },
    { value: STATS.avgTimeToHire, label: "Avg. Time-to-Hire", icon: "⚡", color: "#f59e0b" },
    { value: "12", label: "Month Guarantee", icon: "🛡️", color: "#a855f7" },
  ];

  /* Accumulated stats across all cases */
  const totalCases = caseStudies.length;
  const cSuiteCount = caseStudies.filter((c) => c.level === "C-Suite").length;
  const vpCount = caseStudies.filter((c) => c.level === "VP/Director").length;
  const xbCount = caseStudies.filter((c) => c.level === "Cross-Border").length;
  const boardCount = caseStudies.filter((c) => c.level === "Board").length;

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.05]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />

        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left — title */}
            <div className="lg:col-span-6">
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                Track Record
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight leading-tight">
                Proven Placements,{" "}
                <span style={{ color: "var(--hg-color-accent)" }}>Real Impact</span>
              </h1>
              <p className="text-sm leading-relaxed text-white/50 max-w-lg">
                Every case study represents a real search completed by our team. Client identities are anonymized to protect confidentiality — all metrics are independently verifiable.
              </p>
            </div>

            {/* Right — key metrics */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {aggregateStats.map((s) => (
                <div key={s.label} className="p-5 rounded-2xl text-center"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span className="text-xl block mb-1">{s.icon}</span>
                  <p className="text-2xl md:text-3xl font-black hg-heading text-white">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/35 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FILTER + CASE DISTRIBUTION ═══ */}
      <section className="relative py-8" style={{ background: "var(--hg-color-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className="text-[11px] font-bold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{
                  background: filter === lvl ? "var(--hg-color-accent)" : "rgba(217,108,87,0.06)",
                  color: filter === lvl ? "#fff" : "var(--hg-color-text-secondary)",
                  border: filter === lvl ? "1px solid var(--hg-color-accent)" : "1px solid var(--hg-color-border)",
                }}>
                {lvl === "All" ? `All (${totalCases})` : `${lvl} (${lvl === "C-Suite" ? cSuiteCount : lvl === "VP/Director" ? vpCount : lvl === "Cross-Border" ? xbCount : boardCount})`}
              </button>
            ))}
          </div>

          {/* Distribution bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-1.5 h-6 rounded-full overflow-hidden">
              {[
                { label: "C-Suite", count: cSuiteCount, color: "#D96C57" },
                { label: "VP/Director", count: vpCount, color: "#14b8a6" },
                { label: "Cross-Border", count: xbCount, color: "#f59e0b" },
                { label: "Board", count: boardCount, color: "#a855f7" },
              ].map((seg) => (
                <div key={seg.label} className="h-full transition-all duration-500 flex items-center justify-center"
                  style={{ width: `${(seg.count / totalCases) * 100}%`, background: seg.color, minWidth: seg.count > 0 ? "2rem" : "0" }}>
                  {seg.count > 1 && (
                    <span className="text-[9px] font-bold text-white/90">{seg.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED CASES (first 2) ═══ */}
      <section className="relative pt-4 pb-8" style={{ background: "var(--hg-color-bg)" }}>
        <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.01]" />
        <div className="relative container mx-auto px-6 max-w-6xl">
          {featured.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {featured.map((c, i) => (
                <CaseCard key={c.id} c={c} index={i} />
              ))}
            </div>
          )}

          {/* Grid cases */}
          {grid.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {grid.map((c, i) => (
                <CaseCard key={c.id} c={c} index={i + 2} />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
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

      {/* ═══ BY THE NUMBERS ═══ */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none opacity-[0.04]"
          style={{ background: "var(--hg-color-accent)" }} />

        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              By the Numbers
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white hg-heading tracking-tight">
              What <span style={{ color: "var(--hg-color-accent)" }}>8 Case Studies</span> Tell Us
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <MetricCard value="30d" label="Average Time-to-Hire" icon="⏱️" color="#D96C57" />
            <MetricCard value="95%" label="Retention Rate" icon="📈" color="#14b8a6" />
            <MetricCard value="45" label="Average Team Built" icon="👥" color="#f59e0b" />
            <MetricCard value="8" label="Industries Covered" icon="🏭" color="#a855f7" />
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hg-color-bg)" }}>
        <div className="relative container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-4 tracking-tight">
            Ready to become our <span style={{ color: "var(--hg-color-accent)" }}>next success story</span>?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--hg-color-text-secondary)" }}>
            Every search starts with a confidential conversation. We'll show you relevant case studies from your industry and how we'd approach your specific mandate.
          </p>
          <Link href="/contact"
            className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
            Discuss Your Search
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
