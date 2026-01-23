import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-blue-500/5 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Get Started Today
            </span>
            <h2 className="section-title mb-6">
              Ready to Transform Your Business with{" "}
              <span className="text-gradient">AI?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Schedule a free consultation with our AI experts. Let us show you how CognitoInsights.ai 
              can help you achieve your business goals with cutting-edge artificial intelligence solutions.
            </p>

            <div className="space-y-4 mb-8">
              <a href="tel:+1234567890" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us at</p>
                  <p className="font-semibold text-foreground">+1 (234) 567-890</p>
                </div>
              </a>
              
              <a href="mailto:hello@cognitoinsights.ai" className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="font-semibold text-foreground">hello@cognitoinsights.ai</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Visit us at</p>
                  <p className="font-semibold text-foreground">123 AI Street, Tech City, TC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Request a Callback</h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="bg-secondary/50 border-border" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="bg-secondary/50 border-border" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@company.com" className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="+1 (234) 567-890" className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input placeholder="Your Company" className="bg-secondary/50 border-border" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  placeholder="Tell us about your AI needs..."
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                />
              </div>
              <Button className="btn-primary w-full text-lg py-6 h-auto group">
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
