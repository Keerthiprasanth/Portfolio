/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: {
          DEFAULT: "#161513",
          50: '#D2D7DF'
        },
        customTextColor: {
          DEFAULT: "#F8F7F9",
          // DEFAULT: "#F3E3E5"
        },
        darkTheme: {
          DEFAULT: "#161513",
          TEXT: "#BDBBB0"
        },
        lightTheme: {
          DEFAULT: "#70afb3",
          50: "#D2D7DF"
        },
        additionalColors: {
          1: "#E06C9F",
          2: "#0B3948",
          3: "#fcb603",
          4: "#6F2DBD",
          5: "#820263"
        }
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
