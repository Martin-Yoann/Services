"use client";

import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
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
      className="fixed bottom-8 right-8 z-[998] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0px)" : "translateY(20px)",
      }}
    >
      <div className="relative w-[90px] h-[90px]">
        {/* ── Outer rotating text ring — white, larger ── */}
        <svg
          className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none"
          viewBox="0 0 110 110"
          style={{ animationDuration: "16s" }}
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
                fill: "#ffffff",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              HAPPY GLOBAL SERVICE · HAPPY GLOBAL SERVICE · HAPPY GLOBAL SERVICE · 
            </textPath>
          </text>
        </svg>

        {/* ── Center icon — transparent bg, larger ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 transition-transform duration-300 group-hover:scale-125">
          <svg
            width="28"
            height="28"
            viewBox="0 0 1365 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
