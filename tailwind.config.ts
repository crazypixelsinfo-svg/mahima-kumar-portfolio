import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px) translateZ(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0) translateZ(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95) rotateX(10deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // Creative 3D Animations
        "float": {
          "0%, 100%": { transform: "translateY(0) rotateX(0)" },
          "50%": { transform: "translateY(-20px) rotateX(5deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotateY(0)" },
          "50%": { transform: "translateY(-30px) rotateY(10deg)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "orbit": {
          "0%": { transform: "rotateX(70deg) rotateZ(0deg)" },
          "100%": { transform: "rotateX(70deg) rotateZ(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            opacity: "0.5",
            boxShadow: "0 0 20px 5px hsl(var(--primary) / 0.3)",
          },
          "50%": { 
            opacity: "1",
            boxShadow: "0 0 40px 15px hsl(var(--primary) / 0.5)",
          },
        },
        "text-float": {
          "0%, 100%": { transform: "translateY(0) rotateY(0)" },
          "50%": { transform: "translateY(-5px) rotateY(3deg)" },
        },
        "tilt-3d": {
          "0%, 100%": { transform: "perspective(1000px) rotateX(0) rotateY(0)" },
          "25%": { transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)" },
          "75%": { transform: "perspective(1000px) rotateX(-5deg) rotateY(5deg)" },
        },
        "slide-in-3d": {
          "0%": { 
            opacity: "0", 
            transform: "perspective(1000px) translateZ(-100px) translateY(50px) rotateX(-20deg)" 
          },
          "100%": { 
            opacity: "1", 
            transform: "perspective(1000px) translateZ(0) translateY(0) rotateX(0)" 
          },
        },
        "card-hover": {
          "0%": { transform: "perspective(1000px) rotateX(0) rotateY(0) scale(1)" },
          "100%": { transform: "perspective(1000px) rotateX(2deg) rotateY(5deg) scale(1.02)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "wave": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.5)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "scale-in": "scale-in 0.5s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        // Creative 3D Animations
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-reverse": "spin-reverse 25s linear infinite",
        "orbit": "orbit 15s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "text-float": "text-float 3s ease-in-out infinite",
        "tilt-3d": "tilt-3d 10s ease-in-out infinite",
        "slide-in-3d": "slide-in-3d 1s ease-out forwards",
        "card-hover": "card-hover 0.3s ease-out forwards",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "wave": "wave 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
