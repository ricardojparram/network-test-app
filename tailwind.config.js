/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-fade-in": "pulse-fade-in 0.6s ease-out",
      },
      keyframes: {
        "pulse-fade-in": {
          "0%": {
            transform: "scale(0.9)",
            opacity: "0",
          },
          "50%": {
            transform: "scale(1.05)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
