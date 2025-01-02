'use strict';

/**
 * @param condition
 * @param first
 * @param second
 */
function ifElse(condition, first, second) {
  if (typeof condition !== 'function'
      || typeof first !== 'function'
      || typeof second !== 'function') {
    throw new Error('All arguments must be functions');
  }

  if (condition() === true) {
    first();
  } else {
    second();
  }
}

module.exports = { ifElse };
