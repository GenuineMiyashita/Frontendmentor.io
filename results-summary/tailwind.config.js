/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans serif"],
        source: ["Source Sans Pro", "sans serif"],
      },
    },
  },
  plugins: [],
};
