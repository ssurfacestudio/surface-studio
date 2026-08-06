import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        ivory: "#F8F7F5",
        charcoal: {
          DEFAULT: "#1C1C1C",
          soft: "#242322",
          light: "#3A3836",
        },
        beige: {
          DEFAULT: "#D8C8B8",
          light: "#E8DFD5",
          dark: "#C2AE99",
        },
        gold: {
          DEFAULT: "#C8A96A",
          light: "#DCC391",
          dark: "#A9884F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        "8xl": "1600px",
      },
      keyframes: {
        vein: {
          "0%": { strokeDashoffset: "240" },
          "100%": { strokeDashoffset: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        vein: "vein 1.8s ease-out forwards",
        fadeUp: "fadeUp 0.8s ease-out forwards",
        shimmer: "shimmer 2.4s linear infinite",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
