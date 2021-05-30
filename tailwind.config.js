module.exports = {
  mode: "jit",
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        backgroundColor: "#171717",
        MainB: "#4158D0",
        MainP: "#C850C0",
        MainY: "#FFCC70"
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#fff",
            h1: {
              color: "#fff"
            },
            h2: {
              color: "#fff"
            },
            h3: {
              color: "#fff"
            },
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282"
              }
            },
            code: {
              color: "#fff"
            },
            bold: {
              color: "#fff"
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
