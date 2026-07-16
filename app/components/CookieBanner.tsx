"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent");
    if (dismissed) return;
    const t = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", choice);
    setExiting(true);
    setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, 400);
  };

  if (!visible) return null;

  return (
    <>
      {/* ── Subtle backdrop ── */}
      <div
        className="fixed inset-0 z-[997] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(10,47,42,0.25) 0%, transparent 70%)",
          opacity: exiting ? 0 : 1,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* ── Bottom bar ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[998] flex justify-center p-3 sm:p-4"
        style={{
          opacity: exiting ? 0 : 1,
          transform: exiting ? "translateY(100%)" : "translateY(0)",
          transition:
            "opacity 0.4s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)",
          animation:
            visible && !exiting
              ? "cookieSlideUp 0.6s cubic-bezier(0.22,1,0.36,1) both"
              : "none",
        }}
      >
        <div
          className="w-full max-w-3xl rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hg-glass-card-dark"
        >
          {/* ── Icon + Text ── */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <div
              className="shrink-0 w-9 h-9 rounded-lg hidden sm:flex items-center justify-center"
              style={{ background: "rgba(217,108,87,0.15)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(217,108,87,0.9)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="23" />
                <line x1="8" y1="23" x2="16" y2="23" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm leading-relaxed text-white/70">
                We use cookies to understand how you engage with our content and
                to ensure the best experience on our site.{" "}
                <a
                  href="/privacy-policy"
                  className="font-semibold whitespace-nowrap hover:underline transition-opacity"
                  style={{ color: "var(--hg-color-accent)" }}
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* ── Buttons ── */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => dismiss("declined")}
              className="text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/8 cursor-pointer"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Decline
            </button>
            <button
              onClick={() => dismiss("accepted")}
              className="text-xs font-bold px-5 py-2 rounded-lg text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #D96C57, #c45a47)",
                boxShadow: "0 2px 12px rgba(217,108,87,0.3)",
              }}
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
