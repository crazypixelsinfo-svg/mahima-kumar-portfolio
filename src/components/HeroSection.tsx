import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";
import { Link } from "react-router-dom";
import portraitImg from "@/assets/portrait.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero grain overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--gradient-purple)/0.15)] rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[hsl(var(--gradient-blue)/0.1)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[hsl(var(--gradient-teal)/0.08)] rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full px-6 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p 
              className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Creative Video Editor
            </p>
            
            <h1 
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="text-gradient">Bellamkonda Mahima Kumar</span>
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
              <Button variant="hero" size="lg" asChild>
                <Link to="/works">
                  View Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
            </div>

            <div 
              className="mt-6 opacity-0 animate-fade-up flex justify-center lg:justify-start"
              style={{ animationDelay: "1s" }}
            >
              <Button variant="glow" size="lg" asChild>
                <a href="/BMK_resume.pdf" download="Bellamkonda_Mahima_Kumar_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div 
            className="order-1 lg:order-2 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-purple)/0.4)] via-[hsl(var(--gradient-blue)/0.3)] to-[hsl(var(--gradient-teal)/0.4)] rounded-3xl blur-2xl scale-110" />
              <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-border">
                <img src={portraitImg} alt="Bellamkonda Mahima Kumar" className="w-full h-full object-cover" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

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
