/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var each = require('./each'),
    forOwn = require('./forOwn');

module.exports = function (Object) {
    return Object.assign || function (object) {
        var sources = [].slice.call(arguments, 1);

        each(sources, function (source) {
            forOwn(source, function (value, key) {
                object[key] = value;
            });
        });

        return object;
    };
};
