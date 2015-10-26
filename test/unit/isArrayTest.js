/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var isArray = require('../../src/isArray'),
    expect = require('chai').expect;

describe('isArray()', function () {
    it('should support arrays', function () {
        expect(isArray([1, 2, 3])).to.be.true;
    });

    it('should support booleans', function () {
        expect(isArray(false)).to.be.false;
    });

    it('should support null', function () {
        expect(isArray(null)).to.be.false;
    });

    it('should support numbers', function () {
        expect(isArray(123)).to.be.false;
    });

    it('should support objects', function () {
        expect(isArray({my: 'object'})).to.be.false;
    });

    it('should support strings', function () {
        expect(isArray('my string')).to.be.false;
    });

    it('should support undefined', function () {
        expect(isArray(void 0)).to.be.false;
    });
});
