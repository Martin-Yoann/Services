"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Inline SVG: smooth chevron-down ── */
const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cleanupClickRef = useRef<(() => void) | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // Force solid nav on sub-pages
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    // On homepage: transparent until scrolled
    setIsScrolled(false);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Click outside to close dropdown (use "click" to avoid mousedown/click ordering conflicts)
  useEffect(() => {
    if (!activeDropdown) return;
    // Defer listener registration so the opening click doesn't immediately close it
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

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  const navItems = [
    {
      label: "Solutions",
      href: "#",
      hasDropdown: true,
      children: [
        {
          label: "Executive Search",
          href: "/services/executive-search",
          id: "exec-search",
        },
        {
          label: "Professional Recruitment",
          href: "/services/professional-recruitment",
          id: "prof-recruit",
        },
        {
          label: "Talent Advisory",
          href: "/services/talent-advisory",
          id: "talent-advisory",
        },
      ],
    },
    {
      label: "Industries",
      href: "/industries",
      hasDropdown: false,
    },
    {
      label: "Why Us",
      href: "/why-us",
      hasDropdown: false,
    },
    {
      label: "Global Coverage",
      href: "/global-coverage",
      hasDropdown: false,
    },
  ];

  return (
    <nav
      ref={navRef}
      className={`hg-nav-transparent fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "scrolled bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold hg-nav-logo-text hover:opacity-80 transition-opacity"
        >
          <span
            className="w-8 h-8 rounded-lg"
            style={{
              background:
                "linear-gradient(135deg, var(--hg-color-primary), var(--hg-color-secondary))",
            }}
          />
          <span className="hidden sm:inline">Happy Global Services</span>
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
                  className="hg-nav-dropdown-trigger"
                  onClick={() => handleDropdownToggle(item.label)}
                  aria-expanded={activeDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="hg-nav-chevron" />
                </button>
                {/* Desktop Dropdown */}
                <div className="hg-nav-dropdown-menu" role="menu">
                  {item.children?.map((child) => (
                    <Link
                      key={child.id || child.label}
                      href={child.href}
                      className="hg-nav-dropdown-item"
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
                className="px-4 py-2 text-sm font-medium hg-nav-link transition-colors rounded-md"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        {/* CTA & Language */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            className="text-sm font-medium hg-nav-link transition-colors"
            aria-label="Switch language"
          >
            EN
          </button>
          <Link href="/contact" className="hg-nav-cta">
            <span className="hg-nav-cta-label">Get Started</span>
            <span className="hg-nav-cta-ripple" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl hg-mobile-hamburger cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-xl lg:hidden">
            <div className="flex flex-col divide-y">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.label ? null : item.label,
                          )
                        }
                        className="w-full text-left px-6 py-4 font-medium text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                      >
                        {item.label}
                        <ChevronDown
                          className={`transition-transform duration-300 ${activeDropdown === item.label ? "rotate-180" : ""}`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="bg-gray-50">
                          {item.children?.map((child) => (
                            <Link
                              key={child.id || child.label}
                              href={child.href}
                              className="block px-8 py-3 text-sm text-gray-700 hover:text-(--hg-color-primary) hover:bg-white"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-6 py-4 font-medium text-gray-900 hover:text-(--hg-color-primary) hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-6 py-4 bg-gray-50 flex gap-3">
                <Link
                  href="/contact"
                  className="hg-nav-cta mobile flex-1 flex justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="hg-nav-cta-label">Get Started</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
