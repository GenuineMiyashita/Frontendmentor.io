/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans serif"],
      },
      backgroundImage: {
        mobilePattern: "url('../src/assets/bg-pattern-mobile.svg')",
        desktopPattern: "url('../src/assets/bg-pattern-desktop.svg')",
        desktopWoman:
          "url('../src/assets/illustration-woman-online-desktop.svg)",
      },
    },
  },
  plugins: [],
};
