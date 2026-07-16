import Link from "next/link";
import { STATS } from "@/app/data/site";

/* ── Modern Why Us — merged KeyPoints card design + deep differentiators ── */

const advantages = [
  {
    id: "01",
    title: "U.S. Market Expertise",
    subtitle: "Local Knowledge",
    description:
      "Deep understanding of American talent markets, compensation structures, and hiring practices across Dallas, San Jose, Los Angeles, Seattle, and Chicago.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    accent: "#D96C57",
    accentRgb: "217,108,87",
  },
  {
    id: "02",
    title: "China-U.S. Bridge",
    subtitle: "Cross-Cultural",
    description:
      "Proven experience helping Chinese companies build U.S. leadership teams — we navigate both business cultures and talent ecosystems fluently.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
        <path d="M12 2a15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0 4 10" />
      </svg>
    ),
    accent: "#14b8a6",
    accentRgb: "20,184,166",
  },
  {
    id: "03",
    title: "Global Talent Network",
    subtitle: "Worldwide Access",
    description:
      "Access to passive candidates and real-time market intelligence across U.S., China, UK, Canada, and beyond — powered by our distributed research team.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "#f59e0b",
    accentRgb: "245,158,11",
  },
  {
    id: "04",
    title: "Strategic Execution",
    subtitle: "End-to-End",
    description:
      "Beyond recruitment: market mapping, org design, salary benchmarking, and onboarding support — ensuring every hire drives sustainable growth.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    accent: "#a855f7",
    accentRgb: "168,85,247",
  },
];

const values = [
  {
    title: "Quality Over Volume",
    desc: "We present 3–5 thoroughly vetted candidates per role, not a flood of resumes. Every profile we submit has been assessed for competency, culture fit, and motivation.",
  },
  {
    title: "Transparency",
    desc: "Real-time search progress updates, candid market feedback, and honest timeline estimates — no black boxes, no surprises.",
  },
  {
    title: "Long-Term Partnership",
    desc: "12-month placement guarantees, post-hire integration support, and ongoing market counsel. Your growth is our reputation.",
  },
];

const stats = [
  { v: "500+", l: "Annual Placements", color: "#D96C57" },
  { v: "95%", l: "Retention Rate", color: "#14b8a6" },
  { v: "30d", l: "Avg. Time-to-Hire", color: "#f59e0b" },
  { v: "8+", l: "Market Hubs", color: "#a855f7" },
];

export default function WhyUs() {
  return (
    <>
      {/* ── Section A: Core Differentiators ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hg-color-bg)" }}>
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full"
              style={{
                color: "var(--hg-color-secondary)",
                background: "rgba(45,138,122,0.08)",
                border: "1px solid rgba(45,138,122,0.15)",
              }}
            >
              What Sets Us Apart
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
              style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}
            >
              Different by{" "}
              <span style={{ background: "linear-gradient(135deg, #D96C57, #2d8a7a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                design
              </span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--hg-color-text-secondary)" }}>
              Four pillars that define how we deliver — and why clients stay with us for over a decade.
            </p>
          </div>

          {/* 4 advantage cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {advantages.map((adv) => (
              <div key={adv.id} className="hg-whyus-card group relative">
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-500 origin-left group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${adv.accent}, transparent)`, transform: "scaleX(0.3)" }}
                />

                <div className="relative z-10 p-7 pt-8">
                  {/* Label + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "var(--hg-color-text-secondary)", opacity: 0.5 }}>
                      {adv.subtitle}
                    </span>
                    <span
                      className="text-3xl font-bold opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                      style={{ fontFamily: "var(--hg-font-heading)", color: adv.accent }}
                    >
                      {adv.id}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                    style={{ background: `rgba(${adv.accentRgb},0.1)`, color: adv.accent }}
                  >
                    {adv.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}>
                    {adv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed" style={{ color: "var(--hg-color-text-secondary)" }}>
                    {adv.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full transition-all duration-500 group-hover:w-6" style={{ background: adv.accent }} />
                    <div className="w-4 h-px opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: adv.accent }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section B: Stats Bar ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(217,108,87,0.06), rgba(45,138,122,0.04))",
                border: "1px solid rgba(217,108,87,0.12)",
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
                {stats.map((s) => (
                  <div key={s.l}>
                    <p className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: "var(--hg-font-heading)", color: s.color }}>
                      {s.v}
                    </p>
                    <p className="text-xs uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--hg-color-text-secondary)" }}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section C: Our Values ── */}
      <section className="py-20 md:py-28" style={{ background: "var(--hg-color-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full"
              style={{ color: "var(--hg-color-secondary)", background: "rgba(45,138,122,0.08)", border: "1px solid rgba(45,138,122,0.15)" }}
            >
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}>
              How we work
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "var(--hg-color-text-secondary)" }}>
              Three principles that guide every search, every engagement, every relationship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group relative bg-white rounded-2xl border border-[#d8e1ea] p-8 cursor-default hg-card-lift hover:border-transparent"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold mb-5"
                  style={{ fontFamily: "var(--hg-font-heading)", background: `rgba(${["217,108,87","20,184,166","245,158,11"][i]},0.1)`, color: ["#D96C57","#14b8a6","#f59e0b"][i] }}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}>
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--hg-color-text-secondary)" }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section D: CTA ── */}
      <section className="py-16 bg-linear-to-r from-[#0a2f2a] to-[#1a5a73]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--hg-font-heading)" }}>
            Experience the difference
          </h2>
          <p className="text-lg text-white/60 max-w-lg mx-auto mb-8">
            Let&apos;s discuss how our approach can help you build the team you need.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg, #D96C57, #2d8a7a)", boxShadow: "0 4px 20px rgba(45,138,122,0.35)" }}
          >
            Start a Conversation
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
