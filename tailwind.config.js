/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        custom: {
          'bg-color': "var(--custom-bg-color)",
          'panel-color': "var(--custom-panel-color)",
          'box-shadow': "var(--custom-box-shadow)",
          'color': "var(--custom-color)",
          'color-brand': "var(--custom-color-brand)",
          'color-secondary': "var(--custom-color-secondary)",
          'border': "var(--custom-border)",
          'border-radius': "var(--custom-border-radius)",
          'spacing': "var(--custom-spacing)",
        },
      },
      fontFamily: {
        custom: "var(--custom-font-family)",
      },
      boxShadow: {
        custom: "var(--custom-box-shadow)",
      },
      borderRadius: {
        custom: "var(--custom-border-radius)",
      },
    },
  },
  plugins: [],
};
