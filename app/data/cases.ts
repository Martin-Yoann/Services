/* ── Case studies / track record data ── */

export interface CaseStudy {
  id: number;
  role: string;
  level: "C-Suite" | "VP/Director" | "Cross-Border" | "Board";
  company: string;
  industry: string;
  location: string;
  result: string;
  quote: string;
  client: string;
  highlights: string[];
  stat: { value: string; suffix: string; label: string };
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
    result: "Placed in 28 days",
    quote:
      "Happy Global understood exactly what we needed — a VP who could scale our engineering org from 20 to 80 in the hyper-competitive Bay Area market. The candidate has since built a 40-person R&D team and shipped three major product releases.",
    client: "CTO, Series-C AI Startup",
    highlights: [
      "40-person R&D team built",
      "Bay Area talent market expertise",
      "28-day close",
    ],
    stat: { value: "28", suffix: "d", label: "Time-to-Hire" },
    accent: "#D96C57",
  },
  {
    id: 2,
    role: "Chief Financial Officer",
    level: "C-Suite",
    company: "Cross-Border Fintech",
    industry: "Financial Technology",
    location: "New York → London",
    result: "3 finalists, 1 hire",
    quote:
      "We needed a CFO who could navigate both SEC and FCA regulatory frameworks. Happy Global understood the complexity and delivered three exceptional candidates — each pre-qualified on dual-jurisdiction expertise — in under two weeks.",
    client: "CEO, Cross-Border Fintech",
    highlights: [
      "Dual SEC + FCA expertise",
      "3 pre-vetted finalists",
      "14-day delivery",
    ],
    stat: { value: "14", suffix: "d", label: "Shortlist" },
    accent: "#14b8a6",
  },
  {
    id: 3,
    role: "Director, Clinical Operations",
    level: "VP/Director",
    company: "Mid-Cap Biotech",
    industry: "Healthcare & Life Sciences",
    location: "Boston → Dallas",
    result: "2+ years retained",
    quote:
      "Finding clinical leadership with FDA submission experience is incredibly niche. Happy Global mapped every candidate nationwide, approached them discreetly, and found us the perfect hire — she's been with us over two years.",
    client: "VP HR, Mid-Cap Biotech",
    highlights: [
      "FDA submission expertise",
      "200-candidate market map",
      "2+ year retention",
    ],
    stat: { value: "2", suffix: "yr+", label: "Retention" },
    accent: "#f59e0b",
  },
  {
    id: 4,
    role: "GM, China Operations",
    level: "Cross-Border",
    company: "German Industrial Group",
    industry: "Advanced Manufacturing",
    location: "Stuttgart → Suzhou",
    result: "+40% revenue YoY",
    quote:
      "We needed a bilingual GM bridging German engineering precision with Chinese manufacturing scale. Happy Global found a Tier-1 automotive veteran. One year in, revenue is up 40% with two new facilities opened.",
    client: "Board Director, German Industrial Conglomerate",
    highlights: [
      "Trilingual ENG + DE + ZH",
      "Tier-1 automotive background",
      "+40% revenue growth",
    ],
    stat: { value: "40", suffix: "%+", label: "Revenue Growth" },
    accent: "#a855f7",
  },
  {
    id: 5,
    role: "CEO",
    level: "C-Suite",
    company: "NYSE-Listed Consumer Brand",
    industry: "Consumer & Retail",
    location: "Shanghai → New York",
    result: "3-year tenure, 2x market cap",
    quote:
      "Finding a CEO who could lead a Chinese consumer brand through a successful U.S. IPO while navigating both markets' regulatory and cultural expectations was an extraordinary challenge. Happy Global delivered a shortlist of 4 exceptional candidates — the chosen CEO has doubled market cap in 3 years.",
    client: "Board Chairman, NYSE-Listed Consumer Company",
    highlights: [
      "Dual-market CEO search",
      "4 finalists from 200+ candidates",
      "2x market cap growth under placement",
    ],
    stat: { value: "2", suffix: "x", label: "Market Cap Growth" },
    accent: "#f59e0b",
  },
  {
    id: 6,
    role: "Chief Data Scientist",
    level: "VP/Director",
    company: "PE-Backed InsurTech",
    industry: "Insurance Technology",
    location: "London → Singapore",
    result: "Built 35-person DS org",
    quote:
      "Recruiting a Chief Data Scientist who could relocate to Singapore and build an actuarial AI team from scratch in a market with zero existing talent pool — this was a needle-in-haystack brief. Happy Global mapped every actuary-turned-data-scientist globally and delivered.",
    client: "Managing Partner, Global PE Fund",
    highlights: [
      "35-person team built",
      "Zero-to-one talent pool creation",
      "12-month post-placement guarantee",
    ],
    stat: { value: "35", suffix: "", label: "Team Built" },
    accent: "#14b8a6",
  },
  {
    id: 7,
    role: "Independent Board Director",
    level: "Board",
    company: "Pre-IPO Technology Company",
    industry: "Semiconductor",
    location: "Shenzhen → Global",
    result: "Strengthened governance pre-IPO",
    quote:
      "We needed two independent directors with semiconductor industry depth and Hong Kong Stock Exchange listing committee credibility. Happy Global's board practice identified and placed both within 90 days — directly contributing to governance requirements for our HKEX listing.",
    client: "CEO, Pre-IPO Semiconductor Company",
    highlights: [
      "HKEX governance compliance",
      "2 independent directors placed",
      "90-day search cycle",
    ],
    stat: { value: "2", suffix: "", label: "Board Seats Filled" },
    accent: "#D96C57",
  },
  {
    id: 8,
    role: "VP, Global Supply Chain",
    level: "VP/Director",
    company: "Fortune 500 Industrial",
    industry: "Manufacturing & Supply Chain",
    location: "Chicago → Shanghai",
    result: "Reduced supply chain costs by 22%",
    quote:
      "Post-pandemic supply chain restructuring demanded a VP who could redesign our Asia-Pac sourcing strategy. Happy Global found the exact profile — bilingual, 20 years in industrial sourcing, deep relationships across 8 Asian countries.",
    client: "Chief Operating Officer, Fortune 500 Industrial",
    highlights: [
      "22% supply chain cost reduction",
      "Pan-Asian sourcing network",
      "90-day search completed",
    ],
    stat: { value: "22", suffix: "%", label: "Cost Savings" },
    accent: "#a855f7",
  },
];
