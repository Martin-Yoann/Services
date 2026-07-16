"use client";

import { useState } from "react";

const logos = [
  "Meta", "Google", "TikTok", "Microsoft", "Amazon",
  "Anker", "BYD", "ByteDance", "Insta360", "TECNO",
  "Soul", "DJI", "Shein", "Xiaomi", "Oppo",
  "NIO", "Geely", "Dyson", "Samsung", "Apple",
];

interface RowProps { logos: string[]; speed: string; direction: "normal" | "reverse"; isPaused: boolean; }

function LogoRow({ logos, speed, direction, isPaused }: RowProps) {
  const doubled = [...logos, ...logos];
  return (
    <div className="hg-marquee-track" style={{ animationDuration: speed, animationDirection: direction, animationPlayState: isPaused ? "paused" : "running" }}>
      {doubled.map((name, i) => (<span key={i} className="hg-marquee-item">{name}</span>))}
    </div>
  );
}

export default function LogoMarquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="text-center px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "var(--hg-color-secondary)" }}>Trusted Partners</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--hg-font-heading)", color: "var(--hg-color-text-primary)" }}>Trusted by Industry Leaders Worldwide</h2>
          <p className="text-sm md:text-base max-w-xl mx-auto" style={{ color: "var(--hg-color-text-secondary)" }}>Companies across sectors partner with us to find their most critical talent.</p>
        </div>
      </div>

      <div className="hg-marquee-container relative" style={{ opacity: 0.28 }}
        onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} aria-hidden="true">
        <LogoRow logos={logos.slice(0, 10)} speed="35s" direction="normal" isPaused={isPaused} />
        <LogoRow logos={logos.slice(10, 20)} speed="28s" direction="reverse" isPaused={isPaused} />
        <LogoRow logos={logos.slice(5, 15)} speed="42s" direction="normal" isPaused={isPaused} />
      </div>
    </section>
  );
}
