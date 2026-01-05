"use strict";

/**
 * @param condition
 * @param first
 * @param second
 */
function ifElse(condition, first, second) {
  if (condition() === true) {
    first();
  } else {
    second();
  }
}

module.exports = { ifElse };
