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
    filter = require('../../src/filter');

describe('filter()', function () {
    it('should return an empty array when iteratee always returns false', function () {
        expect(filter([1, 2, 3], function () {
            return false;
        })).to.deep.equal([]);
    });

    it('should only include elements where iteratee returns true', function () {
        var result = filter(['hello me', 'hello you', 'goodbye you'], function (value) {
            return value.indexOf('you') > -1;
        });

        expect(result).to.deep.equal(['hello you', 'goodbye you']);
    });
});
