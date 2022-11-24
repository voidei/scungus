// dev.mjs
import dawnie from './dawnie.mjs';



// new es export

const development = function (
	/** @type {any} */ api,
	/** @type {any} */ opts
) {
	return dawnie(api, Object.assign({ helpers: false }, opts), 'development');
};

export default development;



// old commonjs export

//module.exports = function (/** @type {any} */ api, /** @type {any} */ opts) {
//	return dawnie(api, Object.assign({ helpers: false }, opts), 'development');
//};
