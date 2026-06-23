import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1F4A3E",
          soft: "#28574A",
        },
        brand: {
          DEFAULT: "#33685A",
          light: "#A3C4B7",
          dark: "#2A554A",
        },
        fair: "#6FB199",
        surface: "#F0F7F3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.82)", opacity: "0.9" },
          "100%": { transform: "scale(1.28)", opacity: "0" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.035)" },
        },
        progress: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "panel-in": {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.98)", filter: "blur(8px)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)", filter: "blur(0)" },
        },
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        wave: "wave 1.2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out both",
        float: "float 4.5s ease-in-out infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        "pulse-ring": "pulse-ring 3.2s ease-out infinite",
        breathe: "breathe 5s ease-in-out infinite",
        progress: "progress 7s linear forwards",
        "panel-in": "panel-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) both",
        orbit: "orbit 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
