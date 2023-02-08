/* eslint-disable unused-imports/no-unused-vars */
const fs = require('fs-extra');
const path = require('path');

const svg = '.svg';
const ico = '.ico';
const png = '.png';
const txt = '.txt';

let fileTypes = [svg && ico && png && txt];

/**
 * @description Move files.
 *
 * @param {fs.PathLike} src - File source.
 * @param {fs.PathLike} dest File destination.
 */
function move(src, dest) {
  src = path.join(__dirname, 'public');
  dest = path.join(__dirname, 'dist');
  fs.copyFileSync(src, dest);
}
