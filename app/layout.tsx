import type { Metadata, Viewport } from "next";
import "./tokens/harbor-human.css";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
