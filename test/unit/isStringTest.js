/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var isString = require('../../src/isString'),
    expect = require('chai').expect;

describe('isString()', function () {
    it('should support arrays', function () {
        expect(isString([1, 2, 3])).to.be.false;
    });

    it('should support booleans', function () {
        expect(isString(false)).to.be.false;
    });

    it('should support null', function () {
        expect(isString(null)).to.be.false;
    });

    it('should support numbers', function () {
        expect(isString(123)).to.be.false;
    });

    it('should support objects', function () {
        expect(isString({my: 'object'})).to.be.false;
    });

    it('should support strings', function () {
        expect(isString('my string')).to.be.true;
    });

    it('should support undefined', function () {
        expect(isString(void 0)).to.be.false;
    });
});
