const process = require('process');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					// `.swcrc` can be used to configure swc
					loader: 'swc-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(jpe?g|gif|png|svg|ico)/,
				type: 'asset/source',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public/index.html'),
		}),
		new ESLintPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: 'public',
					to: './',
					filter: async (resPath) => {
						return !resPath.endsWith('index.html');
					},
				},
			],
		}),
	],
	devServer: {
		// contentBase: path.join(__dirname, 'dist'),
		// static: path.join(__dirname, 'dist'),
		port: process.env.PORT || 3000,
		liveReload: true,
	},
};
