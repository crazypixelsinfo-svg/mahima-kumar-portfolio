import { useEffect, useMemo, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import poster1 from "@/assets/posters/poster-1.png";
import poster2 from "@/assets/posters/poster-2.png";
import poster3 from "@/assets/posters/poster-3.png";
import poster4 from "@/assets/posters/poster-4.png";
import poster5 from "@/assets/posters/poster-5.png";
import poster6 from "@/assets/posters/poster-6.png";
import poster7 from "@/assets/posters/poster-7.png";
import poster8 from "@/assets/posters/poster-8.png";

type Category = "All" | "Movie" | "Product" | "Motivational" | "Marketing";

interface Poster {
  src: string;
  category: Exclude<Category, "All">;
}

const posters: Poster[] = [
  { src: poster1, category: "Movie" },
  { src: poster2, category: "Product" },
  { src: poster3, category: "Product" },
  { src: poster4, category: "Product" },
  { src: poster5, category: "Product" },
  { src: poster6, category: "Motivational" },
  { src: poster7, category: "Marketing" },
  { src: poster8, category: "Motivational" },
];

const categories: Category[] = ["All", "Movie", "Product", "Motivational", "Marketing"];

const PostersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("All");
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

  const filteredPosters = useMemo(
    () => (activeCategory === "All" ? posters : posters.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">AI Generated</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            AI Generated Posters
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of AI-assisted poster designs blending creative direction with cutting-edge tools
          </p>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "hero" : "heroOutline"}
              size="sm"
              onClick={() => setActiveCategory(cat)}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredPosters.map((poster, index) => (
            <Dialog key={`${poster.src}-${index}`}>
              <DialogTrigger asChild>
                <div
                  className="group cursor-pointer rounded-xl overflow-hidden border border-border glow-border card-hover animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="aspect-[3/4] bg-secondary overflow-hidden relative">
                    <img
                      src={poster.src}
                      alt={`${poster.category} AI generated poster ${index + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-background/70 backdrop-blur-sm border border-border/50 text-[10px] tracking-widest uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      {poster.category}
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl w-full p-0 bg-background border-border">
                <img src={poster.src} alt={`${poster.category} AI generated poster ${index + 1}`} className="w-full h-auto rounded-lg" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostersSection;
