/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {   
      colors: {
      'primary-PSync': '#1F59DA', 
    },
      fontFamily: {
      outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

