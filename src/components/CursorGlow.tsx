import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full"
        style={{
          width: "40px",
          height: "40px",
          left: "-20px",
          top: "-20px",
          background: `radial-gradient(circle, 
            hsl(260 60% 65% / 0.15) 0%, 
            hsl(220 80% 50% / 0.1) 40%, 
            transparent 70%
          )`,
          filter: "blur(8px)",
        }}
      />
      {/* Inner dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: "8px",
          height: "8px",
          left: "-4px",
          top: "-4px",
          background: `radial-gradient(circle, 
            hsl(260 60% 65% / 0.6) 0%, 
            hsl(195 80% 50% / 0.4) 100%
          )`,
          boxShadow: `0 0 10px hsl(260 60% 65% / 0.4), 0 0 20px hsl(220 80% 50% / 0.2)`,
        }}
      />
    </div>
  );
};

export default CursorGlow;
