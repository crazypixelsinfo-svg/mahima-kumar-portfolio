import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import portraitImage from "@/assets/portrait-placeholder.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero grain overflow-hidden perspective-1000">
      {/* 3D Floating shapes background */}
      <FloatingShapes />

      {/* Animated gradient orbs with enhanced depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--gradient-purple)/0.15)] rounded-full blur-3xl animate-glow-pulse"
          style={{ transform: "translateZ(-100px)" }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[hsl(var(--gradient-blue)/0.1)] rounded-full blur-3xl animate-glow-pulse" 
          style={{ animationDelay: "1s", transform: "translateZ(-80px)" }} 
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-[hsl(var(--gradient-teal)/0.08)] rounded-full blur-3xl animate-glow-pulse" 
          style={{ animationDelay: "2s", transform: "translateZ(-60px)" }} 
        />
      </div>

      {/* Main content with 3D layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p 
            className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Creative Video Editor
          </p>
          
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-up animate-text-3d"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-gradient inline-block hover:animate-text-float">Mahima</span>
            <br />
            <span className="text-gradient inline-block hover:animate-text-float" style={{ animationDelay: "0.1s" }}>Kumar</span>
          </h1>
          
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            After Effects & Premiere Pro Specialist | Exploring AI Tools & Digital Marketing for Brand Growth
          </p>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="lg" asChild className="group">
              <a href="#work" className="relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  View Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="group">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Download Resume Button */}
          <div 
            className="mt-6 flex justify-center lg:justify-start opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <Button variant="glow" size="lg" asChild className="group">
              <a href="/BMK_resume.pdf" download="Mahima_Kumar_Resume.pdf" className="relative">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait with 3D effects */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div 
            className="relative opacity-0 animate-fade-up animate-float"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Outer glow rings */}
            <div className="absolute inset-0 -m-8 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="absolute inset-0 -m-16 rounded-full border border-accent/10 animate-spin-reverse" />
            
            {/* Main portrait container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden group">
              {/* Gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent animate-gradient-shift" />
              
              {/* Portrait image */}
              <img
                src={portraitImage}
                alt="Mahima Kumar - Creative Video Editor"
                className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Rim light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glowing border */}
              <div 
                className="absolute inset-0 rounded-2xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-500"
                style={{
                  boxShadow: "0 0 40px 10px hsl(var(--primary) / 0.2), inset 0 0 40px 10px hsl(var(--primary) / 0.1)",
                }}
              />
            </div>

            {/* Floating particles around portrait */}
            <div className="absolute -top-4 -right-4 w-3 h-3 bg-primary rounded-full animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 -right-8 w-2 h-2 bg-gradient-teal rounded-full animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator with 3D effect */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center relative group hover:border-primary/50 transition-colors cursor-pointer">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce group-hover:bg-primary/70 transition-colors" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Scroll Down
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
