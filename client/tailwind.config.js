/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0b0c11',
        secondaryDark: '#1B2A4A',
        solidGray: '#9c9da2',
        textGray: '#ededee',
        focusGray: '#595b63',
        primaryBlue: '#5195ea',
      },
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        button_ripple: {
          '0%': { opacity: 1, transform: 'scale(0)', background: '#fff' },
          '100%': {
            opacity: 0,
            transform: 'scale(50)',
            background: 'transparent',
          },
        },
      },
      animation: {
        button_ripple: 'button_ripple 0.5s ease forwards',
      },
    },
  },
  plugins: [],
};
