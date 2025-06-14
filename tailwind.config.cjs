const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        'lexend': ['Lexend', 'sans-serif'],
        'ubuntu': ['Ubuntu Mono', 'monospace']
      },
      backgroundImage: theme => ({
        'blue-black-gradient': 'radial-gradient(circle, blue 0%, black 100%)',
      }),
    },
  },
  plugins: [],
};
