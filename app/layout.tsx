import localFont from "next/font/local";
import type { Metadata, Viewport } from "next";
import "./tokens/harbor-human.css";
import "./globals.css";

const inter = localFont({ src: [
  { path: "../public/fonts/Inter.ttf", weight: "100 900", style: "normal" },
  { path: "../public/fonts/Inter-Italic.ttf", weight: "100 900", style: "italic" },
], variable: "--font-inter-local", display: "swap" });
const interTight = localFont({ src: "../public/fonts/InterTight.ttf", weight: "100 900", variable: "--font-inter-tight-local", display: "swap" });

export const metadata: Metadata = {
  title: "Happy Global — Global Talent Solutions",
  description:
    "Executive search, professional recruitment, and talent advisory for companies expanding globally. We connect your leadership and specialist talent across U.S., China, and key international markets.",
  icons: { icon: "/happyglobalservice.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2f2a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${interTight.variable}`} lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
