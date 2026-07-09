import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import CookieBanner from "@/app/components/CookieBanner";
import BackToTop from "@/app/components/BackToTop";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </>
  );
}
