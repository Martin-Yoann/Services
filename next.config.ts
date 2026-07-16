import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ── Image Optimization ── */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.meetsocial.com",
        pathname: "/templates/dist/images/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  /* ── Cache headers for static assets ── */
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2|woff)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  /* ── Production optimizations ── */
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
