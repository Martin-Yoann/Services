import Link from "next/link";
import { CONTACT_NOTICE, CANDIDATE_NOTICE, ASSENT_TEXT } from "@/app/data/legal";

export default function FormAssent({ candidate = false }: { candidate?: boolean }) {
  const [beforeTerms, afterTerms] = ASSENT_TEXT.split("Terms of Service");
  const [beforePrivacy, afterPrivacy] = afterTerms.split("Privacy Policy");
  const linkClass = "underline underline-offset-2 font-semibold";
  return <div className="space-y-4 text-sm leading-relaxed">
    <p>{candidate ? CANDIDATE_NOTICE : CONTACT_NOTICE} See our <Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>.</p>
    <label className="flex items-start gap-3 cursor-pointer">
      <input type="checkbox" name="termsAccepted" required className="mt-1 h-4 w-4 shrink-0 accent-[#0a2f2a]" />
      <span>{beforeTerms}<Link href="/terms-of-service" className={linkClass}>Terms of Service</Link>{beforePrivacy}<Link href="/privacy-policy" className={linkClass}>Privacy Policy</Link>{afterPrivacy}</span>
    </label>
  </div>;
}
