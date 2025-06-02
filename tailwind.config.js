module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // warna biru utama (bisa diganti)
        "primary-dark": "#2563eb",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
