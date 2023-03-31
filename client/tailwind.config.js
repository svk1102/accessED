/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'nav-color':"#048c04",
        'background-color': '#0294A5',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}