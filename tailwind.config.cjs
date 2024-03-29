/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      maxWidth: {
        200: '78rem'
      },
      width: {
        20: '6rem'
      }
    },
  },
  plugins: [],
}
