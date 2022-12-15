'use strict';

describe(`'ifElse' function`, () => {
  const { ifElse } = require('./ifElse');

  let firstCallback;
  let secondCallback;

  beforeEach(() => {
    firstCallback = jest.fn();
    secondCallback = jest.fn();
  });

  it('should be declared', function() {
    expect(ifElse)
      .toBeInstanceOf(Function);
  });

  it('should run the first callback if condition returns true', function() {
    const condition = jest.fn(() => true);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition)
      .toHaveBeenCalled();

    expect(firstCallback)
      .toHaveBeenCalled();

    expect(secondCallback)
      .not.toHaveBeenCalled();
  });

  it('should run the second callback if condition returns false', function() {
    const condition = jest.fn(() => false);

    ifElse(condition, firstCallback, secondCallback);

    expect(condition)
      .toHaveBeenCalled();

    expect(firstCallback)
      .not.toHaveBeenCalled();

    expect(secondCallback)
      .toHaveBeenCalled();
  });
});