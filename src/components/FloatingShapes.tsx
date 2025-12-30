import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle rotating ring */}
      <div
        className="absolute top-1/4 -left-16 w-64 h-64 border border-primary/10 rounded-full animate-spin-slow"
        style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
        }}
      />

      {/* Small floating shapes */}
      <div
        className="absolute top-20 right-1/4 w-8 h-8 border border-accent/20 rotate-45"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) rotate(45deg)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded"
        style={{
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* Orbital ring */}
      <div
        className="absolute bottom-20 right-1/4 w-32 h-32 border border-primary/10 rounded-full animate-spin-reverse"
        style={{
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
        }}
      />

      {/* Glowing dots */}
      <div
        className="absolute top-1/3 left-1/3 w-2 h-2 bg-primary/40 rounded-full"
        style={{
          boxShadow: "0 0 15px 5px hsl(var(--primary) / 0.2)",
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-accent/30 rounded-full"
        style={{
          boxShadow: "0 0 12px 4px hsl(var(--accent) / 0.15)",
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: "transform 0.3s ease-out",
        }}
      />
    </div>
  );
};

export default FloatingShapes;
