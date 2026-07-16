import type { Metadata } from "next";
import ForCandidatesPage from "@/app/components/ForCandidatesPage";

export const metadata: Metadata = {
  title: "For Candidates — Happy Global",
  description:
    "Confidential executive career opportunities. Exclusive C-suite, VP, and board-level roles not advertised publicly. Submit your profile discreetly.",
};

export default function Page() {
  return <ForCandidatesPage />;
}
