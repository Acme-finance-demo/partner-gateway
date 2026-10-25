'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const _ = require('lodash');

test('lodash is loadable and usable', () => {
  assert.equal(_.add(2, 3), 5);
  assert.deepEqual(_.uniq([1, 1, 2]), [1, 2]);
});
