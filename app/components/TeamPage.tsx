import Link from "next/link";
import { partners, type TeamMember } from "@/app/data/team";
import { ChevronRight } from "@/app/components/Icons";

function PartnerCard({ member }: { member: TeamMember }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-[var(--hg-color-border)] p-8 overflow-hidden hg-card-lift">
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full origin-left transition-all duration-500 group-hover:scale-x-100"
        style={{ background: "linear-gradient(90deg, var(--hg-color-accent), transparent)", transform: "scaleX(0.25)" }} />

      <div className="pt-2">
        {/* Avatar + Name section */}
        <div className="flex items-start gap-5 mb-5">
          {/* Gradient avatar */}
          <div className="w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center text-white text-xl font-black transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(135deg, var(--hg-color-accent), var(--hg-color-secondary))", fontFamily: "var(--hg-font-heading)" }}>
            {member.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <h3 className="text-lg font-bold" style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}>
              {member.name}
            </h3>
            <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--hg-color-accent)" }}>
              {member.title}
            </p>
            <p className="text-[11px] mt-1" style={{ color: "var(--hg-color-text-secondary)" }}>
              📍 {member.location}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--hg-color-text-secondary)" }}>
          {member.bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {member.focus.map((f) => (
            <span key={f} className="text-[10px] font-bold px-2.5 py-1 rounded-md"
              style={{ background: "var(--hh-color-accent-lighter)", color: "var(--hg-color-accent)" }}>
              {f}
            </span>
          ))}
          {member.industries.map((i) => (
            <span key={i} className="text-[10px] font-semibold px-2.5 py-1 rounded-md"
              style={{ background: "var(--hh-color-primary-lighter)", color: "var(--hg-color-primary)" }}>
              {i}
            </span>
          ))}
        </div>


      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.06]"
          style={{ background: "var(--hg-color-accent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.04]"
          style={{ background: "var(--hg-color-secondary)", transform: "translate(-20%, 30%)" }} />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
            Our Team
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight">
            Partners Who&apos;ve <span style={{ color: "var(--hg-color-accent)" }}>Been There</span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-2xl mx-auto mb-8">
            Our partners support executive searches with sector knowledge, market research, and direct candidate engagement. We work with you to understand the role and your business needs.
          </p>

          {/* Stats bar */}

        </div>
      </section>

      {/* ═══ PARTNER CARDS ═══ */}
      <section className="relative py-20 md:py-28" style={{ background: "var(--hg-color-bg)" }}>
        <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.015]" />
        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--hg-color-secondary)" }}>
              Meet the Partners
            </p>
            <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight">
              Deep Expertise, <span style={{ color: "var(--hg-color-accent)" }}>Proven Track Record</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((p) => (
              <PartnerCard key={p.id} member={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ADVISORY BOARD ═══ */}
      {/* <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "#061410" }}>
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.02]" />
        <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.04]"
          style={{ background: "var(--hg-color-secondary)", transform: "translate(-50%, 30%)" }} />

        <div className="relative container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
              Advisory Board
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white hg-heading tracking-tight">
              Guided by <span style={{ color: "var(--hg-color-accent)" }}>Industry Veterans</span>
            </h2>
            <p className="text-sm text-white/45 max-w-xl mx-auto mt-3">
              Our advisors contribute sector perspectives to help align search priorities with business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {advisoryBoard.map((advisor) => (
              <div key={advisor.role} className="p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center text-sm font-black text-white"
                    style={{ background: "linear-gradient(135deg, rgba(217,108,87,0.7), rgba(45,138,122,0.7))" }}>
                    {advisor.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white hg-heading">{advisor.name}</h3>
                    <p className="text-[11px] font-semibold mt-0.5" style={{ color: "var(--hg-color-accent)" }}>{advisor.role}</p>
                    <p className="text-xs leading-relaxed text-white/50 mt-3">{advisor.bio}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {advisor.industries.map((ind) => (
                        <span key={ind} className="text-[9px] font-semibold px-2 py-0.5 rounded-md text-white/50"
                          style={{ background: "rgba(255,255,255,0.06)" }}>{ind}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "var(--hg-color-bg)" }}>
        <div className="relative container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-4">
            Ready to work with partners who <span style={{ color: "var(--hg-color-accent)" }}>understand your business</span>?
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--hg-color-text-secondary)" }}>
            Every engagement starts with a confidential conversation about your goals — no obligation, no sales pitch.
          </p>
          <Link href="/contact" className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{ boxShadow: "0 4px 24px rgba(217,108,87,0.35)" }}>
            Schedule a Confidential Call
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
