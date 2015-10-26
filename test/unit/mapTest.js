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
    map = require('../../src/map');

describe('map()', function () {
    it('should support mapping an array', function () {
        var result = map([3, 4, 5], function (number) {
            return number * 2;
        });

        expect(result).to.deep.equal([6, 8, 10]);
    });

    it('should pass the correct arguments to the iteratee', function () {
        var result = [];

        map([3, 4, 5], function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 3, key: 0, collection: [3, 4, 5]},
            {value: 4, key: 1, collection: [3, 4, 5]},
            {value: 5, key: 2, collection: [3, 4, 5]}
        ]);
    });
});
