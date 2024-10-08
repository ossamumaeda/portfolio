/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:'Inter'
      },
      screens: {
        'smartphone': '480px', // Custom screen size for 1440px and above
      },
    },
  },
  plugins: [],
}