/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Update here
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark': '#333333',
      'light': '#d3d3d3',
      'med': '#c0c0c0',
    },
    extend: {
    },
  },
  plugins: [],
}
