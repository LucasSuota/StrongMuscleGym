/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      strong_red: "#CB011B",
      strong_black: "#101010",
    },
    extend: {
      fontFamily: {
        strong: "Lexend",
        strongSpaced: "LexendTera",
      },
    },
  },
  plugins: [],
};
