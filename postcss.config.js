// const functions = require('./functions')
// const mixins = require('./mixins')

// Source: https://tailwindcss.com/docs/controlling-file-size/
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./public/index.html",
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx"
    // etc.
  ],
  css: ["./src/**/*.css"],
  keyframes: true,
  fontFace: true,

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require("cssnano")({
  preset: "default"
});

module.exports = function() {
  const plugins = [
    require("postcss-import")({
      path: ["node_modules"]
    }),
    require("postcss-functions")({
      // functions,
    }),
    require("postcss-mixins")({
      // mixins,
    }),
    require("postcss-utilities")({
      // options
    }),
    require("precss")({}),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")({}),
    ...(process.env.NODE_ENV === "production" ? [purgecss, cssnano] : [])
  ];
  return {
    plugins
  };
};
