/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        /* ## Colors */
        white: "hsl(0, 0%, 100%)",

        "slate-300": "hsl(212, 45%, 89%)",
        "slate-500": "hsl(216, 15%, 48%)",
        "slate-900": "hsl(218, 44%, 22%)",
      },
    },
  },
  plugins: [],
};
