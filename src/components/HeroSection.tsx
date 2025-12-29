import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero grain overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--gradient-purple)/0.15)] rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[hsl(var(--gradient-blue)/0.1)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[hsl(var(--gradient-teal)/0.08)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <p 
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Creative Video Editor
        </p>
        
        <h1 
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-gradient">Mahima Kumar</span>
        </h1>
        
        <p 
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          After Effects & Premiere Pro Specialist | Exploring AI Tools & Digital Marketing for Brand Growth
        </p>
        
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#work">
              View Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
