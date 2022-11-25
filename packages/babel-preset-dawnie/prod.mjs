// prod.mjs

import dawnie from './dawnie.mjs';



// new es export

const production = function (
	/** @type {any} */ api,
	/** @type {any} */ opts
) {
	return dawnie(api, Object.assign({ helpers: false }, opts), 'production');
};

export default production;



// old commonjs export

//module.exports = function (/** @type {any} */ api, /** @type {any} */ opts) {
//	return dawnie(api, Object.assign({ helpers: false }, opts), 'production');
//};
