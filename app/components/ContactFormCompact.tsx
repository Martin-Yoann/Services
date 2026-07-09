"use client";

import { useState } from "react";

const ContactFormCompact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", message: "" });
    }, 4000);
  };

  return (
    <section className="relative py-20 md:py-28 bg-[#f7f8f6]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span
            className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] mb-4 px-4 py-1.5 rounded-full"
            style={{
              color: "#D96C57",
              background: "rgba(217,108,87,0.08)",
              border: "1px solid rgba(217,108,87,0.15)",
            }}
          >
            Get in Touch
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            style={{
              fontFamily: "var(--hg-font-heading)",
              color: "#0a2f2a",
            }}
          >
            Start a Conversation
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "var(--hg-color-text-secondary)" }}
          >
            Tell us about your talent needs and we'll connect you with the right
            expertise.
          </p>
        </div>

        <div
          className="rounded-2xl p-8 md:p-12"
          style={{
            background: "var(--hg-color-surface)",
            border: "1px solid var(--hg-color-border)",
            boxShadow: "0 4px 32px rgba(10,47,42,0.04)",
          }}
        >
          {submitted ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(217,108,87,0.1)" }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D96C57"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "var(--hg-font-heading)",
                  color: "#0a2f2a",
                }}
              >
                Thank you!
              </h3>
              <p style={{ color: "var(--hg-color-text-secondary)" }}>
                We've received your inquiry and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="block text-sm font-bold mb-2"
                    style={{ color: "#0a2f2a" }}
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="cf-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: "var(--hg-color-border)",
                      outlineColor: "#2d8a7a",
                      background: "var(--hg-color-bg)",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-email"
                    className="block text-sm font-bold mb-2"
                    style={{ color: "#0a2f2a" }}
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="cf-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                    style={{
                      borderColor: "var(--hg-color-border)",
                      outlineColor: "#2d8a7a",
                      background: "var(--hg-color-bg)",
                    }}
                    placeholder="your@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="cf-company"
                  className="block text-sm font-bold mb-2"
                  style={{ color: "#0a2f2a" }}
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="cf-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all"
                  style={{
                    borderColor: "var(--hg-color-border)",
                    outlineColor: "#2d8a7a",
                    background: "var(--hg-color-bg)",
                  }}
                  placeholder="Company name"
                />
              </div>

              <div>
                <label
                  htmlFor="cf-message"
                  className="block text-sm font-bold mb-2"
                  style={{ color: "#0a2f2a" }}
                >
                  Message *
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none"
                  style={{
                    borderColor: "var(--hg-color-border)",
                    outlineColor: "#2d8a7a",
                    background: "var(--hg-color-bg)",
                  }}
                  placeholder="Tell us about your hiring needs, role requirements, or any questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto font-bold px-10 py-4 rounded-xl text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
                style={{
                  boxShadow: "0 4px 20px rgba(217,108,87,0.3)",
                }}
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactFormCompact;
