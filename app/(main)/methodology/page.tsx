import type { Metadata } from "next";
import MethodologyPage from "@/app/components/MethodologyPage";

export const metadata: Metadata = {
  title: "Our Methodology — Happy Global",
  description:
    "The retained executive search methodology — 6 stages from engagement through post-placement guarantee. Confidential, rigorous, proven.",
};

export default function Page() {
  return <MethodologyPage />;
}
