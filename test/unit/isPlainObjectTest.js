/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var isPlainObject = require('../../src/isPlainObject'),
    expect = require('chai').expect;

describe('isPlainObject()', function () {
    it('should support arrays', function () {
        expect(isPlainObject([1, 2, 3])).to.be.false;
    });

    it('should support booleans', function () {
        expect(isPlainObject(false)).to.be.false;
    });

    it('should support null', function () {
        expect(isPlainObject(null)).to.be.false;
    });

    it('should support numbers', function () {
        expect(isPlainObject(123)).to.be.false;
    });

    it('should support objects', function () {
        expect(isPlainObject({my: 'object'})).to.be.true;
    });

    it('should support strings', function () {
        expect(isPlainObject('my string')).to.be.false;
    });

    it('should support undefined', function () {
        expect(isPlainObject(void 0)).to.be.false;
    });
});
