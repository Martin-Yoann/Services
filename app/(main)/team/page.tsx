import type { Metadata } from "next";
import TeamPage from "@/app/components/TeamPage";

export const metadata: Metadata = {
  title: "Our Team — Happy Global",
  description:
    "Meet the partners and consultants behind Happy Global's executive search practice. Sector-focused expertise in cross-border leadership search.",
};

export default function Page() {
  return <TeamPage />;
}
