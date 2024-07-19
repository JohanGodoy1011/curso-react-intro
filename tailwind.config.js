/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        'screen-lg': '70vh', // Ajusta el valor según lo necesario
      },
    },
  },
  plugins: [],
}