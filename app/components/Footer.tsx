import Link from "next/link";
import { EmailIcon, LinkedInIcon, XIcon } from "@/app/components/Icons";

const footerLinks = {
  services: [
    { label: "Executive Search", href: "/services/executive-search" },
    {
      label: "Professional Recruitment",
      href: "/services/professional-recruitment",
    },
    { label: "Talent Advisory", href: "/services/talent-advisory" },
  ],
  company: [
    { label: "Our Team", href: "/team" },
    { label: "Track Record", href: "/track-record" },
    { label: "Why Us", href: "/why-us" },
    { label: "Industries", href: "/industries" },
    { label: "Global Coverage", href: "/global-coverage" },
    { label: "Contact", href: "/contact" },
  ],
};

const locations = [
  { city: "Dallas", region: "North America HQ", flag: "🇺🇸" },
  { city: "San Jose", region: "Silicon Valley", flag: "🇺🇸" },
  { city: "Shanghai", region: "Asia-Pacific HQ", flag: "🇨🇳" },
];

const stats = [
  { v: "500+", l: "Placements Annually", color: "#D96C57" },
  { v: "95%", l: "Retention Rate", color: "#14b8a6" },
  { v: "30d", l: "Avg. Time-to-Hire", color: "#f59e0b" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#061410] text-white overflow-hidden">
      {/* ═══ LAYERED BACKGROUNDS ═══ */}

      {/* Fine tech grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(217,108,87,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.25) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Three soft glow orbs for depth */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none opacity-[0.04]"
        style={{
          background: "#D96C57",
          transform: "translate(30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[160px] pointer-events-none opacity-[0.03]"
        style={{
          background: "#2d8a7a",
          transform: "translate(-20%, 30%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none opacity-[0.025]"
        style={{
          background: "#14b8a6",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* ═══ TOP ACCENT LINE ═══ */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, #D96C57 20%, #2d8a7a 80%, transparent)",
        }}
      />

      <div className="relative container mx-auto px-6">
        {/* ═══ MAIN GRID ═══ */}
        <div className="pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* ── BRAND COLUMN (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center group w-fit mb-6">
                <img
                  src="/HGS-white.svg"
                  alt="Happy Global"
                  className="h-11 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/55 max-w-sm mb-8">
                Executive search, professional recruitment, and talent advisory
                for companies expanding globally. We connect leadership across
                borders.
              </p>

              {/* Animated stats row */}
              <div className="flex gap-8 mb-10">
                {stats.map((s) => (
                  <div key={s.l} className="group/stat cursor-default">
                    <p
                      className="text-2xl font-black transition-colors duration-300 group-hover/stat:brightness-125"
                      style={{
                        fontFamily: "var(--hg-font-heading)",
                        color: s.color,
                      }}
                    >
                      {s.v}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/40 mt-1 leading-tight max-w-[80px]">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>

              {/* Location cards */}
              <div className="flex flex-wrap gap-3">
                {locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="rounded-xl px-4 py-3 transition-all duration-300 hover:bg-white/[0.06] cursor-default"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-xs font-bold text-white/80 flex items-center gap-1.5">
                      <span className="text-xs">{loc.flag}</span>
                      {loc.city}
                    </p>
                    <p className="text-[10px] text-white/35 mt-1">
                      {loc.region}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── LINKS COLUMNS (7 cols) ── */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
              {/* Services */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6">
                  Services
                </h4>
                <ul className="space-y-3.5">
                  {footerLinks.services.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="hg-link-underline group/link inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-all duration-300"
                      >
                        <span
                          className="w-0 group-hover/link:w-3 h-[1.5px] rounded-full transition-all duration-300"
                          style={{ background: "#D96C57" }}
                        />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6">
                  Company
                </h4>
                <ul className="space-y-3.5">
                  {footerLinks.company.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="hg-link-underline group/link inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-all duration-300"
                      >
                        <span
                          className="w-0 group-hover/link:w-3 h-[1.5px] rounded-full transition-all duration-300"
                          style={{ background: "#D96C57" }}
                        />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact + Social */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mb-6">
                  Connect
                </h4>
                <ul className="space-y-3.5 text-sm text-white/60">
                  <li>
                    <a
                      href="mailto:info@happyglobalservice.com"
                      className="hover:text-white transition-colors duration-200"
                    >
                      info@happyglobalservice.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+16698713588"
                      className="hover:text-white transition-colors duration-200"
                    >
                      +1 669 871 3588
                    </a>
                  </li>
                </ul>

                {/* Social icons */}
                <div className="flex items-center gap-2 mt-5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/12 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon size={14} />
                  </a>
                  <a
                    href="mailto:info@happyglobalservice.com"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/12 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    aria-label="Email"
                  >
                    <EmailIcon size={14} />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/12 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    aria-label="X / Twitter"
                  >
                    <XIcon size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ BOTTOM BAR ═══ */}
        <div
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2 text-xs text-white/30">
            <span>&copy; {year} Happy Global. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-white/35">
            <Link
              href="/privacy-policy"
              className="hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white/60 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-white/15 hidden sm:inline">|</span>
            <span className="hidden sm:inline text-white/20">
              Global Talent Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
