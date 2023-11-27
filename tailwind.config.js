// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,html}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      container: {
        center: true,
        padding: "12px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1080px",
        },
      },
      fontFamily: {
        sans: ["Proxima Nova Rg", "sans-serif"],
        serif: ["Sanchez", "serif"],
      },
      colors: {
        primary: "#f58220",
        secondary: "#8b8c8e",
        tertiary: "#f5f5f5;",
      },
      height: {
        carousel: "60vw",
        carouselMd: "65vw",
        logoHeader: "100px",
      },
      maxHeight: {
        carouselMax: "1500px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
