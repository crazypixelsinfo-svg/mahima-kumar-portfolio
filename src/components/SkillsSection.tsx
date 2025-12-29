import { useEffect, useRef, useState } from "react";
import { 
  Palette, 
  Film, 
  Box, 
  Pencil, 
  Layers,
  Sparkles,
  MessageSquare,
  Video,
  Lightbulb,
  Image
} from "lucide-react";

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Creative & Technical",
      skills: [
        { name: "Motion Graphics", icon: Sparkles },
        { name: "Video Editing", icon: Film },
        { name: "3D Modeling", icon: Box },
        { name: "3D Set & Prop Design", icon: Layers },
        { name: "Basic Sketching", icon: Pencil },
      ]
    },
    {
      title: "Software",
      skills: [
        { name: "Adobe After Effects", icon: Palette },
        { name: "Adobe Premiere Pro", icon: Film },
        { name: "Adobe Photoshop", icon: Image },
        { name: "Adobe Illustrator", icon: Palette },
        { name: "Blender", icon: Box },
        { name: "Autodesk Maya", icon: Box },
      ]
    },
    {
      title: "AI Tools & Workflow",
      skills: [
        { name: "ChatGPT", icon: MessageSquare },
        { name: "Veed.io", icon: Video },
        { name: "Gemini", icon: Lightbulb },
        { name: "Lovart.ai", icon: Sparkles },
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="section-padding bg-card/50 grain"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Expertise</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A blend of creative expertise and technical proficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(categoryIndex + 1) * 200}ms` }}
            >
              <div className="bg-secondary/30 border border-border rounded-2xl p-6 h-full glow-border card-hover">
                <h3 className="font-display text-xl font-semibold mb-6 text-gradient">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skill.name}
                        className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
