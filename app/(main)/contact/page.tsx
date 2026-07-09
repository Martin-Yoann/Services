import PageHeader from "@/app/components/PageHeader";
import Contact from "@/app/components/Contact";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Ready to build your global team? Reach out to discuss your hiring needs, ask a question, or explore a partnership."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <Contact />
    </>
  );
}
