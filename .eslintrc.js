module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true
  },
  plugins: ["json", "vue"],
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  globals: {},
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false
    }
  },
  // add your custom rules here
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "max-len": [
      "warn",
      {
        code: 100,
        ignoreComments: false,
        ignoreTrailingComments: false
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-var": "error",
    "prefer-const": [
      "error",
      {
        destructuring: "all",
        ignoreReadBeforeAssign: false
      }
    ],
    quotes: ["error", "single"],
    "quote-props": ["error", "consistent-as-needed"],
    semi: ["error", "never"],
    "space-before-function-paren": [
      "warn",
      {
        anonymous: "always",
        named: "never",
        asyncArrow: "always"
      }
    ],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/valid-template-root": "off"
  }
};
