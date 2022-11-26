// NOTE~! this might be irrelevant now with the new eslint 8 config system
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
import '@rushstack/eslint-patch/modern-module-resolution.js';

// import plugins

import * as json from 'eslint-plugin-jsonc';
import * as jsonParser from 'jsonc-eslint-parser';

export default {
	overrides: [
		{
			files: ['**/*.json5'],
			extends: [
				json.configs.prettier,
				json.configs['recommended-with-json5'],
			],
			plugins: json,
			parser: jsonParser,
		},
	],
};
