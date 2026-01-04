import { useEffect, useRef, useState } from "react";
import { Clapperboard, Box, Pencil, Video, Languages } from "lucide-react";

const SkillsSection = () => {
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

  const skills = [
    { name: "Motion Graphics", icon: Clapperboard },
    { name: "Video Editing", icon: Video },
    { name: "3D Modeling", icon: Box },
    { name: "3D Set & Prop Design", icon: Box },
    { name: "Basic Sketching", icon: Pencil },
  ];

  const languages = ["English", "Telugu", "Hindi"];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
            What I Do
          </h2>
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300"
            >
              <skill.icon className="h-6 w-6 mb-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              <p className="text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Languages className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              Languages
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-border text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
