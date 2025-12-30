import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="section-padding bg-card/50 grain relative perspective-1000 overflow-hidden"
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute bottom-20 left-10 w-24 h-24 border border-accent/10 rounded-full animate-spin-reverse" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse-glow" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4" style={{ textShadow: "0 0 15px hsl(var(--primary) / 0.5)" }}>About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 animate-text-3d">
            Crafting Visual Stories
          </h2>
        </div>
        
        <div 
          className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            BFA Animation graduate from Jawaharlal Nehru Architecture and Fine Arts University, 
            specializing in animation, video graphics, interactive technology, and visual effects.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Currently working as a Motion Graphics & Video Editor at SocioShout, creating 
            brand-focused visuals using After Effects and Premiere Pro.
          </p>
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed font-medium glow-text">
            Passionate about impactful visuals, storytelling, and AI-assisted creative workflows.
          </p>
        </div>

        {/* Stats with 3D cards */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            { value: "BFA", label: "Animation Degree" },
            { value: "6+", label: "Software Tools" },
            { value: "10+", label: "Projects Delivered" },
            { value: "AI", label: "Workflow Optimized" },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center card-3d p-4 rounded-lg hover:bg-secondary/30 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-gradient font-display text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
