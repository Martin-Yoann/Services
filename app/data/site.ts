/* ── Centralized site data — single source of truth ──
   All components should import from here instead of hardcoding.
   Stats reconcile: 2000+ total placements, 500+ exec, 1500+ professional, 430+/yr currently. */

export const SITE = {
  name: "Happy Global",
  tagline: "Global Talent Solutions",
  description:
    "Executive search, professional recruitment, and talent advisory for companies expanding globally.",
  email: "info@happyglobalservice.com",
  phone: "+1 669 871 3588",
  domain: "happyglobalservice.com",
  founded: 2011,
} as const;

export const STATS = {
  totalPlacements: "2000+",
  annualPlacements: "430+",
  executivePlacements: "500+",
  professionalPlacements: "1500+",
  clientRetentionRate: "95%",
  avgTimeToHire: "30d",
  initialResponse: "24h",
  clientSatisfaction: "98%",
  marketHubs: "8+",
  enterpriseClients: "50+",
  avgPartnershipYears: "12yr",
  cities: "13",
  continents: "3",
  languages: "5+",
} as const;

export const OFFICES = [
  { city: "Dallas", region: "North America HQ", flag: "🇺🇸", timezone: "CST" },
  { city: "San Jose", region: "Silicon Valley", flag: "🇺🇸", timezone: "PST" },
  { city: "Shanghai", region: "Asia-Pacific HQ", flag: "🇨🇳", timezone: "CST" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com",
  x: "https://x.com",
} as const;
