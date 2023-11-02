/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        icons: "url('/src/assets/sp_webtoon_838a1cd1.png')",
      },
      screens: {
        lgs: "1150px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
