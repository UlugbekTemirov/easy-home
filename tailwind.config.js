/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b2336",
        secondary: "#29303B",
        main: "#710193",
        search: "#16839c",
        footer: "#2e3440",
        btnPink: "#ff1f59",
        form: "#f8faff",
        formOpacity: "rgba(248, 250, 255, 0.5)",
      },
      boxShadow: {
        "product-card": "0 20px 50px rgb(0 0 0 / 5%)",
        "product-card-hover": "0 20px 50px rgb(0 0 0 / 20%)",
        "service-card": "0px 0px 20px rgba(0, 0, 0, 0.1)",
      },
      container: {
        center: true,
        padding: "12px",
      },
      gradientColorStops: {
        primary: ["#0045b7"],
        secondary: ["#00c6ff"],
      },
    },
  },
  plugins: [],
};
