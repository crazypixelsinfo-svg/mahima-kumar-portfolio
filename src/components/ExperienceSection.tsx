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
      { threshold: 0.2 }
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
        "Edited reels and promo videos",
        "Used AI tools to speed up workflows",
      ],
    },
    {
      title: "Freelance Animator / Motion Designer",
      company: "Self-Employed",
      period: "2023 – Present",
      current: false,
      responsibilities: [
        "Animated explainer videos, logo animations, and social media content",
        "Designed brand-based motion graphics",
        "Managed client feedback and revisions",
        "Delivered paid projects on deadlines",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
            Work History
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 rounded-lg border border-border bg-card transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    {exp.current && (
                      <span className="px-2 py-1 text-xs rounded-full bg-foreground text-background">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((resp, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
