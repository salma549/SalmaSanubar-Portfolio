module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 15px rgba(0, 255, 255, 0.5)", // Adjust color and intensity as needed
      },

      animation: {
        "bounce-in": "bounceIn 2s infinite",
        // Add more animations if needed
        zoomInOut: "zoomInOut 3s ease-in-out infinite",
      },

      keyframes: {
        bounceIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        zoomInOut: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" }, // Adjust scale as needed
        },
      },
    },

    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
