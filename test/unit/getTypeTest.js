/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var getType = require('../../src/getType'),
    expect = require('chai').expect;

describe('getType()', function () {
    it('should support arrays', function () {
        expect(getType([1, 2, 3])).to.equal('Array');
    });

    it('should support booleans', function () {
        expect(getType(false)).to.equal('Boolean');
    });

    it('should support null', function () {
        expect(getType(null)).to.equal('Null');
    });

    it('should support numbers', function () {
        expect(getType(123)).to.equal('Number');
    });

    it('should support objects', function () {
        expect(getType({my: 'object'})).to.equal('Object');
    });

    it('should support strings', function () {
        expect(getType('my string')).to.equal('String');
    });

    it('should support undefined', function () {
        expect(getType(void 0)).to.equal('Undefined');
    });
});
