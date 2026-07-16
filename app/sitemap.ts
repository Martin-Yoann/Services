import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://happyglobalservice.com";

  const routes = [
    "",
    "/services",
    "/services/executive-search",
    "/services/professional-recruitment",
    "/services/talent-advisory",
    "/industries",
    "/track-record",
    "/methodology",
    "/team",
    "/board-services",
    "/for-candidates",
    "/insights",
    "/why-us",
    "/global-coverage",
    "/contact",
    "/privacy-policy",
    "/terms-of-service",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
