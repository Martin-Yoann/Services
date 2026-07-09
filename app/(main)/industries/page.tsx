import PageHeader from "@/app/components/PageHeader";
import Industries from "@/app/components/Industries";

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        title="Industries We Serve"
        subtitle="Deep sector expertise across technology, finance, healthcare, manufacturing, and more — we understand your industry's talent landscape."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
        ]}
      />
      <Industries />
    </>
  );
}
