/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Fraunces: ["Fraunces", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
