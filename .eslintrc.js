module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:jest-dom/recommended",
    "plugin:jest/recommended",
  ],
  parser: "babel-eslint",
  plugins: [
    "prettier",
    "babel",
    "import",
    "jsx-a11y",
    "react",
    "react-hooks",
    "jest-dom",
    "jest",
  ],
  ignorePatterns: ["node_modules", "dist"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "jest/no-disabled-tests": "off",
    "jest/no-jasmine-globals": "off",
    "no-prototype-builtins": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  globals: {
    console: "readonly",
    document: "readonly",
    module: "readonly",
    window: "readonly",
  },
}
