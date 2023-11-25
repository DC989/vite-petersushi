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
          xl: "100%",
          "2xl": "1200px",
        },
      },
      fontFamily: {
        sans: ["Proxima Nova Rg", "sans-serif"],
        serif: ["Sanchez", "serif"],
      },
      colors: {
        primary: "#f58220",
        secondary: "#8b8c8e",
      },
      height: {
        carousel: "200px",
        carouselSm: "350px",
        carouselMd: "450px",
        carouselLg: "550px",
        carouselXl: "650px",
        carouselXxl: "750px",
        logoHeader: "100px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
