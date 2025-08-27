/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // তোমার project structure অনুযায়ী
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // এখন 'font-inter' নামে ব্যবহার হবে
      },
    },
  },
  plugins: [],
}
