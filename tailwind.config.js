module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          blue: "#1e40af",
          yellow: "#facc15",
          slate: "#374151",
        },
      },
    },
  },
  plugins: [],
};
