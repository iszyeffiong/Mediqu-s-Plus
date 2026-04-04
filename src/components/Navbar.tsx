import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Our Services", "About", "Facilities", "Plans & Pricing", "Contact"];
const sectionIds: Record<string, string> = {
  "Home": "hero",
  "Our Services": "services",
  "About": "about",
  "Facilities": "facilities",
  "Plans & Pricing": "pricing",
  "Contact": "contact",
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <button onClick={() => scrollTo("hero")} className="flex items-baseline gap-1">
          <span className="font-display italic text-2xl font-semibold text-primary">Mediqués</span>
          <span className="font-body text-sm font-semibold tracking-wider text-accent uppercase">Plus</span>
        </button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionIds[link])}
              className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1.5px] after:bg-accent after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="btn-shimmer font-body text-sm font-medium bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary-light transition-colors"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-6 space-y-1">
          {navLinks.map((link, i) => (
            <button
              key={link}
              onClick={() => scrollTo(sectionIds[link])}
              className="block w-full text-left font-body text-base py-3 px-2 text-foreground/80 hover:text-primary transition-colors"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="btn-shimmer w-full font-body text-sm font-medium bg-primary text-primary-foreground px-5 py-3 rounded-lg mt-2"
          >
            Book Appointment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
