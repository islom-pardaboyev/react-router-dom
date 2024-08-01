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
        gray: {
          DEFAULT: "#A4A6B3",
          10: "#DFE0EB",
          20: "#F7F8FC",
          30: "#9FA2B4",
          40: "#F0F1F7"
        },
        dark: {
          DEFAULT: "#252733"
        },
        yellow: {
          DEFAULT: "#FEC400"
        },
        green: {
          DEFAULT: "#29CC97"
        },
        purple: {
          DEFAULT: "#3751FF"
        }
      }
    },
  },
  plugins: [],
}