import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050608",
        surface: "#0b0d10",
        border: "#1b1e24",
        primary: {
          DEFAULT: "#5b8cff",
          foreground: "#050608",
        },
        muted: "#8a8f98",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(91,140,255,0.14), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
