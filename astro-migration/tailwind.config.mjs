/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        dark: "#1c1b22",
        light: "#f7f7f7",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "40% 0%",
        "pos-80": "80% 80%",
        "pos-100": "100% 100%",
      },
      animation: {
        "blurred-fade-in": "blurred-fade-in 0.3s ease-in-out forwards",
        "blurred-fade-out": "blurred-fade-out 0.3s ease-in-out forwards",
      },
      keyframes: {
        "blurred-fade-in": {
          "0%": {
            filter: "blur(5px)",
            opacity: "0",
          },
          "100%": {
            filter: "blur(0)",
            opacity: "1",
          },
        },
        "blurred-fade-out": {
          "0%": {
            filter: "blur(0)",
            opacity: "1",
          },
          "100%": {
            filter: "blur(5px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
