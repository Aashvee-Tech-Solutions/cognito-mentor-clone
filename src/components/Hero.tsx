import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-40 right-20 hidden xl:block animate-float">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur border border-primary/20 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary">AI</span>
        </div>
      </div>
      <div className="absolute top-60 left-20 hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur border border-blue-500/20 flex items-center justify-center">
          <span className="text-lg font-bold text-blue-400">ML</span>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">AI-Powered Intelligence Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="section-title text-4xl md:text-5xl lg:text-7xl mb-6 animate-slide-up">
            Transform Your Business with{" "}
            <span className="text-gradient">Intelligent AI</span>{" "}
            Solutions
          </h1>

          {/* Subheading */}
          <p className="section-subtitle mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            CognitoInsights.ai empowers enterprises with cutting-edge artificial intelligence, 
            machine learning, and data analytics to drive innovation and accelerate growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button className="btn-primary text-lg px-8 py-6 h-auto group">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="ghost" className="text-lg px-8 py-6 h-auto text-muted-foreground hover:text-foreground group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-muted-foreground mb-6 text-sm uppercase tracking-wider">Trusted by leading enterprises worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              {["Microsoft", "Google", "Amazon", "IBM", "Oracle"].map((company) => (
                <span key={company} className="text-xl font-bold text-muted-foreground/80 hover:text-foreground transition-colors cursor-default">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
