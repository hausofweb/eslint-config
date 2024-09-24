// @ts-check
/** @type {import("eslint").Linter.Config} */

// @ts-ignore
const { resolve } = require("path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use a library
 * that utilizes NextJS.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */
module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/react",
      "@vercel/style-guide/eslint/next",
    ].map((config) => require.resolve(config)),
    "turbo",
    "./library.js",
  ],
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
};