'use strict';

const { ifElse } = require('./ifElse');

describe('ifElse', () => {
  let first, second;

  beforeEach(() => {
    first = jest.fn();
    second = jest.fn();
  });

  it(' If condition returns true run a first callback', () => {
    const condition = jest.fn(() => true);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(first).toHaveBeenCalled();
    expect(second).not.toHaveBeenCalled();
  });

  it(' If condition returns false run a second with no arguments.', () => {
    const condition = jest.fn(() => false);

    ifElse(condition, first, second);

    expect(condition).toHaveBeenCalled();
    expect(second).toHaveBeenCalled();
    expect(first).not.toHaveBeenCalled();
  });
});
