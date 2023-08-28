/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        primaryHover:
        "#9f9fe3",
        footer: "#2E3E5C"
      }
    },
  },
  plugins: [],
}