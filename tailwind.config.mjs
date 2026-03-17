/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
   
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fitnessYellow: "#E1B12C",
        fitnessBrown: "#26211A",
        fitnessDark: "#2D2D2D",
      },
    },
  },
  plugins: [],
};