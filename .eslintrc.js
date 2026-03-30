module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    // Disable all rules
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
    "prefer-const": "off",
    // Add more rules to disable as needed
  },
  ignorePatterns: ["node_modules/", ".next/", "out/", "public/"],
}; 