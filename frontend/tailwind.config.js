/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Outfit", "serif"],
      },
      colors: {
        primary: "#ff8811",
        secondary: "#ffffff",
      },
      container : {
        center : true,
        padding : '16px auto'
      }
    },
  },
  plugins: [],
};
