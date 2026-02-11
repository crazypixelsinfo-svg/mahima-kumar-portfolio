import { useEffect, useRef, useState } from "react";
import { Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: string;
  vimeoId: string;
}

const projects: Project[] = [
  { id: "1", vimeoId: "1150100962" },
  { id: "2", vimeoId: "1150116475" },
  { id: "3", vimeoId: "1150116610" },
  { id: "4", vimeoId: "1150116762" },
  { id: "5", vimeoId: "1150116846" },
  { id: "6", vimeoId: "1150116864" },
  { id: "7", vimeoId: "1150116896" },
  { id: "8", vimeoId: "1150118281" },
  { id: "9", vimeoId: "1164043014" },
  { id: "10", vimeoId: "1164043150" },
  { id: "11", vimeoId: "1164043465" },
  { id: "12", vimeoId: "1164043878" },
  { id: "13", vimeoId: "1164042406" },
];

const ProjectCard = ({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) => {
  return (
    <div 
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${100 + index * 100}ms` }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative group cursor-pointer rounded-xl overflow-hidden glow-border card-hover border border-border">
            <div className="aspect-video bg-secondary relative overflow-hidden">
              <iframe
                src={`https://player.vimeo.com/video/${project.vimeoId}?background=1&muted=1&loop=1&autopause=0`}
                className="absolute inset-0 w-full h-full pointer-events-none scale-110 group-hover:scale-125 transition-transform duration-500"
                allow="autoplay; fullscreen"
                title="Project Preview"
              />
              <div className="absolute inset-0 bg-background/70 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <Play className="w-6 h-6 text-primary ml-0.5" />
                </div>
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
              title="Project"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface WorkSectionProps {
  showAll?: boolean;
}

const WorkSection = ({ showAll: forceShowAll }: WorkSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(forceShowAll ?? false);
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

  const initialProjects = forceShowAll ? projects : projects.slice(0, 3);
  const remainingProjects = forceShowAll ? [] : projects.slice(3);

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
            A showcase of motion graphics, video editing, and creative projects
          </p>
        </div>

        {/* Project Grid */}
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

        {/* Remaining Projects */}
        {!forceShowAll && (
          <div 
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 overflow-hidden transition-all duration-700 ease-out ${
              showAll ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
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
        )}

        {/* View More Button */}
        {!forceShowAll && !showAll && remainingProjects.length > 0 && (
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
      </div>
    </section>
  );
};

export default WorkSection;
