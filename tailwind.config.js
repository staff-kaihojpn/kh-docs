/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'nx-',
  content: [
    "./theme.config.jsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', 'html[class~="dark"]']
}