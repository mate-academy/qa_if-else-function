'use strict';

/**
 * @param condition
 * @param first
 * @param second
 */
function ifElse(condition, first = () => {}, second = () => {}) {
  const isTruthy = condition();

  if (isTruthy) {
    first();
  } else {
    second();
  }
}

module.exports = { ifElse };
