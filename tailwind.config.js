/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kem - trắng - ngà
        cream: { 50: "#fdfbf7", 100: "#faf5ea", 200: "#f3e9d6", 300: "#e8d8bb" },
        // Vàng gold
        gold: { 400: "#d9b45b", 500: "#c8a24a", 600: "#b08935", 700: "#8a6a26" },
        // Đỏ trầm (rượu vang) - nhấn kiểu template 3
        wine: { 400: "#b83232", 500: "#a11d1d", 600: "#8a1414", 700: "#6d0f0f", 800: "#530b0b" },
        ink: "#3f362e",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        name: ["var(--font-name)", "cursive"],
        hand: ["var(--font-hand)", "serif"],
        title: ["var(--font-title)", "serif"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(30px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        floatY: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        kenburns: { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(1.12)" } },
      },
      animation: {
        fadeUp: "fadeUp 0.9s ease forwards",
        floatY: "floatY 4s ease-in-out infinite",
        kenburns: "kenburns 12s ease-out forwards",
      },
    },
  },
  plugins: [],
};
