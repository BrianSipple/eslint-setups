module.exports = {
  "env": {
    "es6": true,
    "browser": true
  },
  "parser": "babel-eslint",
  "extends": [
    "ember",
    "./eslint/best-practices.js",
    "./eslint/errors.js",
    "./eslint/es6.js",
    "./eslint/node.js",
    "./eslint/strict.js",
    "./eslint/style.js",
    "./eslint/variables.js"
  ]
};
