module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  globals: {
    ePub: true,
    JSZip: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
    semi: ["error", "always"],
    "no-console": ["warn"],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-prototype-builtins": "off",
  },
};
