"use strict";

const build = require('@glimmer/build');
const funnel = require('broccoli-funnel');
const path = require('path');

let buildOptions = {};

if (process.env.BROCCOLI_ENV === 'tests') {
  buildOptions.vendorTrees = [
    funnel(path.join(require.resolve('rsvp'), '..'), { include: ['rsvp.js'] })
  ];
}

module.exports = build(buildOptions);
