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
    extend = require('../../src/extend');

describe('extend()', function () {
    it('should support extending one object with another', function () {
        var object = {a: 1};

        extend(object, {b: 2});

        expect(object).to.deep.equal({a: 1, b: 2});
    });

    it('should return the original object', function () {
        var object = {prop: 21};

        expect(extend(object, {another: 22})).to.equal(object);
    });

    it('should ignore inherited properties on source objects', function () {
        var object = {a: 1},
            source1 = {b: 2},
            source2 = Object.create({c: 3});

        source2.d = 4;

        extend(object, source1, source2);

        // `c` is not included as it is not an own property of the source object
        expect(object).to.deep.equal({a: 1, b: 2, d: 4});
    });
});
