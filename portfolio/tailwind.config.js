/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: {
          DEFAULT: "#161513",
        },
        customTextColor: {
          DEFAULT: "#F8F7F9",
        },
      },
      keyframes: {
        fadeInLeftToRight: {
          "0%": { opacity: "0", transform: "translateX(-200px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInTopToBottom: {
          "0%": { opacity: "0", transform: "translateY(-200px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // fadeIn: {
        //   "0%": { opacity: "0", transform: "translateY(20px)" },
        //   "100%": { opacity: "1", transform: "translateY(0)" },
        // },
      },
      animation: {
        fadeInLeftToRight: "fadeInLeftToRight 1s ease-in-out forwards",
        fadeInTopToBottom: "fadeInTopToBottom 1s ease-in-out forwards",
      },
      fontFamily: {
        abril: ["Abril Fatface", "serif"],
        volkhov: ["Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
