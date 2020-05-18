/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var hasOwn = {}.hasOwnProperty,
    isArray = require('./isArray')(Array);

module.exports = function (object, iterator, thisArg) {
    var key,
        length;

    if (!object) {
        return;
    }

    if (isArray(object) || hasOwn.call(object, 'length')) {
        for (key = 0, length = object.length; key < length; key++) {
            if (iterator.call(thisArg, object[key], key, object) === false) {
                break;
            }
        }

        return;
    }

    /*jshint forin: false */
    for (key in object) {
        if (hasOwn.call(object, key)) {
            if (iterator.call(thisArg, object[key], key, object) === false) {
                break;
            }
        }
    }
};
