/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Switzer', 'sans-serif'], // Set Switzer as the default sans-serif font
      },
    },
  },
  plugins: [],
}