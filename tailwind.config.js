/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1b2336",
        secondary: "#29303B",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};