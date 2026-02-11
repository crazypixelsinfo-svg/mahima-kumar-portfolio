import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  title: string;
  category: string;
  vimeoId: string;
}

const projects: Project[] = [
  { id: "1", title: "Showreel 2025", category: "Motion Graphics", vimeoId: "1150100962" },
  { id: "2", title: "Brand Promo", category: "Promo", vimeoId: "1150116475" },
  { id: "3", title: "Social Reel", category: "Reel", vimeoId: "1150116610" },
  { id: "4", title: "Product Ad", category: "Ad", vimeoId: "1150116762" },
  { id: "5", title: "Motion Design", category: "Motion Graphics", vimeoId: "1150116846" },
  { id: "6", title: "Promotional Video", category: "Promo", vimeoId: "1150116864" },
  { id: "7", title: "Commercial Spot", category: "Ad", vimeoId: "1150116896" },
  { id: "8", title: "Creative Reel", category: "Reel", vimeoId: "1150118281" },
];

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Reel": return "bg-primary/20 text-primary border-primary/30";
      case "Promo": return "bg-accent/20 text-accent border-accent/30";
      case "Motion Graphics": return "bg-[hsl(var(--gradient-purple)/0.2)] text-[hsl(var(--gradient-purple))] border-[hsl(var(--gradient-purple)/0.3)]";
      case "Ad": return "bg-[hsl(var(--gradient-teal)/0.2)] text-[hsl(var(--gradient-teal))] border-[hsl(var(--gradient-teal)/0.3)]";
      default: return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative group cursor-pointer rounded-xl overflow-hidden glow-border card-hover border border-border">
            <div className="aspect-video bg-secondary relative overflow-hidden">
              {/* Vimeo Background Preview */}
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeoId}?background=1&muted=1&loop=1&autopause=0`}
                className="absolute inset-0 w-full h-full pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-500"
                allow="autoplay; fullscreen"
                title={`${project.title} Preview`}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/70 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Play className="w-6 h-6 text-primary ml-0.5" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${getCategoryColor(project.category)}`}>
                  {project.category}
                </span>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/80 to-transparent">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-5xl w-full p-0 bg-background border-border">
          <div className="aspect-video">
            <iframe
              src={`https://player.vimeo.com/video/${project.vimeoId}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={project.title}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
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

  const mainShowreel = projects[0];
  const otherProjects = projects.slice(1);
  const initialProjects = otherProjects.slice(0, 3);
  const remainingProjects = otherProjects.slice(3);

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="section-padding min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Selected Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A showcase of motion graphics, video editing, and creative projects crafted with precision and passion
          </p>
        </div>

        {/* Main Showreel - Featured */}
        <div 
          className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden glow-border card-hover border border-border">
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  <iframe
                    src={`https://player.vimeo.com/video/${mainShowreel.vimeoId}?background=1&muted=1&loop=1&autopause=0`}
                    className="absolute inset-0 w-full h-full pointer-events-none scale-105 group-hover:scale-110 transition-transform duration-500"
                    allow="autoplay; fullscreen"
                    title="Showreel Preview"
                  />
                  
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full border bg-primary/20 text-primary border-primary/30">
                      Featured
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                    <h3 className="font-display text-2xl font-bold mb-1">{mainShowreel.title}</h3>
                    <p className="text-muted-foreground">{mainShowreel.category}</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-background border-border">
              <div className="aspect-video">
                <iframe
                  src={`https://player.vimeo.com/video/${mainShowreel.vimeoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Showreel"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Initial Project Grid - 3 Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>

        {/* Remaining Projects - Hidden until View More */}
        <div 
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 overflow-hidden transition-all duration-700 ease-out ${
            showAll ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {remainingProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index + 3} 
              isVisible={isVisible && showAll} 
            />
          ))}
        </div>

        {/* View More Button */}
        {!showAll && remainingProjects.length > 0 && (
          <div className="mt-10 text-center">
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={() => setShowAll(true)}
              className="group"
            >
              View More Projects
              <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        )}

        {/* External link */}
        <div className={`mt-10 text-center transition-all duration-500 ${showAll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Button variant="ghost" asChild>
            <a 
              href="https://vimeo.com/user/mahimakumar" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All on Vimeo
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;