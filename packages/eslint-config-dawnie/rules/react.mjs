// NOTE~! this might be irrelevant now with the new eslint 8 config system
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
import '@rushstack/eslint-patch/modern-module-resolution.js';

// imports
import babelParser from '@babel/eslint-parser';
import babelPlugin from 'eslint-plugin-babel';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default {
	parser: babelParser,
	plugins: [babelPlugin, reactPlugin, reactHooksPlugin],
};
