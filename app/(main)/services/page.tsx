import PageHeader from "@/app/components/PageHeader";
import Services from "@/app/components/Services";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive talent solutions for companies expanding globally — from executive leadership to specialist roles."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />
      <Services />
    </>
  );
}
