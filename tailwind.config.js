/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./Home.html",
    "./script.js",
  ],
  theme: {
    colors: {
      bg: "#000",
      text: "#ffffff",
      text1: "#1F2039",
      error: "#ff0404ef",
      principal: "#01594B",
      normal: "#010329",
      borders: "#dedfdf",

    },
    gradientColors: {
      
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [],
}

