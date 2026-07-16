import Link from "next/link";
import { ChevronRight } from "@/app/components/Icons";

const steps = [
  {
    num: "01",
    title: "Engagement & Calibration",
    subtitle: "Defining Success Beyond the Job Description",
    color: "#D96C57",
    accentRgb: "217,108,87",
    description:
      "Every retained search begins with an in-depth calibration session with the hiring executive, board members, and key stakeholders. We don't just collect a job spec — we map the business strategy, culture, team dynamics, and the specific outcomes this leader must deliver in the first 12, 24, and 36 months.",
    deliverables: [
      "Success Profile Document (not a job description)",
      "Compensation Benchmark & Market Positioning Analysis",
      "Search Strategy & Timeline",
      "Candidate Assessment Framework",
    ],
    differentiator:
      "Most firms work from a job description. We work backwards from business outcomes — what must this hire accomplish for the search to be considered a success?",
  },
  {
    num: "02",
    title: "Market Map & Longlist",
    subtitle: "Exhaustive Target Identification — No Blind Spots",
    color: "#14b8a6",
    accentRgb: "20,184,166",
    description:
      "We map every organization globally that employs leaders with the profile you need. This includes direct competitors, adjacent industries, academia, government, and private equity portfolios. The result is a 100-200 candidate market map — comprehensive enough that you can be confident no stone was left unturned.",
    deliverables: [
      "Target Company Map (by region, industry, function)",
      "Longlist of 100-200 Potential Candidates",
      "Market Talent Availability Assessment",
      "Pipeline Diversity Analysis",
    ],
    differentiator:
      "We don't stop at 'people we already know.' We identify every possible candidate — then approach them discretely, even if they've never applied for a job.",
  },
  {
    num: "03",
    title: "Confidential Approach",
    subtitle: "Discretion That Protects Both Sides",
    color: "#f59e0b",
    accentRgb: "245,158,11",
    description:
      "We approach passive candidates under NDA — protecting their confidentiality and your company's reputation. Every outreach is personalized, referencing the candidate's specific achievements and the strategic opportunity, not just a generic 'we have a role.' For sensitive searches (CEO succession, replacement searches), we use third-party intermediaries and graduated disclosure protocols.",
    deliverables: [
      "Personalized Candidate Outreach (written + verbal)",
      "Disclosure-Level Management for Sensitive Roles",
      "Candidate Interest & Qualification Screening",
      "Weekly Pipeline Updates",
    ],
    differentiator:
      "In 15+ years, we've never had a confidential search leaked. Our approach protocol is a competitive advantage for sensitive mandates.",
  },
  {
    num: "04",
    title: "Deep Assessment",
    subtitle: "Competency-Based, Psychometric, and Reference-Verified",
    color: "#2d8a7a",
    accentRgb: "45,138,122",
    description:
      "We go 3-5 layers deeper than standard reference checks. Every shortlisted candidate undergoes competency-based behavioral interviewing, psychometric profiling (Hogan, MBTI, or client-preferred tools), and structured 360° referencing — including back-channel references the candidate hasn't provided. The output is a comprehensive assessment report, not a summary of interviews.",
    deliverables: [
      "Competency-Based Interview Report (per candidate)",
      "Psychometric Profile & Leadership Style Analysis",
      "Structured 360° Reference Report (8-12 referees)",
      "Shortlist of 3-5 Fully Qualified Candidates",
    ],
    differentiator:
      "Our reference process goes beyond 'would you rehire this person?' We triangulate across supervisors, peers, direct reports, and external stakeholders.",
  },
  {
    num: "05",
    title: "Offer & Close",
    subtitle: "From Negotiation to Acceptance — De-Risked",
    color: "#a855f7",
    accentRgb: "168,85,247",
    description:
      "The final stage is where most searches fail. We manage the offer process end-to-end: compensation benchmarking against the candidate's current package and market data, structuring earn-outs and equity, managing counter-offers, and supporting the candidate's resignation transition. Our 95% offer-acceptance rate reflects this rigor.",
    deliverables: [
      "Compensation & Equity Benchmarking",
      "Offer Letter Structuring & Review",
      "Counter-Offer Risk Mitigation Plan",
      "Resignation & Transition Support for Candidate",
    ],
    differentiator:
      "We preempt counter-offers before they happen. Every candidate is coached through the counter-offer likelihood and has already declined it mentally before receiving it.",
  },
  {
    num: "06",
    title: "Integration & Guarantee",
    subtitle: "12 Months of Active Support — Not Just a Check-In",
    color: "#f43f5e",
    accentRgb: "244,63,94",
    description:
      "Placement is not the finish line. We provide structured integration support: 30/60/90-day stakeholder feedback cycles, onboarding coaching, and quarterly check-ins throughout the 12-month guarantee period. If the placement doesn't work out for any reason within 12 months, we restart the search at no additional professional fee.",
    deliverables: [
      "30/60/90-Day Integration Plan",
      "Quarterly Stakeholder Feedback Reports",
      "Executive Coaching Referral (if needed)",
      "12-Month Replacement Guarantee",
    ],
    differentiator:
      "Our average placement stays 3+ years. Our guarantee isn't a 'free replacement' promise — it's an active integration program that makes replacements rare.",
  },
];

