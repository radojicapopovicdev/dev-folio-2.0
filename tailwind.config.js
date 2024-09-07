/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      gridular: ['"Gridular"', 'sans-serif'],
      sora: ["Sora", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      pathway: ['"Pathway Gothic One"', "sans-serif"],
      bigs: ["Big Shoulders Display", "sans-serif"]
    },
    screens: {
      sm: "375px", // mobile
      smx: "320px", //smol mobile
      md: "668px", // tablets
      lg: "9024px", // small laptops
      xl: "1180px", // laptops/desktops
      "2xl": "1820px", // large screens
      "3xl": "2300px", // 2k screens
      mac: "2920px",
      ultrawide: "35ß00px",
    },
    extend: {
      backgroundImage: {
        'custom-radial': "radial-gradient(56.31% 35.93% at 50% 50%, #4E6E58 0%, #000000 98.72%)",
      }
    },
  },
  plugins: [],
};