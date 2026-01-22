import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unicorn from 'eslint-plugin-unicorn';
import storybook from 'eslint-plugin-storybook';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: ['dist/**', 'coverage/**', '.eslintcache', 'node_modules/**']
  },
  // Base JS & TS Recommended
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // React & A11y
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  jsxA11y.flatConfigs.recommended,

  // Unicorn & Storybook
  unicorn.configs['flat/recommended'],
  ...storybook.configs['flat/recommended'],

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'react-hooks': reactHooks
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // Add your custom overrides here
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      'unicorn/prevent-abbreviations': 'off', // Airbnb was less strict than Unicorn
      'unicorn/null-data-property': 'off',

      // Prettier always last
      ...prettierConfig.rules
    }
  },
  // Overrides for Tests
  {
    files: ['**/*.test.ts?(x)'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
);
