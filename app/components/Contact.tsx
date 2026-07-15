"use client";

import { useState, useEffect, useRef } from "react";

const offices = [
  { city: "Dallas", role: "North America HQ", flag: "🇺🇸", tz: "CST", accent: "#D96C57" },
  { city: "San Jose", role: "Silicon Valley", flag: "🇺🇸", tz: "PST", accent: "#14b8a6" },
  { city: "Shanghai", role: "Asia-Pacific HQ", flag: "🇨🇳", tz: "CST", accent: "#f59e0b" },
];

const trustPoints = [
  { v: "500+", l: "Annual Placements" },
  { v: "30d", l: "Avg. Time-to-Hire" },
  { v: "95%", l: "Retention Rate" },
  { v: "24h", l: "Response Time" },
];

const faqs = [
  { q: "What's the typical timeline for an executive search?", a: "Most searches complete in 30 days from kickoff to accepted offer, depending on role complexity and market conditions." },
  { q: "Do you work on contingency or retained basis?", a: "Executive search is retained. Professional recruitment can be retained or contingent based on volume and urgency." },
  { q: "Which markets do you cover?", a: "North America (Dallas, San Jose, LA, Seattle, Chicago), China (Shanghai, Beijing, Shenzhen), plus London, Toronto, and Singapore." },
  { q: "What's your placement guarantee?", a: "12 months on every placement. If a candidate departs within the first year, we run a free replacement search." },
];

