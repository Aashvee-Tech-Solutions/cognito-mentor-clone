import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-blue-500/5 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get Started Today
            </span>
            <h2 className="section-title mb-6">
              Ready to Transform Your Career with{" "}
              <span className="text-gradient">CognitoInsights?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Connect with our experts to explore industry-ready training programs, corporate solutions, 
              and career opportunities. Let us help you achieve your professional goals.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:+918978270888" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <p className="font-semibold text-foreground">(+91) 89782 70888</p>
                </div>
              </a>
              
              <a href="mailto:contact@cognitoinsights.ai" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="font-semibold text-foreground">contact@cognitoinsights.ai</p>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=Rajahmundry,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary group-hover:animate-pulse" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit us at</p>
                  <p className="font-semibold text-foreground">Rajahmundry, Andhra Pradesh, India</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Working Hours</p>
                  <p className="font-semibold text-foreground">Mon-Fri: 09:00-20:00 | Sat-Sun: 10:30-22:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl animate-slide-up hover:shadow-primary/10 transition-shadow duration-500" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="+91 98765 43210" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company/Institution</label>
                <Input placeholder="Your Organization" className="bg-secondary/50 border-border focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  placeholder="Tell us about your training needs..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] transition-colors"
                />
              </div>
              <Button className="btn-shiny w-full text-lg py-6 h-auto group">
                Submit Request
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
