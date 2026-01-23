import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 500, suffix: "+", label: "AI Models Deployed" },
  { value: 50, suffix: "+", label: "Enterprise Clients" },
  { value: 100, suffix: "+", label: "Expert Consultants" },
  { value: 10, suffix: "M+", label: "Data Points Analyzed" },
];

const useCountUp = (target: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return { count, ref };
};

export const Stats = () => {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Behind Every Successful AI Implementation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CognitoInsights – A Trusted Partner for Enterprise AI Solutions and Digital Transformation
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const { count, ref } = useCountUp(stat.value, 2000);
            return (
              <div
                key={stat.label}
                ref={ref}
                className="stat-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {count}{stat.suffix}
                </div>
                <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
