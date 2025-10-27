// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibrant: "#b87cff",
        dark: "#0b0116",
      },
      boxShadow: {
        glow: "0 0 20px #b87cff80",
        soft: "0 0 60px rgba(184, 124, 255, 0.2)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(184, 124, 255, 0.5)",
        neon: "0 0 15px #b87cff, 0 0 40px #b87cff80",
      },
      blur: {
        xl: "160px",
      },
    },
  },
  plugins: [],
};
