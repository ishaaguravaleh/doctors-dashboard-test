/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          gradientStart: '#e2c0f5',
          gradientEnd: '#fcd6cf',
        },
      },
    },
    plugins: [],
  }
  