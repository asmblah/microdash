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
    escapeRegExp = require('./src/escapeRegExp'),
    extend = require('./src/extend'),
    filter = require('./src/filter'),
    forOwn = require('./src/forOwn'),
    isArray = require('./src/isArray'),
    isBoolean = require('./src/isBoolean'),
    isFunction = require('./src/isFunction'),
    isNumber = require('./src/isNumber'),
    isPlainObject = require('./src/isPlainObject'),
    isString = require('./src/isString'),
    map = require('./src/map');

module.exports = {
    each: each,
    escapeRegExp: escapeRegExp,
    extend: extend(Object),
    filter: filter,
    forOwn: forOwn,
    isArray: isArray(Array),
    isBoolean: isBoolean,
    isFunction: isFunction,
    isNumber: isNumber,
    isPlainObject: isPlainObject,
    isString: isString,
    map: map(Array)
};
