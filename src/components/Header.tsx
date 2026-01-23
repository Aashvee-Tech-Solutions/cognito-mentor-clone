import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PopupForm } from "@/components/PopupForm";
import logo from "@/assets/logo.png";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const navItems = [
  { 
    label: "Training Programs", 
    href: LEARNING_URL,
    external: true,
    dropdown: ["IT Training", "Non-IT Training", "Corporate Upskilling", "Certification Courses"]
  },
  { 
    label: "Services", 
    href: LEARNING_URL,
    external: true,
    dropdown: ["Hiring Solutions", "Corporate Training", "Digital Learning Platforms", "Assessment Solutions"]
  },
  { 
    label: "Industries", 
    href: LEARNING_URL,
    external: true,
    dropdown: ["Education", "IT & Software", "Government", "Corporate"]
  },
  { label: "Case Studies", href: LEARNING_URL, external: true },
  { label: "About", href: "/about", external: false },
  { label: "Blog", href: LEARNING_URL, external: true },
];

type PopupType = "webinar" | "enterprise" | "partners" | null;

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activePopup, setActivePopup] = useState<PopupType>(null);
  const navigate = useNavigate();

  const popupConfig = {
    webinar: {
      title: "Register for Free Webinar",
      subtitle: "Join our upcoming webinar and learn from industry experts"
    },
    enterprise: {
      title: "Enterprise Solutions",
      subtitle: "Get customized training solutions for your organization"
    },
    partners: {
      title: "Become a Partner",
      subtitle: "Join our partner network and grow together"
    }
  };

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (item.external) {
      window.open(item.href, "_blank");
    } else {
      e.preventDefault();
      navigate(item.href);
    }
    setIsOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        {/* Top bar */}
        <div className="border-b border-border/30 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-10 text-sm">
              <div className="hidden md:flex items-center gap-6 text-muted-foreground">
                <button 
                  onClick={() => setActivePopup("webinar")} 
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Free Webinar
                </button>
                <button 
                  onClick={() => setActivePopup("enterprise")} 
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Enterprise
                </button>
                <button 
                  onClick={() => setActivePopup("partners")} 
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Partners
                </button>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground ml-auto">
                <a href="tel:+918978270888" className="hover:text-primary transition-colors">(+91) 89782 70888</a>
                <a href="mailto:contact@cognitoinsights.ai" className="hover:text-primary transition-colors">contact@cognitoinsights.ai</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navbar */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={logo} 
                alt="CognitoInsights" 
                className="h-12 md:h-14 group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.dropdown ? item.label : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(item, e)}
                    className="nav-link flex items-center gap-1 py-2 font-medium"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  
                  {item.dropdown && activeDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href={LEARNING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Button 
                variant="ghost" 
                className="text-muted-foreground hover:text-foreground"
                onClick={() => window.open(LEARNING_URL, "_blank")}
              >
                Login
              </Button>
              <Button 
                className="btn-shiny"
                onClick={scrollToContact}
              >
                Request Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-up">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {/* Mobile top links */}
              <div className="flex flex-wrap gap-4 pb-4 border-b border-border">
                <button 
                  onClick={() => { setActivePopup("webinar"); setIsOpen(false); }}
                  className="text-sm text-primary"
                >
                  Free Webinar
                </button>
                <button 
                  onClick={() => { setActivePopup("enterprise"); setIsOpen(false); }}
                  className="text-sm text-primary"
                >
                  Enterprise
                </button>
                <button 
                  onClick={() => { setActivePopup("partners"); setIsOpen(false); }}
                  className="text-sm text-primary"
                >
                  Partners
                </button>
              </div>
              
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(item, e)}
                  className="py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Button 
                  variant="ghost" 
                  className="w-full justify-center"
                  onClick={() => { window.open(LEARNING_URL, "_blank"); setIsOpen(false); }}
                >
                  Login
                </Button>
                <Button 
                  className="btn-shiny w-full justify-center"
                  onClick={() => { scrollToContact(); setIsOpen(false); }}
                >
                  Request Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Popup Forms */}
      {activePopup && (
        <PopupForm
          isOpen={!!activePopup}
          onClose={() => setActivePopup(null)}
          title={popupConfig[activePopup].title}
          subtitle={popupConfig[activePopup].subtitle}
        />
      )}
    </>
  );
};
