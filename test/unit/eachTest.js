/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var each = require('../../src/each'),
    expect = require('chai').expect;

describe('each()', function () {
    it('should support iterating over an array', function () {
        var result = [];

        each([3, 4, 5], function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 3, key: 0, collection: [3, 4, 5]},
            {value: 4, key: 1, collection: [3, 4, 5]},
            {value: 5, key: 2, collection: [3, 4, 5]}
        ]);
    });

    it('should support iterating over an object with .length property', function () {
        var result = [];

        each({length: 2, 0: 'a', 1: 'b'}, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 'a', key: 0, collection: {length: 2, 0: 'a', 1: 'b'}},
            {value: 'b', key: 1, collection: {length: 2, 0: 'a', 1: 'b'}}
        ]);
    });

    it('should support iterating over an object with no .length property', function () {
        var result = [];

        each({prop1: 21, prop2: 22}, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 21, key: 'prop1', collection: {prop1: 21, prop2: 22}},
            {value: 22, key: 'prop2', collection: {prop1: 21, prop2: 22}}
        ]);
    });

    it('should support iterating over an object with no .length property and some inherited properties', function () {
        var result = [],
            object = Object.create({
                inheritedOne: 'one',
                inheritedTwo: 'two'
            });

        object.myProp = 22;
        object.anotherProp = 23;

        each(object, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 22, key: 'myProp', collection: object},
            {value: 23, key: 'anotherProp', collection: object}
        ]);
    });
});
