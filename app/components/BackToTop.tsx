"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-4 right-3 md:bottom-8 md:right-8 z-[998] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0px)" : "translateY(16px)",
      }}
    >
      {/* Responsive: 56px mobile, 90px desktop */}
      <div className="relative w-14 h-14 md:w-[90px] md:h-[90px]">
        {/* Solid bg circle so ring text is visible on any background */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(6,20,16,0.85), rgba(10,47,42,0.9))",
            boxShadow: "0 4px 20px rgba(10,47,42,0.3)",
          }}
        />

        {/* Outer rotating text ring */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
          viewBox="0 0 110 110"
        >
          <defs>
            <path
              id="btp-circle"
              d="M 55,55 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            />
          </defs>
          <text>
            <textPath
              href="#btp-circle"
              startOffset="0%"
              style={{
                fontFamily: "var(--hg-font-heading)",
                fontSize: "12px",
                fontWeight: 700,
                fill: "rgba(255,255,255,0.7)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              HAPPY GLOBAL SERVICE · HAPPY GLOBAL SERVICE · HAPPY GLOBAL SERVICE ·
            </textPath>
          </text>
        </svg>

        {/* Center arrow icon — responsive */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
          <svg
            className="w-4 h-4 md:w-[28px] md:h-[28px]"
            viewBox="0 0 1365 1024"
            fill="none"
          >
            <path
              d="M97.52381 975.238095L704.707048 390.095238 1267.809524 975.238095c-241.468952-167.253333-433.980952-250.928762-577.536-250.928762C546.718476 724.309333 349.135238 807.936 97.52381 975.238095z"
              fill="#D96C57"
            />
            <path
              d="M683.154286 284.281905a70.070857 70.070857 0 0 0-57.051429 19.846095L69.144381 856.990476a68.949333 68.949333 0 0 0 0 97.962667 70.119619 70.119619 0 0 0 98.694095 0L683.154286 443.928381l515.169524 511.463619c27.696762 26.575238 71.875048 25.795048 98.645333-1.706667a68.900571 68.900571 0 0 0 0-96.256L740.10819 304.566857a70.070857 70.070857 0 0 0-56.953904-20.23619z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
