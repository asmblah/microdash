/*
 * Microdash - Tiny utilities for Node and the browser
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/microdash
 *
 * Released under the MIT license
 * https://github.com/asmblah/microdash/raw/master/MIT-LICENSE.txt
 */

'use strict';

var escapeRegExp = require('../../src/escapeRegExp'),
    expect = require('chai').expect;

describe('escapeRegExp()', function () {
    it('should escape all special chars', function () {
        expect(escapeRegExp('My [ () ] \\ +*. + ? ^ $ string'))
            .to.equal('My \\[ \\(\\) \\] \\\\ \\+\\*\\. \\+ \\? \\^ \\$ string');
    });
});
