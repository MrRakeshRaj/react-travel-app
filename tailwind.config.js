/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dance: ["Dancing Script", "cursive"],
        robotomono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
