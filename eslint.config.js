import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";

export default typescriptEslint.config(
  eslint.configs.recommended,
  ...typescriptEslint.configs.recommendedTypeChecked,
  ...eslintPluginAstro.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
  },
  {
    files: ["*.js"],
    ...typescriptEslint.configs.disableTypeChecked,
  },
  {
    ignores: ["dist/", ".astro/", ".vercel/"],
  },
);
