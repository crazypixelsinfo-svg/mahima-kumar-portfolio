import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import poster1 from "@/assets/posters/poster-1.png";
import poster2 from "@/assets/posters/poster-2.png";
import poster3 from "@/assets/posters/poster-3.png";
import poster4 from "@/assets/posters/poster-4.png";
import poster5 from "@/assets/posters/poster-5.png";
import poster6 from "@/assets/posters/poster-6.png";
import poster7 from "@/assets/posters/poster-7.png";
import poster8 from "@/assets/posters/poster-8.png";

const posters = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8];

const PostersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">AI Generated</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            AI Generated Posters
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of AI-assisted poster designs blending creative direction with cutting-edge tools
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {posters.map((src, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div
                  className={`group cursor-pointer rounded-xl overflow-hidden border border-border glow-border card-hover transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="aspect-[3/4] bg-secondary overflow-hidden">
                    <img
                      src={src}
                      alt={`AI generated poster ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full p-0 bg-background border-border">
                <img src={src} alt={`AI generated poster ${index + 1}`} className="w-full h-auto rounded-lg" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostersSection;
