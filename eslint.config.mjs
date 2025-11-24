import js from "@eslint/js";
import globals from "globals";
import tsEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactNative from "eslint-plugin-react-native";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "node_modules",
      "android",
      "ios",
      "build",
      "dist",
      ".expo",
      ".expo-shared"
    ],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    // 🔥 Fixes the React version warning
    settings: {
      react: {
        version: "detect"
      }
    },

    plugins: {
      "@typescript-eslint": tsEslint,
      react,
      "react-hooks": reactHooks,
      "react-native": reactNative,
      import: importPlugin,
      prettier
    },

    rules: {
      // JS recommended
      ...js.configs.recommended.rules,

      // React recommended
      ...react.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // React Hooks recommended
      ...reactHooks.configs.recommended.rules,

      // React Native (only reasonable rules, not strict)
      "react-native/no-unused-styles": "warn",
      "react-native/no-inline-styles": "off",
      "react-native/no-color-literals": "off",
      "react-native/no-raw-text": "off",

      // Typescript
      ...tsEslint.configs.recommended.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],

      // Import sorting
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"]
          ],
          "newlines-between": "always"
        }
      ],

      // Prettier
      "prettier/prettier": "warn"
    }
  }
];
