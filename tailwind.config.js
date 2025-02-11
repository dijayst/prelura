/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "screen-90": "1024px", // Custom height for responsiveness
      },
    },
  },
  plugins: [],
};

