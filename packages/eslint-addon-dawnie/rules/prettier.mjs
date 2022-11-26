// NOTE~! this might be irrelevant now with the new eslint 8 config system
// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
import '@rushstack/eslint-patch/modern-module-resolution.js';

import prettierRules from 'eslint-plugin-prettier';
import prettierPlugin from 'eslint-config-prettier';

export default {
	plugins: [prettierPlugin],
	extends: [prettierRules],
};
