/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1700px',
        '5xl': '1800px',
        '6xl': '1900px',
        '7xl': '2000px',
      },
      animation: {
        "my-bounce": "bounceing 3s linear infinite alternate-reverse",
        "my-bounce-2": "bounceing2 3s linear infinite alternate",
        "my-bounce-3": "bounceing3 3s linear infinite alternate"
      },

      colors: {
        ...colors,
        megamind_red: "#E31313",
        megamind_black: "#161616",
        megamind_white: "#F2F2F2",
        dark_mode_high: "#111827",
        dark_mode_medium: "#4B5563",
        dark_mode_low: "#9CA3AF"
      },
      fontFamily: {
        Red_Hat_Display: ["Red Hat Display", "sans-serif"],
        Lexend: ["Lexend", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [colors],
}
