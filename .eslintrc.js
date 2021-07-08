module.exports = {
    parser: "babel-eslint",
    parserOptions: {
      sourceType: "module"
    },
    env: {
      browser: true,
      jest: true,
      "react-native/react-native": true
    },
    extends: [
      "eslint:recommended",
      "plugin:import/errors",
      "plugin:react/recommended"
    ],
    globals: {
      process: true
    },
    plugins: ["prettier", "react", "react-native"],
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "lines-between-class-members": "error",
  
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/order": "error",
  
      "prettier/prettier": "error",
  
      "react/prefer-stateless-function": "error"
    }
  }
  