'use strict';

/**
 * @param condition
 * @param first
 * @param second
 */
function ifElse(condition, firstFunc, secondFunc) {
  if (condition() === true) {
    firstFunc();
  } else {
    secondFunc();
  }
}

module.exports = { ifElse };
