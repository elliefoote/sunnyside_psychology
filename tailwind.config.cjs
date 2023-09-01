const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      pablo: {
        50: "#f4f4f2",
        100: "#e4e2dd",
        200: "#cbc7bd",
        300: "#ada697",
        400: "#958c7a",
        500: "#7f7566",
        600: "#73675b",
        700: "#5d534b",
        800: "#504843",
        900: "#473f3c",
        950: "#282320",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        serif: [
          "Playfair Display Variable",
          "Georgia",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