/* ── Scroll-triggered fade-up ── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", inquiryType: "hiring", message: "" });
  const [sent, setSent] = useState(false);
  const formReveal = useScrollReveal(0.1);
  const trustReveal = useScrollReveal(0.1);

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", phone: "", inquiryType: "hiring", message: "" });
    }, 4000);
  };

  return (
    <>
      {/* ═══════════════ HERO STRIP ═══════════════ */}
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#D96C57] mb-3">Start a Conversation</p>
            <h1 className="text-3xl md:text-5xl font-bold text-[#0a2f2a] mb-4" style={{ fontFamily: "var(--hg-font-heading)", lineHeight: 1.12 }}>
              Tell us about the role.<br className="sm:hidden" /> We&apos;ll find the leader.
            </h1>
            <p className="text-base md:text-lg text-[#5b6675] max-w-lg mx-auto">
              Every great hire starts with a conversation. Share your needs and we&apos;ll connect you with the right expertise — typically within 24 hours.
            </p>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {trustPoints.map((t) => (
              <div key={t.l} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-[#D96C57]" style={{ fontFamily: "var(--hg-font-heading)" }}>{t.v}</p>
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.12em] text-[#5b6675] mt-0.5">{t.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FORM + SIDEBAR ═══════════════ */}
      <section className="relative py-16 md:py-24" style={{ background: "var(--hg-color-bg)" }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.012]" style={{ backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #0a2f2a 1px, transparent 0)", backgroundSize: "28px 28px" }} />

        <div className="container mx-auto px-6 max-w-5xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* ── FORM (2/3) ── */}
            <div className="lg:col-span-2" ref={formReveal.ref}>
              <div
                className="rounded-2xl bg-white border border-[#d8e1ea] overflow-hidden transition-all duration-700"
                style={{
                  boxShadow: "0 1px 3px rgba(10,47,42,0.04), 0 8px 40px rgba(10,47,42,0.04)",
                  opacity: formReveal.visible ? 1 : 0,
                  transform: formReveal.visible ? "translateY(0)" : "translateY(30px)",
                }}
              >
                {/* Coral top accent */}
                <div className="h-1 bg-[#D96C57]" />

                {sent ? (
                  <div className="text-center py-16 px-6">
                    <div className="relative inline-flex mb-6">
                      <div className="absolute inset-0 rounded-full animate-ping opacity-[0.06] bg-[#D96C57]" style={{ width: 72, height: 72 }} />
                      <div className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center" style={{ background: "rgba(217,108,87,0.08)" }}>
                        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#D96C57" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0a2f2a] mb-2" style={{ fontFamily: "var(--hg-font-heading)" }}>Message sent</h3>
                    <p className="text-[#5b6675] text-sm">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="p-6 md:p-10 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" name="name" value={form.name} onChange={update} placeholder="Your name" required />
                      <Field label="Work Email" name="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Company" name="company" value={form.company} onChange={update} placeholder="Company name" required />
                      <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={update} placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a2f2a] mb-1.5">Inquiry Type</label>
                      <select name="inquiryType" value={form.inquiryType} onChange={update}
                        className="w-full px-4 py-3 border border-[#d8e1ea] rounded-xl text-sm bg-[var(--hg-color-bg)] focus:outline-none focus:border-[#D96C57] focus:ring-2 focus:ring-[#D96C57]/10 transition-all">
                        <option value="hiring">Hiring Inquiry</option>
                        <option value="advisory">Talent Advisory</option>
                        <option value="partnership">Partnership</option>
                        <option value="candidate">Candidate Inquiry</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a2f2a] mb-1.5">Message</label>
                      <textarea name="message" value={form.message} onChange={update} required rows={4}
                        className="w-full px-4 py-3 border border-[#d8e1ea] rounded-xl text-sm bg-[var(--hg-color-bg)] focus:outline-none focus:border-[#D96C57] focus:ring-2 focus:ring-[#D96C57]/10 transition-all resize-none"
                        placeholder="Tell us about your hiring needs, the role, and what you're looking for..." />
                    </div>
                    <button type="submit"
                      className="w-full sm:w-auto font-bold px-10 py-3.5 rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hg-gradient-coral"
                      style={{ boxShadow: "0 4px 20px rgba(217,108,87,0.28)" }}>
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── SIDEBAR (1/3) ── */}
            <div className="lg:col-span-1 space-y-5" ref={trustReveal.ref}>
              {/* Offices */}
              {offices.map((o, i) => (
                <div key={o.city}
                  className="rounded-xl bg-white border border-[#d8e1ea] p-4 transition-all duration-500 hover:border-[#D96C57]/30"
                  style={{
                    opacity: trustReveal.visible ? 1 : 0,
                    transform: trustReveal.visible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${i * 100}ms`,
                  }}>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{o.flag}</span>
                    <div>
                      <p className="text-sm font-bold text-[#0a2f2a]">{o.city}</p>
                      <p className="text-[11px] text-[#5b6675]">{o.role} · {o.tz}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Contact quick info */}
              <div className="rounded-xl bg-[#0a2f2a] p-5 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D96C57] mb-3">Direct Contact</p>
                <a href="info@happyglobalservice.com" className="block text-sm font-medium text-white/70 hover:text-white transition-colors mb-2">
                  info@happyglobalservice.com
                </a>
                <a href="tel:+16698713588" className="block text-sm font-medium text-white/70 hover:text-white transition-colors">
                  +1 669 871 3588
                </a>
              </div>

              {/* Response promise */}
              <div className="rounded-xl p-4 text-center" style={{ background: "rgba(217,108,87,0.06)", border: "1px solid rgba(217,108,87,0.1)" }}>
                <p className="text-2xl font-black text-[#D96C57] mb-1" style={{ fontFamily: "var(--hg-font-heading)" }}>24h</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5b6675]">Guaranteed Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#061410]">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
        <div className="relative container mx-auto px-6 max-w-2xl">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-[#D96C57] mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10" style={{ fontFamily: "var(--hg-font-heading)" }}>
            Questions you might have
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors cursor-pointer">
                <summary className="flex items-center justify-between gap-4 p-5 text-sm font-bold text-white/80 list-none" style={{ fontFamily: "var(--hg-font-heading)" }}>
                  {faq.q}
                  <svg className="w-4 h-4 shrink-0 text-[#D96C57] transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-white/40">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Reusable field component ── */
function Field({ label, name, value, onChange, placeholder, type = "text", required = false }: {
  label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-[#0a2f2a] mb-1.5">{label}{required && " *"}</label>
      <input
        type={type} name={name} value={value} onChange={onChange} required={required}
        className="w-full px-4 py-3 border border-[#d8e1ea] rounded-xl text-sm bg-[var(--hg-color-bg)] focus:outline-none focus:border-[#D96C57] focus:ring-2 focus:ring-[#D96C57]/10 transition-all"
        placeholder={placeholder} />
    </div>
  );
}
