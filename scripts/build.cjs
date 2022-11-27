const fs = require('fs-extra');
const path = require('path');

const svg = '.svg';
const ico = '.ico';
const png = '.png';
const txt = '.txt';

let fileTypes = [svg && ico && png && txt];

/**
 * @param {fs.PathLike} src
 * @param {fs.PathLike} dest
 */
function move(src, dest) {
	src = path.join(__dirname, 'public');
	dest = path.join(__dirname, 'dist');
	fs.copyFileSync(src, dest);
}
