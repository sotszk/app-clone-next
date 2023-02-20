module.exports = {
  extends: ["eslint:recommended", "next", "prettier"],
  rules: {
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
      },
    ],
  },
};
