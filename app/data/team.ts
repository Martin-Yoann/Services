/* ── Team / consultant profiles ── */

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  focus: string[];
  industries: string[];
  location: string;
  bio: string;
}

export const partners: TeamMember[] = [
  {
    id: "sarah-chen",
    name: "xxxxxx",
    title: "Managing Partner — America",
    focus: ["C-Suite", "Board Directors", "PE/VC Portfolio"],
    industries: ["Technology", "AI/ML", "Enterprise SaaS"],
    location: "Dallas, TX",
    bio: "Focuses on C-suite and board searches across technology, artificial intelligence, and enterprise software markets.",
  },
  {
    id: "marcus-liu",
    name: "xxxxxx",
    title: "Managing Partner — Asia-Pacific",
    focus: ["Cross-Border Executives", "GM/Country Head", "APAC Expansion"],
    industries: ["Manufacturing", "Automotive", "Clean Energy"],
    location: "Shanghai, China",
    bio: "Focuses on cross-border leadership searches, general management, and APAC expansion across manufacturing, automotive, and clean energy.",
  },
  {
    id: "elena-park",
    name: "xxxxxx",
    title: "Partner — Financial Services & Fintech",
    focus: ["CFO", "Chief Risk Officer", "Compliance Director"],
    industries: [
      "Financial Services",
      "Fintech",
      "Private Equity",
      "Insurance",
    ],
    location: "San Jose, CA",
    bio: "Focuses on CFO, risk, and compliance leadership searches for financial services and cross-border fintech businesses.",
  },
  {
    id: "david-zhang",
    name: "xxxxxx",
    title: "Partner — Technology & AI",
    focus: ["VP Engineering", "CTO", "Chief Data Scientist"],
    industries: ["AI/ML", "Semiconductor", "Cloud Infrastructure"],
    location: "San Jose, CA",
    bio: "Focuses on engineering, technology, and data science leadership searches across AI, semiconductors, and cloud infrastructure.",
  },
];

export const advisoryBoard = [
  {
    name: "xxxxxx",
    role: "Board Advisor — Healthcare",
    bio: "Focuses on healthcare leadership, clinical development, and regulatory strategy.",
    industries: ["Healthcare", "Biotech"],
  },
  {
    name: "xxxxxx",
    role: "Board Advisor — Industrial & Supply Chain",
    bio: "Focuses on manufacturing, supply chain leadership, and cross-border logistics.",
    industries: ["Manufacturing", "Supply Chain"],
  },
];
