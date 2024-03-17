module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  settings: {
    "boundaries/elements": [
      {
        type: "app",
        pattern: "@app/*",
      },
      {
        type: "processes",
        pattern: "@processes/*",
      },
      {
        type: "pages",
        pattern: "@pages/*",
      },
      {
        type: "layouts",
        pattern: "@layouts/*",
      },
      {
        type: "widgets",
        pattern: "@widgets/*",
      },
      {
        type: "features",
        pattern: "@features/*",
      },
      {
        type: "entities",
        pattern: "@entities/*",
      },
      {
        type: "api",
        pattern: "@api/*",
      },
      {
        type: "shared",
        pattern: "@shared/*",
      },
    ],
    "import/resolver": {
      typescript: true,
      node: true,
    },
    react: {
      version: "detect",
    },
  },

  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
