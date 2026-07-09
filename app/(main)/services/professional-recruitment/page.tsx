import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";

const capabilities = [
  { t: "Technology & Engineering", d: "Software engineers, AI/ML, data science, DevOps, cybersecurity — we cover the full stack.", icon: "💻", c: "#D96C57" },
  { t: "Sales & Marketing", d: "Revenue leaders, growth marketers, brand strategists who drive customer acquisition.", icon: "📈", c: "#14b8a6" },
  { t: "Finance & Operations", d: "CFOs, controllers, supply chain experts, and operations directors.", icon: "📊", c: "#f59e0b" },
  { t: "HR & People", d: "CHROs, HRBPs, talent acquisition leaders, and L&D specialists.", icon: "👥", c: "#a855f7" },
  { t: "Legal & Compliance", d: "General counsels, IP specialists, and compliance officers.", icon: "⚖️", c: "#2d8a7a" },
  { t: "Product & Design", d: "Product managers, UX researchers, and design leads.", icon: "🎨", c: "#f43f5e" },
];

export default function ProfessionalRecruitmentPage() {
  return (
    <>
      <PageHeader title="Professional Recruitment" accentColor="#14b8a6" subtitle="Specialist hiring across technology, sales, finance, operations, HR, legal, and product — fast, precise, culture-aligned." breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Professional Recruitment", href: "/services/professional-recruitment" }]} />

      {/* ═══ Overview ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full" style={{ color: "#14b8a6", background: "rgba(20,184,166,0.06)", border: "1px solid rgba(20,184,166,0.1)" }}>Specialist Talent</span>
              <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-6">Building teams that execute</h2>
              <p className="text-sm leading-relaxed hg-text-secondary mb-4">Our professional recruitment practice covers specialist roles from individual contributor to senior manager. We combine deep function-specific knowledge with broad market reach to deliver quality candidates, fast.</p>
              <p className="text-sm leading-relaxed hg-text-secondary">Every candidate is assessed for technical skill, culture fit, and long-term potential — not just resume keywords. Initial response within 24 hours, average placement in 30 days.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[{ v: "2000+", l: "Professional Placements", c: "#D96C57" }, { v: "24h", l: "Initial Response", c: "#14b8a6" }, { v: "98%", l: "Client Satisfaction", c: "#f59e0b" }].map((s) => (
                <div key={s.l} className="group rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1" style={{ background: "var(--hg-color-bg)", border: "1px solid var(--hg-color-border)" }}>
                  <p className="text-3xl md:text-4xl font-bold hg-heading group-hover:scale-105 transition-transform duration-500" style={{ color: s.c }}>{s.v}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mt-1 hg-text-secondary">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Capabilities ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#060e18" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>Functional Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white hg-heading">Functions we cover</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
            {capabilities.map((x) => (
              <div key={x.t} className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl">{x.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white">{x.t}</h3>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-white/50">{x.d}</p>
                <div className="mt-3 h-[2px] rounded-full w-0 group-hover:w-16 transition-all duration-500" style={{ background: x.c }} />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 text-white/25 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
            <span className="uppercase tracking-[0.15em] font-semibold">Hover to explore</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#060e18" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" style={{ background: "#14b8a6" }} />
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hg-heading">Hiring specialist talent?</h2>
          <p className="text-white/45 mb-8 max-w-lg mx-auto">Share your requirements and we'll connect you with pre-vetted professionals.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            style={{ background: "linear-gradient(135deg, #14b8a6, #0d9488)", boxShadow: "0 4px 24px rgba(20,184,166,0.35)" }}>
            Hire Talent <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
