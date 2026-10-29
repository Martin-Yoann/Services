import type { Metadata } from "next";
import TrackRecordPage from "@/app/components/TrackRecordPage";

export const metadata: Metadata = {
  title: "Track Record — Happy Global",
  description:
    "Proven executive placements across technology, financial services, healthcare, manufacturing, and more. Leadership search experience and global market expertise.",
};

export default function Page() {
  return <TrackRecordPage />;
}
