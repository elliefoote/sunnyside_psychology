const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      persian: {
        50: "#effefc",
        100: "#c7fff9",
        200: "#90fff3",
        300: "#51f7ec",
        400: "#1de4dd",
        500: "#04c8c3",
        600: "#00a8a8",
        700: "#057f80",
        800: "#0a6365",
        900: "#0d5354",
        950: "#002f33",
      },
      matisse: {
        50: "#f3f8fc",
        100: "#e5f0f9",
        200: "#c5e0f2",
        300: "#92c7e7",
        400: "#58acd8",
        500: "#3391c4",
        600: "#2374a6",
        700: "#1f628e",
        800: "#1c4f70",
        900: "#1c435e",
        950: "#132b3e",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        serif: ["Sorts Mill Goudy", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
