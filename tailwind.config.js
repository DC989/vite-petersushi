// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      fontFamily: {
        sans: ["Proxima Nova Rg", "sans-serif"],
        serif: ["Sanchez", "serif"],
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
    },
  },
  plugins: [],
};
