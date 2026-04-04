/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        mint: '#e4f4e1',
        'mint-dark': '#c8e8c4',
      },
    },
  },
  plugins: [],
}
