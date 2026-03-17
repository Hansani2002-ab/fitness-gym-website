/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#E1B12C",
        darkBody: "#212121",
      },
    },
  },
  plugins: [],
}