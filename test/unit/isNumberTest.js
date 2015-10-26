/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var isNumber = require('../../src/isNumber'),
    expect = require('chai').expect;

describe('isNumber()', function () {
    it('should support arrays', function () {
        expect(isNumber([1, 2, 3])).to.be.false;
    });

    it('should support booleans', function () {
        expect(isNumber(false)).to.be.false;
    });

    it('should support null', function () {
        expect(isNumber(null)).to.be.false;
    });

    it('should support numbers', function () {
        expect(isNumber(123)).to.be.true;
    });

    it('should support objects', function () {
        expect(isNumber({my: 'object'})).to.be.false;
    });

    it('should support strings', function () {
        expect(isNumber('my string')).to.be.false;
    });

    it('should support undefined', function () {
        expect(isNumber(void 0)).to.be.false;
    });
});
