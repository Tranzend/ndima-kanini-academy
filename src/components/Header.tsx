import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";
import { SCHOOL } from "@/lib/school";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Mission, Motto & Values", path: "/mission-values" },
      { label: "Our History", path: "/history" },
      { label: "Our Staff", path: "/staff" },
    ],
  },
  {
    label: "Academics",
    children: [
      { label: "Pre-Primary", path: "/pre-primary" },
      { label: "Lower Primary", path: "/lower-primary" },
      { label: "Upper Primary", path: "/upper-primary" },
      { label: "Day & Boarding", path: "/boarding" },
      { label: "Fees Structure", path: "/fees" },
    ],
  },
  { label: "Gallery", path: "/gallery" },
  { label: "Blog", path: "/blog" },
  { label: "Events", path: "/events" },
  { label: "Apply", path: "/apply" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="hero-gradient text-primary-foreground">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${SCHOOL.primaryPhone}`}
              className="flex items-center gap-1 opacity-90 hover:opacity-100"
            >
              <Phone size={14} />
              <span>{SCHOOL.primaryPhoneDisplay}</span>
            </a>
            <a
              href={`mailto:${SCHOOL.email}`}
              className="hidden items-center gap-1 opacity-90 hover:opacity-100 sm:flex"
            >
              <Mail size={14} />
              <span>{SCHOOL.email}</span>
            </a>
            <a
              href={SCHOOL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1 opacity-90 hover:opacity-100 md:flex"
              aria-label="Facebook"
            >
              <Facebook size={14} />
              <span>Follow us</span>
            </a>
          </div>
          <Link
            to="/apply"
            className="rounded-sm bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground shadow-soft transition hover:bg-accent/90"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt={`${SCHOOL.name} crest`}
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-lg font-bold leading-tight text-foreground font-serif">
                {SCHOOL.name}
              </h1>
              <p className="text-xs italic text-muted-foreground font-sans">
                "{SCHOOL.motto}"
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition hover:bg-muted">
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute left-0 top-full min-w-[220px] rounded-md border border-border bg-popover p-1 shadow-elevated animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block rounded-sm px-3 py-2 text-sm transition hover:bg-muted ${
                            isActive(child.path)
                              ? "bg-muted font-semibold text-primary"
                              : "text-popover-foreground"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition hover:bg-muted ${
                    isActive(item.path!)
                      ? "bg-muted text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="rounded-md p-2 text-foreground lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-border bg-background px-4 py-4 lg:hidden animate-fade-in">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="mb-2">
                  <button
                    className="flex w-full items-center justify-between py-2 text-sm font-medium text-foreground"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition ${openDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="ml-4 border-l-2 border-primary/20 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
