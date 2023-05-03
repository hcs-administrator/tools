/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/styles/*.css",
    "./views/pages/*.ejs"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {},
    }
  ],
}

