'use strict';
const path = require('node:path');
const baseConf = '../../.eslintrc.cjs';
module.exports = {
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
    tsconfigRootDir: __dirname,
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
    node: {
      allowModules: [],
      resolvePaths: [
        __dirname,
        path.join(__dirname, './src'),
        '../../node_modules',
        './src',
        './src/*',
        './src/**/*',
      ],
    },
  },
};
