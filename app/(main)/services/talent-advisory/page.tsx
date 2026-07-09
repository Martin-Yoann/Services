import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";

const advisoryServices = [
  { t: "Compensation Benchmarking", d: "Data-driven analysis across markets — covering base, bonus, equity, and total rewards for your target roles and competitors.", icon: "💰", c: "#f59e0b" },
  { t: "Organizational Design", d: "Strategic guidance on team structure, reporting lines, and org scaling optimized for cross-border and matrixed environments.", icon: "🏗️", c: "#D96C57" },
  { t: "Market Intelligence", d: "Talent landscape analysis, competitor hiring patterns, and trend reports tailored to your industry and target markets.", icon: "🔍", c: "#14b8a6" },
  { t: "Employer Brand Strategy", d: "Positioning your organization as an employer of choice — from EVP development to localization in new markets.", icon: "🏆", c: "#a855f7" },
  { t: "Workforce Planning", d: "Multi-year talent forecasting aligned to business strategy — building pipelines before you have open roles.", icon: "📋", c: "#2d8a7a" },
  { t: "Cross-Border HR Compliance", d: "Navigating employment law, visa requirements, and statutory benefits across U.S., China, and international jurisdictions.", icon: "🛡️", c: "#f43f5e" },
];

export default function TalentAdvisoryPage() {
  return (
    <>
      <PageHeader title="Talent Advisory" accentColor="#f59e0b" subtitle="Strategic consulting on compensation, organizational design, market intelligence, and workforce planning for global growth." breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Talent Advisory", href: "/services/talent-advisory" }]} />

      {/* ═══ Overview ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full" style={{ color: "#f59e0b", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.1)" }}>Strategic Consulting</span>
              <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-6">Talent strategy that powers growth</h2>
              <p className="text-sm leading-relaxed hg-text-secondary mb-4">Beyond recruitment, our advisory practice helps you build the infrastructure and strategy to attract, compensate, and retain world-class talent for your most critical markets.</p>
              <p className="text-sm leading-relaxed hg-text-secondary">We deliver actionable frameworks and data — not slide decks you'll file away. From startups to enterprises, our advisors average 15+ years in global talent strategy.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "50+", l: "Enterprise Clients", c: "#D96C57" }, { v: "15+", l: "Years Experience", c: "#14b8a6" }, { v: "12yr", l: "Avg. Partnership", c: "#f59e0b" }, { v: "8+", l: "Markets Covered", c: "#a855f7" }].map((s) => (
                <div key={s.l} className="group rounded-2xl p-5 text-center transition-all duration-500 hover:-translate-y-1" style={{ background: "var(--hg-color-bg)", border: "1px solid var(--hg-color-border)" }}>
                  <p className="text-3xl font-bold hg-heading group-hover:scale-105 transition-transform duration-500" style={{ color: s.c }}>{s.v}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mt-2 hg-text-secondary">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Advisory Services ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#060e18" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>Advisory Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white hg-heading">How we advise</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">
            {advisoryServices.map((s) => (
              <div key={s.t} className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-2xl block mb-3">{s.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{s.t}</h3>
                <p className="text-xs leading-relaxed text-white/50 mb-3">{s.d}</p>
                <div className="h-[2px] rounded-full w-0 group-hover:w-16 transition-all duration-500" style={{ background: s.c }} />
              </div>
            ))}
          </div>

          {/* ═══ Process ═══ */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", t: "Scoping Call", d: "30-min discovery to define your challenge and deliverables." },
                { step: "2", t: "Research & Analysis", d: "Deep-dive into your market, competitors, and benchmarks." },
                { step: "3", t: "Recommendations", d: "Actionable frameworks and strategy sessions with your leadership." },
              ].map((item) => (
                <div key={item.step} className="group rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-2"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-500"
                    style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}>{item.step}</div>
                  <h3 className="text-sm font-bold text-white mb-2">{item.t}</h3>
                  <p className="text-xs leading-relaxed text-white/50">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#060e18" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" style={{ background: "#f59e0b" }} />
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hg-heading">Ready for a smarter talent strategy?</h2>
          <p className="text-white/45 mb-8 max-w-lg mx-auto">Let's discuss your talent challenges and build a data-driven path forward.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)", boxShadow: "0 4px 24px rgba(245,158,11,0.35)" }}>
            Book a Consultation <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
