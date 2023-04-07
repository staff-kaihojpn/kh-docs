/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'nx-',
  content: [
    "./theme.config.jsx",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Avenir','Helvetica Neue','Helvetica','Arial', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro','メイリオ', 'Meiryo', '游ゴシック', 'Yu Gothic', 'ＭＳ Ｐゴシック', 'sans-serif'],
      'serif': ['ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', '游明朝','Yu Mincho', '游明朝体', 'YuMincho','ＭＳ Ｐ明朝', 'MS PMincho', 'serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: ['class', 'html[class~="dark"]']
}