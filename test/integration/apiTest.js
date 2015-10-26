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
    expect = require('chai').expect,
    extend = require('../../src/extend'),
    filter = require('../../src/filter'),
    forOwn = require('../../src/forOwn'),
    isArray = require('../../src/isArray'),
    isBoolean = require('../../src/isBoolean'),
    isNumber = require('../../src/isNumber'),
    isString = require('../../src/isString'),
    map = require('../../src/map'),
    microdash = require('../..');

describe('API', function () {
    it('should export an object', function () {
        expect(microdash).to.be.an.object;
    });

    it('should export .each(...)', function () {
        expect(microdash.each).to.equal(each);
    });

    it('should export .extend(...)', function () {
        expect(microdash.extend).to.equal(extend);
    });

    it('should export .filter(...)', function () {
        expect(microdash.filter).to.equal(filter);
    });

    it('should export .forOwn(...)', function () {
        expect(microdash.forOwn).to.equal(forOwn);
    });

    it('should export .isArray(...)', function () {
        expect(microdash.isArray).to.equal(isArray);
    });

    it('should export .isBoolean(...)', function () {
        expect(microdash.isBoolean).to.equal(isBoolean);
    });

    it('should export .isNumber(...)', function () {
        expect(microdash.isNumber).to.equal(isNumber);
    });

    it('should export .isString(...)', function () {
        expect(microdash.isString).to.equal(isString);
    });

    it('should export .map(...)', function () {
        expect(microdash.map).to.equal(map);
    });
});
