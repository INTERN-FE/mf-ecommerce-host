const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#29A867",
        error: {
          50: "#872A2A",
          100: "#5D1F1F",
          150: "#501818",
        },
        gray: "#F3F3F3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "400",
          src: "url(/src/statics/fonts/Poppins-Regular.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "500",
          src: "url(/src/statics/fonts/Poppins-Medium.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "600",
          src: "url(/src/statics/fonts/Poppins-SemiBold.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "700",
          src: "url(/src/statics/fonts/Poppins-Bold.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "Poppins",
          fontWeight: "800",
          src: "url(/src/statics/fonts/Poppins-ExtraBold.ttf)",
        },
      });
    }),
  ],
};
