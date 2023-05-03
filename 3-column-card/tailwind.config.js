/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        archivistBackground: "url('../src/assets/archivist.jpg')",
        enchanterBackground: "url('../src/assets/enchanter.jpg')",
        prayermakerBackground: "url('../src/assets/prayermaker.jpg')",
      },
      fontFamily: {
        Marcellus: ["Marcellus", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        btnColor: "#352D34",
      },
    },
  },
  plugins: [],
};
