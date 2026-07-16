import type { Metadata } from "next";
import InsightsPage from "@/app/components/InsightsPage";

export const metadata: Metadata = {
  title: "Insights & Resources — Happy Global",
  description:
    "Executive hiring trends, salary guides, leadership insights, and cross-border talent resources. Data-driven thought leadership for people leaders.",
};

export default function Page() {
  return <InsightsPage />;
}
