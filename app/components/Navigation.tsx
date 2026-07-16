"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, CloseIcon } from "@/app/components/Icons";
import { useScrollLock } from "@/app/hooks/useScrollLock";

const navItems = [
  {
    label: "Solutions",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Executive Search", href: "/services/executive-search", id: "exec-search" },
      { label: "Professional Recruitment", href: "/services/professional-recruitment", id: "prof-recruit" },
      { label: "Talent Advisory", href: "/services/talent-advisory", id: "talent-advisory" },
    ],
  },
  { label: "Industries", href: "/industries", hasDropdown: false },
  { label: "Why Us", href: "/why-us", hasDropdown: false },
  { label: "Global Coverage", href: "/global-coverage", hasDropdown: false },
  {
    label: "More",
    href: "#",
    hasDropdown: true,
    children: [
      { label: "Track Record", href: "/track-record", id: "track" },
      { label: "Our Team", href: "/team", id: "team" },
      { label: "Our Methodology", href: "/methodology", id: "method" },
      { label: "Board Services", href: "/board-services", id: "board" },
      { label: "For Candidates", href: "/for-candidates", id: "candidates" },
      { label: "Insights", href: "/insights", id: "insights" },
    ],
  },
];

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpand, setMobileExpand] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cleanupClickRef = useRef<(() => void) | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lock, unlock } = useScrollLock();

  /* ── Scroll detection + progress ── */
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(false);
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 80);
      /* Scroll progress */
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress(y / scrollHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  /* ── Close dropdown on outside click ── */
  useEffect(() => {
    if (!activeDropdown) return;
    const timer = setTimeout(() => {
      const handler = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          setActiveDropdown(null);
        }
      };
      document.addEventListener("click", handler);
      cleanupClickRef.current = () =>
        document.removeEventListener("click", handler);
    }, 0);
    return () => {
      clearTimeout(timer);
      cleanupClickRef.current?.();
      cleanupClickRef.current = null;
    };
  }, [activeDropdown]);

  /* ── Lock body scroll when drawer is open ── */
  useEffect(() => {
    if (drawerOpen) {
      lock();
    } else {
      unlock();
    }
  }, [drawerOpen, lock, unlock]);

  /* ── Close drawer on route change ── */
  useEffect(() => {
    setDrawerOpen(false);
    setMobileExpand(null);
  }, [pathname]);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav
      ref={navRef}
      className={`hg-nav-transparent fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "scrolled bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo — white on transparent nav, dark on scrolled */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity z-[60]">
          <img
            src={isScrolled ? "/HGS-black.svg" : "/HGS-white.svg"}
            alt="Happy Global"
            className="h-9 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                ref={activeDropdown === item.label ? dropdownRef : null}
                className={`hg-nav-dropdown${activeDropdown === item.label ? " open" : ""}`}
              >
                <button
                  className="hg-nav-dropdown-trigger cursor-pointer"
                  onClick={() => handleDropdownToggle(item.label)}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="hg-nav-chevron" />
                </button>
                <div className="hg-nav-dropdown-menu" role="menu">
                  {item.children?.map((child) => (
                    <Link
                      key={child.id || child.label}
                      href={child.href}
                      className="hg-nav-dropdown-item cursor-pointer"
                      role="menuitem"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium hg-nav-link hg-link-underline transition-all duration-300 rounded-md cursor-pointer"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact" className="hg-nav-cta">
            <span className="hg-nav-cta-label">Get Started</span>
            <span className="hg-nav-cta-ripple" />
          </Link>
        </div>

        {/* ═══════════════ Mobile Hamburger ═══════════════ */}
        <button
          className="lg:hidden relative z-[60] w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className="hg-mobile-hamburger-line"
              style={{
                background: isScrolled ? "#0a2f2a" : "#fff",
                transform: drawerOpen
                  ? "rotate(45deg) translate(3px, 4px)"
                  : "none",
              }}
            />
            <span
              className="hg-mobile-hamburger-line"
              style={{
                background: isScrolled ? "#0a2f2a" : "#fff",
                opacity: drawerOpen ? 0 : 1,
              }}
            />
            <span
              className="hg-mobile-hamburger-line"
              style={{
                background: isScrolled ? "#0a2f2a" : "#fff",
                transform: drawerOpen
                  ? "rotate(-45deg) translate(3px, -4px)"
                  : "none",
              }}
            />
          </div>
        </button>

        {/* ═══════════════ Mobile Drawer ═══════════════ */}
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            drawerOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setDrawerOpen(false)}
        />

        {/* Drawer panel */}
        <div
          className={`fixed top-0 right-0 z-[80] h-full w-[min(400px,90vw)] bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#d8e1ea] shrink-0">
            <span
              className="text-sm font-bold text-[#0a2f2a] tracking-tight"
              style={{ fontFamily: "var(--hg-font-heading)" }}
            >
              Menu
            </span>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#5b6675] hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <CloseIcon size={16} />
            </button>
          </div>

          {/* Drawer body — scrollable, with staggered animation */}
          <div className="flex-1 overflow-y-auto py-4">
            {navItems.map((item, idx) => (
              <div
                key={item.label}
                style={{
                  opacity: drawerOpen ? 1 : 0,
                  transform: drawerOpen
                    ? "translateX(0)"
                    : "translateX(20px)",
                  transition: `opacity 0.3s ease ${150 + idx * 50}ms, transform 0.3s ease ${150 + idx * 50}ms`,
                }}
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileExpand(
                          mobileExpand === item.label ? null : item.label,
                        )
                      }
                      className="w-full text-left px-6 py-4 flex items-center justify-between text-sm font-semibold text-[#0a2f2a] hover:bg-[#f7f8f6] transition-colors"
                    >
                      {item.label}
                      <ChevronRight
                        size={16}
                        className={`transition-transform duration-300 ${mobileExpand === item.label ? "rotate-90" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileExpand === item.label ? "max-h-60" : "max-h-0"
                      }`}
                    >
                      <div className="bg-[#f7f8f6] py-1 mx-4 rounded-lg mb-1">
                        {item.children?.map((child) => (
                          <Link
                            key={child.id || child.label}
                            href={child.href}
                            className="block px-5 py-2.5 text-sm text-[#5b6675] hover:text-[#D96C57] transition-colors"
                            onClick={() => setDrawerOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-6 py-4 text-sm font-semibold text-[#0a2f2a] hover:bg-[#f7f8f6] transition-colors"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
                <div className="mx-6 h-px bg-[#d8e1ea] last:hidden" />
              </div>
            ))}
          </div>

          {/* Drawer footer — CTA */}
          <div className="px-6 py-5 border-t border-[#d8e1ea] shrink-0">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-white text-sm transition-all duration-300 hover:-translate-y-0.5 hg-gradient-coral"
              style={{ boxShadow: "0 4px 16px rgba(217,108,87,0.3)" }}
              onClick={() => setDrawerOpen(false)}
            >
              Get Started
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ═══ Scroll progress bar ═══ */}
      <div
        className="hg-scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </nav>
  );
};

export default Navigation;
