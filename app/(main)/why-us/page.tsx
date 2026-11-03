import type { Metadata } from "next";

export const metadata: Metadata = { title: "Why Us | Happy Global" };

import PageHeader from "@/app/components/PageHeader";
import WhyUs from "@/app/components/WhyUs";

export default function WhyUsPage() {
  return (
    <>
      <PageHeader
        title="Why Companies Choose Us"
        subtitle="A proven approach to cross-border talent acquisition — bridging U.S., China, and international markets with deep local expertise."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Why Us", href: "/why-us" },
        ]}
      />
      <WhyUs />
    </>
  );
}
