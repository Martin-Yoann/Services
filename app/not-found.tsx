import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found | Happy Global" };

export default function NotFound() {
  return <main id="main-content" className="min-h-screen flex items-center justify-center bg-[#f7f8f6] px-6 py-16 text-[#102033]">
    <div className="max-w-xl text-center">
      <p className="text-sm font-semibold text-[#0f766e]">Happy Global</p>
      <p className="mt-6 text-lg font-semibold text-[#c0432b]">404</p>
      <h1 className="mt-3 text-4xl font-bold">Page not found</h1>
      <p className="mt-5 leading-7 text-[#5b6675]">The page may have moved or the address may be incorrect. You can return to our homepage or contact our team for help.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="inline-flex min-h-11 items-center rounded-lg bg-[#c0432b] px-6 py-3 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a2f2a]">Return home</Link>
        <Link href="/contact" className="inline-flex min-h-11 items-center rounded-lg border border-[#0a2f2a] px-6 py-3 font-semibold text-[#0a2f2a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0a2f2a]">Contact us</Link>
      </div>
    </div>
  </main>;
}
