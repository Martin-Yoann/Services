"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ContactCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/6340698/pexels-photo-6340698.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,47,42,0.92) 0%, rgba(10,47,42,0.7) 60%, rgba(10,47,42,0.4) 100%)",
        }}
      />

      {/* ── Animated content: slides up from bottom ── */}
      <div className="relative container mx-auto px-6 overflow-hidden">
        <div
          className="flex flex-col items-start max-w-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translate(0px, 0px)"
              : "translate(0px, 80px)",
          }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 whitespace-nowrap"
            style={{ fontFamily: "var(--hg-font-heading)" }}
          >
            Ready to find your next leader?
          </h2>
          <p className="text-lg md:text-xl text-white/65 mb-8 whitespace-nowrap">
            Let&apos;s discuss how we can help you build world-class teams
            across borders.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold px-10 py-4 rounded-lg text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hg-gradient-coral"
            style={{
              boxShadow: "0 4px 20px rgba(217,108,87,0.35)",
            }}
          >
            Get in Touch
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
