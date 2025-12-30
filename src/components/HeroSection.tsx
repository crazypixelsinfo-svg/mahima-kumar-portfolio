import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import FloatingShapes from "./FloatingShapes";
import portraitImage from "@/assets/portrait-placeholder.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero grain overflow-hidden">
      {/* 3D Floating shapes background */}
      <FloatingShapes />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--gradient-purple)/0.12)] rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[hsl(var(--gradient-blue)/0.08)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[hsl(var(--gradient-teal)/0.06)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p 
            className="text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Creative Video Editor
          </p>
          
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-foreground block mb-2">Bellamkonda</span>
            <span className="text-gradient block">Mahima Kumar</span>
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
              <Link to="/work">
                View Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="group">
              <Link to="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Download Resume Button */}
          <div 
            className="mt-6 flex justify-center lg:justify-start opacity-0 animate-fade-up"
            style={{ animationDelay: "1s" }}
          >
            <Button variant="glow" size="lg" asChild className="group">
              <a href="/BMK_resume.pdf" download="Bellamkonda_Mahima_Kumar_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          <div 
            className="relative opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {/* Subtle glow rings */}
            <div className="absolute inset-0 -m-6 rounded-full border border-primary/10 animate-spin-slow" />
            <div className="absolute inset-0 -m-12 rounded-full border border-accent/5 animate-spin-reverse" />
            
            {/* Main portrait container */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden group">
              {/* Gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
              
              {/* Portrait image */}
              <img
                src={portraitImage}
                alt="Bellamkonda Mahima Kumar - Creative Video Editor"
                className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Rim light overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Glowing border */}
              <div 
                className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                style={{
                  boxShadow: "0 0 30px 5px hsl(var(--primary) / 0.15)",
                }}
              />
            </div>

            {/* Floating particles */}
            <div className="absolute -top-3 -right-3 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <Link to="/about" className="block">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
