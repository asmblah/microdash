/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var expect = require('chai').expect,
    isFunction = require('../../src/isFunction');

describe('isFunction()', function () {
    it('should support functions', function () {
        expect(isFunction(function () {})).to.be.true;
    });

    it('should support arrays', function () {
        expect(isFunction([1, 2, 3])).to.be.false;
    });

    it('should support booleans', function () {
        expect(isFunction(false)).to.be.false;
    });

    it('should support null', function () {
        expect(isFunction(null)).to.be.false;
    });

    it('should support numbers', function () {
        expect(isFunction(123)).to.be.false;
    });

    it('should support objects', function () {
        expect(isFunction({my: 'object'})).to.be.false;
    });

    it('should support strings', function () {
        expect(isFunction('my string')).to.be.false;
    });

    it('should support undefined', function () {
        expect(isFunction(void 0)).to.be.false;
    });
});
