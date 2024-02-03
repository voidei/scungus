'use strict';
const path = require('node:path');
const baseConf = '../../.eslintrc.cjs';
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [baseConf],
  overrides: [
    {
      excludedFiles: ['**/*.{,c,m}ts{,x,doc,on}'],
      extends: [baseConf],
      files: ['**/*'],
      rules: {
        'filenames/no-index': 'off',
        'functional/no-let': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jsdoc/require-jsdoc': 'off',
        'n/no-missing-import': 'off',
        'unicorn/prefer-node-protocol': 'off',
      },
    },
    {
      extends: [
        //'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:testing-library/react',
        'plugin:react-hooks/recommended',
      ],
      files: ['**/*.{t,j}sx'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  rules: {
    'filenames/no-index': 'off',
    'functional/no-let': 'off',
    'import/no-extraneous-dependencies': 'off',
    'jsdoc/require-jsdoc': 'off',
    'n/no-missing-import': 'off',
    'unicorn/prefer-node-protocol': 'off',
  },
  settings: {
    'import/resolver': {
      node: true,
      typescript: {
        project: './tsconfig.json',
      },
    },
    node: {
      allowModules: [],
      paths: [
        path.join(__dirname, '../../node_modules'),
        '.',
      ],
      resolvePaths: [
        __dirname,
        path.resolve(__dirname),
        '.',
      ],
    },
  },
};
