import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, TrendingUp, Users, Award, BarChart3, Brain, GraduationCap, Building2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const LEARNING_URL = "https://learning.cognitoinsights.ai/";

const caseStudies = [
  {
    title: "IT Workforce Upskilling for Fortune 500",
    industry: "Corporate",
    icon: Building2,
    challenge: "A leading MNC needed to upskill 500+ employees in cloud computing and DevOps within 6 months.",
    solution: "CognitoInsights designed a custom blended learning program with live projects, mentorship, and certification tracks.",
    results: ["95% completion rate", "40% productivity boost", "200+ certifications earned"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Campus-to-Corporate Training Pipeline",
    industry: "Education",
    icon: GraduationCap,
    challenge: "A university struggled with low placement rates due to skill gaps in students.",
    solution: "We implemented a 6-month industry-ready training program integrated into the final year curriculum.",
    results: ["85% placement rate", "30+ hiring partners", "1000+ students trained"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Government Digital Literacy Initiative",
    industry: "Government",
    icon: Users,
    challenge: "A state government aimed to digitize rural services but lacked trained personnel.",
    solution: "CognitoInsights delivered a large-scale Non-IT digital literacy program across 50+ centers.",
    results: ["10,000+ citizens trained", "50+ training centers", "3x digital adoption"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "AI-Powered Hiring for Startups",
    industry: "Startups",
    icon: Brain,
    challenge: "Rapid-growth startups needed pre-vetted tech talent without lengthy hiring cycles.",
    solution: "Our specialized hiring model provided interview-ready candidates with verified project portfolios.",
    results: ["70% faster hiring", "90% retention rate", "50+ startups served"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Assessment Platform for Institutions",
    industry: "Education",
    icon: BarChart3,
    challenge: "Educational institutions needed a scalable online assessment solution for remote examinations.",
    solution: "We built a custom assessment platform with AI-proctoring, auto-grading, and analytics dashboards.",
    results: ["100K+ assessments conducted", "99.9% uptime", "Real-time analytics"],
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Corporate Leadership Development",
    industry: "Corporate",
    icon: Briefcase,
    challenge: "A mid-size IT company needed to develop future leaders from within their engineering teams.",
    solution: "CognitoInsights designed a leadership bootcamp combining soft skills, project management, and strategic thinking.",
    results: ["30 leaders developed", "25% promotion rate", "Employee satisfaction up 45%"],
    color: "from-red-500 to-orange-500",
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

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative text-center">
            <ScrollReveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Success Stories
              </span>
              <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-6">
                Real Impact, <span className="text-gradient">Real Results</span>
              </h1>
              <p className="section-subtitle mx-auto mb-8">
                Discover how CognitoInsights has transformed training, hiring, and digital solutions 
                for organizations across industries.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
                {[
                  { icon: TrendingUp, label: "Projects Delivered", value: "100+" },
                  { icon: Users, label: "Learners Trained", value: "15,000+" },
                  { icon: Award, label: "Success Rate", value: "95%" },
                  { icon: Building2, label: "Partner Organizations", value: "50+" },
                ].map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <p className="text-muted-foreground text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.title} delay={index * 100}>
                  <div className="course-card group p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} p-2.5 group-hover:scale-110 transition-transform duration-300`}>
                        <study.icon className="w-full h-full text-white" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>

                    <div className="space-y-3 mb-4 flex-1">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Challenge</p>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Solution</p>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="border-t border-border/50 pt-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Results</p>
                      <div className="flex flex-wrap gap-2">
                        {study.results.map((result) => (
                          <span key={result} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="section-title mb-6">
                Ready to Write Your <span className="text-gradient">Success Story?</span>
              </h2>
              <p className="section-subtitle mx-auto mb-8">
                Partner with CognitoInsights to transform your training and hiring outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-shiny text-lg px-8 py-6 h-auto group" onClick={() => window.open(LEARNING_URL, "_blank")}>
                  Explore Programs
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
