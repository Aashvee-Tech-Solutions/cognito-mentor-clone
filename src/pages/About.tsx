import { Target, Lightbulb, Users, Rocket, Eye, Flag, CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/logo.png";

const values = [
  {
    icon: Target,
    title: "Industry-Relevant Skills",
    description: "Training aligned with real-world tools, technologies, and job roles."
  },
  {
    icon: Lightbulb,
    title: "Technology-Driven Learning",
    description: "Modern teaching methodologies supported by digital platforms."
  },
  {
    icon: Users,
    title: "Inclusive Opportunities",
    description: "Empowering both tech and non-tech learners with equal growth opportunities."
  },
  {
    icon: Rocket,
    title: "Career Enablement",
    description: "Focused on employability through structured learning and professional guidance."
  }
];

const missionPoints = [
  "Providing job-oriented IT and Non-IT training",
  "Delivering hands-on, practical learning experiences",
  "Supporting career development and employability",
  "Offering corporate training and workforce upskilling",
  "Building scalable digital learning and assessment platforms"
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <img 
              src={logo} 
              alt="CognitoInsights Solutions Pvt Ltd" 
              className="h-32 md:h-40 mx-auto mb-8 animate-float"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              CognitoInsights Solutions Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none animate-slide-up">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                CognitoInsights Solutions Pvt. Ltd. is a technology-driven training and solutions company 
                located in <span className="text-primary font-semibold">Rajahmundry, Andhra Pradesh</span>, 
                committed to transforming talent through education, innovation, and digital enablement. 
                We specialize in delivering industry-ready training programs, corporate upskilling, 
                hiring solutions, and software platforms that bridge the gap between learning and 
                real-world employment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong focus on practical learning and outcome-based education, CognitoInsights 
                empowers students, professionals, businesses, and institutions to succeed in today's 
                fast-evolving digital ecosystem. Our programs are designed to align with current industry 
                needs, ensuring learners gain relevant skills, hands-on experience, and career confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-slide-up">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 animate-pulse-glow">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                "To be the ultimate bridge between education and employment, creating a world where 
                every individual and organization has the skills to thrive in a digital future."
              </blockquote>
              <p className="mt-6 text-muted-foreground">
                We envision a future where education is accessible, skill-oriented, and directly 
                connected to employment, enabling individuals and organizations to adapt, innovate, 
                and grow in a technology-driven world.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 animate-pulse-glow">
                <Flag className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                "To transform talent through technology by delivering industry-ready training, 
                specialized hiring models, and innovative software solutions that empower students, 
                businesses, and governments."
              </blockquote>
              <div className="mt-6 space-y-3">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block animate-fade-in">
              Our Core Values
            </span>
            <h2 className="section-title animate-slide-up">
              What We Stand For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="section-title mb-6">Our Commitment</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CognitoInsights Solutions Pvt. Ltd. is dedicated to setting high standards in training, 
              talent development, and technology solutions. From <span className="text-primary font-semibold">Rajahmundry</span>, 
              we work towards creating a skilled, confident, and future-ready workforce that meets 
              global industry demands.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
