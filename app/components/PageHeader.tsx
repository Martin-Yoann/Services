import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  accentColor?: string;
}

export default function PageHeader({ title, subtitle, breadcrumb, accentColor = "#5dadec" }: PageHeaderProps) {
  return (
    <section className="relative bg-[#060e18] pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      {/* Tech grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(93,173,236,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(93,173,236,0.3) 1px, transparent 1px)",
        backgroundSize: "50px 50px" }} />
      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.07] pointer-events-none"
        style={{ background: accentColor, transform: "translate(30%, -40%)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-[0.05] pointer-events-none"
        style={{ background: accentColor, transform: "translate(-30%, 30%)" }} />
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }} />

      <div className="relative container mx-auto px-6 max-w-5xl">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 mb-5 text-xs font-semibold tracking-[0.1em] uppercase text-white/30">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/15">/</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="hover:text-white/60 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/70">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight hg-heading" style={{ color: "#fff" }}>
          {title}
        </h1>
        {subtitle && <p className="text-sm md:text-base text-white/45 max-w-2xl leading-relaxed mt-4">{subtitle}</p>}
      </div>
    </section>
  );
}
