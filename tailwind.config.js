const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "grand-gray-1": "#dadce0",
        "grand-blue-1": "#1967d3",
        "grand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
