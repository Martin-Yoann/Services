import dynamic from "next/dynamic";
import Hero from "@/app/components/Hero";
import LogoMarquee from "@/app/components/LogoMarquee";

const IndustrySolutions = dynamic(
  () => import("@/app/components/IndustrySolutions"),
  { loading: () => <SectionSkeleton height="98vh" />, ssr: true },
);
const ServiceProcess = dynamic(
  () => import("@/app/components/ServiceProcess"),
  { loading: () => <SectionSkeleton height="100dvh" />, ssr: true },
);
const ClientCases = dynamic(
  () => import("@/app/components/ClientCases"),
  { loading: () => <SectionSkeleton height="100dvh" />, ssr: true },
);
const ContactCTA = dynamic(
  () => import("@/app/components/ContactCTA"),
  { loading: () => <SectionSkeleton height="24rem" />, ssr: true },
);

function SectionSkeleton({ height }: { height: string }) {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 flex items-center justify-center" style={{ height }}>
      <div className="w-8 h-8 border-2 border-gray-200 border-t-[#D96C57] rounded-full animate-spin" />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <IndustrySolutions />
      <ServiceProcess />
      <ClientCases />
      <ContactCTA />
    </>
  );
}
