/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBg: "#363740",
        gray: "#A4A6B3",
      }
    },
  },
  plugins: [],
}