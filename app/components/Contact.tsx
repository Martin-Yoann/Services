"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "hiring",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: "hiring",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-[#f7f8f6]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2f2a] mb-4">Get In Touch</h2>
            <p className="text-lg text-[#5b6675]">
              Let's discuss how Happy Global can support your talent needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Contact Info Cards */}
            <div className="p-6 bg-white rounded-lg border border-[#d8e1ea] text-center hover:border-[#2d8a7a] transition-colors">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-bold text-[#0a2f2a] mb-2">Email</h3>
              <a
                href="mailto:echo.yang@happyglobalservice.com"
                className="text-[#2d8a7a] hover:underline text-sm"
              >
                echo.yang@happyglobalservice.com
              </a>
            </div>
            <div className="p-6 bg-white rounded-lg border border-[#d8e1ea] text-center hover:border-[#2d8a7a] transition-colors">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-[#0a2f2a] mb-2">Phone</h3>
              <a href="tel:+16698713588" className="text-[#2d8a7a] hover:underline text-sm">
                +1 669 871 3588
              </a>
            </div>
            <div className="p-6 bg-white rounded-lg border border-[#d8e1ea] text-center hover:border-[#2d8a7a] transition-colors">
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="font-bold text-[#0a2f2a] mb-2">Inquiry Types</h3>
              <p className="text-[#5b6675] text-sm">Hiring • Advisory • Partnership</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg border border-[#d8e1ea] p-8 md:p-12 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-[#0a2f2a] mb-2">Thank you!</h3>
                <p className="text-[#5b6675]">
                  We've received your inquiry and will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-[#0a2f2a] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#d8e1ea] rounded-lg focus:outline-none focus:border-[#2d8a7a] focus:ring-2 focus:ring-[#2d8a7a]/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-[#0a2f2a] mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#d8e1ea] rounded-lg focus:outline-none focus:border-[#2d8a7a] focus:ring-2 focus:ring-[#2d8a7a]/20 transition-all"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-[#0a2f2a] mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#d8e1ea] rounded-lg focus:outline-none focus:border-[#2d8a7a] focus:ring-2 focus:ring-[#2d8a7a]/20 transition-all"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-[#0a2f2a] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#d8e1ea] rounded-lg focus:outline-none focus:border-[#2d8a7a] focus:ring-2 focus:ring-[#2d8a7a]/20 transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-[#0a2f2a] mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#d8e1ea] rounded-lg focus:outline-none focus:border-[#2d8a7a] focus:ring-2 focus:ring-[#2d8a7a]/20 transition-all"
                  >
                    <option value="hiring">Hiring Inquiry</option>
                    <option value="advisory">Talent Advisory</option>
                    <option value="partnership">Partnership</option>
                    <option value="candidate">Candidate Inquiry</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#0a2f2a] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#d8e1ea] rounded-lg focus:outline-none focus:border-[#2d8a7a] focus:ring-2 focus:ring-[#2d8a7a]/20 transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#2d8a7a] hover:bg-[#c45a47] text-white font-bold py-3 px-8 rounded-lg transition-all hover:shadow-lg hover:shadow-[#2d8a7a]/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* ═══ FAQ ═══ */}
        <div className="mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold hg-heading text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {[
              { q: "What's the typical timeline for an executive search?", a: "Executive searches average 30 days from kickoff to accepted offer, depending on role complexity and market conditions." },
              { q: "Do you work on contingency or retained basis?", a: "Our executive search engagements are retained. Professional recruitment can be structured as retained or contingent based on volume and urgency." },
              { q: "Which markets do you cover?", a: "North America (Dallas, San Jose, LA, Seattle, Chicago), China (Shanghai, Beijing, Shenzhen), and select international hubs (London, Toronto, Singapore)." },
              { q: "What's your placement guarantee?", a: "12-month guarantee on all placements. If a candidate leaves within the first year, we conduct a free replacement search." },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-[#d8e1ea] p-5 transition-all duration-300 hover:border-[#2d8a7a]/30 cursor-pointer">
                <summary className="text-sm font-bold hg-heading list-none flex items-center justify-between">
                  {faq.q}
                  <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </summary>
                <p className="text-xs leading-relaxed hg-text-secondary mt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
