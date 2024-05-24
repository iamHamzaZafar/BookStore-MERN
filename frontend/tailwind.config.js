/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme:"class" ,
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}