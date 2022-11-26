const fs = require('fs-extra');
const path = require('path');

class script {

let src = path.join(__dirname, 'public');
let dest = path.join(__dirname, 'dist');
const svg = '.svg';
const ico = '.ico';
const png = '.png';
const txt = '.txt';

let fileTypes = [svg && ico && png && txt];

	/**
	 * @param {fs.PathLike} src
	 * @param {fs.PathLike} dest
	 */
	function(src, dest) {
		fs.copyFileSync(src, dest);
	},
};
