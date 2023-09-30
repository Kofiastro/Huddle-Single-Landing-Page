/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Poppings: ['Poppins', 'sans-serif'],
      },
      colors: {
        Violet: 'hsl(257, 40%, 49%)',
        SoftMagenta: 'hsl(300, 69%, 71%)',
      },
    },
  },
  plugins: [],
}

