import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const ToolsSection = () => {
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

  const software = [
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Blender",
    "Autodesk Maya",
  ];

  const aiTools = [
    { name: "ChatGPT", description: "Scripting & Brainstorming" },
    { name: "Veed.io", description: "AI Video Editing & Captions" },
    { name: "Gemini", description: "Concept Generation" },
    { name: "Lovart.ai", description: "Design Inspiration" },
    { name: "Midjourney", description: "AI Image Generation" },
    { name: "Runway", description: "AI Video & Motion Effects" },
    { name: "ElevenLabs", description: "AI Voice & Audio" },
    { name: "Notion AI", description: "Workflow & Documentation" },
  ];

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="section-spacing border-t border-border"
    >
      <div className="section-container">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-4">
            Tools
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
            Software & AI Workflow
          </h2>
        </div>

        {/* Software Grid */}
        <div
          className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wide mb-6">
            Software
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {software.map((tool, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border bg-card text-center hover:border-foreground/20 transition-all duration-300"
              >
                <p className="text-sm font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              AI Workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTools.map((tool, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-300"
              >
                <p className="font-medium mb-2">{tool.name}</p>
                <p className="text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
