'use strict';

function ifElse(condition, first, second) {
  if (condition()) {
    first();
  } else {
    second();
  }
}

module.exports = ifElse;
