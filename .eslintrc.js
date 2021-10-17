module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    'airbnb-base',
    'airbnb-typescript/base',
    "plugin:prettier/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "arrow-body-style": ["error", "as-needed"],
    // the type of some rules is too-ooo-ooo-long!
    // we believed that typescript handles well.
    "@typescript-eslint/explicit-module-boundary-types": "off"
  },
};