export default function MethodologyPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.05]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.04]"
          style={{ background: "var(--hg-color-secondary)", transform: "translate(-20%, 30%)" }} />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            Our Methodology
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight">
            How We Deliver — The{" "}
            <span style={{ color: "var(--hg-color-accent)" }}>Retained Search</span>{" "}
            Methodology
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-3xl mx-auto">
            Six stages. Three to five finalists. Twelve months of post-placement support.
            Every search follows a proven framework — calibrated to your specific business context.
          </p>
        </div>
      </section>

      {/* ═══ STEPS ═══ */}
      {steps.map((step, i) => (
        <section
          key={step.num}
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            background: i % 2 === 0 ? "var(--hg-color-bg)" : "#ffffff",
          }}
        >
          <div className="relative container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Step number + title */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <p className="text-7xl md:text-8xl font-black tracking-tighter mb-2 select-none"
                    style={{ fontFamily: "var(--hg-font-heading)", color: step.color, opacity: 0.12 }}>
                    {step.num}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight mb-1">
                    {step.title}
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: step.color }}>
                    {step.subtitle}
                  </p>
                  {/* Timeline connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block mt-8">
                      <div className="w-[2px] h-16 rounded-full ml-4 opacity-20"
                        style={{ background: `linear-gradient(180deg, ${step.color}, transparent)` }} />
                    </div>
                  )}
                </div>
              </div>

              {/* Detail */}
              <div className="lg:col-span-8">
                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "var(--hg-color-text-secondary)" }}>
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="rounded-2xl p-6 md:p-8 mb-6"
                  style={{ background: `rgba(${step.accentRgb},0.04)`, border: `1px solid rgba(${step.accentRgb},0.12)` }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: step.color }}>
                    Deliverables at This Stage
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: `rgba(${step.accentRgb},0.12)` }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={step.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium" style={{ color: "var(--hg-color-text-primary)" }}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Differentiator */}
                <div className="p-5 rounded-xl" style={{ background: "rgba(10,47,42,0.03)", border: "1px solid rgba(10,47,42,0.06)" }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "var(--hg-color-text-secondary)" }}>
                    What Makes This Different
                  </p>
                  <p className="text-sm leading-relaxed font-medium italic" style={{ color: "var(--hg-color-text-primary)" }}>
                    &ldquo;{step.differentiator}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.02]" />
        <div className="absolute bottom-0 left-1/2 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.04]"
          style={{ background: "var(--hg-color-secondary)", transform: "translate(-50%, 30%)" }} />

        <div className="relative container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              Retained vs. Contingent
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white hg-heading tracking-tight">
              Why <span style={{ color: "var(--hg-color-accent)" }}>Retained Search</span> Produces Better Outcomes
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                  <th className="py-4 pr-6 text-sm font-bold text-white/60 uppercase tracking-[0.1em]">Dimension</th>
                  <th className="py-4 pr-6 text-sm font-bold" style={{ color: "var(--hg-color-accent)" }}>
                    <span className="inline-block w-2 h-2 rounded-full mr-2" style={{ background: "var(--hg-color-accent)" }} />
                    Retained Search (Our Model)
                  </th>
                  <th className="py-4 text-sm font-bold text-white/30 uppercase tracking-[0.1em]">Contingent Search</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Engagement", "Exclusive — one firm, one mandate, dedicated team", "Non-exclusive — multiple firms competing, first to submit wins"],
                  ["Candidate Pool", "100-200 proactively identified, including passive candidates not looking to move", "Active job seekers + recruiter's existing database"],
                  ["Depth of Assessment", "Competency-based interviews + psychometrics + 8-12 structured references", "Resume review + basic interview + 2-3 standard references"],
                  ["Confidentiality", "NDA-protected, graduated disclosure for sensitive mandates", "Limited confidentiality controls"],
                  ["Time to Shortlist", "2-4 weeks for a thorough market map and longlist", "1-2 weeks (speed prioritized over depth)"],
                  ["Guarantee", "12-month replacement guarantee with active integration support", "Typically 90-day replacement guarantee"],
                  ["Fee Structure", "1/3 on engagement, 1/3 on shortlist, 1/3 on placement — aligned incentives", "100% on placement — speed-driven incentive"],
                  ["Best For", "Board, C-Suite, VP, and business-critical roles", "Mid-level and junior roles"],
                ].map(([dim, retained, contingent]) => (
                  <tr key={dim} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }} className="transition-colors duration-200 hover:bg-white/[0.02]">
                    <td className="py-4 pr-6 text-xs font-bold text-white/50 uppercase tracking-[0.1em]">{dim}</td>
                    <td className="py-4 pr-6 text-sm text-white/80">{retained}</td>
                    <td className="py-4 text-sm text-white/35">{contingent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hg-color-bg)" }}>
        <div className="relative container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-4">
            Ready to see our methodology in action?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--hg-color-text-secondary)" }}>
            Every engagement begins with a confidential conversation. We'll walk you through how we'd approach your specific search — including a preliminary market map — before you commit to anything.
          </p>
          <Link href="/contact" className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
            Discuss a Search
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
