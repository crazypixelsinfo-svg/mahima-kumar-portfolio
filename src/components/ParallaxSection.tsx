import { useEffect, useRef, useState, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

const ParallaxSection = ({ children, className = "", intensity = 0.1 }: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far through the viewport the element is
      const progress = 1 - (rect.top / windowHeight);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
      
      // Check if visible
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative ${className}`}
      style={{
        transform: `translateY(${scrollProgress * intensity * 100}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Section edge glow effect */}
      <div
        className="absolute -top-px left-0 right-0 h-px transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--primary) / ${isVisible ? 0.5 : 0}), transparent)`,
          boxShadow: isVisible ? "0 0 20px 5px hsl(var(--primary) / 0.3)" : "none",
        }}
      />
      
      {children}
      
      {/* Bottom edge glow */}
      <div
        className="absolute -bottom-px left-0 right-0 h-px transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, hsl(var(--accent) / ${isVisible ? 0.3 : 0}), transparent)`,
        }}
      />
    </div>
  );
};

export default ParallaxSection;
