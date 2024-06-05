/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        jybek: {
          100: "#CDC9E9",
          200: "#453A8F",
          300: "#382F73",
          400: "#322866",
          500: "#2D235A",
          600: "#2E2140"
        },
        jybekBtn: {
          100: "#FFE9CA",
          200: "#FFD9A2",
          300: "#FFC97C",
          400: "#FFBC5C",
          500: "#FFAE3B",
          600: "#F69E20",
        }
      }
    },
  },
  plugins: [],
}
