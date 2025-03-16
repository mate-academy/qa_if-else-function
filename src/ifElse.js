'use strict';

/**
 * @param {Function} condition
 * @param {Function} first
 * @param {Function} second
 */
function ifElse(condition, first, second) {
  if (condition() === true) {
    first();
  } else {
    second();
  }
}

module.exports = { ifElse };
