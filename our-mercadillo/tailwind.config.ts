import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--black-color)",
        foreground: "var(--white-color)",
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        primaryCompliment: "var(--primary-compliment)",
        secondaryCompliment: "var(--secondary-compliment)",
        lightGray: "var(--lightGray-color)",
        gray: "var(--gray-color)",
        greenGray: "var(--greenGray-color)",
        black: "var(--black-color)",
        white: "var(--white-color)",
      },
      fontFamily: {
        base: "var(--font-base)",
      },
      backgroundImage: {
        'gradient-bg': 'var(--bg-gradient)',
      },
    },
  },
  plugins: [],
};

export default config;