/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "480px",
      sm: "610px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      Heading: ["Golos Text", "sans-serif"],
      Para: ["Roboto", "sans-serif"]
    },
  },
  plugins: [],
}
