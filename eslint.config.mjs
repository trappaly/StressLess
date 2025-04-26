import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        fetch: 'readonly', 
        document: 'readonly',
        HTMLElement: 'readonly',
        window: 'readonly',
        console: 'readonly',
        process: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        require: 'readonly',
        React: 'readonly',
        exports: 'readonly',
        HTMLInputElement: "readonly",
        HTMLFormElement: "readonly"
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
