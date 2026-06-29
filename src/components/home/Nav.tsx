import { Link } from "@tanstack/react-router";
import { brand } from "@/lib/brand-assets";

type SubItem = {
  label: string;
  href: string;
  children?: SubItem[];
};

type NavItem = {
  label: string;
  href: string;
  children?: SubItem[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Overview", href: "#services" },
      { label: "Strategy & Consultation", href: "#services" },
      { label: "Paid Social", href: "#services" },
      { label: "SEA / PPC", href: "#services" },
      { label: "GEO & SEO", href: "#services" },
      { label: "Content & Creative", href: "#services" },
      { label: "Email / SMS / Telemarketing", href: "#services" },
      { label: "Organic (incl. Influencers)", href: "#services" },
      { label: "Website Development", href: "#services" },
      { label: "Tech & Data", href: "#services" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    children: [
      {
        label: "Lead Generation",
        href: "#solutions",
        children: [
          { label: "B2C", href: "#solutions" },
          { label: "B2B", href: "#solutions" },
        ],
      },
      {
        label: "E-Commerce",
        href: "/ecommerce",
        children: [
          { label: "B2C", href: "#solutions" },
          { label: "B2B", href: "#solutions" },
        ],
      },
      {
        label: "SaaS",
        href: "#solutions",
        children: [
          { label: "B2C", href: "#solutions" },
          { label: "B2B", href: "#solutions" },
        ],
      },
    ],
  },
  { label: "Case Studies", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Products", href: "#products" },
  {
    label: "About Us",
    href: "#about",
    children: [
      { label: "Overview", href: "#about" },
      { label: "Team", href: "#about" },
      { label: "Careers", href: "#academy" },
      { label: "Academy", href: "#academy" },
      { label: "News", href: "#about" },
    ],
  },
];

function renderLink(href: string, label: string, className: string) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur-md">
      <div className="container-r17 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={brand.logo} alt="R17 Ventures" className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] font-medium text-ink-soft lg:flex">
          {navItems.map((item) => (
            <div key={item.label} className="group/item relative">
              {renderLink(
                item.href,
                item.label,
                "inline-flex items-center gap-1 py-5 transition-colors hover:text-ink",
              )}
              {item.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[220px] -translate-y-1 border border-hairline bg-background opacity-0 shadow-lg transition-all duration-150 group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100">
                  <ul className="py-2">
                    {item.children.map((child) => (
                      <li key={child.label} className="group/sub relative">
                        <div className="flex items-center justify-between">
                          {renderLink(
                            child.href,
                            child.label,
                            "block flex-1 px-4 py-2 text-[13px] text-ink-soft transition-colors hover:bg-muted hover:text-ink",
                          )}
                          {child.children && (
                            <span className="pr-3 text-ink-soft">›</span>
                          )}
                        </div>
                        {child.children && (
                          <div className="invisible absolute left-full top-0 z-50 min-w-[180px] -translate-x-1 border border-hairline bg-background opacity-0 shadow-lg transition-all duration-150 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                            <ul className="py-2">
                              {child.children.map((grand) => (
                                <li key={grand.label}>
                                  {renderLink(
                                    grand.href,
                                    grand.label,
                                    "block px-4 py-2 text-[13px] text-ink-soft transition-colors hover:bg-muted hover:text-ink",
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex h-10 items-center gap-2 rounded-sm bg-accent px-5 text-[13px] font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
        >
          Let's Talk
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </div>
    </header>
  );
}
