"use client";

import { useState } from "react";
import { articles, resources } from "@/app/data/insights";
import { ChevronRight } from "@/app/components/Icons";

const categories = [
  "All",
  "Salary Guide",
  "Hiring Trends",
  "Leadership",
  "Case Study",
  "Cross-Border",
] as const;

type Cat = (typeof categories)[number];

export default function InsightsPage() {
  const [activeCat, setActiveCat] = useState<Cat>("All");
  const [downloadForm, setDownloadForm] = useState({ open: false, resourceTitle: "" });

  const filtered =
    activeCat === "All"
      ? articles
      : articles.filter((a) => a.category === activeCat);

  const openDownload = (title: string) => {
    setDownloadForm({
      open: true,
      resourceTitle: title,
    });
  };


  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ background: "#061410" }}
      >
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.05]"
          style={{
            background: "var(--hg-color-accent)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative container mx-auto px-6 text-center">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            Insights & Resources
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight">
            Thought Leadership for{" "}
            <span style={{ color: "var(--hg-color-accent)" }}>
              People Leaders
            </span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-3xl mx-auto">
            Data-driven insights on executive hiring, compensation trends,
            cross-border talent strategy, and leadership — from practitioners
            who&apos;ve completed thousands of C-suite searches.
          </p>
        </div>
      </section>

      {/* ═══ FILTER BAR ═══ */}
      <section
        className="relative py-8"
        style={{ background: "var(--hg-color-bg)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className="text-[11px] font-bold px-4 py-2 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{
                  background:
                    activeCat === cat
                      ? "var(--hg-color-accent)"
                      : "rgba(217,108,87,0.06)",
                  color:
                    activeCat === cat
                      ? "#fff"
                      : "var(--hg-color-text-secondary)",
                  border:
                    activeCat === cat
                      ? "1px solid var(--hg-color-accent)"
                      : "1px solid var(--hg-color-border)",
                }}
              >
                {cat === "All" ? `${cat} (${articles.length})` : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ARTICLE GRID ═══ */}
      <section
        className="relative py-8 md:py-12"
        style={{ background: "var(--hg-color-bg)" }}
      >
        <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.012]" />
        <div className="relative container mx-auto px-6 max-w-5xl">
          {/* Featured articles */}
          {activeCat === "All" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {articles
                .filter((a) => a.featured)
                .map((a) => (
                  <div
                    key={a.id}
                    className="group relative rounded-2xl p-8 overflow-hidden hg-card-lift cursor-pointer"
                    style={{
                      background: "var(--hg-color-surface)",
                      border: "1px solid var(--hg-color-border)",
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 h-[3px]"
                      style={{ background: a.accent }}
                    />
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md"
                        style={{
                          color: a.accent,
                          background: `${a.accent}10`,
                          border: `1px solid ${a.accent}1A`,
                        }}
                      >
                        {a.category}
                      </span>
                      <span
                        className="text-[10px] font-semibold"
                        style={{ color: "var(--hg-color-text-secondary)" }}
                      >
                        Featured
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold hg-heading mb-2 group-hover:text-[var(--hg-color-accent)] transition-colors">
                      {a.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: "var(--hg-color-text-secondary)" }}
                    >
                      {a.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-semibold"
                        style={{ color: "var(--hg-color-text-secondary)" }}
                      >
                        {a.date} · {a.readTime}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-bold group-hover:gap-2.5 transition-all duration-300"
                        style={{ color: a.accent }}
                      >
                        Read Article <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* All articles grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a) => (
              <div
                key={a.id}
                className="group relative rounded-2xl p-6 overflow-hidden hg-card-lift cursor-pointer"
                style={{
                  background: "var(--hg-color-surface)",
                  border: "1px solid var(--hg-color-border)",
                }}
              >
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left transition-all duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${a.accent}, transparent)`,
                    transform: "scaleX(0.25)",
                  }}
                />
                <div className="pt-2">
                  <span
                    className="inline-block text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md mb-3"
                    style={{
                      color: a.accent,
                      background: `${a.accent}08`,
                      border: `1px solid ${a.accent}14`,
                    }}
                  >
                    {a.category}
                  </span>
                  <h3 className="text-base font-bold hg-heading mb-2 group-hover:text-[var(--hg-color-accent)] transition-colors">
                    {a.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: "var(--hg-color-text-secondary)" }}
                  >
                    {a.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: "var(--hg-color-text-secondary)" }}
                    >
                      {a.date} · {a.readTime}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-[10px] font-bold group-hover:gap-2 transition-all duration-300"
                      style={{ color: a.accent }}
                    >
                      Read <ChevronRight size={11} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg font-bold hg-heading mb-2">
                No articles in this category yet
              </p>
              <p style={{ color: "var(--hg-color-text-secondary)" }}>
                Try another category — new content is published monthly.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ DOWNLOADABLE RESOURCES ═══ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "#061410" }}
      >
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.02]" />
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.04]"
          style={{
            background: "var(--hg-color-accent)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              Resources
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white hg-heading tracking-tight">
              Practical Tools for{" "}
              <span style={{ color: "var(--hg-color-accent)" }}>
                Hiring Leaders
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((r) => (
              <div
                key={r.id}
                className="p-6 rounded-2xl flex flex-col"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${r.accent}20` }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={r.accent}
                      strokeWidth="2.5"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span
                    className="text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-0.5 rounded"
                    style={{
                      color: r.accent,
                      background: `${r.accent}15`,
                    }}
                  >
                    {r.format}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white hg-heading mb-2">
                  {r.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/45 mb-5 flex-1">
                  {r.description}
                </p>
                <button
                  onClick={() => openDownload(r.title)}
                  className="w-full text-xs font-bold py-2.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  style={{
                    color: r.accent,
                    background: `${r.accent}12`,
                    border: `1px solid ${r.accent}20`,
                  }}
                >
                  Request Resource
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource requests use the monitored contact channel; no simulated delivery. */}
      {downloadForm.open && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="resource-request-title">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDownloadForm((p) => ({ ...p, open: false }))} />
          <div className="relative w-full max-w-md rounded-2xl p-6 md:p-8 bg-white text-[#0a2f2a]">
            <h3 id="resource-request-title" className="text-lg font-bold mb-3">Request a Resource</h3>
            <p className="text-sm mb-4">{downloadForm.resourceTitle}</p>
            <p className="text-sm mb-5">To ask about this resource and its availability, please contact our support team.</p>
            <a className="text-sm font-semibold underline" href={`mailto:Support@happyglobalservice.com?subject=${encodeURIComponent(`Resource request: ${downloadForm.resourceTitle}`)}`}>Support@happyglobalservice.com</a>
            <button type="button" onClick={() => setDownloadForm((p) => ({ ...p, open: false }))} className="block mt-6 text-sm font-bold">Close</button>
          </div>
        </div>
      )}
    </>
  );
}
