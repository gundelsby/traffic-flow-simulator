import { assert, refute } from '@sinonjs/referee';
import { test } from './module.js';

describe('Module test', () => {
  it('should return true', () => {
    assert.isTrue(test());
  });

  it('should not return false', () => {
    refute.isFalse(test());
  });
});
