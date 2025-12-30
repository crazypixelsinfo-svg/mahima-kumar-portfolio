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
      {/* Large rotating ring */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 border border-primary/20 rounded-full animate-spin-slow"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px) rotateX(${mousePosition.y * 20}deg) rotateY(${mousePosition.x * 20}deg)`,
          transformStyle: "preserve-3d",
        }}
      />

      {/* Floating cubes */}
      <div
        className="absolute top-20 right-1/4 w-16 h-16 border border-accent/30 animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px) rotateX(${45 + mousePosition.y * 30}deg) rotateY(${45 + mousePosition.x * 30}deg) rotateZ(45deg)`,
          transformStyle: "preserve-3d",
          animationDelay: "0s",
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 animate-float-slow"
        style={{
          transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 50}px) rotateX(${60 + mousePosition.y * 25}deg) rotateY(${30 + mousePosition.x * 25}deg)`,
          transformStyle: "preserve-3d",
          animationDelay: "1s",
        }}
      />

      {/* Floating triangles */}
      <div
        className="absolute top-1/2 right-20 w-0 h-0 animate-float-slow"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "52px solid hsl(var(--primary) / 0.15)",
          transform: `translate(${mousePosition.x * -35}px, ${mousePosition.y * -35}px) rotateY(${mousePosition.x * 40}deg)`,
          animationDelay: "2s",
        }}
      />

      {/* Orbital rings */}
      <div
        className="absolute bottom-20 right-1/3 w-40 h-40 border border-gradient-teal/20 rounded-full animate-orbit"
        style={{
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px) rotateX(70deg) rotateZ(${mousePosition.x * 30}deg)`,
          transformStyle: "preserve-3d",
        }}
      />

      {/* Glowing orbs with depth */}
      <div
        className="absolute top-1/3 left-1/3 w-4 h-4 bg-primary rounded-full animate-pulse-glow"
        style={{
          boxShadow: "0 0 30px 10px hsl(var(--primary) / 0.4)",
          transform: `translate(${mousePosition.x * -60}px, ${mousePosition.y * -60}px) translateZ(50px)`,
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse-glow"
        style={{
          boxShadow: "0 0 25px 8px hsl(var(--accent) / 0.3)",
          transform: `translate(${mousePosition.x * 45}px, ${mousePosition.y * 45}px) translateZ(30px)`,
          animationDelay: "1.5s",
        }}
      />

      {/* Connecting lines with perspective */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--gradient-teal))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="60%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        />
        <line
          x1="70%"
          y1="30%"
          x2="90%"
          y2="70%"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
          }}
        />
      </svg>

      {/* Hexagon grid pattern with depth */}
      <div
        className="absolute -bottom-10 -left-10 opacity-10"
        style={{
          transform: `perspective(1000px) rotateX(60deg) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-primary/30"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              top: `${i * -20}px`,
              left: `${i * -20}px`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingShapes;
