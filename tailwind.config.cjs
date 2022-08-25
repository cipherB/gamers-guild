/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        site: {
          primary: "#208607"
        },
        dark: '#242424'
      }
    },
  },
  plugins: [],
}
