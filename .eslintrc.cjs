/** @type {import('eslint').Linter.BaseConfig} */
module.exports = {
  env: {
    es6: true,
    node: true,
    // browser: true, // Uncomment if your project involves frontend
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
    'no-mixed-operators': 'off',
    'no-multiple-empty-lines': 'off',
    'no-unexpected-multiline': 'off',
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
  },
};
