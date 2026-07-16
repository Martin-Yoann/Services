import Link from "next/link";
import { ChevronRight, Checkmark } from "@/app/components/Icons";

const boardServices = [
  {
    title: "CEO Succession Planning",
    accent: "#D96C57",
    accentRgb: "217,108,87",
    description:
      "Multi-year succession planning frameworks for boards and nominating committees. We identify internal candidates, benchmark against external market, and manage the confidential externak scout process when the best leader isn't internal.",
    deliverables: [
      "CEO Succession Readiness Assessment",
      "Internal Candidate Benchmarking vs. External Market",
      "Confidential External Search (when needed)",
      "Transition & First-100-Days Planning",
    ],
  },
  {
    title: "Independent Board Director Search",
    accent: "#14b8a6",
    accentRgb: "20,184,166",
    description:
      "Independent directors with the specific expertise your board needs — audit committee chairs, compensation committee members, cyber-risk specialists, and industry subject-matter experts. We understand listing-rule requirements across NYSE, NASDAQ, HKEX, and LSE.",
    deliverables: [
      "Board Skills Matrix & Gap Analysis",
      "Director Candidate Longlist (60-120 names)",
      "Governance & Independence Verification",
      "Interview Coordination with Chair & NomCom",
    ],
  },
  {
    title: "Pre-IPO Board Buildout",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    description:
      "For companies 12-24 months from IPO: building a board that satisfies exchange listing requirements, investor expectations, and governance best practices. Independent directors, audit committee chairs, and industry luminaries who add credibility to your S-1.",
    deliverables: [
      "IPO Board Composition Roadmap",
      "Director Candidate Sourcing (Independence-Verified)",
      "Investor Presentation Support",
      "Post-IPO Governance Advisory",
    ],
  },
  {
    title: "Cross-Border Board Governance",
    accent: "#a855f7",
    accentRgb: "168,85,247",
    description:
      "For companies with operations spanning U.S., China, EU, and Southeast Asia: directors who understand multi-jurisdictional governance, regulatory divergence, and cultural boardroom dynamics. We've built boards for NYSE-listed China-concept stocks, German-Chinese JVs, and Singapore-headquartered regional platforms.",
    deliverables: [
      "Multi-Jurisdiction Governance Assessment",
      "Cross-Border Director Sourcing",
      "Regulatory Compliance Verification (per jurisdiction)",
      "Board Culture Integration Advisory",
    ],
  },
];

export default function BoardServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.05]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            For Chairs, Investors & Nominating Committees
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight">
            Board & Investor{" "}
            <span style={{ color: "var(--hg-color-accent)" }}>Advisory</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-3xl mx-auto">
            CEO succession, independent director search, pre-IPO board buildout, and cross-border governance — we work directly with chairs, investors, and nominating committees on the highest-stakes leadership decisions.
          </p>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="relative py-8" style={{ background: "var(--hg-color-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            {[
              { v: "20+", l: "Board Mandates Completed" },
              { v: "4", l: "Listing Rules Covered (NYSE/NASDAQ/HKEX/LSE)" },
              { v: "90d", l: "Average Board Search Cycle" },
              { v: "100%", l: "Confidentiality Record" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl md:text-3xl font-black hg-heading" style={{ color: "var(--hg-color-accent)" }}>{s.v}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--hg-color-text-secondary)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      {boardServices.map((svc, i) => (
        <section key={svc.title}
          className="relative py-16 md:py-24"
          style={{ background: i % 2 === 0 ? "var(--hg-color-bg)" : "#ffffff" }}>
          <div className="relative container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-24">
                  <div className="w-3 h-3 rounded-full mb-4" style={{ background: svc.accent }} />
                  <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight mb-3">{svc.title}</h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--hg-color-text-secondary)" }}>
                    {svc.description}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="rounded-2xl p-6 md:p-8"
                  style={{ background: `rgba(${svc.accentRgb},0.04)`, border: `1px solid rgba(${svc.accentRgb},0.12)` }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: svc.accent }}>
                    What We Deliver
                  </p>
                  <ul className="space-y-3">
                    {svc.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm font-medium" style={{ color: "var(--hg-color-text-primary)" }}>
                        <Checkmark size={14} strokeColor={svc.accent} />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ CASE STUDY ═══ */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#061410" }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.05]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />
        <div className="relative container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              Recent Board Mandate
            </span>
          </div>
          <div className="p-8 rounded-2xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-md"
                style={{ color: "var(--hg-color-accent)", background: "rgba(217,108,87,0.12)", border: "1px solid rgba(217,108,87,0.18)" }}>
                Board Mandate
              </span>
              <span className="text-[10px] font-semibold text-white/40">Pre-IPO Semiconductor Company</span>
            </div>
            <h3 className="text-xl font-bold text-white hg-heading mb-4">
              Built the Entire Board for a Pre-IPO Semiconductor Company
            </h3>
            <p className="text-sm leading-relaxed text-white/55 mb-6">
              A Shenzhen-based semiconductor company preparing for HKEX listing needed to transform from a founder-dominated board to a governance-compliant, investor-ready board with two independent directors — one with audit committee expertise, one with industry depth. We identified, approached, and placed both directors within 90 days, directly satisfying HKEX listing rule requirements for board independence and audit committee composition.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["2 Independent Directors Placed", "90-Day Search Cycle", "HKEX Governance Compliance"].map((h) => (
                <div key={h} className="flex items-center gap-2 text-xs font-semibold text-white/70">
                  <Checkmark size={12} strokeColor="var(--hg-color-accent)" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-16 md:py-24" style={{ background: "var(--hg-color-bg)" }}>
        <div className="relative container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-4">
            A confidential conversation with your chair or nominating committee.
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--hg-color-text-secondary)" }}>
            We'll walk you through how we'd approach your specific board mandate — including a preliminary director map and timeline — before any engagement begins.
          </p>
          <Link href="/contact" className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
            Discuss Board Needs
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
