/* eslint-disable jsdoc/valid-types */
'use strict';

/** @type {import('prettier').Options} */
module.exports = {
  ...require('../../.prettierrc.cjs'),
  pluginSearchDirs: [
    '../../node_modules',
    //'./node_modules',
  ],
};
