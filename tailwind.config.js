/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans all React components
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        "screen-90": "10240vh", // Custom height for responsiveness
      },
    },
  },
  plugins: [],
};

