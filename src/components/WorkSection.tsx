import { useEffect, useRef, useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const WorkSection = () => {
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
      id="work" 
      className="section-padding"
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

        {/* Main Showreel */}
        <div 
          className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <div className="relative group cursor-pointer rounded-2xl overflow-hidden glow-border card-hover">
                <div className="aspect-video bg-secondary relative overflow-hidden">
                  {/* Vimeo Thumbnail */}
                  <iframe
                    src="https://player.vimeo.com/video/1150100962?background=1&muted=1&loop=1&autopause=0"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    allow="autoplay; fullscreen"
                    title="Showreel Preview"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                    <h3 className="font-display text-2xl font-bold mb-1">Showreel 2025</h3>
                    <p className="text-muted-foreground">Motion Graphics & Video Editing</p>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-5xl w-full p-0 bg-background border-border">
              <div className="aspect-video">
                <iframe
                  src="https://player.vimeo.com/video/1150100962?autoplay=1"
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Showreel"
                />
              </div>
            </DialogContent>
          </Dialog>

          {/* External link */}
          <div className="mt-6 text-center">
            <Button variant="ghost" asChild>
              <a 
                href="https://vimeo.com/1150100962" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on Vimeo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
