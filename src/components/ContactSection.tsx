import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Linkedin, ExternalLink, Mail } from "lucide-react";

const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9392429522",
      href: "tel:+919392429522"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Masab Tank, Hyderabad, Telangana",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/bellamkonda-mahima-kumar"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="section-padding bg-card/50 grain"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Open for freelance projects, collaborations, and full-time opportunities
          </p>
        </div>

        <div 
          className={`grid md:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            const content = (
              <div className="bg-secondary/30 border border-border rounded-2xl p-6 text-center glow-border card-hover h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                <p className="text-foreground font-medium">{item.value}</p>
              </div>
            );

            return item.href ? (
              <a 
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </div>

        <div 
          className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <Button variant="glow" size="xl" asChild>
            <a 
              href="https://www.linkedin.com/in/bellamkonda-mahima-kumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="mr-2 h-5 w-5" />
              Hire Me
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
