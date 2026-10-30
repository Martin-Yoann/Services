import LegalDocument from "@/app/components/LegalDocument";
import documents from "@/app/data/legal-documents.json";

export default function LegalPage() {
  return <LegalDocument title="Terms of Service" path="/terms-of-service" blocks={documents.terms} />;
}
