/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'rara':['Square Peg', 'cursive']
      }
    },
  },
  plugins: [],
}