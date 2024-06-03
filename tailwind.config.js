/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "selector",
    extend: {
      colors: {
        primary: "#2c4263",
        secondary: "#4d6699",
      },
    },
  },
  plugins: [require("daisyui")],
};
