'use strict';

/**
 * @param condition
 * @param first
 * @param second
 */
function ifElse(condition, first, second) {
  if (condition() === true || condition() === false) {
    if (condition() === true) {
      first();
    } else {
      second();
    }
  } else {
    return `'condition' returns a non-Boolean value`;
  }
}

module.exports = { ifElse };
