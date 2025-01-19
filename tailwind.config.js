/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primaryText": "#FFFFFF",
        "secondaryText": "#808080",
        "mutedText": "#666666",
        "primaryBg": "#1C1C1E",
        "secondaryBg": "#2C2C2E",
        "greenBg": "#00FF90",
        "redBg": "#FF4040",
      },
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