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
    map = Array.prototype.map;

/**
 * Faster implementation using native Array.map(...) where supported
 *
 * @param {Array} collection
 * @param {Function} iteratee
 * @param {*} thisArg
 * @return {Array}
 */
function fasterMap(collection, iteratee, thisArg) {
    return collection !== null && typeof collection !== 'undefined' ?
        map.call(collection, iteratee.bind(thisArg)) :
        [];
}

/**
 * Manual implementation where Array.map(...) is not supported
 *
 * @param {Array} collection
 * @param {Function} iteratee
 * @param {*} thisArg
 * @return {Array}
 */
function slowerMap(collection, iteratee, thisArg) {
    var result = [];

    each(collection, function (value, key) {
        result[key] = iteratee.call(thisArg, value, key, collection);
    });

    return result;
}

module.exports = function (Array) {
    return Array.prototype.map ? fasterMap : slowerMap;
};
