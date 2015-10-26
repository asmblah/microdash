/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var REGEX = /\[object ([^\]]+)\]/;

module.exports = function (object) {
    return {}.toString.call(object).match(REGEX)[1];
};
