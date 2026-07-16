/* ── Anonymous executive opportunities for candidate-facing page ──
   All opportunities are anonymized to protect client confidentiality.
   Candidates apply confidentially and are screened before any client details are shared. */

export interface Opportunity {
  id: string;
  function: string;
  level: "C-Suite" | "VP/Director" | "Board";
  industry: string;
  location: string;
  description: string;
  accent: string;
}

export const opportunities: Opportunity[] = [
  {
    id: "opp-001",
    function: "Chief Technology Officer",
    level: "C-Suite",
    industry: "AI/Enterprise SaaS",
    location: "San Francisco Bay Area / Remote-Hybrid",
    description:
      "Series-D AI company ($200M+ raised) seeking a CTO to scale engineering from 150 to 400. Must have experience shipping enterprise AI products at scale. Board reporting line. Significant equity.",
    accent: "#D96C57",
  },
  {
    id: "opp-002",
    function: "CEO — China Market",
    level: "C-Suite",
    industry: "Consumer & Retail",
    location: "Shanghai, China",
    description:
      "NYSE-listed global consumer brand entering China. Seeking a CEO to build the entire China operation from zero — team, distribution, brand, regulatory. Reports to Group CEO. P&L ownership from day one.",
    accent: "#f59e0b",
  },
  {
    id: "opp-003",
    function: "VP, Global Supply Chain",
    level: "VP/Director",
    industry: "Advanced Manufacturing",
    location: "Chicago / Shanghai (dual-base)",
    description:
      "Fortune 500 industrial company restructuring post-pandemic supply chain. Bilingual VP to redesign Asia-Pacific sourcing strategy and manage $2B+ supplier portfolio across 8 countries.",
    accent: "#14b8a6",
  },
  {
    id: "opp-004",
    function: "Independent Board Director (2 seats)",
    level: "Board",
    industry: "Semiconductor",
    location: "Shenzhen / Hong Kong",
    description:
      "Pre-IPO semiconductor company preparing for HKEX listing. Seeking two independent directors with semiconductor industry depth and Hong Kong listing committee credibility. Audit committee and remuneration committee roles.",
    accent: "#a855f7",
  },
  {
    id: "opp-005",
    function: "Chief Risk Officer",
    level: "C-Suite",
    industry: "Cross-Border Fintech",
    location: "London / Singapore",
    description:
      "Licensed fintech operating across FCA and MAS jurisdictions. Seeking a CRO to unify risk frameworks across both regulators. Must have experience with both UK and Singapore regulatory environments.",
    accent: "#D96C57",
  },
  {
    id: "opp-006",
    function: "VP, Regulatory Affairs (FDA + CFDA)",
    level: "VP/Director",
    industry: "Healthcare & Biotech",
    location: "Boston, MA",
    description:
      "Mid-cap biotech with assets in both U.S. and China. VP Regulatory to lead dual-submission strategy for a lead candidate entering Phase III. Must have hands-on FDA submission experience; CFDA experience is a strong plus.",
    accent: "#f59e0b",
  },
];
