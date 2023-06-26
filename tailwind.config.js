/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-blue': '#152238',
      'light-green': '#7ed957',
      'white':'#FFFFFF',
      'ligth-grey': '#EBEBEB'
    },
  },
  plugins: [],
}