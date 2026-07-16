/* ── Service descriptions and feature lists ── */

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  accentRgb: string;
  description: string;
  stats: Array<{ value: string; label: string }>;
  features: string[];
  cta: string;
  ctaHref: string;
}

export const services: ServiceData[] = [
  {
    id: "executive-search",
    title: "Executive Search",
    subtitle: "Retained C-Suite & VP-Level Leadership",
    accent: "#D96C57",
    accentRgb: "217,108,87",
    description:
      "Confidential, retained search for board directors, C-suite executives, and senior vice presidents. We work on an exclusive engagement basis with a 12-month placement guarantee.",
    stats: [
      { value: "500+", label: "Executive Placements" },
      { value: "30d", label: "Avg. Time-to-Close" },
      { value: "95%", label: "Retention Rate" },
    ],
    features: [
      "Board Director & C-Suite mandates",
      "Retained, exclusive engagement model",
      "Confidential market mapping & passive candidate outreach",
      "Deep competency assessment & psychometric profiling",
      "360° referencing & background verification",
      "Offer negotiation & onboarding integration",
      "12-month post-placement guarantee",
    ],
    cta: "Discuss an Executive Search",
    ctaHref: "/contact",
  },
  {
    id: "professional-recruitment",
    title: "Professional Recruitment",
    subtitle: "Mid-to-Senior Specialist Talent at Scale",
    accent: "#14b8a6",
    accentRgb: "20,184,166",
    description:
      "Targeted recruitment for senior managers, directors, and highly specialized individual contributors. Multi-channel sourcing with 24-hour initial response commitment.",
    stats: [
      { value: "1500+", label: "Professional Placements" },
      { value: "24h", label: "Initial Response" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    features: [
      "Senior Manager to Director-level roles",
      "Functional specialists (Tech, Sales, Finance, HR, Legal, Product)",
      "Multi-channel sourcing & proactive headhunting",
      "Skills verification & competency-based screening",
      "Compensation benchmarking & market insights",
      "Diversity slate commitment (minimum 30% diverse candidates)",
    ],
    cta: "Find Specialist Talent",
    ctaHref: "/contact",
  },
  {
    id: "talent-advisory",
    title: "Talent Advisory",
    subtitle: "Strategic Workforce & Organization Consulting",
    accent: "#f59e0b",
    accentRgb: "245,158,11",
    description:
      "Data-driven talent strategy consulting. Compensation benchmarking, organizational design, employer brand positioning, and cross-border workforce planning.",
    stats: [
      { value: "100+", label: "Advisory Engagements" },
      { value: "50+", label: "Markets Benchmarked" },
      { value: "15+", label: "Org Design Projects" },
    ],
    features: [
      "Compensation benchmarking & salary band design",
      "Organizational structure & role architecture",
      "Market intelligence & talent landscape reports",
      "Employer brand & EVP development",
      "Cross-border workforce planning & compliance",
      "Succession planning & leadership pipeline assessment",
    ],
    cta: "Explore Advisory Services",
    ctaHref: "/contact",
  },
];
