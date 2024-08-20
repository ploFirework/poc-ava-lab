/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: ['./src/**/*.{vue}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-primeui')]
}
