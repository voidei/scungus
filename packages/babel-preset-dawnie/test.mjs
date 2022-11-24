// test.mjs

import dawnie from './dawnie.mjs';


// new es export

const test = function (
	/** @type {any} */ api,
	/** @type {any} */ opts
) {
	return dawnie(api, Object.assign({ helpers: false }, opts), 'test');
};

export default test;



// old commonjs export

//module.exports = function (/** @type {any} \*/ api, /** @type {any} */ opts )
//{
//	return dawnie(api, Object.assign({ helpers: false }, opts), 'test');
//};
