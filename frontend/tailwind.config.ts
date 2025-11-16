import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          950: "#0b1437",
        },
        accent: {
          DEFAULT: "#4cc2ff",
        },
      },
    },
  },
  plugins: [],
};

export default config;
