import { useEffect, useRef, useState } from "react";
import { Video, Wand2, Globe, Film, Layers, Sparkles } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Professional video editing for commercials, social media content, and promotional videos using Premiere Pro with seamless transitions and color grading."
  },
  {
    icon: Wand2,
    title: "Motion Graphics",
    description: "Dynamic motion graphics and animated visuals that bring brands to life. From logo animations to full explainer videos using After Effects."
  },
  {
    icon: Globe,
    title: "Website with AI",
    description: "AI-powered websites with smart layouts, modern UX, and automation. Built using cutting-edge AI tools and no-code platforms for rapid deployment."
  },
  {
    icon: Film,
    title: "Social Media Content",
    description: "Engaging reels, shorts, and social media videos optimized for maximum impact across Instagram, YouTube, and TikTok."
  },
  {
    icon: Layers,
    title: "3D Animation",
    description: "3D modeling, set design, and prop creation using Blender and Autodesk Maya for product visualizations and animated sequences."
  },
  {
    icon: Sparkles,
    title: "AI-Enhanced Workflow",
    description: "Leveraging AI tools like ChatGPT, Veed.io, and Gemini to streamline production, generate creative concepts, and optimize delivery times."
  }
];

const ServicesSection = () => {
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
      id="services" 
      className="section-padding min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Services</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            What I Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive creative services tailored to elevate your brand's visual presence and storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-secondary/30 border border-border rounded-2xl p-8 glow-border card-hover transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <IconComponent className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;