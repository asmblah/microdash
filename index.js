/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var each = require('./src/each'),
    extend = require('./src/extend'),
    filter = require('./src/filter'),
    forOwn = require('./src/forOwn'),
    isArray = require('./src/isArray'),
    isBoolean = require('./src/isBoolean'),
    isNumber = require('./src/isNumber'),
    isString = require('./src/isString'),
    map = require('./src/map');

module.exports = {
    each: each,
    extend: extend,
    filter: filter,
    forOwn: forOwn,
    isArray: isArray,
    isBoolean: isBoolean,
    isNumber: isNumber,
    isString: isString,
    map: map
};
