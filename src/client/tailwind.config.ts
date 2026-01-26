import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#071022",
        surface: "#0f1724",
        primary: "#06b6d4", 
        accent: "#7c3aed",  
        glow: "#38bdf8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.36s ease-out",
        gearSpin: "gearSpin 1s linear infinite",
        needle: "needle 0.8s cubic-bezier(.2,.9,.2,1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        gearSpin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        needle: {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
