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
      className="section-padding bg-card/50 grain min-h-screen flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">About Me</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
            My Journey
          </h2>
        </div>
        
        <div 
          className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            I am <span className="text-foreground font-medium">Bellamkonda Mahima Kumar</span>, a BFA Animation graduate from 
            Jawaharlal Nehru Architecture and Fine Arts University, specializing in animation, video graphics, 
            interactive technology, and visual effects.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Currently working as a Motion Graphics & Video Editor at SocioShout, I create 
            brand-focused visuals that captivate audiences and drive engagement. My toolkit includes 
            After Effects, Premiere Pro, and cutting-edge AI tools that streamline creative workflows.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            What drives me is the art of visual storytelling. Every frame, every transition, 
            every effect is crafted with intention to create memorable experiences that resonate 
            with viewers and achieve client objectives.
          </p>
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed font-medium">
            Passionate about impactful visuals, storytelling, and AI-assisted creative workflows.
          </p>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            { value: "BFA", label: "Animation Degree" },
            { value: "6+", label: "Software Tools" },
            { value: "10+", label: "Projects Delivered" },
            { value: "AI", label: "Workflow Optimized" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-gradient font-display text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
