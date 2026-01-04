import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-container">
      <div className="w-full py-20 md:py-0">
        <div className="space-y-8 max-w-3xl">
          {/* Tagline */}
          <p className="text-muted-foreground text-sm md:text-base tracking-wide uppercase">
            Video Editor & Motion Graphics Designer
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Bellamkonda
            <br />
            Mahima Kumar
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Crafting stories through motion, visuals & creativity
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("portfolio")}
              className="group"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
