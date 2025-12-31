import { useEffect, useRef, useState } from "react";
import { 
  Sparkles, 
  MessageSquare, 
  ImageIcon, 
  Video, 
  Code, 
  Zap,
  Palette,
  Bot
} from "lucide-react";

const aiTools = [
  {
    icon: Code,
    name: "Lovable AI",
    category: "Website Development",
    description: "Building modern, responsive websites with AI-powered development. Smart layouts, clean code, and rapid prototyping."
  },
  {
    icon: MessageSquare,
    name: "ChatGPT",
    category: "Content & Strategy",
    description: "Scripting, ideation, creative direction, and content optimization for marketing and storytelling."
  },
  {
    icon: ImageIcon,
    name: "Midjourney",
    category: "Image Generation",
    description: "Creating stunning visual concepts, mood boards, and artistic references for creative projects."
  },
  {
    icon: Video,
    name: "Runway ML",
    category: "Video AI",
    description: "AI-powered video editing, motion tracking, and generative video effects for next-level productions."
  },
  {
    icon: Sparkles,
    name: "Veed.io",
    category: "Video Editing",
    description: "AI captions, auto-subtitles, and streamlined video editing for social media content."
  },
  {
    icon: Bot,
    name: "Gemini",
    category: "Research & Ideas",
    description: "Concept generation, research assistance, and creative brainstorming for projects."
  },
  {
    icon: Palette,
    name: "Lovart.ai",
    category: "Visual Inspiration",
    description: "AI-generated visual references and artistic inspiration for design projects."
  },
  {
    icon: Zap,
    name: "Automation Tools",
    category: "Workflow",
    description: "Streamlining repetitive tasks, batch processing, and optimizing production pipelines."
  }
];

const AIWorkflowSection = () => {
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

  return (
    <section 
      ref={sectionRef}
      id="ai-workflow" 
      className="section-padding min-h-screen flex items-center bg-card/30 grain"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">AI-Powered</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            AI Tools & Workflow
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Leveraging cutting-edge AI tools to enhance creativity, streamline production, 
            and deliver exceptional results faster than ever before.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <div
                key={tool.name}
                className={`group bg-secondary/30 border border-border rounded-2xl p-6 glow-border card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${150 + index * 75}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {tool.category}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {tool.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-muted-foreground text-lg">
            <span className="text-foreground font-medium">Always exploring</span> new tools and technologies to stay ahead of the curve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIWorkflowSection;
