/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: '#1B2A4A',
        secondaryDark: '#2f4a83', 
        solidGray: '#9c9da2',
        textGray: '#ededee',
        focusGray: '#595b63',
        primaryBlue: '#5195ea',
      },
      fontFamily: {
        'body': ['Nunito', 'sans-serif'],
        // 'brand': ['Agbaluma', 'sans-serif']
      }
    },
  },
  plugins: [],
}

