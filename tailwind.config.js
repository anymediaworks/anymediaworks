/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core branding colors
        "primary": "#FF2D2D",
        "surface": "#FFFFFF",
        "on-surface": "#000000",
        "surface-container-highest": "#E2E2E2",
        "surface-container": "#eeeeee",
        // Add the rest of your custom colors from the HTML here...
      },
      fontFamily: {
        "headline": ["var(--font-league-spartan)"],
        "body": ["var(--font-poppins)"],
        "label": ["var(--font-space-grotesk)"],
        "script": ["'Brittany Signature'", "cursive"],
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0px",
        "full": "0px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};


