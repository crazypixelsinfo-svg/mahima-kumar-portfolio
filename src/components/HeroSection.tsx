import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/portrait.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-container">
      <div className="w-full py-20 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Text Content */}
          <div className="space-y-8 max-w-xl">
            {/* Tagline */}
            <p className="text-muted-foreground text-sm md:text-base tracking-wide uppercase">
              Video Editor & Motion Graphics Designer
            </p>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
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

          {/* Portrait */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-border shadow-xl">
              <img
                src={portrait}
                alt="Bellamkonda Mahima Kumar"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
