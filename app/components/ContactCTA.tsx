"use client";

import { useEffect, useRef, useState } from "react";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalEntering, setModalEntering] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (modalOpen) { document.body.style.overflow = "hidden"; requestAnimationFrame(() => setModalEntering(true)); }
    else { document.body.style.overflow = ""; setModalEntering(false); }
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", message: "" }); setModalOpen(false); }, 3000);
  };

  return (
    <>
      <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url(https://images.pexels.com/photos/6340698/pexels-photo-6340698.jpeg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,47,42,0.92) 0%, rgba(10,47,42,0.7) 60%, rgba(10,47,42,0.4) 100%)" }} />

        <div className="relative container mx-auto px-6 overflow-hidden">
          <div className="flex flex-col items-start max-w-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translate(0px, 0px)" : "translate(0px, 80px)" }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--hg-font-heading)" }}>Ready to find your next leader?</h2>
            <p className="text-lg md:text-xl text-white/65 mb-8">Let&apos;s discuss how we can help you build world-class teams across borders.</p>
            <button onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral cursor-pointer"
              style={{ boxShadow: "0 4px 20px rgba(217,108,87,0.35)" }}>
              Get in Touch
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className={`absolute inset-0 transition-all duration-300 ${modalEntering ? "bg-black/50 backdrop-blur-sm" : "bg-black/0"}`} onClick={() => setModalOpen(false)} />
          <div className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-8 transition-all duration-300 ${modalEntering ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}`}
            style={{ background: "var(--hg-color-surface)", border: "1px solid var(--hg-color-border)", boxShadow: "0 24px 80px rgba(10,47,42,0.14), 0 8px 20px rgba(10,47,42,0.06)" }}>
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer" aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(217,108,87,0.1)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D96C57" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--hg-font-heading)", color: "#0a2f2a" }}>Thank you!</h3>
                <p style={{ color: "var(--hg-color-text-secondary)" }}>We&apos;ve received your inquiry and will get back to you shortly.</p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-2 px-3 py-1 rounded-full text-xs"
                    style={{ color: "#D96C57", background: "rgba(217,108,87,0.08)", border: "1px solid rgba(217,108,87,0.15)" }}>Get in Touch</span>
                  <h3 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--hg-font-heading)", color: "#0a2f2a" }}>Start a Conversation</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div><label htmlFor="cta-name" className="block text-sm font-bold mb-1.5" style={{ color: "#0a2f2a" }}>Full Name *</label><input type="text" id="cta-name" name="name" value={formData.name} onChange={handleChange} required className="hg-input w-full" placeholder="Your name" /></div>
                    <div><label htmlFor="cta-email" className="block text-sm font-bold mb-1.5" style={{ color: "#0a2f2a" }}>Work Email *</label><input type="email" id="cta-email" name="email" value={formData.email} onChange={handleChange} required className="hg-input w-full" placeholder="your@company.com" /></div>
                  </div>
                  <div><label htmlFor="cta-company" className="block text-sm font-bold mb-1.5" style={{ color: "#0a2f2a" }}>Company *</label><input type="text" id="cta-company" name="company" value={formData.company} onChange={handleChange} required className="hg-input w-full" placeholder="Company name" /></div>
                  <div><label htmlFor="cta-message" className="block text-sm font-bold mb-1.5" style={{ color: "#0a2f2a" }}>Message *</label><textarea id="cta-message" name="message" value={formData.message} onChange={handleChange} required rows={4} className="hg-input w-full resize-none" style={{ minHeight: "100px" }} placeholder="Tell us about your hiring needs..." /></div>
                  <button type="submit" className="w-full font-bold py-3 rounded-lg text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hg-gradient-coral cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(217,108,87,0.3)" }}>Send Message</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
