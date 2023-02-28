/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Heading: ["Golos Text", "sans-serif"],
      Para: ["Roboto", "sans-serif"]
    },
  },
  plugins: [],
}
