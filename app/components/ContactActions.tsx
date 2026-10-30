import Link from "next/link";
import { SITE } from "@/app/data/site";

export default function ContactActions({ dark = false, showContact = true }: { dark?: boolean; showContact?: boolean }) {
  const style = `inline-flex min-h-11 items-center justify-center rounded-lg border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D96C57] ${dark ? "border-white/20 text-white hover:bg-white/10" : "border-[#b9cbc3] text-[#0a2f2a] hover:bg-[#edf4ef]"}`;
  return <div className="mt-4 flex flex-wrap gap-3">
    <a href={`mailto:${SITE.email}`} className={style}>Email our team <span aria-hidden="true" className="ml-2">↗</span></a>
    {showContact && <Link href="/contact" className={style}>Contact us <span aria-hidden="true" className="ml-2">→</span></Link>}
  </div>;
}
