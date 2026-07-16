import type { Metadata } from "next";
import TrackRecordPage from "@/app/components/TrackRecordPage";

export const metadata: Metadata = {
  title: "Track Record — Happy Global",
  description:
    "Proven executive placements across technology, financial services, healthcare, manufacturing, and more. 2000+ placements, 95% retention rate.",
};

export default function Page() {
  return <TrackRecordPage />;
}
