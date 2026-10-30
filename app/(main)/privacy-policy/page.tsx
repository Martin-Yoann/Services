import LegalDocument from "@/app/components/LegalDocument";
import documents from "@/app/data/legal-documents.json";

export default function LegalPage() {
  return <LegalDocument title="Privacy Policy" path="/privacy-policy" blocks={documents.privacy} />;
}
