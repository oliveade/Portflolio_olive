/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
  
    extend: {},
      screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '600px',
      'xl': '600px',
      '2xl': '600px',

    }
  },
  plugins: [],
}