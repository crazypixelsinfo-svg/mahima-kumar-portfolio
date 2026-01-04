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
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
            Who I Am
          </h2>
        </div>

        <div
          className={`max-w-3xl transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm an animation student passionate about motion graphics, 3D
            modeling, and video editing. I actively use AI tools like ChatGPT,
            Veed.io, Gemini, and Lovart.ai to enhance creativity, streamline
            workflows, and deliver high-quality results. I'm quick to adapt and
            constantly learn new technologies to stay ahead in the creative
            field.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
