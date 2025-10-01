// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure files to scan for Tailwind classes (for purging unused CSS)
  content: [
    './index.html', // Important for Vite's main HTML file
    './src/**/*.{js,jsx,ts,tsx}', 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};