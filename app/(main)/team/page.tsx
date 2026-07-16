import type { Metadata } from "next";
import TeamPage from "@/app/components/TeamPage";

export const metadata: Metadata = {
  title: "Our Team — Happy Global",
  description:
    "Meet the partners and consultants behind Happy Global's executive search practice. 20+ years average experience in cross-border leadership placement.",
};

export default function Page() {
  return <TeamPage />;
}
