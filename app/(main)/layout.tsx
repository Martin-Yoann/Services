import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import CookieBanner from "@/app/components/CookieBanner";
import BackToTop from "@/app/components/BackToTop";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1000] focus:rounded-lg focus:bg-white focus:px-5 focus:py-3 focus:text-[#0a2f2a] focus:outline-2 focus:outline-[#c0432b]">Skip to main content</a>
      <Navigation />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </>
  );
}
