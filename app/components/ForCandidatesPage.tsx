"use client";

import { useState } from "react";
import Link from "next/link";
import { opportunities } from "@/app/data/opportunities";
import { candidateTestimonials } from "@/app/data/testimonials";
import { submitCandidateForm } from "@/app/actions/contact";
import { ChevronRight, Checkmark } from "@/app/components/Icons";

type FormData = {
  name: string;
  email: string;
  linkedin: string;
  function: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  linkedin: "",
  function: "",
  message: "",
};

export default function ForCandidatesPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const update = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);
    try {
      const res = await submitCandidateForm(form);
      setResult(res);
      if (res.success) setForm(initialForm);
    } catch {
      setResult({
        success: false,
        message:
          "Something went wrong. Please email us directly at echo.yang@happyglobalservice.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section
        className="relative py-24 md:py-36 overflow-hidden"
        style={{ background: "#061410" }}
      >
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.025]" />
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-[0.05]"
          style={{
            background: "var(--hg-color-accent)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative container mx-auto px-6 text-center">
          <span
            className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] mb-4 px-4 py-1.5 rounded-full text-white/40"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            For Executives
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 hg-heading tracking-tight">
            Your Next Move —{" "}
            <span style={{ color: "var(--hg-color-accent)" }}>
              Confidential & Strategic
            </span>
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-white/50 max-w-3xl mx-auto">
            The most compelling executive opportunities are never advertised.
            We represent board, C-suite, and VP-level roles across the
            companies shaping tomorrow — and we protect your confidentiality
            at every step.
          </p>
        </div>
      </section>

      {/* ═══ WHY WORK WITH US ═══ */}
      <section
        className="relative py-16 md:py-24"
        style={{ background: "var(--hg-color-bg)" }}
      >
        <div className="hg-dot-grid absolute inset-0 pointer-events-none opacity-[0.012]" />
        <div className="relative container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight">
              Why Executives{" "}
              <span style={{ color: "var(--hg-color-accent)" }}>
                Choose Us
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                t: "Exclusive Access",
                d: "70% of our C-suite and board mandates are never published. We reach out to you — not the other way around.",
                i: "🔒",
              },
              {
                t: "Absolute Discretion",
                d: "NDA protection at every stage. Your current employer will never know you're exploring — unless and until you decide to tell them.",
                i: "🤝",
              },
              {
                t: "Strategic Counsel",
                d: "We don't just match keywords. We advise on career trajectory, compensation structure, and the full picture — not just 'take this job.'",
                i: "🎯",
              },
              {
                t: "Global Network",
                d: "Offices in Dallas, San Jose, and Shanghai. Opportunities across U.S., China, UK, EU, and Southeast Asia.",
                i: "🌏",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="p-6 rounded-2xl hg-card-lift cursor-default"
                style={{
                  background: "var(--hg-color-surface)",
                  border: "1px solid var(--hg-color-border)",
                }}
              >
                <span className="text-2xl block mb-3">{item.i}</span>
                <h3 className="text-sm font-bold hg-heading mb-2">
                  {item.t}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--hg-color-text-secondary)" }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CURRENT OPPORTUNITIES ═══ */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="relative container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
              style={{ color: "var(--hg-color-secondary)" }}
            >
              Current Opportunities
            </p>
            <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight">
              Selected{" "}
              <span style={{ color: "var(--hg-color-accent)" }}>
                Active Mandates
              </span>
            </h2>
            <p
              className="text-sm mt-3"
              style={{ color: "var(--hg-color-text-secondary)" }}
            >
              Client names are confidential until we've verified mutual fit.
              These represent a sample of our current portfolio.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {opportunities.map((opp) => (
              <div
                key={opp.id}
                className="p-5 md:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: "var(--hg-color-surface)",
                  border: "1px solid var(--hg-color-border)",
                  boxShadow: "0 2px 12px rgba(10,47,42,0.02)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md"
                      style={{
                        color: opp.accent,
                        background: `${opp.accent}10`,
                        border: `1px solid ${opp.accent}1A`,
                      }}
                    >
                      {opp.level}
                    </span>
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(10,47,42,0.04)",
                        color: "var(--hg-color-text-secondary)",
                      }}
                    >
                      {opp.industry}
                    </span>
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: "var(--hg-color-text-secondary)" }}
                    >
                      📍 {opp.location}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold hg-heading mb-2">
                  {opp.function}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--hg-color-text-secondary)" }}
                >
                  {opp.description}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-center text-xs mt-8"
            style={{ color: "var(--hg-color-text-secondary)" }}
          >
            These represent a sample. Most of our mandates are never listed
            publicly.{" "}
            <span style={{ color: "var(--hg-color-accent)" }}>
              Submit your profile below
            </span>{" "}
            to be considered for current and upcoming opportunities.
          </p>
        </div>
      </section>

      {/* ═══ CANDIDATE FORM ═══ */}
      <section
        className="relative py-16 md:py-24 overflow-hidden"
        style={{ background: "#061410" }}
      >
        <div className="hg-dot-grid-dark absolute inset-0 pointer-events-none opacity-[0.02]" />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none opacity-[0.04]"
          style={{
            background: "var(--hg-color-secondary)",
            transform: "translate(-20%, 30%)",
          }}
        />

        <div className="relative container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-10">
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full text-white/40"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              Submit Your Profile
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white hg-heading tracking-tight mb-3">
              Confidential Profile Submission
            </h2>
            <p className="text-sm text-white/45">
              Your information will never be shared without your explicit
              permission. A consultant will respond within 48 hours.
            </p>
          </div>

          {result ? (
            <div className="text-center py-12">
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${result.success ? "" : ""}`}
                style={{
                  background: result.success
                    ? "rgba(20,184,166,0.1)"
                    : "rgba(217,108,87,0.1)",
                }}
              >
                {result.success ? (
                  <Checkmark size={24} strokeColor="#14b8a6" />
                ) : (
                  <span className="text-xl">!</span>
                )}
              </div>
              <h3 className="text-xl font-bold text-white hg-heading mb-2">
                {result.success ? "Profile Received" : "Something Went Wrong"}
              </h3>
              <p className="text-sm text-white/50">{result.message}</p>
              {!result.success && (
                <button
                  onClick={() => setResult(null)}
                  className="mt-6 text-sm font-bold cursor-pointer"
                  style={{ color: "var(--hg-color-accent)" }}
                >
                  Try Again
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-white/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-white/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1.5">
                  LinkedIn URL
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={update}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-white/20 transition-all duration-300"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1.5">
                  Target Function
                </label>
                <select
                  name="function"
                  value={form.function}
                  onChange={update}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <option value="" className="text-gray-900">
                    Select function...
                  </option>
                  <option value="ceo" className="text-gray-900">
                    CEO / General Manager
                  </option>
                  <option value="cfo" className="text-gray-900">
                    CFO / Finance
                  </option>
                  <option value="cto" className="text-gray-900">
                    CTO / VP Engineering
                  </option>
                  <option value="board" className="text-gray-900">
                    Board Director
                  </option>
                  <option value="vp" className="text-gray-900">
                    VP / Director
                  </option>
                  <option value="other" className="text-gray-900">
                    Other
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-1.5">
                  Brief Career Summary *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl text-sm text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-white/20 transition-all duration-300 resize-none"
                  placeholder="Current role, industry, years of experience, and what you're looking for next..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="hg-btn-shine w-full font-bold py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hg-gradient-coral cursor-pointer disabled:opacity-60"
                style={{
                  boxShadow: "0 4px 20px rgba(217,108,87,0.3)",
                }}
              >
                {submitting ? "Submitting..." : "Submit Confidentially"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ═══ CANDIDATE TESTIMONIALS ═══ */}
      <section
        className="relative py-16 md:py-24"
        style={{ background: "var(--hg-color-bg)" }}
      >
        <div className="relative container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold hg-heading tracking-tight">
              What Placed{" "}
              <span style={{ color: "var(--hg-color-accent)" }}>
                Executives Say
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {candidateTestimonials.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl"
                style={{
                  background: "var(--hg-color-surface)",
                  border: "1px solid var(--hg-color-border)",
                }}
              >
                <svg
                  className="w-8 h-8 mb-3 opacity-[0.06]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: t.accent }}
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p
                  className="text-sm leading-relaxed italic mb-4"
                  style={{ color: "var(--hg-color-text-secondary)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p
                  className="text-xs font-bold"
                  style={{ color: "var(--hg-color-text-primary)" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: "var(--hg-color-text-secondary)" }}
                >
                  {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section
        className="relative py-16 md:py-24 bg-white"
      >
        <div className="relative container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold hg-heading mb-4">
            Not seeing the right opportunity?
          </h2>
          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "var(--hg-color-text-secondary)" }}
          >
            Most of our placements start with a conversation — not a job
            description. Submit your profile and we'll reach out when we
            have a mandate that matches your experience and ambitions.
          </p>
          <Link
            href="/contact"
            className="hg-btn-shine inline-flex items-center gap-2 font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{
              boxShadow: "0 4px 24px rgba(217,108,87,0.35)",
            }}
          >
            Get in Touch
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
