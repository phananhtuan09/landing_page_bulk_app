module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      keyframes: {
        liHover: {
          "0%": { opacity: 0, top: "112px" },
          "100%": { opacity: 1, top: "80px" },
        },
        navSlip: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        menuSlip: {
          "0%": { transform: "translateY(-20%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
    },
  },
  plugins: [],
};
