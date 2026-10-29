"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";

const steps = [
  {
    title: "Needs Analysis", label: "Align on the brief", icon: "target",
    desc: "We start with your business priorities, team culture, and role requirements to shape a clear search brief.",
    activities: ["Clarify the role and hiring priorities", "Align on the candidate profile", "Define the search scope and approach"],
    outcome: "A shared understanding of the role and the search ahead.",
    href: "/services/executive-search", link: "Explore executive search",
  },
  {
    title: "Market Mapping", label: "Understand the landscape", icon: "globe",
    desc: "We research relevant organizations and talent markets, combining sector knowledge with local market perspectives.",
    activities: ["Research target organizations", "Map relevant talent pools", "Discuss market and compensation context"],
    outcome: "A focused view of where to look and how to approach the market.",
    href: "/methodology", link: "Explore our methodology",
  },
  {
    title: "Candidate Sourcing", label: "Start the right conversations", icon: "people",
    desc: "We engage relevant candidates through direct outreach, professional networks, and referrals, with discretion throughout the process.",
    activities: ["Approach relevant candidates", "Explore interest and motivation", "Share search progress and market feedback"],
    outcome: "Candidate conversations grounded in the role and business context.",
    href: "/services/executive-search", link: "Explore executive search",
  },
  {
    title: "Assessment & Screening", label: "Look beyond the résumé", icon: "check",
    desc: "We assess experience, capabilities, and alignment with your team through structured conversations and role-relevant evaluation.",
    activities: ["Review experience and competencies", "Discuss team and role alignment", "Coordinate interviews and candidate feedback"],
    outcome: "Relevant insights to support informed hiring decisions.",
    href: "/services/professional-recruitment", link: "Explore professional recruitment",
  },
  {
    title: "Offer & Onboarding", label: "Support the transition", icon: "briefcase",
    desc: "We help coordinate offer discussions and the transition into the role, keeping candidates and hiring teams informed.",
    activities: ["Discuss compensation and offer terms", "Support candidate communication", "Coordinate onboarding and transition needs"],
    outcome: "Practical support from offer discussions through onboarding.",
    href: "/services/talent-advisory", link: "Explore talent advisory",
  },
  {
    title: "Post-Hire Support", label: "Stay connected", icon: "support",
    desc: "We stay engaged after hiring with integration check-ins, stakeholder feedback, and ongoing market counsel suited to the engagement.",
    activities: ["Discuss integration and feedback", "Support post-hire conversations", "Share ongoing market perspectives"],
    outcome: "Continued dialogue as your team and business needs evolve.",
    href: "/services/talent-advisory", link: "Explore talent advisory",
  },
] as const;

function ProcessIcon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m12 12 8-8M16 4h4v4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18M5 6.5h14M5 17.5h14" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v2" /></>,
    check: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="m8 12 3 3 5-6" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="14" rx="3" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13a22 22 0 0 0 18 0M12 12v3" /></>,
    support: <><path d="M20 11a8 8 0 0 0-15-4M4 3v5h5M4 13a8 8 0 0 0 15 4M20 21v-5h-5" /><path d="m9 12 2 2 4-4" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function ServiceProcess() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = steps[active];
  const number = (index: number) => String(index + 1).padStart(2, "0");

  const selectStep = (index: number, focus = false) => {
    const next = Math.max(0, Math.min(index, steps.length - 1));
    setActive(next);
    if (focus) tabs.current[next]?.focus({ preventScroll: true });
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next: number;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % steps.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + steps.length) % steps.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = steps.length - 1;
    else return;
    event.preventDefault();
    selectStep(next, true);
  };

  return (
    <section id="how-we-deliver-results" aria-labelledby="process-heading" className="relative overflow-hidden bg-[#061410] py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 90% 30%, rgba(45,138,122,.16), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-9 flex flex-col justify-between gap-5 lg:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[.24em] text-[#eea694]">Our Process</p>
            <h2 id="process-heading" style={{ fontFamily: "var(--hg-font-heading)" }} className="max-w-xl text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl">How We Deliver Results</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/65">A clear process, built around your business.<br className="hidden md:block" /> From the first brief to ongoing support.</p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[.85fr_1.4fr] lg:gap-10">
          <div role="tablist" aria-label="Explore our search process" aria-orientation="vertical" className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:gap-0">
            {steps.map((item, index) => {
              const selected = active === index;
              return (
                <button key={item.title} ref={(node) => { tabs.current[index] = node; }} id={`process-tab-${index}`} role="tab" aria-selected={selected} aria-controls="process-panel" tabIndex={selected ? 0 : -1} onClick={() => selectStep(index)} onKeyDown={(event) => onKeyDown(event, index)}
                  className={`group relative flex min-h-[80px] items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eea694] lg:gap-4 lg:px-5 ${selected ? "border-[#D96C57]/40 bg-[#D96C57]/10" : "border-white/10 bg-white/[.02] hover:border-white/25 hover:bg-white/[.05] lg:border-transparent lg:bg-transparent"}`}>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors motion-reduce:transition-none ${selected ? "bg-[#D96C57] text-white" : "border border-white/20 text-white/55"}`}>{number(index)}</span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-xs font-semibold leading-snug sm:text-sm ${selected ? "text-white" : "text-white/70"}`}>{item.title}</span>
                    <span className="mt-1 hidden text-xs text-white/50 lg:block">{item.label}</span>
                  </span>
                  <span aria-hidden="true" className={`hidden text-xl lg:block ${selected ? "text-[#eea694]" : "text-white/20"}`}>↗</span>
                </button>
              );
            })}
          </div>

          <div id="process-panel" role="tabpanel" aria-labelledby={`process-tab-${active}`} tabIndex={0} className="relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0d2721] p-6 outline-offset-4 focus-visible:outline-[#eea694] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/[.04]" aria-hidden="true"><div className="absolute inset-8 rounded-full border border-white/[.04]" /></div>
            <div className="relative mb-7 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#D96C57]/25 bg-[#D96C57]/10 text-[#eea694]"><ProcessIcon name={step.icon} className="h-6 w-6" /></div>
              <span className="text-xs font-medium tracking-[.12em] text-white/55">STEP {number(active)} <span className="mx-1 text-white/30">/</span> {number(steps.length - 1)}</span>
            </div>
            <div className="relative flex-1" aria-live="polite" aria-atomic="true">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#eea694]">{step.label}</p>
              <h3 style={{ fontFamily: "var(--hg-font-heading)" }} className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">{step.title}</h3>
              <p className="mb-6 max-w-xl text-sm leading-7 text-white/75">{step.desc}</p>
              <ul className="mb-6 space-y-3">
                {step.activities.map((activity) => <li key={activity} className="flex items-start gap-3 text-sm leading-relaxed text-white/80"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D96C57]" />{activity}</li>)}
              </ul>
              <p className="border-t border-white/10 pt-5 text-sm leading-relaxed text-white/65">{step.outcome}</p>
              <Link href={step.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#eea694] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eea694]">{step.link}<span aria-hidden="true">↗</span></Link>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-xs text-white/50" aria-hidden="true">{number(active)} — {number(steps.length - 1)}</span>
              <div className="flex gap-2">
                <button type="button" aria-label="Previous step" disabled={active === 0} onClick={() => selectStep(active - 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eea694]"><span aria-hidden="true">←</span></button>
                <button type="button" aria-label="Next step" disabled={active === steps.length - 1} onClick={() => selectStep(active + 1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eea694]"><span aria-hidden="true">→</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs leading-relaxed text-white/55">Search scope and support are tailored to each engagement.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#eea694]">Discuss your hiring needs <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
