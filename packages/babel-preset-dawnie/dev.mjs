// dev.mjs
import dawnie from './dawnie.mjs';

module.exports = function (/** @type {any} */ api, /** @type {any} */ opts) {
	return dawnie(api, Object.assign({ helpers: false }, opts), 'development');
};
