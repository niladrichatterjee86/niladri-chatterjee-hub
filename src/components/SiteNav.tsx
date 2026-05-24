import { Link } from "@/lib/router-shim";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/journey", label: "Journey" },
  { to: "/blogs", label: "Articles" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_16px_var(--primary)]" />
          <span className="font-display text-sm tracking-tight">
            Niladri Chatterjee
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="relative px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 data-[status=active]:scale-x-100" />
            </Link>
          ))}
        </nav>
        <nav className="md:hidden flex items-center gap-3 text-xs text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className="data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="hairline h-px w-full opacity-60" />
    </header>
  );
}
