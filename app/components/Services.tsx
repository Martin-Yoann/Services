import Link from "next/link";

const services = [
  {
    id: 1, title: "Executive Search", subtitle: "Leadership Hiring",
    description: "Strategic C-suite, VP, and Director-level placements with deep market knowledge across U.S., China, and global markets.",
    features: ["Market mapping & intelligence", "Passive candidate sourcing", "Compensation negotiation & closing"],
    href: "/services/executive-search", accent: "#2d8a7a", accentRgb: "45,138,122",
    stat: { value: "500+", label: "Annual Placements" },
  },
  {
    id: 2, title: "Professional Recruitment", subtitle: "Specialist Talent",
    description: "Permanent placements for mid-to-senior professionals across technology, finance, sales, operations, and more.",
    features: ["Skills assessment & verification", "Culture fit & retention analysis", "Avg. 30-day delivery"],
    href: "/services/professional-recruitment", accent: "#D96C57", accentRgb: "217,108,87",
    stat: { value: "98%", label: "Client Satisfaction" },
  },
  {
    id: 3, title: "Talent Advisory", subtitle: "Strategic Consulting",
    description: "Compensation benchmarking, org design, workforce planning, and market intelligence for global expansion.",
    features: ["Salary & equity benchmarking", "Organization design", "Cross-border HR compliance"],
    href: "/services/talent-advisory", accent: "#f59e0b", accentRgb: "245,158,11",
    stat: { value: "15+", label: "Years Experience" },
  },
];

export default function Services() {
  return (
    <>
      {/* ═══ Section A: Feature Cards ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((svc) => (
              <Link key={svc.id} href={svc.href} className="group block">
                <div className="relative rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 4px 24px rgba(18,67,63,0.03)" }}>
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl origin-left transition-all duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)`, transform: "scaleX(0.25)" }} />

                  {/* Stat badge - top right */}
                  <div className="absolute top-3 right-3 rounded-xl px-3 py-2 text-center transition-all duration-500 group-hover:scale-105"
                    style={{ background: `rgba(${svc.accentRgb},0.08)` }}>
                    <p className="text-xl font-black hg-heading" style={{ color: svc.accent }}>{svc.stat.value}</p>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] hg-text-secondary leading-tight">{svc.stat.label}</p>
                  </div>

                  {/* Label */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 mt-1" style={{ color: svc.accent }}>{svc.subtitle}</p>
                  <h3 className="text-xl font-bold hg-heading mb-3">{svc.title}</h3>
                  <p className="text-sm leading-relaxed hg-text-secondary mb-6 flex-1">{svc.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 border-t pt-5" style={{ borderColor: "var(--hg-color-border)" }}>
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-semibold" style={{ color: "var(--hg-color-text-primary)" }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform duration-300" style={{ background: svc.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3" style={{ color: svc.accent }}>
                    Explore {svc.title} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.06] transition-all duration-500" style={{ background: svc.accent }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Section B: Differentiator + CTA ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" style={{ background: "#D96C57" }} />

        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
            {[
              { title: "Global Reach", desc: "13 cities, 3 continents, 5+ languages spoken — local expertise, global scale.", icon: "🌍", color: "#D96C57" },
              { title: "Speed & Quality", desc: "Average 30-day time-to-hire. 3-5 thoroughly vetted candidates per role, not a flood of resumes.", icon: "⚡", color: "#14b8a6" },
              { title: "Proven Retention", desc: "95% of our placements stay beyond 12 months. 12-month guarantee on every engagement.", icon: "🎯", color: "#f59e0b" },
            ].map((item) => (
              <div key={item.title} className="group text-center p-7 rounded-2xl transition-all duration-500 hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2 hg-heading" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-xs leading-relaxed text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-md mx-auto">
            <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hg-gradient-coral"
              style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
              Get Started Today
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
