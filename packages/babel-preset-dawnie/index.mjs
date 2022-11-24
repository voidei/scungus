// index.mjs

import dawnie from './dawnie.mjs';

module.exports = function (
	/** @type {any} */ api,
	/** @type {{ useESModules?: any; flow?: any; typescript?: any; helpers?: any; absoluteRuntime?: any; runtime?: any; }} */ opts
) {
	// This is similar to how `env` works in Babel:
	// https://babeljs.io/docs/usage/babelrc/#env-option
	// We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
	// https://github.com/babel/babel/issues/4539
	// https://github.com/facebook/create-react-app/issues/720
	// It’s also nice that we can enforce `NODE_ENV` being specified.
	const env = process.env.BABEL_ENV || process.env.NODE_ENV;
	return dawnie(api, opts, env);
};
