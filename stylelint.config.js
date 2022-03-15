module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  plugins: ["stylelint-color-format"],
  rules: {
    "at-rule-no-unknown": null,
    "block-closing-brace-empty-line-before": null,
    "color-named": "always-where-possible",
    "declaration-colon-newline-after": null,
    "max-nesting-depth": 10,
    "no-empty-source": null,
    "selector-max-compound-selectors": 10,
    "color-format/format": {
      format: "hsl"
    }
  }
};
