import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, GraduationCap, Monitor, Building, Briefcase, Rocket, Landmark, Smartphone, BookOpen, Users, Cpu, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const industries = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Empowering institutions with industry-ready curricula, simulation labs, and digital assessment platforms to bridge the academia-industry gap.",
    features: ["Curriculum Design", "LMS Platforms", "Online Assessments", "Faculty Training"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "IT & Software",
    description: "Building future-ready tech talent through hands-on training in cloud, DevOps, AI/ML, full-stack development, and emerging technologies.",
    features: ["Cloud & DevOps", "AI/ML Training", "Full-Stack Development", "Certification Prep"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Landmark,
    title: "Government",
    description: "Supporting digital India initiatives with large-scale skilling programs, digital literacy campaigns, and e-governance training solutions.",
    features: ["Digital Literacy", "E-Governance Training", "Skill India Programs", "Rural Upskilling"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Building,
    title: "Corporate",
    description: "Delivering enterprise-grade training programs for workforce transformation, leadership development, and compliance across industries.",
    features: ["Corporate Upskilling", "Leadership Programs", "Compliance Training", "Team Building"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Startups",
    description: "Accelerating startup growth with pre-vetted talent pipelines, tech team building, and rapid skill deployment for fast-moving teams.",
    features: ["Talent Acquisition", "Tech Team Building", "Rapid Onboarding", "Skill Assessment"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Healthcare",
    description: "Specialized training in health informatics, simulation-based medical education, and digital health platform development.",
    features: ["Health Informatics", "Simulation Training", "Digital Health", "Medical Education"],
    color: "from-teal-500 to-cyan-500",
  },
];

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out">
      {children}
    </div>
  );
};

const Industries = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative text-center">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Industries We Serve
              </span>
              <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Solutions Across <span className="text-gradient">Every Sector</span>
              </h1>
              <p className="section-subtitle mx-auto">
                From education to enterprise, CognitoInsights delivers tailored training and technology 
                solutions that drive measurable impact across diverse industries.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <ScrollReveal key={industry.title} delay={index * 100}>
                  <div className="course-card group p-8 h-full flex flex-col">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} p-3.5 mb-6 group-hover:scale-110 transition-transform duration-300 animate-glow`}>
                      <industry.icon className="w-full h-full text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {industry.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="btn-shiny w-full group/btn"
                      onClick={() => window.open(LEARNING_URL, "_blank")}
                    >
                      Explore Solutions
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App & Learning Section */}
        <section className="py-20 bg-secondary/30 border-y border-border/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" />
          <div className="container mx-auto px-4 relative">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Learn Anywhere
                </span>
                <h2 className="section-title mb-6">
                  Training at Your <span className="text-gradient">Fingertips</span>
                </h2>
                <p className="section-subtitle mx-auto">
                  Access our comprehensive learning platform from any device. Our mobile-first approach ensures 
                  seamless learning experiences across all platforms.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Smartphone, title: "Mobile Learning", desc: "Learn on the go with our responsive mobile platform. Access courses, quizzes, and projects anytime." },
                { icon: BookOpen, title: "Live Projects", desc: "Work on real industry projects and build a portfolio that showcases your practical expertise." },
                { icon: Users, title: "Expert Mentors", desc: "Get guidance from industry veterans with 10+ years of experience in their domains." },
                { icon: Cpu, title: "AI-Powered", desc: "Personalized learning paths powered by AI to maximize your skill development efficiency." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 150}>
                  <div className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={400}>
              <div className="text-center mt-12">
                <Button className="btn-shiny text-lg px-8 py-6 h-auto group" onClick={() => window.open(LEARNING_URL, "_blank")}>
                  Start Learning Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="section-title mb-6">
                Don't See Your Industry? <span className="text-gradient">Let's Talk</span>
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                We build custom training and technology solutions for any sector. 
                Reach out to explore what CognitoInsights can do for you.
              </p>
              <Button className="btn-shiny text-lg px-8 py-6 h-auto group" onClick={() => window.open(LEARNING_URL, "_blank")}>
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
