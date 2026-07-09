import Hero from "@/app/components/Hero";
import LogoMarquee from "@/app/components/LogoMarquee";
import IndustrySolutions from "@/app/components/IndustrySolutions";
import ServiceProcess from "@/app/components/ServiceProcess";
import ClientCases from "@/app/components/ClientCases";
import ContactFormCompact from "@/app/components/ContactFormCompact";

export default function HomePage() {
  return (
    <>
      {/* ── Section 1: Hero ── */}
      <Hero />

      {/* ── Section 2: Logo Marquee ── */}
      <LogoMarquee />

      {/* ── Section 3: Industry Solutions ── */}
      <IndustrySolutions />

      {/* ── Section 4: Service Process ── */}
      <ServiceProcess />

      {/* ── Section 5: Client Cases Carousel ── */}
      <ClientCases />

      {/* ── Section 6: Contact Form ── */}
      <ContactFormCompact />
    </>
  );
}
