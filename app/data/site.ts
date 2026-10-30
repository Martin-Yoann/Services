/* Central site identity and approved public metrics. */

export const SITE = {
  name: "Happy Global",
  tagline: "Global Talent Solutions",
  description:
    "Executive search, professional recruitment, and talent advisory for companies expanding globally.",
  email: "Support@happyglobalservice.com",
  phone: "+1 669 871 3588",
  domain: "happyglobalservice.com",
  founded: 2011,
} as const;

export const METRICS = [
  { value: "20+", label: "Enterprise Clients", color: "#D96C57" },
  { value: "15+", label: "Years Experience", color: "#14b8a6" },
  { value: "10+", label: "Markets Covered", color: "#f59e0b" },
] as const;

export const OFFICES = [
  { city: "Dallas–Fort Worth, Texas", region: "Global HQ", detail: "1101 E Arapaho Rd, STE 2420, Richardson, TX 75081, USA", flag: "🇺🇸", timezone: "America/Chicago" },
  { city: "San Jose, California", region: "Silicon Valley & West Coast Hub", detail: "Remote Client Relations", flag: "🇺🇸", timezone: "America/Los_Angeles" },
  { city: "Shanghai, China", region: "APAC Operations Hub", detail: "Operated with a Local Partner", flag: "🇨🇳", timezone: "Asia/Shanghai" },
] as const;
