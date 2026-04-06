import { Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router-dom";

const quickLinks = ["Home", "Our Services", "About", "Facilities", "Gallery", "Plans & Pricing", "Contact"];
const serviceLinks = ["Antenatal Care", "Cardiology", "Gynaecology", "Dermatology", "Urology", "ENT"];
const sectionIds: Record<string, string> = {
  "Home": "hero", "Our Services": "services", "About": "about",
  "Facilities": "facilities", "Plans & Pricing": "pricing", "Contact": "contact",
};

const Footer = () => {
  const navigate = useNavigate();
  
  const handleLinkClick = (l: string) => {
    const pages: Record<string, string> = {
      "About": "/about",
      "Facilities": "/facilities",
      "Gallery": "/gallery",
      "Doctors": "/doctors",
      "Home": "/"
    };

    if (pages[l]) {
      navigate(pages[l]);
      window.scrollTo(0, 0);
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionIds[l])?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Mediqués Plus" className="h-10" />
            <p className="font-display italic text-sm text-primary-foreground/70">
              Here for you for the care you deserve.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/1LKsXkJG3F/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/447307092681" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <button onClick={() => handleLinkClick(l)} className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <button onClick={() => handleLinkClick("Our Services")} className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="font-body text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
              <div className="space-y-2 font-body text-sm text-primary-foreground/70">
                <p>Plot 22, Unit H, Ewet Housing Estate, Uyo</p>
                <p>+234 813 375 6264</p>
                <p>meadowhallhealth@gmail.com</p>
              </div>
            </div>
            <div>
              <p className="font-body text-sm font-medium mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 min-w-0 bg-primary-foreground/10 border border-primary-foreground/20 rounded-l-lg px-3 py-2 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 outline-none focus:border-accent transition-colors"
                />
                <button className="bg-accent text-accent-foreground font-body text-sm font-medium px-4 py-2 rounded-r-lg hover:brightness-110 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6">
          <p className="font-body text-xs text-primary-foreground/50 text-center">
            © 2024 Mediqués Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
