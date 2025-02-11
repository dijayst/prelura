/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-90": "1024vh", // Custom height for responsiveness
      },
    },
  },
  plugins: [],
};

