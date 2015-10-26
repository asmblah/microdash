/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var isBoolean = require('../../src/isBoolean'),
    expect = require('chai').expect;

describe('isBoolean()', function () {
    it('should support arrays', function () {
        expect(isBoolean([1, 2, 3])).to.be.false;
    });

    it('should support booleans', function () {
        expect(isBoolean(false)).to.be.true;
    });

    it('should support null', function () {
        expect(isBoolean(null)).to.be.false;
    });

    it('should support numbers', function () {
        expect(isBoolean(123)).to.be.false;
    });

    it('should support objects', function () {
        expect(isBoolean({my: 'object'})).to.be.false;
    });

    it('should support strings', function () {
        expect(isBoolean('my string')).to.be.false;
    });

    it('should support undefined', function () {
        expect(isBoolean(void 0)).to.be.false;
    });
});
