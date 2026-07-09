/* ── Modern tech-forward value proposition cards ── */

const points = [
  {
    id: "01",
    title: "Executive Search",
    subtitle: "Leadership Hiring",
    description:
      "C-suite, VP, and Director-level placements across U.S., China, and global markets — powered by deep regional networks and proprietary talent mapping.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M5.6 21.3a7 7 0 0 1 12.8 0" />
        <line x1="12" y1="2" x2="12" y2="4" />
      </svg>
    ),
    accent: "#5dadec",
    accentRgb: "93,173,236",
  },
  {
    id: "02",
    title: "Professional Recruitment",
    subtitle: "Specialist Talent",
    description:
      "Mid-to-senior specialist hiring across technology, sales, finance, and operations — fast, precise, and culture-aligned permanent placements.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <circle cx="8.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="10.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    accent: "#14b8a6",
    accentRgb: "20,184,166",
  },
  {
    id: "03",
    title: "Talent Advisory",
    subtitle: "Strategic Consulting",
    description:
      "Compensation benchmarking, org design, workforce planning, and market intelligence — data-driven advisory for your global talent strategy.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <polyline points="3 14 6 11 9 14" />
        <polyline points="9 4 12 1 15 4" />
        <polyline points="15 10 18 7 21 10" />
      </svg>
    ),
    accent: "#f59e0b",
    accentRgb: "245,158,11",
  },
  {
    id: "04",
    title: "Cross-Border Expertise",
    subtitle: "Global Reach",
    description:
      "Localized hiring with global standards — we bridge U.S., China, and international markets with cultural fluency and compliance mastery.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    ),
    accent: "#a855f7",
    accentRgb: "168,85,247",
  },
];

export default function KeyPoints() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hg-color-bg)" }}>
      {/* Subtle dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1.5px 1.5px, #09233f 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* ── Section header ── */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "var(--hg-color-secondary)",
              background: "rgba(14,138,154,0.08)",
              border: "1px solid rgba(14,138,154,0.15)",
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}
          >
            Built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #5dadec, #0e8a9a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              global
            </span>{" "}
            talent
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--hg-color-text-secondary)" }}>
            Deep market knowledge, proven methodology, and a relentless focus on quality.
          </p>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {points.map((point, i) => (
            <div
              key={point.id}
              className="hg-keypoint-card group relative"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-500 origin-left group-hover:scale-x-100"
                style={{
                  background: `linear-gradient(90deg, ${point.accent}, transparent)`,
                  transform: "scaleX(0.3)",
                }}
              />

              <div className="relative z-10 p-7 pt-8">
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-[11px] font-bold uppercase tracking-[0.15em]"
                    style={{ color: "var(--hg-color-text-secondary)", opacity: 0.5 }}
                  >
                    {point.subtitle}
                  </span>
                  <span
                    className="text-3xl font-bold opacity-15 transition-opacity duration-500 group-hover:opacity-25"
                    style={{
                      fontFamily: "var(--hg-font-heading)",
                      color: point.accent,
                    }}
                  >
                    {point.id}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: `rgba(${point.accentRgb},0.1)`,
                    color: point.accent,
                    boxShadow: `0 0 0 0 rgba(${point.accentRgb},0)`,
                  }}
                >
                  {point.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3 tracking-tight"
                  style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}
                >
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "var(--hg-color-text-secondary)" }}>
                  {point.description}
                </p>

                {/* Bottom indicator dot */}
                <div className="mt-6 flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full transition-all duration-500 group-hover:w-6"
                    style={{ background: point.accent }}
                  />
                  <div className="w-4 h-px opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{ background: point.accent }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom stat highlight ── */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 md:p-10 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(93,173,236,0.06), rgba(14,138,154,0.04))",
              border: "1px solid rgba(93,173,236,0.12)",
            }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
              {[
                { v: "500+", l: "Annual Placements" },
                { v: "30d", l: "Avg. Time-to-Hire" },
                { v: "95%", l: "Retention Rate" },
                { v: "8+", l: "Market Hubs" },
              ].map((s, i) => (
                <div key={s.l} className="group/stat">
                  <p
                    className="text-3xl md:text-4xl font-bold mb-1 transition-all duration-300"
                    style={{
                      fontFamily: "var(--hg-font-heading)",
                      color: points[i]?.accent ?? "#5dadec",
                    }}
                  >
                    {s.v}
                  </p>
                  <p
                    className="text-xs uppercase tracking-[0.12em] font-semibold"
                    style={{ color: "var(--hg-color-text-secondary)" }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
