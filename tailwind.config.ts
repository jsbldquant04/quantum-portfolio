import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050608",
        abyss: "#0a0d12",
        navy: "#0d1420",
        surface: "#0f151f",
        line: "#1c2530",
        quantum: {
          50: "#eafcff",
          100: "#cdf5ff",
          200: "#9be9ff",
          300: "#5fd6f5",
          400: "#38bfe0",
          500: "#22a3c4",
          600: "#1b82a0",
          700: "#186a82",
          800: "#164e60",
          900: "#0f333f",
        },
        paper: "#eef2f6",
        mute: "#7c8896",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(56,191,224,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(56,191,224,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(-14px,10px,0)" },
          "100%": { transform: "translate3d(0,0,0)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.35" },
          "50%": { opacity: "0.85" },
        },
        scanline: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "0 100%" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
