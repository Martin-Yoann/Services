import type { Metadata } from "next";
import MethodologyPage from "@/app/components/MethodologyPage";

export const metadata: Metadata = {
  title: "Our Methodology — Happy Global",
  description:
    "Our executive search methodology, from engagement through post-hire support.",
};

export default function Page() {
  return <MethodologyPage />;
}
