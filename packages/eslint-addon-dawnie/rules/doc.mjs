// NOTE~! this might be irrelevant now with the new eslint 8 config system
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
import '@rushstack/eslint-patch/modern-module-resolution.js';

import markdown from 'eslint-plugin-markdown';

export default {
	overrides: [
		{
			files: ['**/*.md', '**/*.markdown'],
			plugins: markdown,
		},
	],
};
