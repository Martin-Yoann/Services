import Link from "next/link";
import { industries } from "@/app/data/industries";

export default function Industries() {
  return (
    <>
      {/* ═══ Section A: Industry Grid ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((ind) => (
              <div key={ind.id} className="group relative rounded-2xl p-7 cursor-default hg-card-lift"
                style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 4px 20px rgba(18,67,63,0.02)" }}>
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left transition-all duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${ind.accent}, transparent)`, transform: "scaleX(0.25)" }} />
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ background: `rgba(${ind.accentRgb},0.1)`, color: ind.accent, boxShadow: "0 0 0 0 transparent" }}>
                      <span className="text-lg font-black hg-heading" style={{ color: ind.accent }}>{ind.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold hg-heading">{ind.name}</h3>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em]" style={{ color: ind.accent }}>{ind.stat.v} {ind.stat.l}</p>
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed hg-text-secondary mb-5">{ind.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {ind.roles.map((role) => (
                      <span key={role} className="text-[9px] font-semibold px-2 py-1 rounded-md transition-all duration-300 group-hover:scale-[1.02]"
                        style={{ background: `rgba(${ind.accentRgb},0.06)`, color: ind.accent }}>{role}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-[11px] font-bold transition-all duration-500 group-hover:gap-3" style={{ color: ind.accent }}>
                    Explore <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 rounded-full blur-2xl opacity-0 group-hover:opacity-[0.04] transition-all duration-500" style={{ background: ind.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section B: Approach ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-[0.05] pointer-events-none" style={{ background: "#D96C57", transform: "translate(30%, -30%)" }} />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white hg-heading tracking-tight">Deep sector expertise, <span style={{ color: "#D96C57" }}>proven results</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
            {[
              { t: "Sector Specialists", d: "Each consultant focuses on 1-2 industries — giving you deep networks, benchmarks, and role-level insights.", i: "🎯" },
              { t: "Cross-Border Fluency", d: "We navigate regulatory differences, visa pathways, and cultural expectations across U.S., China, UK, and EU.", i: "🌐" },
              { t: "Market Intelligence", d: "Real-time hiring trends, salary bands, and talent availability — actionable data, not generic reports.", i: "📊" },
            ].map((x) => (
              <div key={x.t} className="group text-center p-7 rounded-2xl cursor-default hg-card-lift"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-3xl block mb-4">{x.i}</span>
                <h3 className="text-sm font-bold text-white mb-2">{x.t}</h3>
                <p className="text-xs leading-relaxed text-white/50">{x.d}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 text-center">
            {[{ v: "400+", l: "Active Placements" }, { v: "50+", l: "Industries Served" }, { v: "15+", l: "Years Exp." }, { v: "8+", l: "Market Hubs" }].map((s) => (
              <div key={s.l}><p className="text-3xl md:text-4xl font-bold text-[#D96C57] hg-heading">{s.v}</p><p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40 mt-1">{s.l}</p></div>))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hg-gradient-coral"
              style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
              Discuss Your Industry Needs <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
