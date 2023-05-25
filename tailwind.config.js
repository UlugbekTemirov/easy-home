/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b2336",
        secondary: "#29303B",
        orange: {
          600: "#FF1F59",
        },
        "color-search-bg": "#EDEFF7",
      },
      boxShadow: {
        "product-card": "0 20px 50px rgb(0 0 0 / 5%)",
        "product-card-hover": "0 20px 50px rgb(0 0 0 / 20%)",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
