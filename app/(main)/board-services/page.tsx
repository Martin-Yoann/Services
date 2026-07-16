import type { Metadata } from "next";
import BoardServicesPage from "@/app/components/BoardServicesPage";

export const metadata: Metadata = {
  title: "Board & Investor Services — Happy Global",
  description:
    "CEO succession planning, independent board director search, pre-IPO board buildout, and cross-border governance advisory for chairs and investors.",
};

export default function Page() {
  return <BoardServicesPage />;
}
