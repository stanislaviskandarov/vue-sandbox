// Complete Vue Webpack config can be inspected using `vue inspect` command.
// eslint-disable-next-line max-len
// Source: [Working with Webpack | Vue CLI](https://cli.vuejs.org/guide/webpack.html#inspecting-the-project-s-webpack-config)

const path = require("path");

const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  lintOnSave: true,
  configureWebpack: config => {
    Object.assign(config.resolve.alias, {
      "@": path.resolve(__dirname, "./src"),
      "@@": path.resolve(__dirname, ".")
    });
    config.plugins.push(
      new StylelintPlugin({
        files: ["**/*.css", "**/*.scss", "**/*.vue"]
      })
    );

    config.module.rules.push({
      test: /\.svg$/,
      loader: "vue-svg-loader"
    });

    config.devtool = "source-map";
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
