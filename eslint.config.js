import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import eslintPluginImport from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json"
      },
      ecmaVersion: 2020,
      sourceType: "module"
    },
    plugins: {
      import: eslintPluginImport,
      prettier: prettierPlugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      prettier: "error",
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "no-constant-binary-expressions": "error",
      "prefer-const": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }]
    }
  },
  pluginReact.configs.flat.recommended
]);
