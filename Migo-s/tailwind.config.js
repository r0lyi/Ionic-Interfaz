/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sports-blue': '#1e3c72', // Ejemplo de color personalizado azul para deportes
      },
    },
  },
  plugins: [],
} 