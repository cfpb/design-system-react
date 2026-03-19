import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import testingLibrary from 'eslint-plugin-testing-library';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'dist-storybook/**',
      '.storybook/**',
      'coverage/**',
      '.eslintcache',
      'node_modules/**',
      '*.config.js',
    ],
  },
  // Base JS & TS Recommended
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  importPlugin.flatConfigs.recommended,

  // A11y
  jsxA11y.flatConfigs.recommended,

  // React
  reactPlugin.configs.flat.recommended,
  // Add this if using React 17+ JSX transform
  reactPlugin.configs.flat['jsx-runtime'],

  // Testing Library
  testingLibrary.configs['flat/react'],

  // Unicorn & Storybook
  unicorn.configs.recommended,
  storybook.configs['flat/recommended'],

  // Prettier always last
  prettierConfig,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'testing-library': testingLibrary,
    },
    settings: {
      react: { version: '19' },

      // Tell eslint-plugin-import how to resolve TS/JS files.
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      // Add your custom overrides here
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'unicorn/prevent-abbreviations': 'off', // Airbnb was less strict than Unicorn
      'unicorn/null-data-property': 'off',
      'unicorn/no-null': 'off',
      'react/prop-types': 'off', // Using TypeScript, so don't use PropTypes.
      // Resolver cannot resolve @cfpb/cfpb-design-system src subpaths (Vite alias + node_modules do at build/runtime).
      'import/no-unresolved': [
        'error',
        { ignore: ['^@cfpb/cfpb-design-system/'] },
      ],
    },
  },
  // Overrides for Tests
  {
    files: ['**/*.test.ts?(x)'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
);
