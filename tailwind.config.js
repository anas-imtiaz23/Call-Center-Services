/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#00BCA2',
          darkteal: '#008f7b',
          navy: '#0F2B3D',
        }
      }
    },
  },
  plugins: [],
}