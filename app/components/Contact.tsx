"use client";

import { useState } from "react";

/* ── Interactive stat counter ── */
function useCountUp(target: number, trigger: boolean) {
  const [val, setVal] = useState(0);
  useState(() => {
    if (!trigger) return;
    let raf: number;
    let cancelled = false;
    const start = performance.now();
    const tick = (now: number) => {
      if (cancelled) return;
      const p = Math.min((now - start) / 1000, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelled = true; cancelAnimationFrame(raf); };
  });
  return val;
}

const officeCards = [
  { city: "Dallas", region: "North America HQ", flag: "🇺🇸", timezone: "CST (UTC-6)", accent: "#D96C57" },
  { city: "San Jose", region: "Silicon Valley", flag: "🇺🇸", timezone: "PST (UTC-8)", accent: "#14b8a6" },
  { city: "Shanghai", region: "Asia-Pacific HQ", flag: "🇨🇳", timezone: "CST (UTC+8)", accent: "#f59e0b" },
];

const services = [
  { icon: "🔍", label: "Executive Search", desc: "C-suite & VP-level placements" },
  { icon: "👥", label: "Professional Recruitment", desc: "Specialist mid-to-senior talent" },
  { icon: "📊", label: "Talent Advisory", desc: "Strategy, benchmarking & planning" },
];

const faqs = [
  { q: "What's the typical timeline for an executive search?", a: "Executive searches average 30 days from kickoff to accepted offer, depending on role complexity and market conditions." },
  { q: "Do you work on contingency or retained basis?", a: "Executive search engagements are retained. Professional recruitment can be structured as retained or contingent based on volume and urgency." },
  { q: "Which markets do you cover?", a: "North America (Dallas, San Jose, LA, Seattle, Chicago), China (Shanghai, Beijing, Shenzhen), and select hubs — London, Toronto, Singapore." },
  { q: "What's your placement guarantee?", a: "12-month guarantee on all placements. If a candidate leaves within the first year, we conduct a free replacement search." },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", phone: "", inquiryType: "hiring", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const placements = useCountUp(500, showStats);
  const retention = useCountUp(95, showStats);
  const days = useCountUp(30, showStats);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", inquiryType: "hiring", message: "" });
    }, 4000);
  };

  return (
    <>
      {/* ═══════════════ SECTION A: Stats strip ═══════════════ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden bg-white"
        onMouseEnter={() => setShowStats(true)}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "24px 24px" }}
        />
        <div className="relative container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: "var(--hg-font-heading)", color: "#0a2f2a" }}
          >
            Let&apos;s Build Your Team
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-12" style={{ color: "var(--hg-color-text-secondary)" }}>
            Reach out and tell us what you need. We&apos;ll match you with the right expertise.
          </p>

          {/* Animated stats */}
          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            {[
              { v: placements, suffix: "+", l: "Annual Placements", c: "#D96C57" },
              { v: retention, suffix: "%", l: "Retention Rate", c: "#14b8a6" },
              { v: days, suffix: "d", l: "Avg. Time-to-Hire", c: "#f59e0b" },
            ].map((s) => (
              <div key={s.l} className="group cursor-default">
                <p
                  className="text-3xl md:text-5xl font-black transition-all duration-500 group-hover:scale-110"
                  style={{ fontFamily: "var(--hg-font-heading)", color: s.c }}
                >
                  {s.v}
                  <span className="text-lg md:text-2xl opacity-50">{s.suffix}</span>
                </p>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] mt-1" style={{ color: "var(--hg-color-text-secondary)" }}>
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION B: Contact cards + form ═══════════════ */}
      <section className="relative py-16 md:py-24" style={{ background: "var(--hg-color-bg)" }}>
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
              {/* ── Left sidebar: info cards ── */}
              <div className="lg:col-span-2 space-y-5">
                {/* Office cards */}
                {officeCards.map((o) => (
                  <div
                    key={o.city}
                    className="group relative rounded-2xl p-5 transition-all duration-400 hover:-translate-y-1 cursor-default"
                    style={{
                      background: "var(--hg-color-surface)",
                      border: "1px solid var(--hg-color-border)",
                      boxShadow: "0 2px 16px rgba(10,47,42,0.03)",
                    }}
                  >
                    <div
                      className="absolute top-0 left-4 right-4 h-[2px] rounded-full transition-all duration-500 origin-left group-hover:scale-x-100"
                      style={{ background: `linear-gradient(90deg, ${o.accent}, transparent)`, transform: "scaleX(0.2)" }}
                    />
                    <div className="flex items-start gap-3 pt-1">
                      <span className="text-xl mt-0.5">{o.flag}</span>
                      <div>
                        <p className="font-bold text-sm" style={{ color: "#0a2f2a" }}>{o.city}</p>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] mt-0.5" style={{ color: "var(--hg-color-text-secondary)" }}>{o.region}</p>
                        <p className="text-[11px] mt-1" style={{ color: o.accent }}>{o.timezone}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Service quick-links */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(10,47,42,0.03)", border: "1px solid rgba(10,47,42,0.06)" }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#D96C57" }}>
                    Our Services
                  </p>
                  {services.map((svc) => (
                    <div key={svc.label} className="flex items-start gap-3 py-2.5 border-b border-black/5 last:border-0 group cursor-default">
                      <span className="text-lg group-hover:scale-110 transition-transform duration-300">{svc.icon}</span>
                      <div>
                        <p className="text-sm font-bold" style={{ color: "#0a2f2a" }}>{svc.label}</p>
                        <p className="text-[11px]" style={{ color: "var(--hg-color-text-secondary)" }}>{svc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Right: Form ── */}
              <div className="lg:col-span-3">
                <div
                  className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
                  style={{
                    background: "var(--hg-color-surface)",
                    border: "1px solid var(--hg-color-border)",
                    boxShadow: "0 4px 32px rgba(10,47,42,0.04)",
                  }}
                >
                  {/* Accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: "linear-gradient(90deg, #D96C57, #c45a47)" }}
                  />

                  {submitted ? (
                    <div className="text-center py-14">
                      <div className="relative inline-flex items-center justify-center mb-6">
                        <div className="absolute inset-0 w-20 h-20 rounded-full animate-ping opacity-10" style={{ background: "#D96C57" }} />
                        <div
                          className="relative w-16 h-16 rounded-full flex items-center justify-center"
                          style={{ background: "rgba(217,108,87,0.1)" }}
                        >
                          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D96C57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--hg-font-heading)", color: "#0a2f2a" }}>Thank you!</h3>
                      <p style={{ color: "var(--hg-color-text-secondary)" }}>We&apos;ve received your inquiry and will respond within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-xs font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: "#0a2f2a" }}>Full Name *</label>
                          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                            className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "var(--hg-color-border)", background: "var(--hg-color-bg)" }}
                            placeholder="Your name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: "#0a2f2a" }}>Work Email *</label>
                          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                            className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "var(--hg-color-border)", background: "var(--hg-color-bg)" }}
                            placeholder="your@company.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: "#0a2f2a" }}>Company *</label>
                          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required
                            className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "var(--hg-color-border)", background: "var(--hg-color-bg)" }}
                            placeholder="Company name" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: "#0a2f2a" }}>Phone</label>
                          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                            className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all"
                            style={{ borderColor: "var(--hg-color-border)", background: "var(--hg-color-bg)" }}
                            placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: "#0a2f2a" }}>Inquiry Type *</label>
                        <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange}
                          className="w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all"
                          style={{ borderColor: "var(--hg-color-border)", background: "var(--hg-color-bg)" }}>
                          <option value="hiring">Hiring Inquiry</option>
                          <option value="advisory">Talent Advisory</option>
                          <option value="partnership">Partnership</option>
                          <option value="candidate">Candidate Inquiry</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.1em] mb-1.5" style={{ color: "#0a2f2a" }}>Message *</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={4}
                          className="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                          style={{ borderColor: "var(--hg-color-border)", background: "var(--hg-color-bg)" }}
                          placeholder="Tell us about your hiring needs, role requirements, or any questions..." />
                      </div>

                      <button
                        type="submit"
                        className="w-full font-bold py-3.5 rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hg-gradient-coral cursor-pointer"
                        style={{ boxShadow: "0 4px 20px rgba(217,108,87,0.3)" }}
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: "#060e18" }}>
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(rgba(217,108,87,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(217,108,87,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-[0.04] pointer-events-none" style={{ background: "#D96C57" }} />

        <div className="relative container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <span
              className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full"
              style={{ color: "#D96C57", background: "rgba(217,108,87,0.06)", border: "1px solid rgba(217,108,87,0.1)" }}
            >
              FAQ
            </span>
            <h2
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--hg-font-heading)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl p-5 transition-all duration-300 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <summary className="text-sm font-bold text-white list-none flex items-center justify-between" style={{ fontFamily: "var(--hg-font-heading)" }}>
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-[#D96C57] transition-transform duration-300 group-open:rotate-180 shrink-0 ml-2"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="text-xs leading-relaxed text-white/50 mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
