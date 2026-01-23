import { Brain, Linkedin, Twitter, Facebook, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  "AI Solutions": [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "AI Integration",
  ],
  "Services": [
    "Consulting",
    "Implementation",
    "Training & Workshops",
    "Support & Maintenance",
    "Custom Development",
  ],
  "Industries": [
    "Healthcare",
    "Finance & Banking",
    "Retail & E-commerce",
    "Manufacturing",
    "Logistics",
  ],
  "Company": [
    "About Us",
    "Careers",
    "Blog",
    "Case Studies",
    "Contact",
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/50 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-foreground">CognitoInsights</span>
                <span className="text-xs text-muted-foreground -mt-1">.ai</span>
              </div>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Empowering enterprises with cutting-edge AI solutions. Transform your business with 
              intelligent automation and data-driven insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} CognitoInsights.ai. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
