import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Expert AI consultants with 10+ years experience",
  "Custom solutions tailored to your industry",
  "24/7 support and maintenance",
  "Seamless integration with existing systems",
  "Scalable architecture for growth",
  "Data security and compliance guaranteed",
];

export const Features = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Why Choose Us
            </span>
            <h2 className="section-title mb-6">
              One Platform,{" "}
              <span className="text-gradient">Infinite Possibilities</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Gain hands-on experience, learn from seasoned AI experts, and take your next big career step with confidence. 
              The future you want starts here with CognitoInsights.ai.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ghost" className="btn-outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-card to-background border border-border rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                    <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                    <p className="text-muted-foreground text-sm">Industries Served</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                    <p className="text-muted-foreground text-sm">Years Experience</p>
                  </div>
                  <div className="bg-secondary/50 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                    <p className="text-muted-foreground text-sm">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
