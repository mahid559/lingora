import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#FAF8F3",
          surface: "#FFFFFF",
          navy: {
            DEFAULT: "#16384B",
            600: "#23536A",
            700: "#15394C",
            800: "#0F2836",
            900: "#0B2130",
          },
          mint: {
            DEFAULT: "#2FA77A",
            100: "#DDF3E9",
            200: "#C4EADA",
            300: "#9AD9C0",
            600: "#25895F",
            700: "#1E7050",
            800: "#175A40",
          },
          blue: {
            DEFAULT: "#3E7CB1",
            100: "#E3EEF7",
            600: "#2F628F",
          },
          amber: {
            DEFAULT: "#C9843B",
            100: "#F9EFE0",
            600: "#A96A2B",
          },
          rose: {
            DEFAULT: "#C45A5A",
            100: "#F9E7E7",
            600: "#A84444",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        bangla: ["var(--font-bangla)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,33,48,0.06), 0 1px 3px rgba(11,33,48,0.04)",
        cardHover: "0 6px 20px rgba(11,33,48,0.10), 0 2px 6px rgba(11,33,48,0.06)",
        pop: "0 10px 32px rgba(11,33,48,0.16)",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.15rem",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;