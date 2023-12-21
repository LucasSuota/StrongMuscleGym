/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        strong: "Lexend",
        strongSpaced: "LexendTera",
      },
      colors: {
        strong_red: "#CB011B",
        strong_black: "#101010",
      },
    },
  },
  plugins: [],
};
