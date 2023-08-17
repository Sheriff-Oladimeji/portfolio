/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBg: "#0F172A",
        bold: "#E2E8F0",
        light: "#E2E8F0",
        green: "#4DCCB9",
        gray: "#8892B0",
      },
      fontFamily: {
        inter: ["Inter Tight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
