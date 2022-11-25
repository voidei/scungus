import * as tsPlugin from '@typescript-eslint/eslint-plugin';
import * as tsParser from '@typescript-eslint/parser';
import * as node from 'eslint-plugin-node';
import * as es from 'eslint-plugin-es';
import * as react from 'eslint-plugin-prettier';
import * as prettier from 'eslint-plugin-prettier';
import * as reactHooks from 'eslint-plugin-react-hooks';
import * as pluginImport from 'eslint-plugin-import';
import * as prettierConfig from 'eslint-config-prettier';
import * as babel from '@babel/parser';
import * as globals from 'globals';

export default [
	prettierConfig,
	prettier.configs.recommended,
	pluginImport.configs.recommended,
	node.configs['recommended-module'],
	react.configs.recommended,
	reactHooks.configs.recommended,
	tsPlugin.configs,
	{
		plugins: {
			tsPlugin, node, es, react, prettier, reactHooks, pluginImport
		}
	},
	{
		files: ['**/*.js?(x)', '**/*.?(m)js'],
		languageOptions: {
			globals: {
				...globals['shared-node-browser'],
				...globals.es2021,
			},
			ecmaVersion: 2022,
			parser: babel,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true,
					jsx: true,
				},
			}
		}
	},
	{
		files: ['**./*.ts?(x)'],
		plugins: [
			tsPlugin
		],
		languageOptions: {
			globals: {
				...globals['shared-node-browser'],
				...globals.es2021,
			},
			sourceType: 'module',
			ecmaVersion: 2022,
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true,
					jsx: true,
				},
			}
		}
	}
]
