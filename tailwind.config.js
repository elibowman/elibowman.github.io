/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ffffff',
        'primary': '#576cbc',
        'secondary': '#19376d',
        'dark': '#0b2447',
        'bg': '#04152d'
      },
      keyframes: {
        floating: {
          "0%": {
            transform: "translate(0, 0px)"
          },
          "50%": {
            transform: "translate(0, 10px)"
          },
          "100%": {
            transform: "translate(0, -0px)"
          }
        }
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
}

