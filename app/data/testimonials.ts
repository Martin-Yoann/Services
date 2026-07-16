/* ── Client & candidate testimonials ── */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company?: string;
  type: "client" | "candidate";
  accent: string;
}

export const clientTestimonials: Testimonial[] = [
  {
    id: "ct-001",
    quote:
      "Happy Global found us a CFO who could navigate both SEC and FCA frameworks — not just 'someone who's done it,' but someone who understood the nuance. The search took 2 weeks from brief to shortlist.",
    name: "CEO, Cross-Border Fintech",
    title: "Chief Executive Officer",
    company: "Cross-Border Fintech (anonymized)",
    type: "client",
    accent: "#14b8a6",
  },
  {
    id: "ct-002",
    quote:
      "We needed a bilingual GM who could bridge German engineering culture with Chinese manufacturing speed. Happy Global delivered exactly that — and a year later, revenue is up 40%.",
    name: "Board Director",
    title: "Board Director",
    company: "German Industrial Group (anonymized)",
    type: "client",
    accent: "#a855f7",
  },
  {
    id: "ct-003",
    quote:
      "The team at Happy Global understood our business before they started recruiting. They mapped every AI leader in the Bay Area, approached them discreetly, and found us a VP Eng who built a 40-person R&D team in 12 months.",
    name: "CTO, Series-C AI Startup",
    title: "Chief Technology Officer",
    company: "Series-C AI Startup (anonymized)",
    type: "client",
    accent: "#D96C57",
  },
];

export const candidateTestimonials: Testimonial[] = [
  {
    id: "cd-001",
    quote:
      "I wasn't looking to move. Happy Global approached me with an opportunity I would never have found on my own — a CEO role in a market I'd been wanting to enter for years. Their discretion throughout the process was impeccable.",
    name: "Placed CEO",
    title: "Chief Executive Officer (placed via Happy Global)",
    type: "candidate",
    accent: "#D96C57",
  },
  {
    id: "cd-002",
    quote:
      "What sets Happy Global apart is that they actually understand the roles they recruit for. My consultant had been a VP of Engineering before becoming a headhunter — he understood the technical depth, the team dynamics, and what a good culture fit actually looks like.",
    name: "Placed VP Engineering",
    title: "VP of Engineering (placed via Happy Global)",
    type: "candidate",
    accent: "#14b8a6",
  },
  {
    id: "cd-003",
    quote:
      "The counter-offer from my current employer was significant — 30% more than the new offer. Happy Global had walked me through this scenario in advance and helped me think through the decision strategically, not just financially. I made the right move.",
    name: "Placed CFO",
    title: "Chief Financial Officer (placed via Happy Global)",
    type: "candidate",
    accent: "#f59e0b",
  },
];
