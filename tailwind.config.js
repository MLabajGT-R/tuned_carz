module.exports = {
  mode: "jit",
  purge: [
    "index.html",
    "engine.html",
    "body.html",
    "FAQ.html",
    "gallery.html",
    "./css/**/*.css"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
