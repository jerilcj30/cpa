/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'nova-flat': '"Nova Flat"'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}