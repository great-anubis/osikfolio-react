/** @type {import('tailwindcss').Config} */
module.exports = {
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
    boxShadow: {
      'shadow': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    },
    extend: {},
  },
  plugins: [],
}
