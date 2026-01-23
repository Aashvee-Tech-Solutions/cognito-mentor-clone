import { useState } from "react";
import { Menu, X, ChevronDown, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { 
    label: "AI Solutions", 
    href: "#solutions",
    dropdown: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
  },
  { 
    label: "Services", 
    href: "#services",
    dropdown: ["Consulting", "Implementation", "Training", "Support"]
  },
  { 
    label: "Industries", 
    href: "#industries",
    dropdown: ["Healthcare", "Finance", "Retail", "Manufacturing"]
  },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      {/* Top bar */}
      <div className="border-b border-border/30 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="hidden md:flex items-center gap-6 text-muted-foreground">
              <a href="#webinar" className="hover:text-primary transition-colors">Free Webinar</a>
              <a href="#enterprise" className="hover:text-primary transition-colors">Enterprise</a>
              <a href="#partners" className="hover:text-primary transition-colors">Partners</a>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground ml-auto">
              <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              <a href="mailto:hello@cognitoinsights.ai" className="hover:text-primary transition-colors">hello@cognitoinsights.ai</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-orange group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-foreground">CognitoInsights</span>
              <span className="text-xs text-muted-foreground -mt-1">.ai</span>
            </div>
          </a>

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
                        href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
            <Button className="btn-primary">
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
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="py-2 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full justify-center">
                Login
              </Button>
              <Button className="btn-primary w-full justify-center">
                Request Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
