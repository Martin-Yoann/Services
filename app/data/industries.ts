/* ── Industry data ── */

export interface IndustryData {
  id: string;
  name: string;
  description: string;
  roles: string[];
  stat: { v: string; l: string };
  accent: string;
  accentRgb: string;
}

export const industries: IndustryData[] = [
  {
    id: "tech",
    name: "Technology & AI",
    description:
      "From seed-stage AI labs to global platform companies — we place the engineering leaders, data scientists, and product executives who define the next decade of innovation. Deep networks across Silicon Valley, Austin, and Shenzhen.",
    roles: [
      "CTO / VP Engineering",
      "Chief Data Scientist",
      "VP Product",
      "SVP AI/ML",
      "VP DevOps & Infrastructure",
      "Head of Research",
    ],
    stat: { v: "120+", l: "Exec Placements/yr" },
    accent: "#D96C57",
    accentRgb: "217,108,87",
  },
  {
    id: "finance",
    name: "Financial Services",
    description:
      "Banks, fintechs, PE firms, and insurers — we recruit the CFOs, risk leaders, and compliance executives who navigate regulatory complexity across SEC, FCA, HKMA, and CSRC jurisdictions.",
    roles: [
      "Chief Financial Officer",
      "Chief Risk Officer (CRO)",
      "Head of Compliance",
      "Managing Director (IB)",
      "VP Fintech Product",
      "Director, Quantitative Research",
    ],
    stat: { v: "85+", l: "Exec Placements/yr" },
    accent: "#14b8a6",
    accentRgb: "20,184,166",
  },
  {
    id: "healthcare",
    name: "Healthcare & Biotech",
    description:
      "Pharma, biotech, med-tech, and digital health — clinical, regulatory, and commercial leadership. Expertise in FDA, CFDA, and EMA regulatory pathways.",
    roles: [
      "Chief Medical Officer",
      "VP Clinical Development",
      "VP Regulatory Affairs",
      "R&D Site Head",
      "VP Commercial (Pharma)",
      "Head of Digital Health",
    ],
    stat: { v: "60+", l: "Exec Placements/yr" },
    accent: "#f59e0b",
    accentRgb: "245,158,11",
  },
  {
    id: "manufacturing",
    name: "Advanced Manufacturing",
    description:
      "Automotive Tier-1, industrial automation, clean energy, and semiconductor manufacturing. Bilingual operations leaders who bridge German/Japanese/Korean engineering with Chinese manufacturing excellence.",
    roles: [
      "Plant General Manager",
      "VP Supply Chain",
      "VP Quality & EHS",
      "Industrial Engineering Director",
      "Chief Procurement Officer",
      "Head of Lean/Six Sigma",
    ],
    stat: { v: "45+", l: "Exec Placements/yr" },
    accent: "#2d8a7a",
    accentRgb: "45,138,122",
  },
  {
    id: "consumer",
    name: "Consumer & Retail",
    description:
      "Global consumer brands navigating China entry, D2C transformation, and omnichannel retail. E-commerce, brand, and retail operations leadership for the new consumer economy.",
    roles: [
      "VP Brand & Marketing",
      "Head of E-Commerce",
      "GM China Market",
      "VP Retail Operations",
      "Director Consumer Insights",
      "Head of D2C",
    ],
    stat: { v: "70+", l: "Exec Placements/yr" },
    accent: "#a855f7",
    accentRgb: "168,85,247",
  },
  {
    id: "logistics",
    name: "Logistics & Cross-Border Trade",
    description:
      "Global freight, warehousing, and trade compliance. Leaders who manage complex international supply chains with expertise in customs, tariffs, and multi-country logistics networks.",
    roles: [
      "VP Global Logistics",
      "Head of Trade Compliance",
      "Regional Warehouse Director",
      "Director Fleet Management",
      "Customs & Tariffs Lead",
      "VP Procurement — Logistics",
    ],
    stat: { v: "35+", l: "Exec Placements/yr" },
    accent: "#f43f5e",
    accentRgb: "244,63,94",
  },
];
