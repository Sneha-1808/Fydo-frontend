/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#101828',
        secondary: '#475467', 
        btnPrimary: '#FE3838',
        btnSecondary: '#FE383833'
      },
      screens: {
        'sm': '300px',
        'md': '768px',
        'lg': '1109px'
      }
    },
  },
  plugins: [],
}

