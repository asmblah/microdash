/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var each = require('./each');

module.exports = function (collection, iteratee, thisArg) {
    var result = [];

    each(collection, function (value, key) {
        result[key] = iteratee.call(thisArg, value, key, collection);
    });

    return result;
};
