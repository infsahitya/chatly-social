/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryDark: "#0b0c11",
        secondaryDark: "#1B2A4A",
        solidGray: "#9c9da2",
        textGray: "#ededee",
        focusGray: "#595b63",
        primaryBlue: "#5195ea",
      },
      fontFamily: {
        body: ["Nunito", "sans-serif"],
      },
      keyframes: {
        button_ripple: {
          "0%": { opacity: 1, transform: "scale(0)" },
          "100%": {
            opacity: 0,
            transform: "scale(50)",
          },
        },
        signupConsumerMount: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        signupConsumerUnmount: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        button_ripple: "button_ripple 0.7s ease forwards",
        signupConsumerMount: "signupConsumerMount 1s ease forwards",
        signupConsumerUnmount: "signupConsumerUnmount 1s ease forwards",
      },
    },
  },
  plugins: [],
};
