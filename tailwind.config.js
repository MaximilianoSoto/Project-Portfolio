/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('/images/site-bg.jpg')",
        about: "url('./assets/images/SobreMi.jpg')",
      },
      
      
    }
  },
  variants: {},
  plugins: [
    // ...
    require('tailwind-scrollbar'),
    require('tailwindcss-animated'),
],
});


