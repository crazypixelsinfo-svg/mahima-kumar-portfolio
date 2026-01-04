import { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
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
      id="education"
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Education
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
            Academic Background
          </h2>
        </div>

        <div
          className={`p-6 md:p-8 rounded-lg border border-border bg-card transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-xl font-semibold">
                  Bachelor of Fine Arts in Animation
                </h3>
              </div>
              <p className="text-muted-foreground">
                Jawaharlal Nehru Architecture and Fine Arts University
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              2021 – 2025
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
