import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Motion Graphics & Video Editor",
      company: "SocioShout",
      period: "June 2025 – Present",
      current: true,
      responsibilities: [
        "Created motion graphics and short video ads",
        "Edited reels and promotional videos",
        "Used AI tools to optimize editing workflow",
      ]
    },
    {
      title: "Freelance Animator / Motion Designer",
      company: "Independent",
      period: "2024 – Present",
      current: false,
      responsibilities: [
        "Worked with private clients on explainer videos, logo animations, and social media content",
        "Delivered paid projects under deadlines",
        "Managed client feedback and revisions",
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="section-padding"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Career</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional journey in motion graphics and video editing
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative mb-12 last:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-primary border-primary' : 'bg-background border-border'} md:-translate-x-1/2 -translate-x-1/2`}>
                  {exp.current && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content card */}
                <div className="ml-6 md:ml-0 bg-secondary/30 border border-border rounded-2xl p-6 glow-border card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    {exp.current && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className="flex items-start gap-2 text-muted-foreground text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
