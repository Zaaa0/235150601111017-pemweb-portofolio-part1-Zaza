/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light-cream' : '#F8EDE3',
        'sandy-beige' : "#DFD3C3",
        'pink' : "#FFAFCC",
        'natural': "#D0B8A8",
        'clay': "#C5705D",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}