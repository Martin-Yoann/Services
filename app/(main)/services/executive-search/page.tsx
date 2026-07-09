import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";

const processSteps = [
  { step: "01", title: "Market Mapping", desc: "Analyze your industry's leadership landscape, identify target organizations, and map potential candidates across geographies." },
  { step: "02", title: "Passive Sourcing", desc: "Engage passive candidates who aren't actively looking — the best leaders are rarely on job boards." },
  { step: "03", title: "Rigorous Assessment", desc: "Competency-based interviews, leadership style evaluation, and culture-fit analysis." },
  { step: "04", title: "Offer & Negotiation", desc: "Compensation benchmarking, cross-border offer structuring, and closing support." },
  { step: "05", title: "Onboarding & Integration", desc: "12-month post-placement support for smooth transitions and long-term retention." },
];

const cases = [
  { role: "VP of Engineering", company: "Series-C AI SaaS", stat: "28d", result: "Built 40-person R&D team", accent: "#5dadec", accentRgb: "93,173,236" },
  { role: "Chief Financial Officer", company: "Cross-Border Fintech", stat: "3", result: "Finalists in 14 days", accent: "#14b8a6", accentRgb: "20,184,166" },
  { role: "GM China Operations", company: "German Industrial Group", stat: "+40%", result: "Revenue growth YoY", accent: "#f59e0b", accentRgb: "245,158,11" },
];

export default function ExecutiveSearchPage() {
  return (
    <>
      <PageHeader title="Executive Search" accentColor="#5dadec" subtitle="Strategic leadership hiring for C-suite, VP, and Director-level roles across U.S., China, and global markets." breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Executive Search", href: "/services/executive-search" }]} />

      {/* ═══ Overview ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #09233f 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full" style={{ color: "#5dadec", background: "rgba(93,173,236,0.06)", border: "1px solid rgba(93,173,236,0.1)" }}>C-Suite & Leadership</span>
              <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-6">Finding leaders who shape organizations</h2>
              <p className="text-sm leading-relaxed hg-text-secondary mb-4">Our executive search practice identifies and places senior leaders who drive strategic growth. We work with boards, CEOs, and HR leaders across industries — each search led by a partner averaging 12+ years in your sector.</p>
              <p className="text-sm leading-relaxed hg-text-secondary">We specialize in multi-market searches, bringing deep networks in both the U.S. and China to every engagement.</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[{ v: "500+", l: "Executive Placements", c: "#5dadec" }, { v: "30d", l: "Avg. Time-to-Hire", c: "#14b8a6" }, { v: "95%", l: "Retention Rate", c: "#f59e0b" }].map((s) => (
                <div key={s.l} className="group rounded-2xl p-6 text-center transition-all duration-500 hover:-translate-y-1" style={{ background: "var(--hg-color-bg)", border: "1px solid var(--hg-color-border)" }}>
                  <p className="text-3xl md:text-4xl font-bold hg-heading group-hover:scale-105 transition-transform duration-500" style={{ color: s.c }}>{s.v}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mt-1 hg-text-secondary">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Process ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#060e18" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(93,173,236,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(93,173,236,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" style={{ background: "#5dadec", transform: "translate(30%, -30%)" }} />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white hg-heading">A proven search methodology</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
            {processSteps.map((p) => (
              <div key={p.step} className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-3xl font-bold hg-heading mb-3 text-[#5dadec] group-hover:scale-110 transition-transform duration-500 origin-left">{p.step}</p>
                <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs leading-relaxed text-white/50">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Case Examples ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #fff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-3">Recent Executive Placements</h2>
            <p className="text-sm hg-text-secondary">Real results from our executive search engagements.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cases.map((c) => (
              <div key={c.role} className="group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 4px 20px rgba(18,67,63,0.02)" }}>
                <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left transition-all duration-500 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)`, transform: "scaleX(0.25)" }} />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 pt-2" style={{ color: c.accent }}>{c.company}</p>
                <h3 className="text-lg font-bold hg-heading mb-3">{c.role}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-3xl font-bold hg-heading group-hover:scale-110 transition-transform duration-500" style={{ color: c.accent }}>{c.stat}</p>
                  <p className="text-xs hg-text-secondary">{c.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 overflow-hidden" style={{ background: "#060e18" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.05] pointer-events-none" style={{ background: "#5dadec" }} />
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 hg-heading">Need a strategic leader?</h2>
          <p className="text-white/45 mb-8 max-w-lg mx-auto">Tell us about the role and we'll connect you with exceptional candidates.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            style={{ background: "linear-gradient(135deg, #5dadec, #0e8a9a)", boxShadow: "0 4px 24px rgba(14,138,154,0.35)" }}>
            Start a Search <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
