import Link from "next/link";

const regions = [
  { name: "North America", stats: "250+ placements/yr", desc: "Headquarters and largest market. Deep networks across Texas, California, and the Midwest.", cities: [{ n: "Dallas, TX", t: "HQ" }, { n: "San Jose, CA", t: "Tech" }, { n: "Los Angeles, CA", t: "Consumer" }, { n: "Seattle, WA", t: "Tech" }, { n: "Chicago, IL", t: "Industrial" }], accent: "#D96C57", accentRgb: "217,108,87" },
  { name: "China", stats: "120+ placements/yr", desc: "Bridging Chinese companies expanding to the U.S. and multinationals building local teams.", cities: [{ n: "Shanghai", t: "HQ" }, { n: "Beijing", t: "Tech" }, { n: "Tianjin", t: "Industrial" }, { n: "Shenzhen", t: "Tech" }], accent: "#f59e0b", accentRgb: "245,158,11" },
  { name: "International", stats: "60+ placements/yr", desc: "Growing presence in financial, tech, and industrial hubs across Europe and Asia-Pacific.", cities: [{ n: "London, UK", t: "Finance" }, { n: "Manchester, UK", t: "Industrial" }, { n: "Toronto, CA", t: "Tech" }, { n: "Singapore", t: "APAC Hub" }], accent: "#14b8a6", accentRgb: "20,184,166" },
];

export default function GlobalCoverage() {
  return (
    <>
      {/* ═══ Region Cards ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {regions.map((region) => (
              <div key={region.name} className="group relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2"
                style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 4px 20px rgba(18,67,63,0.02)" }}>
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left transition-all duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${region.accent}, transparent)`, transform: "scaleX(0.25)" }} />

                {/* Region name + stats */}
                <div className="flex items-center justify-between mb-4 pt-2">
                  <h3 className="text-lg font-bold hg-heading">{region.name}</h3>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md" style={{ background: `rgba(${region.accentRgb},0.08)`, color: region.accent }}>{region.stats}</span>
                </div>
                <p className="text-xs leading-relaxed hg-text-secondary mb-6">{region.desc}</p>

                {/* City list */}
                <ul className="space-y-2.5">
                  {region.cities.map((city) => (
                    <li key={city.n} className="flex items-center gap-2.5 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: region.accent }} />
                      <span className="text-[9px] font-bold uppercase tracking-[0.1em] px-2 py-0.5 rounded-md" style={{ background: `rgba(${region.accentRgb},0.06)`, color: region.accent }}>{city.t}</span>
                      <span className="font-semibold" style={{ color: "var(--hg-color-text-primary)" }}>{city.n}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-12 rounded-full blur-2xl opacity-0 group-hover:opacity-[0.04] transition-all duration-500" style={{ background: region.accent }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Coverage Stats ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" style={{ background: "#2d8a7a", transform: "translate(-30%, 30%)" }} />

        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>Global Reach</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white hg-heading tracking-tight mb-4">Connected across <span style={{ color: "#D96C57" }}>three continents</span></h2>
              <p className="text-sm leading-relaxed text-white/50 mb-6">
                We don't just search globally — we have people on the ground in every major talent market who understand local business culture, compensation norms, and regulatory environments.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#D96C57] hover:gap-3 transition-all">
                Discuss Your Market Needs <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "430+", l: "Placements/yr", c: "#D96C57" }, { v: "13", l: "Cities", c: "#14b8a6" }, { v: "3", l: "Continents", c: "#f59e0b" }, { v: "5+", l: "Languages", c: "#a855f7" }].map((s) => (
                <div key={s.l} className="group rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-3xl md:text-4xl font-bold hg-heading group-hover:scale-110 transition-transform duration-500" style={{ color: s.c }}>{s.v}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/35 mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hg-gradient-coral"
              style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
              Start a Conversation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
