'use strict';

/**
 * @param condition
 * @param first
 * @param second
 * @throws {TypeError} If any of the callbacks is not a function
 */
function ifElse(condition, first, second) {
  if (typeof condition !== 'function') {
    throw new TypeError('Condition must be a function');
  }

  if (typeof first !== 'function') {
    throw new TypeError('First callback must be a function');
  }

  if (typeof second !== 'function') {
    throw new TypeError('Second callback must be a function');
  }

  if (condition() === true) {
    first();
  } else {
    second();
  }
}

module.exports = { ifElse };
