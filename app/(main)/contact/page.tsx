import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us | Happy Global" };

import Contact from "@/app/components/Contact";

export default function ContactPage() {
  return <Contact />;
}
