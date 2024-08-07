/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInLeftToRight: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInTopToBottom: {
          '0%': { opacity: '0', transform: 'translateY(-200px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeInLeftToRight: 'fadeInLeftToRight 1s ease-in-out',
        fadeInTopToBottom: 'fadeInTopToBottom 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
