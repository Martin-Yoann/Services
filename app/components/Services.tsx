import Link from "next/link";
import { ChevronRight } from "@/app/components/Icons";
import { STATS } from "@/app/data/site";

const flagshipService = {
  id: "exec-search",
  title: "Executive Search",
  subtitle: "Retained C-Suite & VP-Level Leadership",
  description:
    "Confidential, retained mandates for board directors, C-suite executives, and senior vice presidents. We work exclusively — one firm, one mandate, one dedicated team — with a 12-month placement guarantee and integrated onboarding support.",
  features: [
    "Board Director & C-Suite mandates",
    "Exclusive retained engagement model",
    "Confidential market mapping & passive candidate outreach",
    "Competency-based assessment + psychometric profiling",
    "360° reference verification (8-12 referees per candidate)",
    "12-month post-placement guarantee with active support",
  ],
  href: "/services/executive-search",
  accent: "#D96C57",
  accentRgb: "217,108,87",
  stat: { value: STATS.executivePlacements, label: "Executive Placements" },
};

const otherServices = [
  {
    id: "prof-recruit",
    title: "Professional Recruitment",
    subtitle: "Mid-to-Senior Specialist Talent",
    description:
      "Targeted recruitment for senior managers, directors, and highly specialized individual contributors. Multi-channel sourcing, 24-hour initial response, diversity slate commitment.",
    features: [
      "Senior Manager to Director-level roles",
      "Multi-channel sourcing & proactive headhunting",
      "Skills verification & competency screening",
      "Diversity slate (min 30% diverse candidates)",
    ],
    href: "/services/professional-recruitment",
    accent: "#14b8a6",
    accentRgb: "20,184,166",
  },
  {
    id: "talent-advisory",
    title: "Talent Advisory",
    subtitle: "Strategic Workforce & Org Consulting",
    description:
      "Compensation benchmarking, org design, workforce planning, and market intelligence. Data-driven consulting that de-risks your hiring decisions before you make them.",
    features: [
      "Compensation benchmarking & salary band design",
      "Organizational structure & role architecture",
      "Market intelligence & talent landscape reports",
      "Cross-border workforce compliance",
    ],
    href: "/services/talent-advisory",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
  },
];

export default function Services() {
  return (
    <>
      {/* ═══ FLAGSHIP: Executive Search (hero-tier) ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, var(--hg-color-bg) 100%)" }}>
        <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.015]" />
        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--hg-color-secondary)" }}>
              Our Services
            </p>
            <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight">
              Leadership Talent, <span style={{ color: "var(--hg-color-accent)" }}>Delivered</span>
            </h2>
          </div>

          {/* Flagship card — spans full width with image-like layout */}
          <Link href={flagshipService.href} className="group block mb-10">
            <div className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 8px 40px rgba(10,47,42,0.06)" }}>
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: `linear-gradient(90deg, ${flagshipService.accent}, var(--hg-color-secondary))` }} />
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left: branding block */}
                <div className="lg:col-span-2 p-10 md:p-12 flex flex-col justify-center"
                  style={{ background: `linear-gradient(135deg, rgba(${flagshipService.accentRgb},0.06), rgba(10,47,42,0.02))` }}>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3 px-3 py-1.5 rounded-full w-fit"
                    style={{ color: flagshipService.accent, background: `rgba(${flagshipService.accentRgb},0.1)`, border: `1px solid rgba(${flagshipService.accentRgb},0.15)` }}>
                    Flagship Service
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold hg-heading mb-2">{flagshipService.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] mb-4" style={{ color: flagshipService.accent }}>
                    {flagshipService.subtitle}
                  </p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--hg-color-text-secondary)" }}>
                    {flagshipService.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-center rounded-xl px-5 py-3" style={{ background: `rgba(${flagshipService.accentRgb},0.08)` }}>
                      <p className="text-3xl font-black hg-heading" style={{ color: flagshipService.accent }}>{flagshipService.stat.value}</p>
                      <p className="text-[9px] font-bold uppercase tracking-[0.12em]" style={{ color: "var(--hg-color-text-secondary)" }}>{flagshipService.stat.label}</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3" style={{ color: flagshipService.accent }}>
                      Explore Executive Search
                      <ChevronRight size={15} />
                    </span>
                  </div>
                </div>
                {/* Right: features */}
                <div className="lg:col-span-3 p-10 md:p-12 flex flex-col justify-center">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {flagshipService.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-semibold" style={{ color: "var(--hg-color-text-primary)" }}>
                        <div className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: `rgba(${flagshipService.accentRgb},0.12)` }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={flagshipService.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Hover glow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-16 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.04] transition-all duration-500"
                style={{ background: flagshipService.accent }} />
            </div>
          </Link>

          {/* Other services — 2 column cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherServices.map((svc) => (
              <Link key={svc.id} href={svc.href} className="group block">
                <div className="relative rounded-2xl p-8 h-full flex flex-col transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 4px 20px rgba(18,67,63,0.02)" }}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl origin-left transition-all duration-500 group-hover:scale-x-100"
                    style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)`, transform: "scaleX(0.25)" }} />

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 mt-1" style={{ color: svc.accent }}>{svc.subtitle}</p>
                  <h3 className="text-xl font-bold hg-heading mb-3">{svc.title}</h3>
                  <p className="text-sm leading-relaxed hg-text-secondary mb-6 flex-1">{svc.description}</p>

                  <ul className="space-y-2.5 mb-6 border-t pt-5" style={{ borderColor: "var(--hg-color-border)" }}>
                    {svc.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-semibold" style={{ color: "var(--hg-color-text-primary)" }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0 group-hover:scale-125 transition-transform duration-300" style={{ background: svc.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3" style={{ color: svc.accent }}>
                    Explore {svc.title}
                    <ChevronRight size={14} />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-16 rounded-full blur-3xl opacity-0 group-hover:opacity-[0.06] transition-all duration-500" style={{ background: svc.accent }} />
                </div>
              </Link>
            ))}
          </div>

          {/* Methodology link */}
          <div className="text-center mt-10">
            <Link href="/methodology" className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
              style={{ color: "var(--hg-color-text-secondary)" }}>
              Learn about our retained search methodology
              <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ DIFFERENTIATORS ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.04] pointer-events-none" style={{ background: "var(--hg-color-accent)" }} />

        <div className="relative container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-14">
            {[
              { title: "Global Reach", desc: "13 cities, 3 continents, 5+ languages — local expertise, global scale for cross-border leadership placement.", accent: "#D96C57" },
              { title: "Speed & Quality", desc: "30-day average time-to-close. 3-5 thoroughly vetted finalists per role, each pre-qualified against your success profile.", accent: "#14b8a6" },
              { title: "Proven Retention", desc: "95% of placements stay beyond 12 months. Our 12-month guarantee includes active integration support — not just a replacement promise.", accent: "#f59e0b" },
            ].map((item) => (
              <div key={item.title} className="group text-center p-8 rounded-2xl cursor-default hg-card-lift"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-3 h-3 rounded-full mx-auto mb-4" style={{ background: item.accent }} />
                <h3 className="text-sm font-bold text-white mb-3 hg-heading">{item.title}</h3>
                <p className="text-xs leading-relaxed text-white/45">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center max-w-md mx-auto">
            <Link href="/contact" className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group hg-gradient-coral"
              style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
              Start a Search
              <ChevronRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
