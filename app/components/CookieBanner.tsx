"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent");
    if (!dismissed) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Overlay backdrop ── */}
      <div
        className="fixed inset-0 z-998 transition-opacity duration-500 cursor-pointer"
        style={{
          background: "rgba(6,20,16,0.5)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: visible ? 1 : 0,
        }}
        onClick={decline}
      />

      {/* ── Modal ── */}
      <div className="fixed inset-0 z-999 flex items-center justify-center p-6 pointer-events-none">
        <div
          className="pointer-events-auto w-full max-w-md transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px) scale(1)" : "translateY(20px) scale(0.96)",
          }}
        >
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "#ffffff",
              border: "1px solid var(--hg-color-border)",
              boxShadow:
                "0 24px 64px rgba(10,47,42,0.14), 0 8px 20px rgba(10,47,42,0.06)",
            }}
          >
            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
              style={{ background: "rgba(217,108,87,0.1)", color: "#D96C57" }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>

            {/* Title */}
            <h3
              className="text-lg font-bold mb-2"
              style={{
                fontFamily: "var(--hg-font-heading)",
                color: "var(--hg-color-text-primary)",
              }}
            >
              Cookie Preferences
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--hg-color-text-secondary)" }}
            >
              We use essential cookies to ensure our website functions properly
              and analytics cookies to improve your experience. By clicking
              &ldquo;Accept&rdquo; you consent to our use of cookies.{" "}
              <a
                href="/privacy-policy"
                className="font-semibold underline hover:opacity-70"
                style={{ color: "#D96C57" }}
              >
                Learn more
              </a>
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={accept}
                className="flex-1 text-sm font-bold px-6 py-3 rounded-lg text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #D96C57, #c45a47)",
                  boxShadow: "0 2px 12px rgba(217,108,87,0.25)",
                }}
              >
                Accept All Cookies
              </button>
              <button
                onClick={decline}
                className="flex-1 text-sm font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[#f7f8f6]"
                style={{
                  color: "var(--hg-color-text-secondary)",
                  background: "transparent",
                  border: "1px solid var(--hg-color-border)",
                }}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
