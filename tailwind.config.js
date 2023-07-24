/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      width: {
        wrapper: '1100px',
      },
      backgroundImage: {
        app: 'url(src/assets/bg.png)',
      },
    },
  },
  plugins: [],
}
