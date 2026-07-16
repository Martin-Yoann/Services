/* ── Team / consultant profiles ── */

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  focus: string[];
  industries: string[];
  location: string;
  bio: string;
  highlight: string;
  stats: { value: string; label: string };
  linkedin?: string;
}

export const partners: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "Managing Partner — North America",
    focus: ["C-Suite", "Board Directors", "PE/VC Portfolio"],
    industries: ["Technology", "AI/ML", "Enterprise SaaS"],
    location: "Dallas, TX",
    bio: "20+ years in retained executive search. Former VP of Talent at a Fortune 100 tech company. Has personally completed 300+ C-level and VP searches across Silicon Valley, Texas, and the East Coast.",
    highlight:
      "Built the entire executive team for a Series-C AI company that IPO'd 18 months later.",
    stats: { value: "300+", label: "Exec Placements" },
    linkedin: "https://linkedin.com",
  },
  {
    id: "marcus-liu",
    name: "Marcus Liu",
    title: "Managing Partner — Asia-Pacific",
    focus: ["Cross-Border Executives", "GM/Country Head", "APAC Expansion"],
    industries: ["Manufacturing", "Automotive", "Clean Energy"],
    location: "Shanghai, China",
    bio: "15+ years bridging Chinese enterprises and multinational corporations. Former McKinsey engagement manager. Trilingual (ENG/中文/Deutsch). Deep expertise in Tier-1 automotive, industrial automation, and new energy sectors.",
    highlight:
      "Placed the first foreign GM for a $5B Chinese state-owned enterprise's European division.",
    stats: { value: "150+", label: "Cross-Border Placements" },
    linkedin: "https://linkedin.com",
  },
  {
    id: "elena-park",
    name: "Elena Park",
    title: "Partner — Financial Services & Fintech",
    focus: ["CFO", "Chief Risk Officer", "Compliance Director"],
    industries: [
      "Financial Services",
      "Fintech",
      "Private Equity",
      "Insurance",
    ],
    location: "San Jose, CA",
    bio: "17 years in financial services executive search. Started career at a Big 4 accounting firm. Specializes in dual-jurisdiction (SEC/FCA/HKMA) compliance leaders and CFOs for cross-border fintech companies scaling internationally.",
    highlight:
      "Found the CFO who led a fintech unicorn's successful Series-D and international expansion into 6 new markets.",
    stats: { value: "200+", label: "Finance Placements" },
    linkedin: "https://linkedin.com",
  },
  {
    id: "david-zhang",
    name: "David Zhang",
    title: "Partner — Technology & AI",
    focus: ["VP Engineering", "CTO", "Chief Data Scientist"],
    industries: ["AI/ML", "Semiconductor", "Cloud Infrastructure"],
    location: "San Jose, CA",
    bio: "15+ years in tech executive search. Former software engineer turned headhunter. Deep network across FAANG alumni, Bay Area startups, and China tech giants. Has built R&D teams from 0→100 for 20+ venture-backed companies.",
    highlight:
      "Recruited the CTO who scaled engineering from 30 to 300 engineers in 24 months.",
    stats: { value: "250+", label: "Tech Placements" },
    linkedin: "https://linkedin.com",
  },
];

export const advisoryBoard = [
  {
    name: "Dr. James Morrison",
    role: "Board Advisor — Healthcare",
    bio: "Former Chief Medical Officer at a Fortune 500 pharmaceutical company. 30+ years in clinical development and FDA regulatory strategy.",
    affiliation: "Ex-Pfizer, Ex-J&J",
    industries: ["Healthcare", "Biotech"],
  },
  {
    name: "Linda Park",
    role: "Board Advisor — Industrial & Supply Chain",
    bio: "Former SVP Global Supply Chain at a leading automotive Tier-1 supplier. Expert in China-sourced manufacturing and cross-border logistics.",
    affiliation: "Ex-Continental, Ex-Bosch",
    industries: ["Manufacturing", "Supply Chain"],
  },
];
