/* ── Insights / thought-leadership content ── */

export interface InsightArticle {
  id: string;
  title: string;
  category: "Salary Guide" | "Hiring Trends" | "Case Study" | "Leadership" | "Cross-Border";
  date: string;
  description: string;
  readTime: string;
  accent: string;
  featured?: boolean;
}

export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  format: "PDF";
  requiresEmail: boolean;
  accent: string;
}

export const articles: InsightArticle[] = [
  {
    id: "insight-001",
    title: "2026 U.S.-China Cross-Border Executive Hiring Trends",
    category: "Hiring Trends",
    date: "2026-06-15",
    description:
      "An analysis of C-suite hiring patterns across U.S.-China corridors: which functions are in highest demand, how compensation is evolving, and what the geopolitical landscape means for talent mobility in 2026-2027.",
    readTime: "12 min read",
    accent: "#D96C57",
    featured: true,
  },
  {
    id: "insight-002",
    title: "Executive Compensation Benchmark: Technology Sector 2026",
    category: "Salary Guide",
    date: "2026-05-20",
    description:
      "Base salary, bonus, and equity benchmarks for CTO, VP Engineering, Chief Data Scientist, and CPO roles across Series-B through public companies. Data from 120+ completed searches in the last 18 months.",
    readTime: "15 min read",
    accent: "#14b8a6",
    featured: true,
  },
  {
    id: "insight-003",
    title: "The Board's Guide to CEO Succession Planning",
    category: "Leadership",
    date: "2026-04-10",
    description:
      "A practical framework for boards and nominating committees: when to start succession planning, how to balance internal vs. external candidates, and the 5 most common mistakes boards make in CEO transitions.",
    readTime: "10 min read",
    accent: "#f59e0b",
  },
  {
    id: "insight-004",
    title: "How to Build a Global Leadership Team from Scratch",
    category: "Leadership",
    date: "2026-03-28",
    description:
      "Lessons from 15+ cross-border leadership build-outs: sequencing hires, balancing local vs. expat leaders, compensation parity across markets, and the cultural integration playbook that actually works.",
    readTime: "14 min read",
    accent: "#a855f7",
  },
  {
    id: "insight-005",
    title: "CFO Hiring in Regulated Cross-Border Markets",
    category: "Case Study",
    date: "2026-03-05",
    description:
      "An anonymized deep-dive into a dual-jurisdiction (SEC + FCA) CFO search: how we mapped candidates globally, assessed regulatory competency, and closed a placement that has since led two funding rounds.",
    readTime: "8 min read",
    accent: "#14b8a6",
  },
  {
    id: "insight-006",
    title: "The Real Cost of a Mis-Hired Executive",
    category: "Hiring Trends",
    date: "2026-02-14",
    description:
      "Quantifying the financial and organizational cost of executive mis-hires. Based on our data: why retained search, while more expensive upfront, produces a 3x lower failure rate than contingent or internal recruitment for C-suite roles.",
    readTime: "9 min read",
    accent: "#D96C57",
  },
];

export const resources: DownloadableResource[] = [
  {
    id: "res-001",
    title: "2026 Global Executive Compensation Guide",
    description:
      "Comprehensive compensation data across 8 functions and 5 markets. 45 pages. Updated Q2 2026.",
    format: "PDF",
    requiresEmail: true,
    accent: "#D96C57",
  },
  {
    id: "res-002",
    title: "Cross-Border Hiring Compliance Checklist",
    description:
      "Legal entity, visa, tax, and employment law checklist for hiring executives across U.S., China, UK, Singapore, and Germany.",
    format: "PDF",
    requiresEmail: true,
    accent: "#14b8a6",
  },
  {
    id: "res-003",
    title: "Executive Interview Assessment Template",
    description:
      "The competency-based interview framework our partners use. 12 dimensions, behavioral anchors, scoring rubric.",
    format: "PDF",
    requiresEmail: true,
    accent: "#f59e0b",
  },
];
