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
    mapFactory = require('../../src/map');

describe('map()', function () {
    var map;

    describe('when Array.prototype.map(...) is not supported', function () {
        beforeEach(function () {
            map = mapFactory(function () {});
        });

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

        it('should use the correct context when calling the iteratee', function () {
            var result = [];

            map([3, 4, 5], function (value) {
                result.push(this.double(value));
            }, {
                double: function (value) {
                    return value * 2;
                }
            });

            expect(result).to.deep.equal([6, 8, 10]);
        });

        it('should return an empty array when null is given', function () {
            expect(map(null, function () {})).to.deep.equal([]);
        });

        it('should return an empty array when undefined is given', function () {
            expect(map(undefined, function () {})).to.deep.equal([]);
        });
    });

    describe('when Array.prototype.map(...) is supported', function () {
        beforeEach(function () {
            map = mapFactory(Array);
        });

        it('should support mapping an array', function () {
            var result = map([3, 4, 5], function (number) {
                return number * 2;
            });

            expect(result).to.deep.equal([6, 8, 10]);
        });

        it('should support mapping an Arguments instance', function () {
            var result = (function () {
                return map(arguments, function (number) {
                    return number * 2;
                });
            }(7, 10, 4));

            expect(result).to.deep.equal([14, 20, 8]);
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

        it('should use the correct context when calling the iteratee', function () {
            var result = [];

            map([3, 4, 5], function (value) {
                result.push(this.double(value));
            }, {
                double: function (value) {
                    return value * 2;
                }
            });

            expect(result).to.deep.equal([6, 8, 10]);
        });

        it('should return an empty array when null is given', function () {
            expect(map(null, function () {})).to.deep.equal([]);
        });

        it('should return an empty array when undefined is given', function () {
            expect(map(undefined, function () {})).to.deep.equal([]);
        });
    });
});
