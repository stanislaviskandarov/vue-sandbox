const plugins = [];
if (process.env.NODE_ENV === "production") {
  plugins.push("transform-remove-console");
}

module.exports = {
  env: {
    development: {
      presets: ["@vue/app"]
    },
    testing: {
      presets: [
        [
          "@babel/env",
          {
            targets: {
              node: "current"
            }
          }
        ]
      ]
    },
    production: {
      presets: ["@vue/app"]
    }
  },
  plugins
};
