/* ── Case studies / track record data ── */

export interface CaseStudy {
  id: number;
  role: string;
  level: "C-Suite" | "VP/Director" | "Cross-Border" | "Board";
  company: string;
  industry: string;
  location: string;
  highlights: string[];
  accent: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    role: "VP of Engineering",
    level: "VP/Director",
    company: "Series-C AI SaaS",
    industry: "Artificial Intelligence",
    location: "San Francisco → San Jose",
    highlights: [
      "Bay Area talent market expertise",
    ],
    accent: "#D96C57",
  },
  {
    id: 2,
    role: "Chief Financial Officer",
    level: "C-Suite",
    company: "Cross-Border Fintech",
    industry: "Financial Technology",
    location: "New York → London",
    highlights: [
      "Dual SEC + FCA expertise",
    ],
    accent: "#14b8a6",
  },
  {
    id: 3,
    role: "Director, Clinical Operations",
    level: "VP/Director",
    company: "Mid-Cap Biotech",
    industry: "Healthcare & Life Sciences",
    location: "Boston → Dallas",
    highlights: [
      "FDA submission expertise",
    ],
    accent: "#f59e0b",
  },
  {
    id: 4,
    role: "GM, China Operations",
    level: "Cross-Border",
    company: "German Industrial Group",
    industry: "Advanced Manufacturing",
    location: "Stuttgart → Suzhou",
    highlights: [
      "Trilingual ENG + DE + ZH",
    ],
    accent: "#a855f7",
  },
  {
    id: 5,
    role: "CEO",
    level: "C-Suite",
    company: "NYSE-Listed Consumer Brand",
    industry: "Consumer & Retail",
    location: "Shanghai → New York",
    highlights: [
      "Dual-market CEO search",
    ],
    accent: "#f59e0b",
  },
  {
    id: 6,
    role: "Chief Data Scientist",
    level: "VP/Director",
    company: "PE-Backed InsurTech",
    industry: "Insurance Technology",
    location: "London → Singapore",
    highlights: [
      "Zero-to-one talent pool creation",
      "Post-hire integration support and ongoing market counsel.",
    ],
    accent: "#14b8a6",
  },
  {
    id: 7,
    role: "Independent Board Director",
    level: "Board",
    company: "Pre-IPO Technology Company",
    industry: "Semiconductor",
    location: "Shenzhen → Global",
    highlights: [
      "HKEX governance compliance",
    ],
    accent: "#D96C57",
  },
  {
    id: 8,
    role: "VP, Global Supply Chain",
    level: "VP/Director",
    company: "Fortune 500 Industrial",
    industry: "Manufacturing & Supply Chain",
    location: "Chicago → Shanghai",
    highlights: [
      "Pan-Asian sourcing network",
    ],
    accent: "#a855f7",
  },
];
