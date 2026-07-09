import PageHeader from "@/app/components/PageHeader";
import GlobalCoverage from "@/app/components/GlobalCoverage";

export default function GlobalCoveragePage() {
  return (
    <>
      <PageHeader
        title="Global Market Coverage"
        subtitle="Our network spans North America, China, and key international hubs — giving you access to talent wherever you need it."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Global Coverage", href: "/global-coverage" },
        ]}
      />
      <GlobalCoverage />
    </>
  );
}
