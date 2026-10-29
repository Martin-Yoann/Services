import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: ["GPTBot", "ClaudeBot", "anthropic-ai", "CCBot", "Google-Extended", "Applebot-Extended", "PerplexityBot", "Bytespider", "meta-externalagent", "Amazonbot"],
        disallow: "/",
      },
    ],
    sitemap: "https://happyglobalservice.com/sitemap.xml",
  };
}
