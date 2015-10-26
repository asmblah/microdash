/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var forOwn = require('../../src/forOwn'),
    expect = require('chai').expect,
    sinon = require('sinon');

describe('forOwn()', function () {
    it('should support iterating over an array as a plain object', function () {
        var array = [3, 4, 5],
            result = [];

        // Add a std property to the array object
        array.myProp = 6;

        forOwn(array, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 3, key: '0', collection: array},
            {value: 4, key: '1', collection: array},
            {value: 5, key: '2', collection: array},
            {value: 6, key: 'myProp', collection: array}
        ]);
    });

    it('should not treat any .length property specially', function () {
        var result = [];

        forOwn({0: 'a', 1: 'b', length: 2}, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 'a', key: '0', collection: {length: 2, 0: 'a', 1: 'b'}},
            {value: 'b', key: '1', collection: {length: 2, 0: 'a', 1: 'b'}},
            {value: 2, key: 'length', collection: {length: 2, 0: 'a', 1: 'b'}}
        ]);
    });

    it('should ignore any inherited properties', function () {
        var result = [],
            object = Object.create({
                inheritedOne: 'one',
                inheritedTwo: 'two'
            });

        object.myProp = 22;
        object.anotherProp = 23;

        forOwn(object, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});
        });

        expect(result).to.deep.equal([
            {value: 22, key: 'myProp', collection: object},
            {value: 23, key: 'anotherProp', collection: object}
        ]);
    });

    it('should support stopping iteration early by returning false', function () {
        var result = [];

        forOwn({a: 1, b: 2, c: 3}, function (value, key, collection) {
            result.push({value: value, key: key, collection: collection});

            if (key === 'b') {
                return false;
            }
        });

        expect(result).to.deep.equal([
            {value: 1, key: 'a', collection: {a: 1, b: 2, c: 3}},
            {value: 2, key: 'b', collection: {a: 1, b: 2, c: 3}}
        ]);
    });

    it('should not iterate at all when object is null', function () {
        var iteratee = sinon.spy();

        forOwn(null, iteratee);

        expect(iteratee).not.to.have.been.called;
    });
});
