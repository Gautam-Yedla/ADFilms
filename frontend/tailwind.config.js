// // tailwind.config.js
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,jsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Updated to include .tsx files if you're using TypeScript
  ],
  darkMode: 'class', // Enable dark mode using the class strategy
  theme: {
    extend: {},
  },
  plugins: [],
};
