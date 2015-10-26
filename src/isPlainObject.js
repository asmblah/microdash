/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var getType = require('./getType');

module.exports = function (object) {
    return getType(object) === 'Object';
};
