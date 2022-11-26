// NOTE~! this might be irrelevant now with the new eslint 8 config system
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
import '@rushstack/eslint-patch/modern-module-resolution.js';

// This file contains the minimum ESLint configuration required for Create
// React App support, and is used as the `baseConfig` for `eslint-loader`
// to ensure that user-provided configs don't need this boilerplate.
const babelParser = require('@babel/eslint-parser');
const babelPlugin = require('eslint-plugin-babel');

export default {
	parser: babelParser,

	plugins: [babelPlugin],

	env: {
		//'shared-node-browser': true,
		node: true,
		browser: true,
		commonjs: false,
		//es6: true,
		es2022: true,
		jest: true,
		worker: true,
	},

	parserOptions: {
		sourceTypes: 'module',
		requireConfigFiles: true,
		allowReserved: false,
		ecmaVersion: 'latest',
		ecmaFeatures: {
			jsx: true,
			impliedStrict: true,
			globalReturn: false,
		},
		babelOptions: {
			rootMode: 'root',
			presets: [require.resolve('babel-preset-dawnie/prod.mjs')],
		},
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	rules: {
		'react/jsx-uses-vars': 'warn',
		'react/jsx-uses-rect': 'warn',
	},
};
