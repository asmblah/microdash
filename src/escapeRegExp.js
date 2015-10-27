'use strict';

var REGEX = /[|\\{}()[\]^$+*?.]/g;

// From https://github.com/sindresorhus/escape-string-regexp/blob/master/index.js
module.exports = function (string) {
    if (typeof string !== 'string') {
        throw new TypeError('Expected a string');
    }

    return string.replace(REGEX,  '\\$&');
};
