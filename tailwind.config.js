/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        dmSans: 'DM Sans',
        inter: 'Inter',
        montserrat: 'Montserrat',
        roboto: 'Roboto Mono',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  // IE and Edge
          'scrollbar-width': 'none',     // Firefox
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}